module.exports = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const keys = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_SECURE',
    'SMTP_USER',
    'SMTP_PASS',
    'CONTACT_TO',
  ]

  const present = {}
  keys.forEach((k) => {
    present[k] = Boolean(process.env[k])
  })

  res.status(200).json({ ok: true, env: present })
}
