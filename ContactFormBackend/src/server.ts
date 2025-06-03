import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['https://contact-form-react-sepia.vercel.app', 'http://localhost:5173'],
  methods: ['POST'],
  credentials: true
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Contact Form Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

// Email Templates
const getUserEmailTemplate = (name: string) => `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .logo {
        width: 150px;
        margin: 20px auto;
        display: block;
      }
      .container {
        background-color: #FAE8E0;
        border-radius: 10px;
        padding: 30px;
        margin-top: 20px;
      }
      .header {
        color: #2A2A2A;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }
      .content {
        background: white;
        padding: 20px;
        border-radius: 8px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        color: #666;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <img src="cid:logo" alt="Logo" class="logo">
    <div class="container">
      <div class="header">Thanks for Contacting Me!</div>
      <div class="content">
        <p>Dear ${name},</p>
        <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to check out my portfolio and social media profiles.</p>
        <p>Best regards,<br>Deepanshu Bajaj</p>
      </div>
      <div class="footer">
        © 2025 Deepanshu Bajaj. All rights reserved.
      </div>
    </div>
  </body>
  </html>
`;

const getAdminEmailTemplate = (name: string, email: string, message: string) => `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .logo {
        width: 150px;
        margin: 20px auto;
        display: block;
      }
      .container {
        background-color: #2A2A2A;
        color: white;
        border-radius: 10px;
        padding: 30px;
        margin-top: 20px;
      }
      .header {
        color: #FAE8E0;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
      }
      .content {
        background: #333;
        padding: 20px;
        border-radius: 8px;
      }
      .field {
        margin-bottom: 15px;
      }
      .label {
        color: #FAE8E0;
        font-weight: bold;
      }
      .value {
        color: white;
        margin-top: 5px;
      }
      .message-box {
        background: #444;
        padding: 15px;
        border-radius: 6px;
        margin-top: 5px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        color: #FAE8E0;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <img src="cid:logo" alt="Logo" class="logo">
    <div class="container">
      <div class="header">New Contact Form Submission!</div>
      <div class="content">
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">Email:</div>
          <div class="value">${email}</div>
        </div>
        <div class="field">
          <div class="label">Message:</div>
          <div class="value message-box">${message}</div>
        </div>
      </div>
      <div class="footer">
        Received on ${new Date().toLocaleString()}
      </div>
    </div>
  </body>
  </html>
`;

// Types
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Routes
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const formData: ContactFormData = req.body;

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to MongoDB
    const contact = new Contact(formData);
    await contact.save();

    const logoPath = path.join(__dirname, '../assets/IMG_8443WBG.png');

    // Send email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      cc: process.env.EMAIL_USER,
      subject: 'Thanks for Contacting me!',
      html: getUserEmailTemplate(formData.name),
      attachments: [{
        filename: 'logo.png',
        path: logoPath,
        cid: 'logo'
      }]
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Boss! Someone has reached out to you',
      html: getAdminEmailTemplate(formData.name, formData.email, formData.message),
      attachments: [{
        filename: 'logo.png',
        path: logoPath,
        cid: 'logo'
      }]
    });

    // Send success response
    res.status(200).json({
      message: 'Message received successfully',
      details: 'Your message has been saved and confirmation emails have been sent'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${ port }`);
}); 