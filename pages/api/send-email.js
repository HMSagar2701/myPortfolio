// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Replace with your SMTP server
        port: 587, // Port for SMTP (usually 587 or 465)
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // Use the environment variable
            pass: process.env.EMAIL_PASS, // Use the environment variable
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: 'sagarhm2028@gmail.com', // Your email to receive messages
        subject: `New message from ${name}`,
        text: message,
        html: `<strong>${message}</strong><br>From: ${name} (${email})`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
}
