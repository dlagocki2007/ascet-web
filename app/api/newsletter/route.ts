import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "No email provided" }, { status: 400 })
    }

    // 1️⃣ MAIL DO CIEBIE (powiadomienie)
    await resend.emails.send({
      from: "ASCET <onboarding@resend.dev>",
      to: ["contact@ascet.pl"],
      subject: "Nowy zapis do ASCET",
      html: `
        <div style="font-family: Arial, sans-serif">
          <h2>Nowy zapis</h2>
          <p>Email: <strong>${email}</strong></p>
        </div>
      `,
    })

    // 2️⃣ MAIL DO UŻYTKOWNIKA (auto-reply)
    await resend.emails.send({
      from: "ASCET <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to ASCET",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; background:#000; color:#fff; padding:48px; line-height:1.6">
         <h1 style="letter-spacing:0.08em; font-weight:600">ASCET</h1>

         <p>Dziękujemy za zapis.</p>

         <p>
    To nie jest newsletter.<br/>
    To moment decyzji.
         </p>

         <p>
    Oczekuj informacji o najbliższych wydarzeniach ASCET,<br/>
    premierach oraz kolejnych etapach drogi.
         </p>

         <p style="margin-top:40px; opacity:0.6">
    Dyscyplina. Cisza. Proces.
         </p>
        </div>

      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
