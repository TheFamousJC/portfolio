'use strict';
const user='TheFamousJC';
let repos=window.PORTFOLIO_DATA.repos, language='All';
const details=window.PROJECT_DETAILS||{};
const $=s=>document.querySelector(s);
const colors={JavaScript:'#d6b834',Python:'#397cb1',HTML:'#e56b42'};
function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
function safeLink(url){try{const u=new URL(url);return ['https:','http:'].includes(u.protocol)?u.href:null;}catch{return null;}}
function link(label,url){const a=el('a','',label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
function filters(){const langs=[...new Set(repos.map(r=>r.language).filter(Boolean))].sort();$('#total').textContent=repos.length;$('#languages').textContent=langs.length;$('#filters').replaceChildren();for(const lang of ['All',...langs]){const b=el('button','',lang==='All'?'All projects':lang);b.type='button';b.setAttribute('aria-pressed',String(language===lang));b.onclick=()=>{language=lang;filters();render();};$('#filters').append(b);}}
function render(){
 const q=$('#search').value.toLowerCase().trim();
 let shown=repos.filter(r=>(language==='All'||r.language===language)&&[r.name,r.description,details[r.name]?.title,details[r.name]?.description,...(r.topics||[])].filter(Boolean).join(' ').toLowerCase().includes(q));
 shown.sort($('#sort').value==='name'?(a,b)=>a.name.localeCompare(b.name):$('#sort').value==='stars'?(a,b)=>b.stargazers_count-a.stargazers_count:(a,b)=>new Date(b.updated_at)-new Date(a.updated_at));
 $('#count').textContent=`${shown.length} of ${repos.length} projects`;$('#empty').hidden=shown.length>0;$('#grid').replaceChildren();
 for(const r of shown){
  const d=details[r.name];const live=d?`https://thefamousjc.github.io/${encodeURIComponent(r.name)}/${d.path||''}`:safeLink(r.homepage);
  const c=el('article','card');
  if(d){const preview=link('',live);preview.className='preview';preview.setAttribute('aria-label',`${d.label||'Try live'}: ${d.title}`);const img=el('img');img.src=`preview-${r.name}.png`;img.alt=`${d.title} ${d.screenshotNote||'website screenshot'}`;img.loading='lazy';img.width=1200;img.height=750;preview.append(img,el('span','preview-badge',d.screenshotNote||'LIVE PREVIEW ↗'));c.append(preview);}
  const body=el('div','card-body');const top=el('div','card-top');top.append(el('span','language',r.language||'Other'),el('span','',`${r.fork?'FORK · ':''}☆ ${r.stargazers_count}`));top.firstChild.style.setProperty('--color',colors[r.language]||'#abb39f');
  const h=el('h3');h.append(link(d?.title||r.name,live||r.html_url));body.append(top,h,el('div','repo-name',r.name),el('p','',d?.description||r.description||'Explore the source code and project files on GitHub.'));
  if(d?.note)body.append(el('p','project-note',d.note));
  const bottom=el('div','card-bottom');bottom.append(link('Source ↗',r.html_url));if(live){const a=link((d?.label||'Try live')+' ↗',live);a.className='try-live';bottom.append(a);}body.append(bottom);c.append(body);$('#grid').append(c);
 }
}
async function refresh(){try{let all=[];for(let page=1;;page++){const response=await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated&page=${page}`,{headers:{Accept:'application/vnd.github+json'}});if(!response.ok)throw new Error('GitHub unavailable');const batch=await response.json();if(!Array.isArray(batch))throw new Error('Invalid response');all.push(...batch);if(batch.length<100)break;}repos=all;filters();render();$('#status').textContent='Up to date · public GitHub repositories';}catch{$('#status').textContent='Saved snapshot · October 27, 2026 · live refresh unavailable';}}
$('#search').addEventListener('input',render);$('#sort').addEventListener('change',render);filters();render();refresh();
