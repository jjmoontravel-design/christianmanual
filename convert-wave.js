const {execSync}=require('child_process'),fs=require('fs'),zlib=require('zlib');
const WORK='C:/Users/snapa/lifemanual',T1=22,T2=72;

const crcTable=new Uint32Array(256);
for(let i=0;i<256;i++){let c=i;for(let j=0;j<8;j++)c=c&1?0xEDB88320^(c>>>1):c>>>1;crcTable[i]=c;}
function crc32(b){let c=-1;for(const x of b)c=crcTable[(c^x)&0xFF]^(c>>>8);return(c^-1)>>>0;}
function encodePNG(w,h,rgba){
  const p=[Buffer.from([0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A])];
  function chunk(t,d){const tb=Buffer.from(t,'ascii'),db=Buffer.isBuffer(d)?d:Buffer.from(d),lb=Buffer.alloc(4),cb=Buffer.alloc(4);lb.writeUInt32BE(db.length);cb.writeUInt32BE(crc32(Buffer.concat([tb,db])));p.push(lb,tb,db,cb);}
  const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(w,0);ihdr.writeUInt32BE(h,4);ihdr[8]=8;ihdr[9]=6;chunk('IHDR',ihdr);
  const raw=Buffer.alloc(h*(1+w*4));
  for(let y=0;y<h;y++){raw[y*(1+w*4)]=0;for(let x=0;x<w;x++){const s=(y*w+x)*4,d=y*(1+w*4)+1+x*4;raw[d]=rgba[s];raw[d+1]=rgba[s+1];raw[d+2]=rgba[s+2];raw[d+3]=rgba[s+3];}}
  chunk('IDAT',zlib.deflateSync(raw,{level:6}));chunk('IEND',Buffer.alloc(0));return Buffer.concat(p);
}
function paeth(a,b,c){const p=a+b-c,pa=Math.abs(p-a),pb=Math.abs(p-b),pc=Math.abs(p-c);return pa<=pb&&pa<=pc?a:pb<=pc?b:c;}
function decodePNG(buf){
  let off=8,w,h,ct;const ib=[];
  while(off<buf.length){const len=buf.readUInt32BE(off),type=buf.toString('ascii',off+4,off+8),data=buf.slice(off+8,off+8+len);off+=12+len;
    if(type==='IHDR'){w=data.readUInt32BE(0);h=data.readUInt32BE(4);ct=data[9];}else if(type==='IDAT')ib.push(data);else if(type==='IEND')break;}
  const ch=ct===6?4:3,raw=zlib.inflateSync(Buffer.concat(ib)),out=new Uint8Array(w*h*4),prev=new Uint8Array(w*ch);
  for(let y=0;y<h;y++){
    const ro=y*(1+w*ch),f=raw[ro],curr=new Uint8Array(w*ch);
    for(let x=0;x<w*ch;x++){const rb=raw[ro+1+x],a=x>=ch?curr[x-ch]:0,b=prev[x],c=x>=ch?prev[x-ch]:0;let v;
      switch(f){case 0:v=rb;break;case 1:v=(rb+a)&0xFF;break;case 2:v=(rb+b)&0xFF;break;case 3:v=(rb+Math.floor((a+b)/2))&0xFF;break;case 4:v=(rb+paeth(a,b,c))&0xFF;break;default:v=rb;}curr[x]=v;}
    for(let x=0;x<w;x++){const o=(y*w+x)*4;out[o]=curr[x*ch];out[o+1]=curr[x*ch+1];out[o+2]=curr[x*ch+2];out[o+3]=ch===4?curr[x*ch+3]:255;}prev.set(curr);}
  return{width:w,height:h,data:out};
}

