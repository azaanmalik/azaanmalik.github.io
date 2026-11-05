const projects=[
{title:'DengueGuard AI',category:'ai',type:'AI / COMPUTER VISION',desc:'AI-assisted parasite detection and classification with microscopy image analysis, symptom support, dashboards and mobile/web interfaces.',tags:['EfficientNet-B0','Python','Computer Vision'],symbol:'DG',color:'#00e5ff',glow:'#00e5ff35',link:null},
{title:'Federated Learning IDS',category:'ai',type:'AI / CYBERSECURITY',desc:'Research-oriented network intrusion detection exploring federated machine learning and collaborative threat classification.',tags:['Python','Federated ML','Security'],symbol:'FL',color:'#ae82ff',glow:'#3b0a6b99',link:'https://github.com/azaanmalik/federated-learning-intrusion-detection',image:'https://raw.githubusercontent.com/azaanmalik/federated-learning-intrusion-detection/main/figures/fl_ids_architecture_diagram.png'},
{title:'Smart Budgeting OCR',category:'web',type:'FULL-STACK / OCR',desc:'Receipt scanning, budget tracking and expense analytics powered by OCR and a full-stack web architecture.',tags:['React','FastAPI','PostgreSQL'],symbol:'OCR',color:'#00e5ff',glow:'#00e5ff29',link:'https://github.com/azaanmalik/smart-budgeting-ocr-system',image:'https://raw.githubusercontent.com/azaanmalik/smart-budgeting-ocr-system/main/frontend/public/logo512.png'},
{title:'Cardinia Men’s Shed',category:'mobile',type:'ANDROID / COMMUNITY',desc:'Community hub with membership, events, attendance, marketplace, chat and Firebase-backed services.',tags:['Java','Android','Firebase'],symbol:'CMS',color:'#bc8aff',glow:'#3b0a6b99',link:'https://github.com/azaanmalik/cardinia-mens-shed'},
{title:'Android Employee Management',category:'mobile',type:'ANDROID / PRODUCTIVITY',desc:'Employee records and management workflows in a native Android application.',tags:['Kotlin','Android','Room'],symbol:'EM',color:'#00e5ff',glow:'#00e5ff26',link:'https://github.com/azaanmalik/android-employee-management-system'},
{title:'ZuanFoods',category:'mobile',type:'ANDROID / UI PROTOTYPE',desc:'Food browsing and ordering-enquiry Android prototype featuring product details and navigation.',tags:['Java','Android','Material UI'],symbol:'ZF',color:'#d9a4ff',glow:'#3b0a6b99',link:'https://github.com/azaanmalik/zuanfoods-android-food-ordering-app',image:'https://raw.githubusercontent.com/azaanmalik/zuanfoods-android-food-ordering-app/main/app/src/main/res/drawable/foodimg1.jpeg'},
{title:'AirAware AI',category:'ai',type:'AI / TIME SERIES',desc:'Next-day PM2.5 forecasting with time-series features, model comparison and a deployed Streamlit interface.',tags:['Python','Scikit-learn','Streamlit'],symbol:'AQ',color:'#00e5ff',glow:'#00e5ff2d',link:'https://github.com/gurkiratjanjua13-creator/MIT105-AirAware-AI-SDG11'},
{title:'NovaTech Service Management',category:'web',type:'FULL-STACK / MANAGEMENT',desc:'A web-based service management system with frontend and backend components for business workflows.',tags:['Web App','Frontend','Backend'],symbol:'NT',color:'#b987ff',glow:'#3b0a6b99',link:'https://github.com/azaanmalik/novatech-service-management'},
{title:'IoT Smart Home',category:'mobile',type:'IOT / AUTOMATION',desc:'Connected-home and voice-control exploration focused on intelligent device interaction.',tags:['IoT','Automation','Voice'],symbol:'IoT',color:'#00e5ff',glow:'#00e5ff26',link:'https://github.com/azaanmalik/iot-smart-home-voice-control',image:'https://raw.githubusercontent.com/azaanmalik/iot-smart-home-voice-control/main/docs/IoT%20Smart%20Home%20Architecture.drawio.png'},
{title:'Network Traffic Classifier',category:'ai',type:'SECURITY / LOCAL PROTOTYPE',desc:'Python-powered network traffic categorization prototype with partial Wireshark integration.',tags:['Python','Networking','Security'],symbol:'NET',color:'#d9a4ff',glow:'#3b0a6b99',link:null},
{title:'Roadside Mechanic Finder',category:'web',type:'WEB / LOCAL PROTOTYPE',desc:'A location-oriented website prototype to help drivers find nearby mechanics during roadside emergencies.',tags:['Web Development','UX','Location'],symbol:'RM',color:'#00e5ff',glow:'#00e5ff26',link:null}
];

