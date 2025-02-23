import nodemailer from 'nodemailer';
const email = process.env.NEXT_PUBLIC_GMAIL || '';
const password = process.env.NEXT_PUBLIC_GMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});
