(()=>{"use strict";const e=document.getElementById("polipod_canvas");e.width=1e3,e.height=1e3;const t=e.getContext("2d"),a=2*Math.PI,o=document.getElementById("change_colour");let n=o.checked;o.addEventListener("change",(()=>{n=o.checked}));const c=document.getElementById("change_angle");let l=c.checked;c.addEventListener("change",(()=>{l=c.checked}));const i=document.getElementById("change_location");let r=i.checked;i.addEventListener("change",(()=>{r=i.checked}));const h=(e,o,n,c)=>{const[l,i,r]=c;t.fillStyle=`rgb(${l}, ${i}, ${r})`,t.beginPath(),t.arc(e,o,n,0,a),t.fill()},d=(e,t,a,o)=>e.map((e=>[Math.floor(128*(Math.sin(e*a-t)+1)),Math.floor(64*(Math.sin((e+1)*a-t)+1)+32),Math.floor(128*(Math.sin((e+0)*a-t)+1))])),s=(e,t,a,o)=>e.map((e=>Math.sin(e*o-t)*a)),f=new Array(70).fill().map(((e,t)=>t)),m=new Array(12).fill().map((t=>({arms:new Array(7).fill().map(((e,t)=>({angle:a*t/7,phase:Math.random()*a,amplitude:.19*Math.random()+.01,frequency:.09000000000000001*Math.random()+.01,angles:f.map((e=>0))}))),location:{x:Math.random()*e.width,y:Math.random()*e.height,xDrift:0,yDrift:0},colours:f.map((e=>[128,128,128])),colourPhase:Math.random()*a,colourFrequency:.3,fearLevel:0,fearTarget:0}))),u=()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height);for(const t of m){if(n&&(t.colourPhase-=.5,t.colourPhase<a&&(t.colourPhase+=a),t.colours=d(f,t.colourPhase,t.colourFrequency,t.fearLevel)),r){const o=Math.random()*a,n=.3*Math.random();t.location.xDrift+=Math.cos(o)*n,t.location.yDrift+=Math.sin(o)*n,t.location.xDrift*=.99,t.location.yDrift*=.99,t.location.x+=t.location.xDrift,t.location.y+=t.location.yDrift,t.location.x<0&&(t.location.xDrift+=.1),t.location.x>e.width&&(t.location.xDrift-=.1),t.location.y<0&&(t.location.yDrift+=.1),t.location.y>e.height&&(t.location.yDrift-=.1)}for(const e of t.arms){let o=e.angle;l&&(e.phase+=.04+.01*Math.random(),e.phase>a&&(e.phase-=a),e.amplitude+=.001*(Math.random()-.5),e.amplitude>.2&&(e.amplitude-=.001),e.amplitude<.01&&(e.amplitude+=.001),e.frequency+=.001*(Math.random()-.5),e.frequency>.1&&(e.frequency-=.001),e.frequency<.01&&(e.frequency+=.001),e.angles=s(f,e.phase,e.amplitude,e.frequency));let n=t.location.x,c=t.location.y,i=3;for(const a of f){const l=t.colours[a];o+=e.angles[a],i*=.98,n+=Math.cos(o)*i,c+=Math.sin(o)*i,h(n,c,i,l)}}}window.requestAnimationFrame(u)};window.requestAnimationFrame(u)})();