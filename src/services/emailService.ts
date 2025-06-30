import nodemailer from 'nodemailer';

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error('Missing EMAIL_USER or EMAIL_PASS in environment variables');
}

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter setup failed:', error);
  } else {
    console.log('Email transporter is ready');
  }
});

// Updated to accept both email and verification code
export const sendWelcomeEmail = async (email: string, verificationCode: string) => {
  console.log('Attempting to send verification email to:', email);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Car Rental Account',
    text: `Thanks for signing up!\n\nPlease verify your account using this 6-digit code: ${verificationCode}\n\nEnter it in the verification screen to activate your account.`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${email}, Message ID: ${info.messageId}`);
    return info;
  } catch (error: any) {
    console.error('Error sending verification email to', email, ':', {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack,
    });
    throw new Error('Failed to send verification email');
  }
};
