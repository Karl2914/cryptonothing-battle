import { NextResponse } from 'next/server'; import { supabaseServer } from '@/lib/supabaseServer';
export async function GET(){ const { data, error } = await supabaseServer.from('social_links').select('platform,label,url,is_enabled,sort_order'); if(error) return NextResponse.json({ error:error.message },{ status:500 }); return NextResponse.json({ rows: data||[] }); }
