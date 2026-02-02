import { Link } from 'react-router-dom'
import { useState } from 'react'

// Import images
import danismanlik1 from '../assets/danismanlik/IMG_0377.jpeg'
import danismanlik2 from '../assets/danismanlik/IMG_0400.jpeg'
import danismanlik3 from '../assets/danismanlik/01cdfa31d3c63618.png'
import danismanlik4 from '../assets/danismanlik/c4efd87a00a568bf.png'

const services = [
  {
    id: 1,
    title: 'Klinik Kurulum Danışmanlığı',
    description: 'Sıfırdan klinik açmak isteyenler için A\'dan Z\'ye profesyonel destek. Lokasyon seçimi, ruhsat işlemleri, iç tasarım ve ekipman planlaması.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.75m-.75 3h.75m-.75 3h.75m-9 1.5h.75"/>
      </svg>
    ),
    features: ['Lokasyon analizi', 'Ruhsat danışmanlığı', 'İç tasarım planlaması', 'Ekipman seçimi']
  },
  {
    id: 2,
    title: 'Operasyon Yönetimi',
    description: 'Mevcut kliniğinizin operasyonel verimliliğini artırın. Süreç optimizasyonu, maliyet kontrolü ve performans takibi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
      </svg>
    ),
    features: ['Süreç optimizasyonu', 'Maliyet analizi', 'KPI takibi', 'Verimlilik artırma']
  },
  {
    id: 3,
    title: 'İnsan Kaynakları & Eğitim',
    description: 'Doğru personeli bulun ve eğitin. İşe alım süreçleri, performans değerlendirme ve kurum içi eğitim programları.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
      </svg>
    ),
    features: ['İşe alım desteği', 'Eğitim programları', 'Performans yönetimi', 'Ekip geliştirme']
  },
  {
    id: 4,
    title: 'Pazarlama & Sosyal Medya',
    description: 'Kliniğinizin dijital varlığını güçlendirin. Marka stratejisi, sosyal medya yönetimi ve dijital pazarlama.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/>
      </svg>
    ),
    features: ['Marka stratejisi', 'Sosyal medya yönetimi', 'Google ADS', 'SEO optimizasyonu']
  },
  {
    id: 5,
    title: 'Cihaz Seçimi & Bütçe Planlama',
    description: 'İhtiyaçlarınıza uygun cihazları seçin ve bütçenizi optimize edin. Maliyet-fayda analizi ve yatırım planlaması.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    features: ['İhtiyaç analizi', 'Maliyet karşılaştırma', 'ROI hesaplama', 'Finansman seçenekleri']
  },
  {
    id: 6,
    title: 'Satın Alma & Tedarik Yönetimi',
    description: 'Tedarik zincirinizi optimize edin. Toplu alım avantajları, tedarikçi yönetimi ve stok planlaması.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
      </svg>
    ),
    features: ['Tedarikçi yönetimi', 'Toplu alım avantajları', 'Stok optimizasyonu', 'Lojistik planlama']
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Dr. Ayşe Yılmaz',
    role: 'Dermatoloji Kliniği Sahibi',
    text: 'HepsiClinic ile klinik kurulum sürecim çok kolay oldu. Lokasyon seçiminden ekipman alımına kadar her aşamada yanımdaydılar.',
    image: danismanlik3
  },
  {
    id: 2,
    name: 'Dr. Mehmet Kaya',
    role: 'Estetik Merkezi Yöneticisi',
    text: 'Operasyon danışmanlığı sayesinde maliyetlerimizi %30 düşürdük ve hasta memnuniyetimizi artırdık. Kesinlikle tavsiye ediyorum.',
    image: danismanlik4
  }
]