/* Curated gallery: source-backed project media where available; conceptual
   illustrations are explicitly labeled and never presented as app screenshots. */
const githubRaw=(repo,path,owner='azaanmalik')=>'https://raw.githubusercontent.com/'+owner+'/'+repo+'/main/'+path.split('/').map(encodeURIComponent).join('/');
const real=(src,caption)=>({src,caption,kind:'PROJECT ASSET'});
const concept=(caption,kind='CONCEPT VISUAL')=>({caption,kind,concept:true});
const galleries={
 'DengueGuard AI':[concept('Microscopy-assisted parasite classification'),concept('Dengue and malaria classification workflow'),concept('Mobile AI analysis experience')],
 'Federated Learning IDS':[
 real(githubRaw('federated-learning-intrusion-detection','figures/fl_ids_architecture_diagram.png'),'Federated learning architecture'),
 real(githubRaw('federated-learning-intrusion-detection','figures/final_centralized_vs_federated.png'),'Centralized vs federated evaluation'),
 real(githubRaw('federated-learning-intrusion-detection','figures/federated_confusion_matrix.png'),'Intrusion detection confusion matrix')],
 'Smart Budgeting OCR':[
 real(githubRaw('smart-budgeting-ocr-system','samples/receipt.jpg'),'OCR receipt sample'),
 real(githubRaw('smart-budgeting-ocr-system','frontend/public/logo512.png'),'Application branding'),
 concept('Expense categorization and insights')],
 'Cardinia Men’s Shed':[
 real(githubRaw('cardinia-mens-shed','docs/assets/banner.svg'),'Project banner'),
 concept('Community members and events'),
 concept('Marketplace and communication')],
 'Android Employee Management':[
 concept('Employee records and profiles'),
 concept('Search and record management'),
 concept('Native Android workflows')],
 'ZuanFoods':[
 real(githubRaw('zuanfoods-android-food-ordering-app','app/src/main/res/drawable/foodimg1.jpeg'),'Food catalog image'),
 real(githubRaw('zuanfoods-android-food-ordering-app','app/src/main/res/drawable/foodimg2.jpeg'),'Menu product image'),
 real(githubRaw('zuanfoods-android-food-ordering-app','app/src/main/res/drawable/splash_image.png'),'Application splash graphic')],
 'AirAware AI':[
 concept('PM2.5 next-day forecasting'),
 concept('Time-series feature engineering'),
 concept('Machine learning model comparison')],
 'NovaTech Service Management':[
 concept('Service request management'),
 concept('Frontend and backend workflows'),
 concept('Operational task tracking')],
 'IoT Smart Home':[
 real(githubRaw('iot-smart-home-voice-control','docs/IoT Smart Home Architecture.drawio.png'),'Smart home architecture'),
 concept('Voice-assisted home automation'),
 concept('Connected device control')],
 'Network Traffic Classifier':[
 concept('Network packet analysis'),
 concept('Threat categorization'),
 concept('Traffic monitoring workflow')],
 'Roadside Mechanic Finder':[
 concept('Find nearby roadside help'),
 concept('Mechanic discovery experience'),
 concept('Emergency assistance workflow')]
};
function conceptSvg(p,slide){
 const title=p.title.replace(/&/g,'&amp;').replace(/</g,'&lt;');
 const headings=['DISCOVER','DESIGN','DELIVER'];
 const a=slide===0?'#00E5FF':slide===1?'#A979FF':'#7DF0FF';
 const items=p.tags.slice(0,3).map((t,i)=>'<g transform="translate(0 '+(i*58)+')"><rect width="295" height="44" rx="12" fill="#ffffff0b" stroke="#ffffff24"/><circle cx="24" cy="22" r="6" fill="'+a+'"/><text x="43" y="27" font-size="15" fill="#dfd6eb" font-family="Arial">'+t.replace(/&/g,'&amp;')+'</text></g>').join('');
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520"><defs><radialGradient id="g"><stop stop-color="#3B0A6B"/><stop offset="1" stop-color="#07060e"/></radialGradient><linearGradient id="s"><stop stop-color="#3B0A6B"/><stop offset="1" stop-color="#00E5FF"/></linearGradient></defs><rect width="900" height="520" fill="url(#g)"/><g stroke="#ffffff10">'+Array.from({length:16},(_,i)=>'<path d="M'+(i*60)+' 0V520"/>').join('')+Array.from({length:9},(_,i)=>'<path d="M0 '+(i*65)+'H900"/>').join('')+'</g><circle cx="720" cy="250" r="160" fill="none" stroke="'+a+'" stroke-opacity=".35"/><circle cx="720" cy="250" r="115" fill="#3B0A6B" stroke="#ffffff35"/><circle cx="720" cy="250" r="74" fill="none" stroke="'+a+'" stroke-width="3"/><path d="M690 250h60m-30-30v60" stroke="'+a+'" stroke-width="5" stroke-linecap="round"/><circle cx="720" cy="250" r="22" fill="'+a+'" fill-opacity=".24"/><text x="52" y="88" font-family="Arial" font-size="18" letter-spacing="5" fill="'+a+'">PROJECT / '+headings[slide]+'</text><text x="52" y="154" font-family="Arial" font-size="35" font-weight="bold" fill="#f8f5ff">'+title+'</text><g transform="translate(52 215)">'+items+'</g><rect x="52" y="454" width="140" height="4" rx="2" fill="url(#s)"/><text x="52" y="488" font-family="Arial" font-size="13" letter-spacing="3" fill="#b2a3c5">ILLUSTRATIVE CONCEPT</text></svg>';
 return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}
