'use client'

import { useState } from 'react'

function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    acceptKVKK: false
  })

  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const services = [
    'Danışmanlık Hizmeti',
    'AI Hizmetleri (WhatsApp Bot, Call Center)',
    'CRM Programı',
    'Dijital & Sosyal Medya',
    'İK',
    'Diğer'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Bir hata oluştu.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '', acceptKVKK: false })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Bir hata oluştu. Lütfen tekrar deneyin.')
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="request-form-hero">
        <div className="container">
          <div className="request-form-hero-content">
            <h1>Talep Formu</h1>
            <p className="hero-subtitle">Size Nasıl Yardımcı Olabiliriz?</p>
            <p className="hero-description">
              Formu doldurarak bizimle iletişime geçin. Uzman ekibimiz en kısa sürede size geri dönüş yapacaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="request-form-section">
        <div className="container">
          <div className="request-form-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>İletişim Bilgileri</h2>
              <p>Formu doldurmak yerine doğrudan bize ulaşabilirsiniz:</p>

              <div className="contact-methods">
                <a href="tel:+905376023088" className="contact-method">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Telefon</h4>
                    <p>+90 537 602 30 88</p>
                  </div>
                </a>

                <a href="mailto:info@hepsiclinic.com" className="contact-method">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>E-posta</h4>
                    <p>info@hepsiclinic.com</p>
                  </div>
                </a>

                <a href="https://wa.me/905376023088" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>Hemen mesaj gönderin</p>
                  </div>
                </a>
              </div>

              <div className="office-hours">
                <h3>Çalışma Saatleri</h3>
                <p><strong>Pazartesi - Cuma:</strong> 09:00 - 18:00</p>
                <p><strong>Cumartesi:</strong> 10:00 - 16:00</p>
                <p><strong>Pazar:</strong> Kapalı</p>
                <p className="note">Acil durumlar için WhatsApp üzerinden 7/24 ulaşabilirsiniz.</p>
              </div>
            </div>

            {/* Form */}
            <div className="request-form-container">
              <div className="request-form-card">
                {status === 'success' ? (
                  <div className="form-success">
                    <div className="success-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <h3>Talebiniz Alındı!</h3>
                    <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
                  </div>
                ) : (
                  <>
                    <h3>Talep Formu</h3>
                    <p className="form-subtitle">Aşağıdaki formu doldurarak talebinizi bize iletin.</p>

                    <form onSubmit={handleSubmit} className="request-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name">Ad Soyad *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Adınız ve soyadınız"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="phone">Telefon *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="0555 123 45 67"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="email">E-posta *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="ornek@email.com"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="company">Klinik/Şirket Adı</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Klinik veya şirket adınız"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="service">Talep Edilen Hizmet *</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Hizmet seçiniz</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Mesajınız *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          placeholder="Talebinizi detaylı bir şekilde açıklayınız..."
                        />
                      </div>

                      <div className="form-checkbox">
                        <label>
                          <input
                            type="checkbox"
                            name="acceptKVKK"
                            checked={formData.acceptKVKK}
                            onChange={handleChange}
                            required
                          />
                          <span>
                            <a href="/kvkk" target="_blank" rel="noopener noreferrer">KVKK</a> metnini okudum ve kabul ediyorum.
                            Kişisel verilerimin işlenmesine izin veriyorum.
                          </span>
                        </label>
                      </div>

                      {status === 'error' && (
                        <div className="form-message form-error">
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn-submit-request"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? 'Gönderiliyor...' : 'Talep Gönder'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RequestForm
