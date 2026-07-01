const { execSync } = require('child_process');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const WORK = 'C:/Users/snapa/lifemanual';
const VIDEOS = ['bear-knock', 'bunny-knock'];
// Per-video settings: [pass1_tolerance, pass2_tolerance]
// Bear: colors are distinct (blue/brown vs tan) → can use aggressive pass2
// Bunny: white fur close to pink bg → keep pass2 conservative
const VIDEO_SETTINGS = {
  'bear-knock':  { t1: 40, t2: 80 },
  'bunny-knock': { t1: 35, t2: 75 },
};

// ─── CRC32 for PNG chunks ───────────────────────────────────────────────────
const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let j = 0; j < 8; j++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
  crcTable[i] = c;
}
function crc32(buf) {
  let crc = -1;
  for (const b of buf) crc = crcTable[(crc ^ b) & 0xFF] ^ (crc >>> 8);
  return (crc ^ -1) >>> 0;
}

// ─── Minimal PNG encoder (RGBA output) ────────────────────────────────────
function encodePNG(width, height, rgba) {
  const parts = [Buffer.from([0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A])];
  function chunk(type, data) {
    const tb = Buffer.from(type, 'ascii');
    const db = Buffer.isBuffer(data) ? data : Buffer.from(data);
    const lenBuf = Buffer.alloc(4); lenBuf.writeUInt32BE(db.length);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc32(Buffer.concat([tb, db])));
    parts.push(lenBuf, tb, db, crcBuf);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
  ihdr[8]=8; ihdr[9]=6; // 8-bit RGBA
  chunk('IHDR', ihdr);

  // Rows: filter-byte 0 (None) + RGBA pixels
  const raw = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    raw[y * (1 + width * 4)] = 0; // filter None
    for (let x = 0; x < width; x++) {
      const src = (y * width + x) * 4;
      const dst = y * (1 + width * 4) + 1 + x * 4;
      raw[dst]=rgba[src]; raw[dst+1]=rgba[src+1]; raw[dst+2]=rgba[src+2]; raw[dst+3]=rgba[src+3];
    }
  }
  chunk('IDAT', zlib.deflateSync(raw, { level: 6 }));
  chunk('IEND', Buffer.alloc(0));
  return Buffer.concat(parts);
}

// ─── PNG decoder → RGBA ────────────────────────────────────────────────────
function paethPredictor(a, b, c) {
  const p=a+b-c, pa=Math.abs(p-a), pb=Math.abs(p-b), pc=Math.abs(p-c);
  return pa<=pb&&pa<=pc ? a : pb<=pc ? b : c;
}
function decodePNG(buf) {
  let off=8, width, height, colorType;
  const idatBufs=[];
  while (off < buf.length) {
    const len=buf.readUInt32BE(off), type=buf.toString('ascii',off+4,off+8);
    const data=buf.slice(off+8, off+8+len);
    off += 12+len;
    if (type==='IHDR') { width=data.readUInt32BE(0); height=data.readUInt32BE(4); colorType=data[9]; }
    else if (type==='IDAT') idatBufs.push(data);
    else if (type==='IEND') break;
  }
  const ch = colorType===6 ? 4 : 3;
  const raw = zlib.inflateSync(Buffer.concat(idatBufs));
  const out = new Uint8Array(width*height*4);
  const prev = new Uint8Array(width*ch);
  for (let y=0; y<height; y++) {
    const rowOff = y*(1+width*ch);
    const filter = raw[rowOff];
    const curr = new Uint8Array(width*ch);
    for (let x=0; x<width*ch; x++) {
      const rb=raw[rowOff+1+x], a=x>=ch?curr[x-ch]:0, b=prev[x], c=x>=ch?prev[x-ch]:0;
      let v;
      switch(filter) {
        case 0: v=rb; break; case 1: v=(rb+a)&0xFF; break; case 2: v=(rb+b)&0xFF; break;
        case 3: v=(rb+Math.floor((a+b)/2))&0xFF; break;
        case 4: v=(rb+paethPredictor(a,b,c))&0xFF; break; default: v=rb;
      }
      curr[x]=v;
    }
    for (let x=0; x<width; x++) {
      const o=(y*width+x)*4;
      out[o]=curr[x*ch]; out[o+1]=curr[x*ch+1]; out[o+2]=curr[x*ch+2];
      out[o+3]=ch===4?curr[x*ch+3]:255;
    }
    prev.set(curr);
  }
  return {width, height, data: out};
}

