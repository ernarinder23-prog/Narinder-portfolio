require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '1mb' }))

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: String(process.env.SMTP_SECURE || 'true') === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  try {
    const { email, message } = req.body || {}

    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required.' })
    }

    const mail = {
      from: `Portfolio Contact <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: 'New contact form submission',
      replyTo: email,
      text: `From: ${email}\n\n${message}`,
    }

    await transporter.sendMail(mail)

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send message.' })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

app.listen(PORT, () => {
  console.log(`Mailer API running on port ${PORT}`)
})
