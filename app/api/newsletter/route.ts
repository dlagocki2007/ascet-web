import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: "Email jest wymagany" },
        { status: 400 }
      )
    }

    // 1️⃣ MAIL DO CIEBIE — POWIADOMIENIE
    await resend.emails.send({
      from: "ASCET <contact@ascet.pl>",
      to: ["contact@ascet.pl"],
      replyTo: "contact@ascet.pl",
      subject: "Nowy zapis do ASCET",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; padding:32px">
          <h2>Nowy zapis do ASCET</h2>
          <p><strong>Email użytkownika:</strong></p>
          <p style="font-size:18px">${email}</p>
        </div>
      `,
    })

    // 2️⃣ MAIL DO UŻYTKOWNIKA — AUTOREPLY
    await resend.emails.send({
      from: "ASCET <contact@ascet.pl>",
      to: [email],
      replyTo: "contact@ascet.pl",
      subject: "ASCET — początek drogi",
      html: `
        <div style="
          font-family: Inter, Arial, sans-serif;
          background:#000;
          color:#fff;
          padding:56px;
          line-height:1.7;
        ">
          <h1 style="letter-spacing:0.12em; font-weight:600">ASCET</h1>

          <p>Dziękujemy za zapis.</p>

          <p>
            To nie jest newsletter.<br/>
            To moment decyzji.
          </p>

          <p>
            Oczekuj informacji o najbliższych wydarzeniach ASCET,<br/>
            premierach oraz kolejnych etapach drogi.
          </p>

          <p style="margin-top:48px; opacity:0.6">
            Dyscyplina. Cisza. Proces.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json(
      { error: "Błąd serwera" },
      { status: 500 }
    )
  }
}
