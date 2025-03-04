const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Allow frontend to communicate with backend

// ⏳ Rate Limiting Middleware (3 requests per 15 minutes)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute
    max: 3, // Allow more requests temporarily
    message: { error: "Too many form submissions. Please try again later." }
});


app.post("/submit-form", limiter, async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        // Example: Send an email (Replace with actual mail credentials)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "productionsbymultidexters@gmail.com",
            subject: `New Contact Form Submission: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        }, (err, info) => {
            if (err) {
                console.error("Error sending email:", err);
                return res.status(500).json({ error: "Failed to send email." });
            } else {
                console.log("Email sent:", info.response);
                return res.json({ success: "Message sent successfully!" });
            }
        });

        res.json({ success: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