const grid=document.querySelector('#project-grid');
grid.innerHTML=projects.map((p,i)=>{
 const slides=galleries[p.title]||[concept('Project overview'),concept('Technology stack'),concept('Key capabilities')];
 return '<article class="project reveal" data-category="'+p.category+'" style="--visual:'+p.color+';--card-glow:'+p.glow+'"><div class="project-visual gallery" data-gallery="'+i+'" aria-label="'+p.title+' gallery"><div class="project-topline"><span>'+p.type+'</span><span class="project-index">'+String(i+1).padStart(2,'0')+' / '+projects.length+'</span></div><div class="gallery-track">'+slides.map((slide,n)=>'<div class="gallery-slide" aria-hidden="'+(n!==0)+'"><img src="'+(slide.concept?conceptSvg(p,n):slide.src)+'" alt="'+p.title+' — '+slide.caption+'" loading="lazy" decoding="async" '+(!slide.concept?'referrerpolicy="no-referrer"':'')+' onerror="this.hidden=true;this.parentElement.classList.add(\'gallery-image-error\')"><span class="gallery-asset-type">'+slide.kind+'</span><span class="gallery-caption">'+slide.caption+'</span></div>').join('')+'</div><button class="gallery-arrow gallery-prev" type="button" aria-label="Previous '+p.title+' image">‹</button><button class="gallery-arrow gallery-next" type="button" aria-label="Next '+p.title+' image">›</button><div class="gallery-dots" aria-label="Gallery pagination">'+slides.map((_,n)=>'<button type="button" class="gallery-dot'+(n===0?' active':'')+'" aria-label="Show image '+(n+1)+' of '+slides.length+'" aria-current="'+(n===0)+'"></button>').join('')+'</div></div><div class="project-info"><div class="project-meta">FEATURED PROJECT / '+p.category.toUpperCase()+'</div><h3 class="project-title">'+p.title+'</h3><p class="project-desc">'+p.desc+'</p><div class="tags">'+p.tags.map(t=>'<span>'+t+'</span>').join('')+'</div><div class="project-footer">'+(p.link?'<a href="'+p.link+'" target="_blank" rel="noopener noreferrer">VIEW REPOSITORY ↗</a>':'<span style="font-size:11px;color:#9d94a5">LOCAL / PRIVATE PROJECT</span>')+'<b>↗</b></div></div></article>';
}).join('');
document.querySelectorAll('.gallery').forEach(gallery=>{
 const track=gallery.querySelector('.gallery-track'),slides=[...gallery.querySelectorAll('.gallery-slide')],dots=[...gallery.querySelectorAll('.gallery-dot')];
 let active=0,startX=null;
 function show(n){active=(n+slides.length)%slides.length;track.style.transform='translateX(-'+active*100+'%)';slides.forEach((s,i)=>s.setAttribute('aria-hidden',String(i!==active)));dots.forEach((d,i)=>{d.classList.toggle('active',i===active);d.setAttribute('aria-current',String(i===active))})}
 gallery.querySelector('.gallery-prev').addEventListener('click',e=>{e.stopPropagation();show(active-1)});
 gallery.querySelector('.gallery-next').addEventListener('click',e=>{e.stopPropagation();show(active+1)});
 dots.forEach((d,i)=>d.addEventListener('click',e=>{e.stopPropagation();show(i)}));
 gallery.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX},{passive:true});
 gallery.addEventListener('touchend',e=>{if(startX===null)return;const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45)show(active+(dx<0?1:-1));startX=null},{passive:true});
 gallery.addEventListener('keydown',e=>{if(e.key==='ArrowRight')show(active+1);if(e.key==='ArrowLeft')show(active-1)});
});
const rotator=document.getElementById('rotating-skill');
if(rotator){
 const phrases=['JAVA, PYTHON, REACT & C#','AI, MACHINE LEARNING & COMPUTER VISION','ANDROID, KOTLIN & FIREBASE','FASTAPI, .NET & POSTGRESQL','AUTOMATION, TESTING & NETWORKING'];
 let idx=0;
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  setInterval(()=>{rotator.classList.add('changing');setTimeout(()=>{idx=(idx+1)%phrases.length;rotator.textContent=phrases[idx];rotator.classList.remove('changing')},260)},3300);
 }
}
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.09});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});const filter=btn.dataset.filter;document.querySelectorAll('.project').forEach(card=>{card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter)})}));
const menu=document.querySelector('#menu'),nav=document.querySelector('#navigation');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
let ticking=false;addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{document.querySelector('#progress').style.width=`${Math.min(100,scrollY/(document.documentElement.scrollHeight-innerHeight)*100)}%`;ticking=false});ticking=true}},{passive:true});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced&&matchMedia('(pointer:fine)').matches){const frame=document.querySelector('#art-frame');frame.parentElement.addEventListener('pointermove',e=>{const r=frame.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;frame.style.transform=`rotateY(${x*13}deg) rotateX(${-y*13}deg)`});frame.parentElement.addEventListener('pointerleave',()=>frame.style.transform='');document.querySelectorAll('.project').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.transform=`perspective(900px) rotateX(${((e.clientY-r.top)/r.height-.5)*-3}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*4}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='')})}
// Lightweight canvas perspective starfield; pauses when offscreen and honors reduced-motion.
const canvas=document.querySelector('#universe');if(canvas&&!reduced){const ctx=canvas.getContext('2d');if(ctx){let stars=[],w=0,h=0,visible=true;const resize=()=>{w=canvas.width=canvas.clientWidth*Math.min(devicePixelRatio||1,2);h=canvas.height=canvas.clientHeight*Math.min(devicePixelRatio||1,2);stars=Array.from({length:Math.min(150,Math.floor(w*h/8000))},()=>({x:Math.random()*w,y:Math.random()*h,z:Math.random()*1.5+.2,r:Math.random()*1.4+.3}))};resize();addEventListener('resize',resize,{passive:true});new IntersectionObserver(e=>visible=e[0].isIntersecting).observe(canvas);let last=0;function draw(t){requestAnimationFrame(draw);if(!visible||document.hidden||t-last<32)return;last=t;ctx.clearRect(0,0,w,h);for(const s of stars){s.y+=s.z*.21;if(s.y>h)s.y=0;ctx.fillStyle=`rgba(${s.z>1?'0,229,255':'180,126,248'},${.12+s.z*.22})`;ctx.beginPath();ctx.arc(s.x,s.y,s.r*s.z,0,Math.PI*2);ctx.fill()}}requestAnimationFrame(draw)}}

