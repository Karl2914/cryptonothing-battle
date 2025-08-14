import { NextResponse } from 'next/server'; import { supabaseServer } from '../../../lib/supabaseServer';
export async function POST(req:Request){ const { donorName,txHash,chain,token,socialUrl,amountUsd } = await req.json();
  if(!txHash||!chain||!token) return NextResponse.json({ error:'Please fill tx hash, chain and token' }, { status:400 });
  const okDomains=['x.com','twitter.com','instagram.com','tiktok.com','t.me','telegram.me','telegram.org'];
  let clean:string|null=null; if(socialUrl && /^https?:\/\//i.test(socialUrl)){ try{ const u=new URL(socialUrl); if(okDomains.some(d=>u.hostname.endsWith(d))) clean=socialUrl; }catch{} }
  const { data, error } = await supabaseServer.from('donations').insert({ chain, token_symbol:token, tx_hash:txHash, donor_name:donorName||null, social_url:clean, amount_usd:amountUsd?Number(amountUsd):0, amount_native:0, status:'pending' }).select('id').single();
  if(error) return NextResponse.json({ error:error.message }, { status:500 }); return NextResponse.json({ ok:true, id:data.id }); }
