'use client';
import { useState } from 'react';
export default function SubmitDonation(){
  const [donorName,setDonorName]=useState(''); const [txHash,setTxHash]=useState(''); const [chain,setChain]=useState('TRON'); const [token,setToken]=useState('USDT'); const [socialUrl,setSocialUrl]=useState(''); const [amountUsd,setAmountUsd]=useState(''); const [note,setNote]=useState('');
  const submit=async()=>{
    setNote('');
    const r=await fetch('/api/donations/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({donorName,txHash,chain,token,socialUrl,amountUsd})});
    const d=await r.json(); setNote(r.ok?'Submitted (pending verification).':(d.error||'Error'));
  };
  return <section><h3>I donated — add me</h3><div className="grid2">
    <input placeholder="Nickname (or Anonymous)" value={donorName} onChange={e=>setDonorName(e.target.value)}/>
    <input placeholder="TX hash" value={txHash} onChange={e=>setTxHash(e.target.value)}/>
    <select value={chain} onChange={e=>setChain(e.target.value)}><option>TRON</option><option>TON</option><option>SOL</option><option>ETH</option><option>Polygon</option><option>BSC</option><option>Base</option><option>Arbitrum</option><option>Optimism</option></select>
    <select value={token} onChange={e=>setToken(e.target.value)}><option>USDT</option><option>USDC</option><option>BTC</option><option>ETH</option></select>
    <input placeholder="Social link (optional)" value={socialUrl} onChange={e=>setSocialUrl(e.target.value)}/>
    <input placeholder="Amount in USD (optional)" value={amountUsd} onChange={e=>setAmountUsd(e.target.value)}/>
    <button className="btn" onClick={submit} style={{gridColumn:'1 / span 2'}}>Submit</button>
  </div>{note && <div style={{marginTop:8}}>{note}</div>}</section>;
}
