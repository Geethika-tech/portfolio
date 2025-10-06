import { NextResponse } from "next/server";
import { Resend } from 'resend';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'geethikapidikiti9@gmail.com', // your inbox
      subject: `New message from ${name} - ${subject}`,
      reply_to: email, // lets you directly reply to the sender
      text: `
You’ve received a new message from your portfolio site.

👤 Name: ${name}
📧 Email: ${email}
📝 Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
