import { NextRequest, NextResponse } from 'next/server';
// In rewrite method you pass a page folder name(as a string). which // you create to handle underConstraction  functionalty.
export function middleware(req: NextRequest) {
  const token = req.cookies['@repodoc:token'];
  const { origin } = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(`${origin}/auth/login`);
  }

  return NextResponse.next();
}
