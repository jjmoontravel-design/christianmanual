// Converts bunny-{mood}.webp.mp4 → bunny-{mood}.webp with transparent background.
// Uses BFS flood-fill from edges to remove white/light background while keeping
// the character's own white fur (not edge-connected to background).
const { execSync } = require('child_process');
const fs = require('fs');
const zlib = require('zlib');

const WORK = 'C:/Users/snapa/lifemanual';
const MOODS = ['idle', 'happy', 'excited', 'sleep', 'hungry'];
const CHARS = [
  { prefix: 'bunny', out: 'bunny' },
  { prefix: 'barney', out: 'barney' },
];

// White background tolerance:
// t1 = tight pass from edges (how close to pure white counts as background)
// t2 = softer expansion for feathered/shadow edges
// Bunny has white fur so keep TIGHT to avoid eating the character.
const T1 = 22;
const T2 = 72;

// ─── CRC32 ────────────────────────────────────────────────────────────────────
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

// ─── PNG encoder ─────────────────────────────────────────────────────────────
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
  ihdr[8]=8; ihdr[9]=6;
  chunk('IHDR', ihdr);
  const raw = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    raw[y * (1 + width * 4)] = 0;
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

// ─── PNG decoder ─────────────────────────────────────────────────────────────
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

// ─── Process each character + mood ───────────────────────────────────────────
for (const {prefix} of CHARS) for (const mood of MOODS) {
  const mp4     = `${WORK}/${prefix}-${mood}.webp.mp4`;
  const outWebp = `${WORK}/${prefix}-${mood}.webp`;
  const pngIn   = `${WORK}/_mood_in_${prefix}_${mood}`;
  const pngOut  = `${WORK}/_mood_out_${prefix}_${mood}`;

  if (!fs.existsSync(mp4)) { console.log(`SKIP ${mood} — no MP4 found`); continue; }

  fs.mkdirSync(pngIn,  { recursive: true });
  fs.mkdirSync(pngOut, { recursive: true });

  const dims = execSync(`ffprobe -v quiet -show_entries stream=width,height -of csv=p=0 "${mp4}"`).toString().trim().split('\n');
  const [width, height] = dims[0].split(',').map(Number);
  console.log(`\n=== ${prefix}-${mood}: ${width}x${height} ===`);

  console.log('Extracting frames...');
  execSync(`ffmpeg -i "${mp4}" "${pngIn}/%04d.png" -y`, { stdio: 'pipe' });

  const frames = fs.readdirSync(pngIn).filter(f=>f.endsWith('.png')).sort();
  console.log(`${frames.length} frames`);

  // Sample background from corners + top edge of first frame
  const f1 = decodePNG(fs.readFileSync(`${pngIn}/${frames[0]}`));
  const corners = [[0,0],[width-1,0],[0,height-1],[width-1,height-1],[width>>1,0],[0,height>>1],[width-1,height>>1],[width>>1,height-1]];
  let bgR=0, bgG=0, bgB=0;
  for (const [sx,sy] of corners) { const p=(sy*width+sx)*4; bgR+=f1.data[p]; bgG+=f1.data[p+1]; bgB+=f1.data[p+2]; }
  bgR=Math.round(bgR/corners.length); bgG=Math.round(bgG/corners.length); bgB=Math.round(bgB/corners.length);
  console.log(`Background sampled: rgb(${bgR},${bgG},${bgB})`);

  const T1sq = T1*T1;
  const T2sq = T2*T2;

  for (let fi=0; fi<frames.length; fi++) {
    if (fi%10===0) process.stdout.write(`\r  Frame ${fi+1}/${frames.length}...`);
    const {data} = decodePNG(fs.readFileSync(`${pngIn}/${frames[fi]}`));

    const transparent = new Uint8Array(width*height);
    const queue = new Int32Array(width*height * 2);
    let qHead=0, qTail=0;

    // Pass 1: BFS from all 4 edges with tight tolerance
    const tryAdd1 = idx => {
      if (transparent[idx]) return;
      const p=idx*4, dr=data[p]-bgR, dg=data[p+1]-bgG, db=data[p+2]-bgB;
      if (dr*dr+dg*dg+db*db < T1sq) { transparent[idx]=1; queue[qTail++]=idx; }
    };
    for (let x=0; x<width; x++) { tryAdd1(x); tryAdd1((height-1)*width+x); }
    for (let y=1; y<height-1; y++) { tryAdd1(y*width); tryAdd1(y*width+width-1); }
    while (qHead<qTail) {
      const idx=queue[qHead++], x=idx%width, y=(idx-x)/width;
      if (x>0)       tryAdd1(idx-1);
      if (x<width-1) tryAdd1(idx+1);
      if (y>0)       tryAdd1(idx-width);
      if (y<height-1)tryAdd1(idx+width);
    }

    // Pass 2: softer expansion from already-transparent region
    // Only removes pixels darker than background (shadows/gradients at edges)
    const bgLum = 0.299*bgR + 0.587*bgG + 0.114*bgB;
    qHead = 0; qTail = 0;
    for (let i=0; i<width*height; i++) if (transparent[i]) queue[qTail++]=i;
    const tryAdd2 = idx => {
      if (transparent[idx]) return;
      const p=idx*4, dr=data[p]-bgR, dg=data[p+1]-bgG, db=data[p+2]-bgB;
      if (dr*dr+dg*dg+db*db < T2sq) {
        const lum = 0.299*data[p] + 0.587*data[p+1] + 0.114*data[p+2];
        if (lum <= bgLum + 15) { transparent[idx]=1; queue[qTail++]=idx; }
      }
    };
    while (qHead<qTail) {
      const idx=queue[qHead++], x=idx%width, y=(idx-x)/width;
      if (x>0)       tryAdd2(idx-1);
      if (x<width-1) tryAdd2(idx+1);
      if (y>0)       tryAdd2(idx-width);
      if (y<height-1)tryAdd2(idx+width);
    }

    // Pass 3: corner nuke — bottom 12% + right 18% removes watermarks
    const nukeY=Math.floor(height*0.88), nukeX=Math.floor(width*0.82);
    for(let y=nukeY;y<height;y++)for(let x=nukeX;x<width;x++){
      const idx=y*width+x,p=idx*4;
      if(0.299*data[p]+0.587*data[p+1]+0.114*data[p+2]>60)transparent[idx]=1;
    }

    for (let i=0; i<width*height; i++) if (transparent[i]) data[i*4+3]=0;

    fs.writeFileSync(`${pngOut}/${frames[fi]}`, encodePNG(width, height, data));
  }
  console.log('\n  Frames done');

  // Assemble animated WebP
  const concatFile = `${WORK}/_concat_mood_${prefix}_${mood}.txt`;
  const lines = frames.map(f => `file '${pngOut.replace(/\\/g,'/')}/${f}'\nduration 0.041667`).join('\n');
  fs.writeFileSync(concatFile, lines + '\n');

  console.log('Assembling WebP...');
  execSync(
    `ffmpeg -f concat -safe 0 -i "${concatFile}" -c:v libwebp_anim -loop 0 -quality 82 -vf "fps=24" -y "${outWebp}"`,
    { stdio: 'pipe' }
  );

  fs.rmSync(pngIn,  { recursive: true });
  fs.rmSync(pngOut, { recursive: true });
  fs.unlinkSync(concatFile);

  const kb = (fs.statSync(outWebp).size/1024).toFixed(0);
  console.log(`Done: ${prefix}-${mood}.webp = ${kb} KB`);
}
console.log('\nAll moods done!');
