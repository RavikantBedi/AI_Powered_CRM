import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // GET /api/contacts
  return NextResponse.json({ message: 'GET contacts' });
}

export async function POST(req: NextRequest) {
  // POST /api/contacts
  return NextResponse.json({ message: 'POST contacts' });
}
