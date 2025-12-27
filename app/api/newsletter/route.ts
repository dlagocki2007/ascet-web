import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  console.log("Newsletter signup:", body.email)

  return NextResponse.json({ success: true })
}
