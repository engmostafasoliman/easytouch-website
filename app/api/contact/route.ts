import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Log the submission server-side (replace with email/CRM integration as needed)
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || '—',
      service: service || '—',
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with SMTP / Resend / SendGrid / CRM here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'no-reply@easytouchuae.ae',
    //   to: 'info@easytouchuae.ae',
    //   subject: `New enquiry from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>...`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}
