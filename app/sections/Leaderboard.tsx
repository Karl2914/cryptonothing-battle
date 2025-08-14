'use client';
import { useEffect, useState } from 'react';
type R={ donor_name:string|null; total_usd:number; social_url:string|null };
export default function Leaderboard(){
  const [rows,setRows]=useState<R[]>([]);
  useEffect(()=>{ fetch('/api/leaderboard').then(r=>r.json()).then(d=>setRows(d.rows||[])); },[]);
  const top=rows.slice(0,3), rest=rows.slice(3);
  return <section><h2>Top-3</h2>
    <div className="row">{top.map((r,i)=>(<div key={i} className="card" style={{flex:'1 1 280px'}}><b>{['👑','🥈','🥉'][i]} {r.donor_name||'Anonymous'}</b><div>${(r.total_usd||0).toFixed(2)} {r.social_url && <a href={r.social_url} target="_blank" rel="noreferrer">social ↗</a>}</div></div>))}</div>
    <table><thead><tr><th>Rank</th><th>Donor</th><th>Amount</th><th>Social</th></tr></thead><tbody>
      {rest.map((r,idx)=>(<tr key={idx}><td>#{idx+4}</td><td>{r.donor_name||'Anonymous'}</td><td>${(r.total_usd||0).toFixed(2)}</td><td>{r.social_url?<a href={r.social_url} target="_blank" rel="noreferrer">link ↗</a>:'-'}</td></tr>))}
      {rows.length===0 && <tr><td colSpan={4}>Be the first.</td></tr>}
    </tbody></table></section>;
}
