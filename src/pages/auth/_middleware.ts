import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies['@repodoc:token'];
  const { origin } = req.nextUrl;

  if (token) {
    return NextResponse.redirect(`${origin}/app/dashboard`);
  }

  return NextResponse.next();
}