// Process bunny-wave (loop=1 so it plays once, not infinite)
const CHARS = ['bunny', 'barney'];
for (const char of CHARS) {
  const mp4    = `${WORK}/${char}-wave.webp.mp4`;
  const outWebp= `${WORK}/${char}-wave.webp`;
  const pngIn  = `${WORK}/_wave_in_${char}`;
  const pngOut = `${WORK}/_wave_out_${char}`;
  if (!fs.existsSync(mp4)) { console.log(`SKIP ${char} — no MP4`); continue; }
  fs.mkdirSync(pngIn,{recursive:true}); fs.mkdirSync(pngOut,{recursive:true});

  const dims=execSync(`ffprobe -v quiet -show_entries stream=width,height -of csv=p=0 "${mp4}"`).toString().trim().split('\n');
  const [width,height]=dims[0].split(',').map(Number);
  console.log(`\n=== ${char}-wave: ${width}x${height} ===`);
  execSync(`ffmpeg -i "${mp4}" "${pngIn}/%04d.png" -y`,{stdio:'pipe'});
  const frames=fs.readdirSync(pngIn).filter(f=>f.endsWith('.png')).sort();
  console.log(`${frames.length} frames`);

  const f1=decodePNG(fs.readFileSync(`${pngIn}/${frames[0]}`));
  const corners=[[0,0],[width-1,0],[0,height-1],[width-1,height-1],[width>>1,0],[0,height>>1],[width-1,height>>1],[width>>1,height-1]];
  let bgR=0,bgG=0,bgB=0;
  for(const[sx,sy]of corners){const p=(sy*width+sx)*4;bgR+=f1.data[p];bgG+=f1.data[p+1];bgB+=f1.data[p+2];}
  bgR=Math.round(bgR/corners.length);bgG=Math.round(bgG/corners.length);bgB=Math.round(bgB/corners.length);
  console.log(`bg rgb(${bgR},${bgG},${bgB})`);

  const T1sq=T1*T1,T2sq=T2*T2;
  for(let fi=0;fi<frames.length;fi++){
    if(fi%10===0)process.stdout.write(`\r  Frame ${fi+1}/${frames.length}...`);
    const {data}=decodePNG(fs.readFileSync(`${pngIn}/${frames[fi]}`));
    const transparent=new Uint8Array(width*height),queue=new Int32Array(width*height*2);let qH=0,qT=0;
    const a1=i=>{if(transparent[i])return;const p=i*4,dr=data[p]-bgR,dg=data[p+1]-bgG,db=data[p+2]-bgB;if(dr*dr+dg*dg+db*db<T1sq){transparent[i]=1;queue[qT++]=i;}};
    for(let x=0;x<width;x++){a1(x);a1((height-1)*width+x);}for(let y=1;y<height-1;y++){a1(y*width);a1(y*width+width-1);}
    while(qH<qT){const i=queue[qH++],x=i%width,y=(i-x)/width;if(x>0)a1(i-1);if(x<width-1)a1(i+1);if(y>0)a1(i-width);if(y<height-1)a1(i+width);}
    const bgLum=0.299*bgR+0.587*bgG+0.114*bgB;qH=0;qT=0;for(let i=0;i<width*height;i++)if(transparent[i])queue[qT++]=i;
    const a2=i=>{if(transparent[i])return;const p=i*4,dr=data[p]-bgR,dg=data[p+1]-bgG,db=data[p+2]-bgB;if(dr*dr+dg*dg+db*db<T2sq){const lum=0.299*data[p]+0.587*data[p+1]+0.114*data[p+2];if(lum<=bgLum+15){transparent[i]=1;queue[qT++]=i;}}};
    while(qH<qT){const i=queue[qH++],x=i%width,y=(i-x)/width;if(x>0)a2(i-1);if(x<width-1)a2(i+1);if(y>0)a2(i-width);if(y<height-1)a2(i+width);}
    // Corner nuke — removes watermarks in bottom-right 12%×18%
    const nukeY=Math.floor(height*0.88),nukeX=Math.floor(width*0.82);
    for(let y=nukeY;y<height;y++)for(let x=nukeX;x<width;x++){const i=y*width+x,p=i*4;if(0.299*data[p]+0.587*data[p+1]+0.114*data[p+2]>60)transparent[i]=1;}
    for(let i=0;i<width*height;i++)if(transparent[i])data[i*4+3]=0;
    fs.writeFileSync(`${pngOut}/${frames[fi]}`,encodePNG(width,height,data));
  }
  console.log('\n  Frames done');
  const cf=`${WORK}/_concat_wave_${char}.txt`;
  fs.writeFileSync(cf,frames.map(f=>`file '${pngOut.replace(/\\/g,'/')}/${f}'\nduration 0.041667`).join('\n')+'\n');
  // loop=1 means play once (not infinite) — important for wake animation
  execSync(`ffmpeg -f concat -safe 0 -i "${cf}" -c:v libwebp_anim -loop 1 -quality 82 -vf "fps=24" -y "${outWebp}"`,{stdio:'pipe'});
  fs.rmSync(pngIn,{recursive:true});fs.rmSync(pngOut,{recursive:true});fs.unlinkSync(cf);
  console.log(`Done: ${(fs.statSync(outWebp).size/1024).toFixed(0)} KB`);
}
console.log('\nAll done!');
