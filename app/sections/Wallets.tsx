'use client';
import { useEffect, useState } from 'react';
type W = { chain:string; address:string; token_symbol:string; is_active:boolean };
export default function Wallets(){
  const [rows,setRows]=useState<W[]>([]);
  useEffect(()=>{ fetch('/api/wallets').then(r=>r.json()).then(d=>setRows(d.rows||[])); },[]);
  return <section className="card"><div className="badge">Wallets</div><ul style={{lineHeight:'1.9'}}>
    {rows.filter(r=>r.is_active).map((w,i)=>(<li key={i}><b>{w.chain}</b> {w.token_symbol}: <code>{w.address}</code></li>))}
    {rows.length===0 && <li>Wallets will appear here.</li>}
  </ul></section>;
}
