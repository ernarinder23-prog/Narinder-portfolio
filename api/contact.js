const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { email, message } = req.body || {}

  if (!email || !message) {
    res.status(400).json({ error: 'Email and message are required.' })
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: 'New contact form submission',
      replyTo: email,
      text: `From: ${email}\n\n${message}`,
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ error: 'Failed to send message.' })
  }
}
