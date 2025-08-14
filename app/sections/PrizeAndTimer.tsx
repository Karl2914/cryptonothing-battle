'use client';
import { useEffect, useState } from 'react';
function fmt(ms:number){ if(ms<0) return '00:00:00'; const s=Math.floor(ms/1000); const d=Math.floor(s/86400); const h=Math.floor((s%86400)/3600); const m=Math.floor((s%3600)/60); const sec=s%60; if(d>0) return `${d}d ${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`; return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}`;}
function nextSun(){ const n=new Date(); const d=(7-n.getDay())%7; const t=new Date(n); t.setDate(n.getDate()+d); t.setHours(23,59,0,0); return t; }
export default function PrizeAndTimer(){
  const [pot,setPot]=useState(0); const [pool,setPool]=useState(0); const [left,setLeft]=useState('');
  useEffect(()=>{ const load=()=>fetch('/api/meta/weekly').then(r=>r.json()).then(d=>{setPot(d.weeklyPot||0);setPool(d.prizePool||0)}); load(); const i=setInterval(load,15000); return ()=>clearInterval(i); },[]);
  useEffect(()=>{ const end=nextSun(); const i=setInterval(()=>setLeft(fmt(end.getTime()-Date.now())),1000); return ()=>clearInterval(i); },[]);
  return <section className="card"><div className="badge">This week</div><div className="row">
    <div className="kpi"><div className="v">${pot.toFixed(2)}</div><div>Confirmed</div></div>
    <div className="kpi"><div className="v">${pool.toFixed(2)}</div><div>Prize pool (10%)</div></div>
    <div className="kpi"><div className="v">{left}</div><div>Time left (Kyiv)</div></div>
  </div></section>;
}
