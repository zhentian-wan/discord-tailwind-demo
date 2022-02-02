import { NextResponse } from "next/server";
export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect("/servers/1/channels/1");
  }
  return NextResponse.next();
}
