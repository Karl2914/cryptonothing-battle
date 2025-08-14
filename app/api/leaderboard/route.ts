import { NextResponse } from 'next/server'; import { supabaseServer } from '@/lib/supabaseServer';
export async function GET(){ const { data, error } = await supabaseServer.from('leaderboard_week_single').select('*').limit(100); if(error) return NextResponse.json({ error:error.message },{ status:500 }); return NextResponse.json({ rows: data||[] }); }
