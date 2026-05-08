import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Nodemailer verification failed:", error.message);
  } else {
    console.log("✅ Server is ready to take our messages");
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  const mainEmail = 'lsstechicalservice@gmail.com';
  const consultingEmail = 'ragu08974@gmail.com';
  const recipient = service === 'IT Consulting' ? consultingEmail : mainEmail;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: `New Request from ${name}: ${service}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      
      Message:
      ${message}
    `,
  };

  try {
    if (process.env.EMAIL_PASS === 'your-app-password-here') {
      throw new Error("You are still using the placeholder 'your-app-password-here' in .env. Please replace it with a real Gmail App Password.");
    }
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${recipient}`);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Nodemailer Error:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
