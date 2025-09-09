import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  cookies().set("auth", "", { path: "/", maxAge: 0 });
  return new NextResponse(null, { status: 204 });
}
