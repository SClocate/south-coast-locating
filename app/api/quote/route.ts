import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL!,
      to: process.env.QUOTE_TO_EMAIL!,
      replyTo: email,
      subject: `New Quote Request - ${name}`,
      text: `
New Quote Request

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Message:
${message}
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
