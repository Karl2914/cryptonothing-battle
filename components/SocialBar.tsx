'use client';
import { useEffect, useState } from 'react';
type Link = { platform:'x'|'instagram'|'tiktok'|'telegram'; label:string; url:string; is_enabled:boolean; sort_order:number; };
export default function SocialBar(){
  const [links,setLinks]=useState<Link[]>([]);
  useEffect(()=>{ fetch('/api/social').then(r=>r.json()).then(d=>setLinks(d.rows||[])); },[]);
  return <div style={{display:'flex',gap:10}}>
    {links.filter(l=>l.is_enabled).sort((a,b)=>a.sort_order-b.sort_order).map((l,i)=>(
      <a key={i} href={l.url||'#'} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:36,height:36,border:'1px solid #1C232C',borderRadius:10,background:'#0E1116'}} title={l.label}>
        <span style={{fontSize:12}}>{l.platform.toUpperCase()}</span>
      </a>
    ))}
  </div>;
}
