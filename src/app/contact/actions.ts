'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !subject) {
    return { error: 'Name, email, and subject are required.' };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // This will be the sender address shown in the email
      to: 'contact@mideaststrategia.org',
      subject: subject,
      replyTo: email,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { error: 'There was a problem sending your message. Please try again later.' };
  }
} 