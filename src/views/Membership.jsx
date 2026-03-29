'use client'

import { useState } from 'react'

function Membership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    acceptKVKK: false
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/membership/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Bir hata oluştu.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', acceptKVKK: false })
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
      <section className="membership-hero">
        <div className="container">
          <div className="membership-hero-content">
            <h1>Üye Olun</h1>
            <p className="hero-subtitle">Yeniliklerden Haberdar Olun</p>
            <p className="hero-description">
              HepsiClinic ailesine katılın ve sağlık sektöründeki gelişmeler, özel fırsatlar ve kampanyalardan ilk siz haberdar olun.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Form Section */}
      <section className="membership-form-section">
        <div className="container">
          <div className="membership-grid">
            {/* Benefits */}
            <div className="membership-benefits">
              <h2>Üyelik Avantajları</h2>
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Özel Fırsatlar</h4>
                    <p>Sadece üyelere özel kampanya ve indirimlerden yararlanın</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>İlk Haber Siz Alın</h4>
                    <p>Yeni hizmetler ve ürünlerden ilk haberdar olan siz olun</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Sektörel İçerikler</h4>
                    <p>Sağlık sektöründeki güncel gelişmeler ve trendler</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Ücretsiz Danışmanlık</h4>
                    <p>Aylık ücretsiz danışmanlık hakkı kazanın</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Öncelikli Destek</h4>
                    <p>7/24 öncelikli müşteri desteği hizmeti</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="membership-form-container">
              <div className="membership-form-card">
                <h3>Üyelik Formu</h3>
                <p className="form-subtitle">Bilgilerinizi paylaşın, sizinle iletişime geçelim.</p>

                <form onSubmit={handleSubmit} className="membership-form">
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

                  <div className="form-group">
                    <label htmlFor="company">Klinik/Şirket Adı</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Klinik veya şirket adınız (opsiyonel)"
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
                        E-posta ve SMS ile bilgilendirme almayı onaylıyorum.
                      </span>
                    </label>
                  </div>

                  {status === 'success' && (
                    <div className="form-message form-success">
                      Başvurunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="form-message form-error">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-submit-membership"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Gönderiliyor...' : 'Üye Ol'}
                  </button>
                </form>

                <div className="form-footer">
                  <p>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    Bilgileriniz güvenli bir şekilde saklanır ve üçüncü şahıslarla paylaşılmaz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Membership
