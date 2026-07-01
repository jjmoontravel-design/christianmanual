// Removes background from barney-{mood}.webp animated files using sharp.
// sharp properly decodes animated WebP frame by frame.
const sharp = require('sharp');
const { execSync } = require('child_process');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const WORK = 'C:/Users/snapa/lifemanual';
const MOODS = ['idle', 'happy', 'excited', 'sleep', 'hungry'];
const T1 = 22;
const T2 = 72;

// ─── CRC32 ───────────────────────────────────────────────────────────────────
const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i; for (let j = 0; j < 8; j++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; crcTable[i] = c;
}
function crc32(buf) { let crc=-1; for(const b of buf)crc=crcTable[(crc^b)&0xFF]^(crc>>>8); return(crc^-1)>>>0; }

// ─── PNG encoder ─────────────────────────────────────────────────────────────
function encodePNG(width, height, rgba) {
  const parts=[Buffer.from([0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A])];
  function chunk(type,data){const tb=Buffer.from(type,'ascii'),db=Buffer.isBuffer(data)?data:Buffer.from(data),lenBuf=Buffer.alloc(4),crcBuf=Buffer.alloc(4);lenBuf.writeUInt32BE(db.length);crcBuf.writeUInt32BE(crc32(Buffer.concat([tb,db])));parts.push(lenBuf,tb,db,crcBuf);}
  const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(width,0);ihdr.writeUInt32BE(height,4);ihdr[8]=8;ihdr[9]=6;chunk('IHDR',ihdr);
  const raw=Buffer.alloc(height*(1+width*4));
  for(let y=0;y<height;y++){raw[y*(1+width*4)]=0;for(let x=0;x<width;x++){const src=(y*width+x)*4,dst=y*(1+width*4)+1+x*4;raw[dst]=rgba[src];raw[dst+1]=rgba[src+1];raw[dst+2]=rgba[src+2];raw[dst+3]=rgba[src+3];}}
  chunk('IDAT',zlib.deflateSync(raw,{level:6}));chunk('IEND',Buffer.alloc(0));return Buffer.concat(parts);
}

// ─── PNG decoder ─────────────────────────────────────────────────────────────
function paethPredictor(a,b,c){const p=a+b-c,pa=Math.abs(p-a),pb=Math.abs(p-b),pc=Math.abs(p-c);return pa<=pb&&pa<=pc?a:pb<=pc?b:c;}
function decodePNG(buf){
  let off=8,width,height,colorType;const idatBufs=[];
  while(off<buf.length){const len=buf.readUInt32BE(off),type=buf.toString('ascii',off+4,off+8),data=buf.slice(off+8,off+8+len);off+=12+len;
    if(type==='IHDR'){width=data.readUInt32BE(0);height=data.readUInt32BE(4);colorType=data[9];}else if(type==='IDAT')idatBufs.push(data);else if(type==='IEND')break;}
  const ch=colorType===6?4:3,raw=zlib.inflateSync(Buffer.concat(idatBufs)),out=new Uint8Array(width*height*4),prev=new Uint8Array(width*ch);
  for(let y=0;y<height;y++){const rowOff=y*(1+width*ch),filter=raw[rowOff],curr=new Uint8Array(width*ch);
    for(let x=0;x<width*ch;x++){const rb=raw[rowOff+1+x],a=x>=ch?curr[x-ch]:0,b=prev[x],c=x>=ch?prev[x-ch]:0;let v;switch(filter){case 0:v=rb;break;case 1:v=(rb+a)&0xFF;break;case 2:v=(rb+b)&0xFF;break;case 3:v=(rb+Math.floor((a+b)/2))&0xFF;break;case 4:v=(rb+paethPredictor(a,b,c))&0xFF;break;default:v=rb;}curr[x]=v;}
    for(let x=0;x<width;x++){const o=(y*width+x)*4;out[o]=curr[x*ch];out[o+1]=curr[x*ch+1];out[o+2]=curr[x*ch+2];out[o+3]=ch===4?curr[x*ch+3]:255;}prev.set(curr);}
  return{width,height,data:out};
}

