// app/actions/sendEmail.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string; // <--- Pobieramy nowe pole
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Name, email, and message are required.' };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'radzik.jakub2003@gmail.com', // <--- Pamiętaj, żeby wpisać tu swój mail!
      // Jeśli ktoś wpisze firmę, pojawi się ona w temacie maila, np. "New opportunity from: Jane Doe (Google)"
      subject: `New opportunity from: ${name} ${company ? `(${company})` : ''}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong. Please try again.' };
  }
}