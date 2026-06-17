'use server';

import { Resend } from 'resend';

import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend('re_test_1234567890abcdef');

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    console.log(`Sending contact email from ${email}: ${message}`);

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'dhwani.vyas05@gmail.com',
      subject: 'Message from contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: `Something went wrong!`,
    };
  }
};
