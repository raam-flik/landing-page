/* FLIK EDC (Smart POS T10) in 3D for the In-Store Payment hero.
   Procedural Three.js model (stylized approximation of the reference photos, not CAD) with a live
   canvas UI on the screen. Colours are FLIK design tokens. Needs window.THREE (r128). */
(function(){
  const C={ink:'#002D5D',body:'#425466',muted:'#64748D',faint:'#8898AA',primary:'#6A4BFF',primarySoft:'#F2EFFF',line:'#E3E8EE',lineSoft:'#EEF2F7',lineStrong:'#C5CEDA',bg:'#FFFFFF',bgAlt:'#F8FAFD',field:'#F5F6F8',okText:'#0E6E48',okSoft:'#E7F7EF',darkRaised:'#0B3A6E'};
  const rpx=n=>'Rp'+Math.round(n).toLocaleString('id-ID');

  /* ---------- Screen: the FLIK EDC home screen, drawn on a canvas (example data) ---------- */
  function createScreen(opts){
    const W=900,H=1900,NAV=140,cv=document.createElement('canvas');cv.width=W;cv.height=H;
    const g=cv.getContext('2d'),F='Inter, system-ui, sans-serif';
    const st={ok:90,qris:2,card:88,total:12000000,tq:10000000,tc:2000000,rows:[[90000,'Card','01092026-QFCAZZ-1',2],[90000,'QRIS','01092026-QFCAZZ-1',3]],flash:0};
    const logo=new Image(),qris=new Image();let ready=0;
    logo.onload=qris.onload=()=>{ready++;draw()};
    logo.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(opts.logoSvg);
    qris.src=opts.qrisSrc;
    const rr=(x,y,w,h,r)=>{g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()};
    const txt=(s,x,y,size,weight,col,align)=>{g.font=`${weight} ${size}px ${F}`;g.fillStyle=col;g.textAlign=align||'left';g.fillText(s,x,y)};
    const cardIc=(x,y,s,col)=>{g.strokeStyle=col;g.lineWidth=s*0.09;rr(x,y,s*1.3,s,s*0.15);g.stroke();g.beginPath();g.moveTo(x,y+s*0.35);g.lineTo(x+s*1.3,y+s*0.35);g.moveTo(x+s*0.25,y+s*0.7);g.lineTo(x+s*0.55,y+s*0.7);g.stroke()};
    const printIc=(x,y,s,col)=>{g.strokeStyle=col;g.lineWidth=s*0.1;g.lineJoin='round';rr(x,y+s*0.3,s,s*0.45,s*0.1);g.stroke();g.strokeRect(x+s*0.22,y,s*0.56,s*0.3);g.strokeRect(x+s*0.22,y+s*0.6,s*0.56,s*0.4)};
    const methodIc=(m,x,y)=>{if(m==='QRIS'){if(ready>1||qris.complete)g.drawImage(qris,x,y-30,60,36)}else cardIc(x+6,y-26,34,C.muted)};
    function draw(){
      g.clearRect(0,0,W,H);
      g.save();rr(0,0,W,H,70);g.clip();
      g.fillStyle=C.field;g.fillRect(0,0,W,H-NAV);
      // status bar + notch
      txt('10.07',48,58,30,500,C.ink);
      g.fillStyle=C.ink;g.beginPath();g.arc(W/2,-6,46,0,Math.PI);g.fill();
      // header
      if(logo.complete&&logo.naturalWidth)g.drawImage(logo,40,118,160,57);
      g.strokeStyle=C.ink;g.lineWidth=6;rr(W-118,120,62,52,8);g.stroke();g.beginPath();g.moveTo(W-118,140);g.lineTo(W-56,140);g.stroke();
      txt('Welcome, Reza (admin)',40,290,46,600,C.ink);
      // today card
      g.fillStyle=C.bg;rr(40,330,W-80,610,28);g.fill();
      txt("Today's transactions",72,410,44,600,C.ink);
      [[72,'Successful',String(st.ok),[['QRIS',st.qris],['Card',st.card]],false],[W/2+8,'Total sales',rpx(st.total),[['QRIS',rpx(st.tq)],['Card',rpx(st.tc)]],true]].forEach(([x,l,v,sub])=>{
        const w=W/2-88;g.strokeStyle=C.line;g.lineWidth=3;rr(x,450,w,300,22);g.stroke();
        txt(l,x+28,510,32,400,C.muted);txt(v,x+28,580,v.length>8?44:52,600,C.ink);
        sub.forEach(([m,n],i)=>{const y=650+i*62;methodIc(m,x+28,y);txt(': '+(typeof n==='number'?n:n.replace('Rp','')),x+98,y,32,400,C.body)});
      });
      g.strokeStyle=C.ink;g.lineWidth=4;rr(72,790,W-144,110,20);g.stroke();
      txt('Print settlement receipt',W/2-34,860,36,600,C.ink,'center');printIc(W/2+196,822,44,C.ink);
      // latest transactions
      g.fillStyle=C.bg;rr(40,970,W-80,560,28);g.fill();
      txt('Latest transactions',72,1050,44,600,C.ink);
      st.rows.slice(0,2).forEach((r,i)=>{
        const y=1090+i*210;g.fillStyle=i===0&&st.flash>0?C.primarySoft:C.bg;rr(72,y,W-144,190,22);g.fill();g.strokeStyle=C.line;g.lineWidth=3;g.stroke();
        txt(rpx(r[0]),104,y+66,44,600,C.ink);
        txt((r[3]===0?'Just now':r[3]+' min ago')+'  ·  '+r[1],104,y+120,30,400,C.muted);
        txt(r[2],104,y+164,28,400,C.muted);
        g.fillStyle=C.field;rr(W-198,y+50,90,90,18);g.fill();printIc(W-176,y+72,46,C.ink);
      });
      txt('Powered by',W/2-50,1600,30,400,C.faint,'right');
      if(logo.complete&&logo.naturalWidth)g.drawImage(logo,W/2-36,1568,110,39);
      // bottom navigation
      g.fillStyle=C.bg;g.fillRect(0,H-NAV-130,W,130);g.fillStyle=C.line;g.fillRect(0,H-NAV-130,W,2);
      const ny=H-NAV-40;
      g.strokeStyle=C.ink;g.lineWidth=5;g.beginPath();g.moveTo(130,ny-58);g.lineTo(150,ny-76);g.lineTo(170,ny-58);g.lineTo(170,ny-36);g.lineTo(130,ny-36);g.closePath();g.stroke();
      txt('Home',150,ny,28,500,C.ink,'center');
      g.fillStyle=C.ink;g.beginPath();g.arc(W/2,ny-70,38,0,7);g.fill();g.strokeStyle=C.bg;g.lineWidth=6;g.beginPath();g.moveTo(W/2-16,ny-70);g.lineTo(W/2+16,ny-70);g.moveTo(W/2,ny-86);g.lineTo(W/2,ny-54);g.stroke();
      txt('New transaction',W/2,ny,28,600,C.ink,'center');
      g.strokeStyle=C.ink;g.lineWidth=5;rr(W-176,ny-76,44,40,6);g.stroke();g.beginPath();g.moveTo(W-176,ny-56);g.lineTo(W-132,ny-56);g.stroke();
      txt('Transactions',W-154,ny,28,500,C.ink,'center');
      // Android navigation bar
      g.fillStyle=C.ink;g.fillRect(0,H-NAV,W,NAV);g.fillStyle=C.bg;
      g.beginPath();g.moveTo(240,H-NAV/2);g.lineTo(272,H-NAV/2-20);g.lineTo(272,H-NAV/2+20);g.fill();
      g.beginPath();g.arc(W/2,H-NAV/2,17,0,7);g.fill();g.fillRect(W-272,H-NAV/2-16,32,32);
      g.restore();
      if(api.onDraw)api.onDraw();
    }
    const SALES=[[45000,'QRIS'],[128000,'Card'],[90000,'QRIS'],[350000,'Card'],[62500,'QRIS'],[215000,'Card']];let k=0;
    function sale(){
      const [a,m]=SALES[k++%SALES.length];st.ok++;st.total+=a;if(m==='QRIS'){st.qris++;st.tq+=a}else{st.card++;st.tc+=a}
      st.rows.forEach(r=>r[3]+=1);st.rows.unshift([a,m,'21102026-QF'+String(1000+k).slice(-4)+'-1',0]);st.rows.length=3;st.flash=1;draw();
      setTimeout(()=>{st.flash=0;draw()},1400);
    }
    const api={canvas:cv,draw,sale};
    if(document.fonts&&document.fonts.load)document.fonts.load('600 40px Inter').then(draw,draw);
    draw();return api;
  }

  /* ---------- Model ---------- */
  function createEdcModel(T,screen){
    const edc=new T.Group();edc.name='edc';
    const mat={
      shell:new T.MeshPhysicalMaterial({color:C.lineSoft,metalness:0,roughness:.55,clearcoat:.2,clearcoatRoughness:.45}),
      panel:new T.MeshPhysicalMaterial({color:C.line,metalness:0,roughness:.6}),
      seam:new T.MeshStandardMaterial({color:C.lineStrong,metalness:0,roughness:.7}),
      bezel:new T.MeshPhysicalMaterial({color:C.ink,metalness:0,roughness:.15,clearcoat:1,clearcoatRoughness:.08})
    };
    const add=(geo,m,name,pos,rot)=>{const o=new T.Mesh(geo,m);o.name=name;if(pos)o.position.set(...pos);if(rot)o.rotation.set(...rot);edc.add(o);return o};
    // body: side profile (x = -depth, y), extruded across the width
    const W=0.92,BS=0.05,BT=0.06,P=[[0.80,0],[0.95,0.26],[1.0,0.42],[0.86,0.55],[0.62,0.585],[0.40,0.50],[0.16,0.37],[0.04,0.34],[-0.30,0.33],[-0.70,0.315],[-0.86,0.30],[-0.95,0.25],[-0.99,0.13],[-0.985,0.02]];
    const sh=new T.Shape();sh.moveTo(0,0.80);sh.splineThru(P.slice(1).map(p=>new T.Vector2(-p[1],p[0])));sh.lineTo(0,-0.97);sh.lineTo(0,0.80);
    const bodyGeo=new T.ExtrudeGeometry(sh,{depth:W-2*BT,bevelEnabled:true,bevelThickness:BT,bevelSize:BS,bevelSegments:6,curveSegments:64});
    bodyGeo.rotateY(-Math.PI/2);bodyGeo.translate((W-2*BT)/2,0,0);
    add(bodyGeo,mat.shell,'body');
    const FZ=BS; // front surface after bevel
    const rrShape=(w,h,r)=>{const s=new T.Shape(),x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s};
    // bezel + screen
    add(new T.ShapeGeometry(rrShape(0.80,1.67,0.07),12),mat.bezel,'bezel',[0,-0.085,FZ+0.002]);
    const tex=new T.CanvasTexture(screen.canvas);tex.encoding=T.sRGBEncoding;tex.anisotropy=8;
    const scr=add(new T.PlaneGeometry(0.76,0.76*1900/900),new T.MeshBasicMaterial({map:tex,transparent:true,toneMapped:false}),'screen',[0,-0.085,FZ+0.004]);
    screen.onDraw=()=>{tex.needsUpdate=true};
    // back surface lookup: z of the back (and its slope) at height y, from the body mesh itself
    const pos=bodyGeo.attributes.position,backZ=y=>{let z=0; /* the profile is the same across the width */for(let i=0;i<pos.count;i++){if(Math.abs(pos.getY(i)-y)<0.03)z=Math.min(z,pos.getZ(i))}return z};
    const onBack=(geo,m,name,x,y,lift)=>{const z=backZ(y),tilt=Math.atan2(backZ(y+0.04)-backZ(y-0.04),0.08);return add(geo,m,name,[x,y,z-(lift||0.004)],[-tilt,0,0])};
    // card-reader rail on the +X side (upper half)
    add(new T.BoxGeometry(0.03,0.52,0.30),mat.panel,'cardRail',[W/2+0.012,0.42,-0.22]);
    add(new T.BoxGeometry(0.035,0.012,0.26),mat.seam,'cardSlot',[W/2+0.016,0.42,-0.22]);
    // printer door + paper exit + screw bosses on the upper back
    onBack(new T.BoxGeometry(0.62,0.30,0.012),mat.panel,'printerDoor',0,0.84,0.008);
    onBack(new T.BoxGeometry(0.52,0.014,0.012),mat.seam,'paperSlot',0,0.99,0.006);
    [-0.33,0.33].forEach((x,i)=>{const o=onBack(new T.CylinderGeometry(0.05,0.05,0.02,24),mat.panel,'screw'+i,x,0.6,0.008);o.rotation.x+=Math.PI/2});
    // scanner window below the printer
    onBack(new T.BoxGeometry(0.30,0.11,0.02),mat.bezel,'scanner',0,0.40,0.008);
    // barcode label on the back of the handle
    const lc=document.createElement('canvas');lc.width=256;lc.height=110;const lg=lc.getContext('2d');lg.fillStyle=C.bg;lg.fillRect(0,0,256,110);lg.fillStyle=C.ink;
    for(let r=0;r<4;r++){let x=14;while(x<240){const w=1+((x*7+r*13)%4);lg.fillRect(x,14+r*24,w,16);x+=w+1+((x*3)%3)}}
    const ltex=new T.CanvasTexture(lc);ltex.encoding=T.sRGBEncoding;
    const lb=onBack(new T.PlaneGeometry(0.44,0.19),new T.MeshStandardMaterial({map:ltex,roughness:.9}),'label',0,-0.72,0.004);lb.rotation.y=Math.PI;lb.rotation.x*=-1;
    // battery cover seam and screws on the handle
    onBack(new T.BoxGeometry(0.66,0.008,0.006),mat.seam,'coverSeam',0,0.05,0.002);
    [[-0.32,-0.92],[0.32,-0.92],[-0.33,0.12],[0.33,0.12]].forEach(([x,y],i)=>{const o=onBack(new T.CylinderGeometry(0.035,0.035,0.012,20),mat.seam,'backScrew'+i,x,y,0.004);o.rotation.x+=Math.PI/2});
    // side buttons and USB-C on the -X side
    [0.36,0.24].forEach((y,i)=>add(new T.CylinderGeometry(0.035,0.035,0.03,20),mat.panel,'button'+i,[-W/2-0.008,y,-0.18],[0,0,Math.PI/2]));
    add(new T.BoxGeometry(0.012,0.09,0.035),mat.bezel,'usbC',[-W/2-0.002,0.06,-0.17]);
    return edc;
  }

  /* ---------- Mount: renderer, light, motion ---------- */
  function mount(el,opts){
    const screen=createScreen(opts);
    const T=window.THREE;let gl=null;
    try{const c=document.createElement('canvas');gl=c.getContext('webgl2')||c.getContext('webgl')}catch(e){}
    const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    const paused=()=>typeof motionPaused==='function'&&motionPaused(); // the page's "Pause animations" toggle (kit: a11y-motion)
    if(!T||!gl){ // no 3D: show the screen as a flat device
      screen.canvas.className='edc-flat';el.appendChild(screen.canvas);
      if(!reduce)setInterval(()=>{if(!document.hidden&&!paused())screen.sale()},3200);return;
    }
    const r=new T.WebGLRenderer({antialias:true,alpha:true});r.setPixelRatio(Math.min(devicePixelRatio,2));
    r.outputEncoding=T.sRGBEncoding;r.toneMapping=T.ACESFilmicToneMapping;r.toneMappingExposure=0.98;
    el.appendChild(r.domElement);r.domElement.className='edc-gl';
    const scene=new T.Scene(),cam=new T.PerspectiveCamera(26,1,0.1,50);cam.position.set(0,0,5.7);
    scene.add(new T.HemisphereLight(C.bg,C.lineStrong,0.55));
    const key=new T.DirectionalLight(C.bg,1.45);key.position.set(3,2.5,3.5);scene.add(key);
    const rim=new T.DirectionalLight(C.bg,0.9);rim.position.set(-3.5,2,-2.5);scene.add(new T.DirectionalLight(C.primarySoft,0.35).translateX(-4).translateY(-1).translateZ(2));scene.add(rim);
    const edc=createEdcModel(T,screen);scene.add(edc);
    const base={y:opts.yaw!=null?opts.yaw:-0.5,x:0.08,z:0.05};edc.rotation.set(base.x,base.y,base.z);
    function size(){const w=el.clientWidth,h=el.clientHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();cam.position.z=w/h<0.75?6.6:5.7}
    size();new ResizeObserver(size).observe(el);
    let vis=true,drag=null,dx=0,px=0,py=0,t0=performance.now();
    new IntersectionObserver(es=>{vis=es[0].isIntersecting}).observe(el);
    el.addEventListener('pointerdown',e=>{drag=e.clientX-dx*200;el.setPointerCapture(e.pointerId)});
    el.addEventListener('pointermove',e=>{const b=el.getBoundingClientRect();px=(e.clientX-b.left)/b.width-.5;py=(e.clientY-b.top)/b.height-.5;if(drag!=null)dx=(e.clientX-drag)/200});
    const end=()=>{drag=null};el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);
    el.addEventListener('pointerleave',()=>{px=py=0});
    function frame(now){
      requestAnimationFrame(frame);if(!vis||document.hidden||paused())return;
      const t=(now-t0)/1000;if(drag==null)dx*=0.94;
      const sway=reduce?0:Math.sin(t*0.45)*0.32;
      edc.rotation.y+=((base.y+sway+dx+px*0.35)-edc.rotation.y)*0.08;
      edc.rotation.x+=((base.x+(reduce?0:Math.sin(t*0.6)*0.03)+py*0.15)-edc.rotation.x)*0.08;
      edc.position.y=reduce?0:Math.sin(t*0.9)*0.025;
      r.render(scene,cam);
    }
    requestAnimationFrame(frame);
    if(!reduce)setInterval(()=>{if(vis&&!document.hidden&&!paused())screen.sale()},3200);
    return (el.edc={edc,scene,cam,renderer:r,screen});
  }
  window.FlikEDC={mount,createEdcModel,createScreen};
})();
