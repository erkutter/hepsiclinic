import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, phone, company } = await request.json()

    if (!name || !email || !phone) {
      return Response.json(
        { error: 'Ad Soyad, E-posta ve Telefon alanları zorunludur.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"HepsiClinic Üyelik" <${process.env.SMTP_USER}>`,
      to: 'info@hepsiclinic.com',
      subject: `Yeni Üyelik Başvurusu - ${name}`,
      html: `
        <h2>Yeni Üyelik Başvurusu</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr>
            <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ad Soyad</td>
            <td style="padding:8px;border:1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-posta</td>
            <td style="padding:8px;border:1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td>
            <td style="padding:8px;border:1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Klinik/Şirket</td>
            <td style="padding:8px;border:1px solid #ddd;">${company || '-'}</td>
          </tr>
        </table>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return Response.json(
      { error: 'Mail gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    )
  }
}
