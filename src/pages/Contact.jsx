import { Link } from 'react-router-dom'
import { useState } from 'react'

import danismanlik1 from '../assets/danismanlik/IMG_0377.jpeg'

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
    ),
    title: 'Telefon',
    value: '+90 555 123 45 67',
    link: 'tel:+905551234567',
    description: 'Pazartesi - Cumartesi: 09:00 - 18:00'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
      </svg>
    ),
    title: 'E-posta',
    value: 'info@hepsiclinic.com',
    link: 'mailto:info@hepsiclinic.com',
    description: '24 saat içinde yanıt garantisi'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
    title: 'Adres',
    value: 'İstanbul, Türkiye',
    link: 'https://maps.google.com',
    description: 'Levent, Beşiktaş'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    title: 'WhatsApp',
    value: '+90 555 123 45 67',
    link: 'https://wa.me/905551234567',
    description: 'Hızlı iletişim için'
  }
]

const departments = [
  { value: 'general', label: 'Genel Bilgi' },
  { value: 'consulting', label: 'Danışmanlık Hizmetleri' },
  { value: 'ai-crm', label: 'AI Call Center & CRM' },
  { value: 'personnel', label: 'İnsan Kaynakları' },
  { value: 'devices', label: '2. El Cihaz & Kiralama' },
  { value: 'supplies', label: 'Sarf Malzemeler' },
  { value: 'social', label: 'Sosyal Medya Hizmetleri' },
  { value: 'support', label: 'Teknik Destek' }
]

const faq = [
  {
    question: 'Danışmanlık hizmeti nasıl başlıyor?',
    answer: 'Öncelikle ücretsiz bir ön görüşme yapıyoruz. İhtiyaçlarınızı analiz edip size özel bir teklif hazırlıyoruz. Anlaştıktan sonra hemen çalışmaya başlıyoruz.'
  },
  {
    question: 'AI Call Center demo yapabilir miyim?',
    answer: 'Evet, web sitemizdeki demo butonuna tıklayarak asistanımızı deneyebilirsiniz. Ayrıca canlı demo için randevu da alabilirsiniz.'
  },
  {
    question: 'Ödeme seçenekleriniz nelerdir?',
    answer: 'Kredi kartı, havale/EFT ve vadeli ödeme seçeneklerimiz mevcuttur. Kurumsal müşterilerimiz için özel ödeme planları sunuyoruz.'
  },
  {
    question: 'Hangi şehirlerde hizmet veriyorsunuz?',
    answer: 'Türkiye genelinde hizmet veriyoruz. Danışmanlık hizmetlerimiz hem online hem de yerinde yapılabilmektedir.'
  }
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: '',
    subject: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        department: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img src={danismanlik1} alt="İletişim" />
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="container contact-hero-content">
          <span className="hero-badge">İletişim</span>
          <h1>Bizimle<br /><span>İletişime Geçin</span></h1>
          <p>
            Sorularınız, önerileriniz veya talepleriniz için bizimle iletişime geçin. 
            Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="contact-info-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="contact-info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <span className="contact-value">{info.value}</span>
                <p>{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h2>Bize Ulaşın</h2>
                <p>Formu doldurun, en kısa sürede size dönüş yapalım</p>
              </div>
              
              {formSubmitted ? (
                <div className="contact-success">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <h3>Mesajınız Alındı!</h3>
                  <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Ad Soyad *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-posta *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Telefon *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        placeholder="Şirket veya klinik adı"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="department">İlgili Departman</label>
                      <select 
                        id="department" 
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                      >
                        <option value="">Seçiniz</option>
                        {departments.map((dept) => (
                          <option key={dept.value} value={dept.value}>{dept.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Konu *</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required 
                        placeholder="Mesajınızın konusu"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mesajınız *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      required
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>
                  <div className="form-consent">
                    <label>
                      <input type="checkbox" required />
                      <span>
                        <Link to="/kvkk">KVKK Aydınlatma Metni</Link>'ni okudum ve kabul ediyorum.
                      </span>
                    </label>
                  </div>
                  <button type="submit" className="btn-submit-contact">
                    Mesaj Gönder
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside className="contact-sidebar">
              {/* Quick Actions */}
              <div className="quick-actions-card">
                <h3>Hızlı İletişim</h3>
                <p>Acil durumlar için doğrudan iletişime geçin</p>
                <div className="quick-action-buttons">
                  <a href="tel:+905551234567" className="quick-action-btn call">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    Hemen Ara
                  </a>
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="quick-action-btn whatsapp">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="working-hours-card">
                <h3>Çalışma Saatleri</h3>
                <ul className="hours-list">
                  <li>
                    <span>Pazartesi - Cuma</span>
                    <strong>09:00 - 18:00</strong>
                  </li>
                  <li>
                    <span>Cumartesi</span>
                    <strong>10:00 - 14:00</strong>
                  </li>
                  <li>
                    <span>Pazar</span>
                    <strong>Kapalı</strong>
                  </li>
                </ul>
                <div className="emergency-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Acil durumlar için WhatsApp üzerinden 7/24 ulaşabilirsiniz</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links-card">
                <h3>Sosyal Medya</h3>
                <p>Bizi takip edin, güncel kalın</p>
                <div className="social-icons-grid">
                  <a href="https://instagram.com/hepsiclinic" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/hepsiclinic" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com/@hepsiclinic" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/hepsiclinic" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-overlay-card">
              <h3>Ofisimizi Ziyaret Edin</h3>
              <p>
                Levent, Beşiktaş<br />
                İstanbul, Türkiye
              </p>
              <a 
                href="https://maps.google.com/?q=Levent+Beşiktaş+İstanbul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-directions"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Yol Tarifi Al
              </a>
            </div>
            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2494392776064!2d29.01169831570731!3d41.07854927929391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f1a2d3d1f%3A0x8d6e8e8e8e8e8e8e!2sLevent%2C%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
                title="HepsiClinic Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SSS</span>
            <h2>Sık Sorulan Sorular</h2>
            <p>Merak ettiklerinize hızlı yanıtlar</p>
          </div>
          <div className="faq-grid">
            {faq.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <h4>{item.question}</h4>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-cta">
            <p>Sorunuzun cevabını bulamadınız mı?</p>
            <a href="#contact-form" className="btn-outline-dark">Bize Sorun</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container contact-cta-content">
          <h2>Ücretsiz Danışmanlık</h2>
          <p>
            Kliniğiniz için en uygun çözümleri birlikte belirleyelim. 
            Uzman ekibimizle ücretsiz bir görüşme yapın.
          </p>
          <div className="contact-cta-actions">
            <Link to="/danismanlik" className="btn-white-large">Randevu Al</Link>
            <a href="tel:+905551234567" className="btn-outline-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

