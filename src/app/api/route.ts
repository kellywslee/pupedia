import { NextResponse } from 'next/server';
import { getDogs } from '../service/dogs';

export async function GET(request: Request) {
  const dogs = await getDogs();
  return NextResponse.json({ dogs });
}
