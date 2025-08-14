'use client';
import { useEffect, useState } from 'react';
type E={ donor_name:string|null; amount_usd:number; created_at:string };
export default function Events(){
  const [rows,setRows]=useState<E[]>([]);
  useEffect(()=>{ const load=()=>fetch('/api/events').then(r=>r.json()).then(d=>setRows(d.rows||[])); load(); const i=setInterval(load,8000); return ()=>clearInterval(i); },[]);
  return <section><h3>Live feed</h3><ul>{rows.map((e,i)=>(<li key={i}>💰 <b>{e.donor_name||'Anonymous'}</b> +${(e.amount_usd||0).toFixed(2)} <span style={{opacity:.6}}>({new Date(e.created_at).toLocaleTimeString()})</span></li>))}{rows.length===0 && <li>Waiting for the first donation…</li>}</ul></section>;
}