function Consulting() {
  const [activeForm, setActiveForm] = useState('consulting')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - would connect to backend/email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', clinicName: '', service: '', message: '' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="consulting-hero-new">
        <div className="consulting-hero-bg">
          <img src={danismanlik1} alt="Danışmanlık" />
          <div className="hero-gradient"></div>
        </div>
        <div className="container consulting-hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge pulse">Öncelik 1</span>
          </div>
          <h1>Danışmanlık Çözümlerinde<br /><span>İş Ortağınız</span></h1>
          <p>
            Klinik kurmak, büyütmek veya yönetim desteğine ihtiyaç duyan merkezlere 
            kapsamlı danışmanlık hizmetleri sunuyoruz.
          </p>
          <div className="hero-actions">
            <a href="#form-section" className="btn-primary">Danışmanlık Talebi</a>
            <a href="#services" className="btn-outline">Hizmetleri Keşfet</a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Aşağı Kaydır</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="consulting-services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Ana Hizmetler</span>
            <h2>İşletmelerde Uçtan Uca Süreç Yönetimi</h2>
            <p>Her işletme için kişiselleştirilmiş yönetim danışmanlığı</p>
          </div>
          <div className="services-grid-new">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card-new"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="service-icon-new">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="consulting-process">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Süreç</span>
            <h2>Nasıl Çalışıyoruz?</h2>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>İhtiyaç Analizi</h3>
              <p>Mevcut durumunuzu ve hedeflerinizi analiz ediyoruz</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Strateji Geliştirme</h3>
              <p>Size özel bir yol haritası oluşturuyoruz</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Uygulama</h3>
              <p>Planı birlikte hayata geçiriyoruz</p>
            </div>
            <div className="process-line"></div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Takip & Destek</h3>
              <p>Sürekli destek ve optimizasyon sağlıyoruz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="consulting-gallery">
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">Kapsamlı Danışmanlık Hizmeti</span>
            <h2>Tekliflerimizi Bugün Keşfedin</h2>
            <p>
              HepsiClinic.com'da, sağlık profesyonellerinin çeşitli ihtiyaçlarını karşılamak 
              üzere tasarlanmış geniş bir danışmanlık hizmetleri yelpazesi sunuyoruz.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={danismanlik1} alt="Danışmanlık hizmeti" />
            </div>
            <div className="gallery-item">
              <img src={danismanlik2} alt="Klinik danışmanlığı" />
            </div>
            <div className="gallery-item">
              <img src={danismanlik3} alt="Eğitim hizmeti" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="consulting-testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Referanslar</span>
            <h2>Müşterilerimiz Ne Diyor?</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-quote">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p>{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="consulting-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-sidebar">
              <h3>Talep Türü Seçin</h3>
              <div className="form-tabs">
                <button 
                  className={`form-tab ${activeForm === 'consulting' ? 'active' : ''}`}
                  onClick={() => setActiveForm('consulting')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
                  </svg>
                  Klinik Danışmanlığı
                </button>
                <button 
                  className={`form-tab ${activeForm === 'training' ? 'active' : ''}`}
                  onClick={() => setActiveForm('training')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"/>
                  </svg>
                  Klinik İçi Eğitim
                </button>
                <button 
                  className={`form-tab ${activeForm === 'social' ? 'active' : ''}`}
                  onClick={() => setActiveForm('social')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
                  </svg>
                  Sosyal Medya CRM
                </button>
              </div>
              <div className="form-contact-info">
                <h4>Hemen Arayın</h4>
                <a href="tel:+905551234567">+90 555 123 45 67</a>
                <a href="mailto:info@hepsiclinic.com">info@hepsiclinic.com</a>
              </div>
            </div>
            <div className="form-main">
              {submitted ? (
                <div className="form-success">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <h3>Talebiniz Alındı!</h3>
                  <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
                </div>
              ) : (
                <>
                  <h3>
                    {activeForm === 'consulting' && 'Klinik Danışmanlığı Talebi'}
                    {activeForm === 'training' && 'Klinik İçi Eğitim Talebi'}
                    {activeForm === 'social' && 'Sosyal Medya CRM Talebi'}
                  </h3>
                  <form onSubmit={handleSubmit}>
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
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="clinicName">Klinik/Şirket Adı</label>
                        <input 
                          type="text" 
                          id="clinicName" 
                          name="clinicName"
                          value={formData.clinicName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">İlgilendiğiniz Hizmet</label>
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="">Seçiniz</option>
                        {activeForm === 'consulting' && (
                          <>
                            <option value="klinik-kurulum">Klinik Kurulum Danışmanlığı</option>
                            <option value="operasyon">Operasyon Yönetimi</option>
                            <option value="cihaz-secimi">Cihaz Seçimi & Bütçe Planlama</option>
                            <option value="tedarik">Satın Alma & Tedarik Yönetimi</option>
                          </>
                        )}
                        {activeForm === 'training' && (
                          <>
                            <option value="personel-egitim">Personel Eğitimi</option>
                            <option value="satis-egitim">Satış Teknikleri Eğitimi</option>
                            <option value="musteri-iliskileri">Müşteri İlişkileri Eğitimi</option>
                            <option value="liderlik">Liderlik Eğitimi</option>
                          </>
                        )}
                        {activeForm === 'social' && (
                          <>
                            <option value="sosyal-medya">Sosyal Medya Yönetimi</option>
                            <option value="icerik-uretim">İçerik Üretimi</option>
                            <option value="google-ads">Google ADS</option>
                            <option value="web-tasarim">Web Sitesi Tasarımı</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Mesajınız</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="İhtiyaçlarınızı ve beklentilerinizi belirtin..."
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
                    <button type="submit" className="btn-submit">
                      Talep Oluştur
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="consulting-cta">
        <div className="container">
          <h2>Ücretsiz Ön Görüşme</h2>
          <p>
            Uzman danışmanlarımızla ücretsiz bir ön görüşme yapın. 
            İhtiyaçlarınızı anlayalım ve size özel çözümler sunalım.
          </p>
          <a href="tel:+905551234567" className="btn-white-large">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Hemen Arayın
          </a>
        </div>
      </section>
    </>
  )
}

export default Consulting