// ─── Main ──────────────────────────────────────────────────────────────────
for (const name of VIDEOS) {
  const mp4     = `${WORK}/${name}.mp4`;
  const outWebp = `${WORK}/${name}.webp`;
  const outAud  = `${WORK}/${name}.m4a`;
  const pngIn   = `${WORK}/_pngin_${name}`;
  const pngOut  = `${WORK}/_pngout_${name}`;

  fs.mkdirSync(pngIn,  { recursive: true });
  fs.mkdirSync(pngOut, { recursive: true });

  const dims = execSync(`ffprobe -v quiet -show_entries stream=width,height -of csv=p=0 "${mp4}"`).toString().trim().split('\n');
  const [width, height] = dims[0].split(',').map(Number);
  console.log(`\n=== ${name}: ${width}x${height} ===`);

  // Extract input frames as PNG
  console.log('Extracting frames...');
  execSync(`ffmpeg -i "${mp4}" "${pngIn}/%04d.png" -y`, { stdio: 'pipe' });

  const frames = fs.readdirSync(pngIn).filter(f=>f.endsWith('.png')).sort();
  console.log(`${frames.length} frames extracted`);

  // Sample background from corners of first frame
  const f1 = decodePNG(fs.readFileSync(`${pngIn}/${frames[0]}`));
  const corners = [[0,0],[width-1,0],[0,height-1],[width-1,height-1],[width>>1,0],[0,height>>1]];
  let bgR=0,bgG=0,bgB=0;
  for (const [sx,sy] of corners) { const p=(sy*width+sx)*4; bgR+=f1.data[p]; bgG+=f1.data[p+1]; bgB+=f1.data[p+2]; }
  bgR=Math.round(bgR/corners.length); bgG=Math.round(bgG/corners.length); bgB=Math.round(bgB/corners.length);
  console.log(`Background: rgb(${bgR},${bgG},${bgB})`);

  const { t1, t2 } = VIDEO_SETTINGS[name];
  const T1sq = t1*t1;
  const T2sq = t2*t2;

  for (let fi=0; fi<frames.length; fi++) {
    if (fi%12===0) process.stdout.write(`\r  Frame ${fi+1}/${frames.length}...`);
    const {data} = decodePNG(fs.readFileSync(`${pngIn}/${frames[fi]}`));

    const transparent = new Uint8Array(width*height);
    const queue = new Int32Array(width*height * 2); // extra room for pass 2
    let qHead=0, qTail=0;

    // Pass 1: BFS from edges + interior background samples (tight tolerance)
    const tryAdd1 = idx => {
      if (transparent[idx]) return;
      const p=idx*4, dr=data[p]-bgR, dg=data[p+1]-bgG, db=data[p+2]-bgB;
      if (dr*dr+dg*dg+db*db < T1sq) { transparent[idx]=1; queue[qTail++]=idx; }
    };
    for (let x=0;x<width;x++) { tryAdd1(x); tryAdd1((height-1)*width+x); }
    for (let y=1;y<height-1;y++) { tryAdd1(y*width); tryAdd1(y*width+width-1); }
    // Also seed from a grid of interior points — breaks shadow isolation
    // Only adds if the pixel color matches background (safe: same tight tolerance)
    for (let gy=1; gy<=9; gy++) for (let gx=1; gx<=9; gx++) {
      tryAdd1(Math.floor(gy*height/10)*width + Math.floor(gx*width/10));
    }
    while (qHead<qTail) {
      const idx=queue[qHead++], x=idx%width, y=(idx-x)/width;
      if (x>0)       tryAdd1(idx-1);
      if (x<width-1) tryAdd1(idx+1);
      if (y>0)       tryAdd1(idx-width);
      if (y<height-1)tryAdd1(idx+width);
    }

    // Pass 2: expand from transparent pixels with looser tolerance (catches shadow/gradient)
    // Constraint: only remove pixels that are NOT brighter than background.
    // Shadows are darker than background → removed. Bright character pixels → kept.
    const bgLum = 0.299*bgR + 0.587*bgG + 0.114*bgB;
    qHead = 0; qTail = 0;
    for (let i=0;i<width*height;i++) if (transparent[i]) queue[qTail++]=i;
    const tryAdd2 = idx => {
      if (transparent[idx]) return;
      const p=idx*4, dr=data[p]-bgR, dg=data[p+1]-bgG, db=data[p+2]-bgB;
      if (dr*dr+dg*dg+db*db < T2sq) {
        const lum = 0.299*data[p] + 0.587*data[p+1] + 0.114*data[p+2];
        if (lum <= bgLum + 25) { transparent[idx]=1; queue[qTail++]=idx; }
      }
    };
    while (qHead<qTail) {
      const idx=queue[qHead++], x=idx%width, y=(idx-x)/width;
      if (x>0)       tryAdd2(idx-1);
      if (x<width-1) tryAdd2(idx+1);
      if (y>0)       tryAdd2(idx-width);
      if (y<height-1)tryAdd2(idx+width);
    }

    for (let i=0;i<width*height;i++) if (transparent[i]) data[i*4+3]=0;

    // Write as transparent PNG
    const outName = `${pngOut}/${frames[fi]}`;
    fs.writeFileSync(outName, encodePNG(width, height, data));
  }
  console.log('\n  All frames processed');

  // Write concat list for FFmpeg
  const concatFile = `${WORK}/_concat_${name}.txt`;
  const lines = frames.map(f => `file '${pngOut.replace(/\\/g,'/')}/${f}'\nduration 0.041667`).join('\n');
  fs.writeFileSync(concatFile, lines + '\n');

  // Assemble animated WebP via concat demuxer
  console.log('Building animated WebP...');
  execSync(
    `ffmpeg -f concat -safe 0 -i "${concatFile}" -c:v libwebp_anim -loop 1 -quality 80 -vf "fps=24" -y "${outWebp}"`,
    { stdio: 'pipe' }
  );

  // Extract audio
  console.log('Extracting audio...');
  execSync(`ffmpeg -i "${mp4}" -vn -c:a aac -y "${outAud}"`, { stdio: 'pipe' });

  // Cleanup
  fs.rmSync(pngIn,  { recursive: true });
  fs.rmSync(pngOut, { recursive: true });
  fs.unlinkSync(concatFile);

  const ws = (fs.statSync(outWebp).size/1024).toFixed(0);
  const as = (fs.statSync(outAud).size/1024).toFixed(0);
  console.log(`Done: ${name}.webp=${ws}KB  ${name}.m4a=${as}KB`);
}
console.log('\nAll done!');
