import { Link } from 'react-router-dom'
import { useState } from 'react'

import crm1 from '../assets/CRM/IMG_0458.jpeg'

function SecondHand() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setShowContactForm(false)
      setFormSubmitted(false)
    }, 2000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="secondhand-hero-construction">
        <div className="secondhand-hero-bg">
          <img src={crm1} alt="2. El Cihazlar" />
          <div className="hero-gradient-dark"></div>
        </div>
        <div className="container secondhand-hero-content">
          <div className="construction-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
            </svg>
            <span>Yapım Aşamasında</span>
          </div>
          <h1>2. El Cihazlar</h1>
          <p className="hero-subtitle">
            Uygun fiyatlı aradığınız cihazlar için al & sat yapabileceğiniz platform çok yakında hizmetinizde.
            Garantili, test edilmiş ve kaliteli ikinci el medikal cihazlar.
          </p>
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>Uygun Fiyatlı</span>
            </div>
            <div className="hero-feature-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>Garantili & Test Edilmiş</span>
            </div>
            <div className="hero-feature-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>Güvenli Al-Sat</span>
            </div>
          </div>
          <div className="hero-actions">
            <button onClick={() => setShowContactForm(true)} className="btn-primary-large">
              Lansman için Bilgi Al
            </button>
            <Link to="/talep-formu" className="btn-outline-light">
              Danışmanlık Al
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="coming-features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Yakında</span>
            <h2>Platform Özellikleri</h2>
            <p>2. El Cihaz platformumuzda sunacağımız özellikler</p>
          </div>
          <div className="coming-features-grid">
            <div className="coming-feature-card">
              <div className="coming-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21"/>
                </svg>
              </div>
              <h3>Geniş Cihaz Kataloğu</h3>
              <p>Lazer cihazları, cilt bakım cihazları, RF & HIFU, epilasyon cihazları ve daha fazlası</p>
            </div>
            <div className="coming-feature-card">
              <div className="coming-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                </svg>
              </div>
              <h3>Garanti Sistemi</h3>
              <p>Tüm cihazlar detaylı test sürecinden geçer ve garanti ile satılır</p>
            </div>
            <div className="coming-feature-card">
              <div className="coming-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
                </svg>
              </div>
              <h3>Güvenli Ödeme</h3>
              <p>Escrow sistemi ile güvenli ödeme ve teslimat garantisi</p>
            </div>
            <div className="coming-feature-card">
              <div className="coming-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
              </div>
              <h3>Şehir Bazlı Filtreleme</h3>
              <p>Bulunduğunuz şehre yakın cihazları kolayca bulun</p>
            </div>
            <div className="coming-feature-card">
              <div className="coming-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
                  <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/>
                </svg>
              </div>
              <h3>Profesyonel Fotoğraf</h3>
              <p>Cihazınızı satmak istiyorsanız profesyonel fotoğraf çekimi hizmetimiz var</p>
            </div>
            <div className="coming-feature-card">
              <div className="coming-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63"/>
                </svg>
              </div>
              <h3>Teknik Servis</h3>
              <p>Satış sonrası teknik servis ve bakım desteği</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sell Your Device */}
      <section className="sell-device-section">
        <div className="container">
          <div className="sell-device-content">
            <div className="sell-device-text">
              <span className="section-tag">Cihazınızı Satın</span>
              <h2>Cihazınızı Satmak mı İstiyorsunuz?</h2>
              <p>
                Kliniğinizde kullanmadığınız cihazları platformumuza ekleyin.
                Profesyonel değerlendirme sonrası ilanınız yayınlanır.
              </p>
              <ul className="sell-features">
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Ücretsiz değerlendirme
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Profesyonel fotoğraf çekimi
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Geniş alıcı ağı
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Güvenli ödeme garantisi
                </li>
              </ul>
              <button onClick={() => setShowContactForm(true)} className="btn-primary">
                Bilgi Al
              </button>
            </div>
            <div className="sell-device-visual">
              <div className="coming-soon-card">
                <div className="cs-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3>Çok Yakında</h3>
                <p>Platformumuz üzerinde çalışıyoruz. Lansman için bilgi almak isterseniz formu doldurun.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="secondhand-cta">
        <div className="container secondhand-cta-content">
          <h2>Lansmandan Haberdar Olun</h2>
          <p>
            2. El Cihaz platformumuz açıldığında ilk siz haberdar olun.
            E-posta adresinizi bırakın, size ulaşalım.
          </p>
          <div className="cta-actions">
            <button onClick={() => setShowContactForm(true)} className="btn-white-large">
              Bilgi Al
            </button>
            <a href="tel:+905376023088" className="btn-outline-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="modal-overlay" onClick={() => setShowContactForm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactForm(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            {formSubmitted ? (
              <div className="modal-success">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <h3>Talebiniz Alındı!</h3>
                <p>Lansman detayları için sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <>
                <h3>Lansman Bilgisi Al</h3>
                <p>Bilgilerinizi bırakın, 2. El Cihaz platformumuz açıldığında size haber verelim.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Ad Soyad *</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>Klinik/Şirket Adı</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>E-posta *</label>
                      <input type="email" required />
                    </div>
                    <div className="form-group">
                      <label>Telefon *</label>
                      <input type="tel" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>İlgi Alanı</label>
                    <select>
                      <option value="">Seçiniz</option>
                      <option value="buy">Cihaz Satın Almak İstiyorum</option>
                      <option value="sell">Cihaz Satmak İstiyorum</option>
                      <option value="both">Her İkisi</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Mesaj</label>
                    <textarea rows="3" placeholder="Sorularınız veya notlarınız..."></textarea>
                  </div>
                  <div className="form-consent">
                    <label>
                      <input type="checkbox" required />
                      <span><Link to="/kvkk">KVKK</Link>'yı kabul ediyorum</span>
                    </label>
                  </div>
                  <button type="submit" className="btn-submit">Gönder</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default SecondHand