// ─── BFS background removal ───────────────────────────────────────────────────
function removeBg(data, width, height, bgR, bgG, bgB) {
  const T1sq=T1*T1, T2sq=T2*T2;
  const transparent=new Uint8Array(width*height), queue=new Int32Array(width*height*2);
  let qHead=0, qTail=0;
  const tryAdd1=idx=>{if(transparent[idx])return;const p=idx*4,dr=data[p]-bgR,dg=data[p+1]-bgG,db=data[p+2]-bgB;if(dr*dr+dg*dg+db*db<T1sq){transparent[idx]=1;queue[qTail++]=idx;}};
  for(let x=0;x<width;x++){tryAdd1(x);tryAdd1((height-1)*width+x);}
  for(let y=1;y<height-1;y++){tryAdd1(y*width);tryAdd1(y*width+width-1);}
  while(qHead<qTail){const idx=queue[qHead++],x=idx%width,y=(idx-x)/width;if(x>0)tryAdd1(idx-1);if(x<width-1)tryAdd1(idx+1);if(y>0)tryAdd1(idx-width);if(y<height-1)tryAdd1(idx+width);}
  const bgLum=0.299*bgR+0.587*bgG+0.114*bgB;qHead=0;qTail=0;
  for(let i=0;i<width*height;i++)if(transparent[i])queue[qTail++]=i;
  const tryAdd2=idx=>{if(transparent[idx])return;const p=idx*4,dr=data[p]-bgR,dg=data[p+1]-bgG,db=data[p+2]-bgB;if(dr*dr+dg*dg+db*db<T2sq){const lum=0.299*data[p]+0.587*data[p+1]+0.114*data[p+2];if(lum<=bgLum+15){transparent[idx]=1;queue[qTail++]=idx;}}};
  while(qHead<qTail){const idx=queue[qHead++],x=idx%width,y=(idx-x)/width;if(x>0)tryAdd2(idx-1);if(x<width-1)tryAdd2(idx+1);if(y>0)tryAdd2(idx-width);if(y<height-1)tryAdd2(idx+width);}
  for(let i=0;i<width*height;i++)if(transparent[i])data[i*4+3]=0;
}

// ─── Main ─────────────────────────────────────────────────────────────────────
(async () => {
  for (const mood of MOODS) {
    const inWebp  = `${WORK}/barney-${mood}.webp`;
    const outWebp = `${WORK}/barney-${mood}.webp`;
    if (!fs.existsSync(inWebp)) { console.log(`SKIP ${mood}`); continue; }

    const tmpPng = `${WORK}/_bear_png_${mood}`;
    fs.mkdirSync(tmpPng, { recursive: true });

    console.log(`\n=== barney-${mood} ===`);

    // Get frame count via sharp metadata
    const meta = await sharp(inWebp, { animated: true }).metadata();
    const pages = meta.pages || 1;
    const width  = meta.width;
    const height = meta.pageHeight || meta.height;
    console.log(`  ${width}x${height}, ${pages} frames`);

    // Extract each frame as PNG using sharp
    for (let fi = 0; fi < pages; fi++) {
      if (fi % 10 === 0) process.stdout.write(`\r  Extracting frame ${fi+1}/${pages}...`);
      const pngPath = path.join(tmpPng, String(fi).padStart(4,'0') + '.png');
      await sharp(inWebp, { page: fi })
        .png()
        .toFile(pngPath);
    }
    console.log(`\n  Extracted`);

    // Sample background from corners of first frame
    const f1 = decodePNG(fs.readFileSync(path.join(tmpPng, '0000.png')));
    const corners = [[0,0],[width-1,0],[0,height-1],[width-1,height-1],[width>>1,0],[0,height>>1],[width-1,height>>1],[width>>1,height-1]];
    let bgR=0,bgG=0,bgB=0;
    for(const[sx,sy]of corners){const p=(sy*width+sx)*4;bgR+=f1.data[p];bgG+=f1.data[p+1];bgB+=f1.data[p+2];}
    bgR=Math.round(bgR/corners.length);bgG=Math.round(bgG/corners.length);bgB=Math.round(bgB/corners.length);
    console.log(`  Background: rgb(${bgR},${bgG},${bgB})`);

    // Apply BFS removal
    const pngFiles = fs.readdirSync(tmpPng).filter(f=>f.endsWith('.png')).sort();
    for(let fi=0;fi<pngFiles.length;fi++){
      if(fi%10===0)process.stdout.write(`\r  BFS frame ${fi+1}/${pngFiles.length}...`);
      const p=path.join(tmpPng,pngFiles[fi]);
      const {data}=decodePNG(fs.readFileSync(p));
      removeBg(data,width,height,bgR,bgG,bgB);
      fs.writeFileSync(p,encodePNG(width,height,data));
    }
    console.log('\n  BFS done');

    // Assemble animated WebP
    const concatFile = `${WORK}/_concat_bear_${mood}.txt`;
    const lines = pngFiles.map(f=>`file '${tmpPng.replace(/\\/g,'/')}/${f}'\nduration 0.041667`).join('\n');
    fs.writeFileSync(concatFile, lines+'\n');
    execSync(`ffmpeg -f concat -safe 0 -i "${concatFile}" -c:v libwebp_anim -loop 0 -quality 82 -vf "fps=24" -y "${outWebp}"`, { stdio: 'pipe' });

    fs.rmSync(tmpPng, { recursive: true });
    fs.unlinkSync(concatFile);
    const kb=(fs.statSync(outWebp).size/1024).toFixed(0);
    console.log(`  Done: barney-${mood}.webp = ${kb} KB`);
  }
  console.log('\nAll bear moods done!');
})();
