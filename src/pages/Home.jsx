import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Import images
import danismanlik1 from '../assets/danismanlik/IMG_0377.jpeg'
import danismanlik2 from '../assets/danismanlik/IMG_0400.jpeg'
import aiCallCenter1 from '../assets/aiCallCenter/IMG_0398.jpeg'
import aiCallCenter2 from '../assets/aiCallCenter/IMG_0448.jpeg'
import crm1 from '../assets/CRM/IMG_0458.jpeg'
import crm2 from '../assets/CRM/IMG_0464.jpeg'
import socialMedia1 from '../assets/socialMedia/IMG_0474.jpeg'

const heroSlides = [
  {
    id: 1,
    title: 'Danışmanlık Hizmetleri',
    subtitle: 'Klinik Kurmak, Büyütmek ve Yönetmek İçin',
    description: 'Klinik kurulum danışmanlığı, operasyon yönetimi, insan kaynakları ve pazarlama desteği ile kliniğinizi bir adım öne taşıyın.',
    image: danismanlik1,
    link: '/danismanlik',
    buttonText: 'Danışmanlık Al',
    badge: 'Öncelik 1'
  },
  {
    id: 2,
    title: 'AI Call Center',
    subtitle: 'Akıllı Klinik Asistanınız',
    description: 'Çağrı karşılama, randevu yönetimi, otomatik bilgi iletimi ve satış destek hizmeti sunan AI asistan ile 7/24 hizmet verin.',
    image: aiCallCenter1,
    link: '/ai-call-center-crm',
    buttonText: 'Demo İste',
    badge: 'Çok Yakında'
  },
  {
    id: 3,
    title: 'CRM Programı',
    subtitle: 'Hasta Yönetiminde Yeni Dönem',
    description: 'Hasta kartları, randevu yönetimi, stok takibi, hatırlatma sistemi ve ciro takibi ile kliniğinizi profesyonelce yönetin.',
    image: crm1,
    link: '/ai-call-center-crm',
    buttonText: 'Detayları Gör',
    badge: 'AI Entegre'
  },
  {
    id: 4,
    title: 'Sosyal Medya Yönetimi',
    subtitle: 'Dijital Varlığınızı Güçlendirin',
    description: 'İçerik üretimi, Google ADS, web sitesi tasarımı ve marka danışmanlığı ile çevrimiçi görünürlüğünüzü artırın.',
    image: socialMedia1,
    link: '/sosyal-medya',
    buttonText: 'Paketleri Gör',
    badge: 'Yeni'
  }
]

const services = [
  {
    id: 1,
    title: 'Danışmanlık',
    description: 'Klinik kurulum, operasyon yönetimi ve stratejik planlama',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
      </svg>
    ),
    link: '/danismanlik',
    color: '#2d5a4a'
  },
  {
    id: 2,
    title: 'AI Call Center & CRM',
    description: 'Akıllı çağrı merkezi ve hasta yönetim sistemi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
      </svg>
    ),
    link: '/ai-call-center-crm',
    color: '#1a5f7a'
  },
  {
    id: 3,
    title: 'Hepsi Eleman',
    description: 'İş arayanlar ve işverenler için platform',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
      </svg>
    ),
    link: '/personel',
    color: '#6b4c9a'
  },
  {
    id: 4,
    title: '2. El Cihaz & Kiralama',
    description: 'Kaliteli cihazlar uygun fiyatlarla',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
      </svg>
    ),
    link: '/ikinci-el-cihazlar',
    color: '#c4692e'
  },
  {
    id: 5,
    title: 'Sarf Malzemeler',
    description: 'Toptan fiyatlarla klinik malzemeleri',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
      </svg>
    ),
    link: '/sarf-malzemeler',
    color: '#3d7a62'
  },
  {
    id: 6,
    title: 'Sosyal Medya',
    description: 'Dijital pazarlama ve içerik üretimi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
        <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
      </svg>
    ),
    link: '/sosyal-medya',
    color: '#c43d7a'
  }
]

const stats = [
  { value: '500+', label: 'Klinik Partneri' },
  { value: '50+', label: 'Uzman Danışman' },
  { value: '1000+', label: 'Yerleştirilen Personel' },
  { value: '98%', label: 'Müşteri Memnuniyeti' }
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsAnimating(false)
      }, 500)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsAnimating(false)
      }, 500)
    }
  }

  const slide = heroSlides[currentSlide]

  return (
    <>
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div 
          className={`hero-slide ${isAnimating ? 'fade-out' : 'fade-in'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="container hero-slider-content">
            <div className="hero-text">
              <span className="hero-badge">{slide.badge}</span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-actions">
                <Link to={slide.link} className="btn-primary">{slide.buttonText}</Link>
                <Link to="/iletisim" className="btn-outline">İletişime Geç</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="slider-controls">
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="slider-progress">
            <div 
              className="slider-progress-bar"
              style={{ '--progress': `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Hizmetlerimiz</span>
            <h2>Tüm Klinik İhtiyaçlarınız İçin</h2>
            <p>Danışmanlıktan teknolojiye, personelden malzemeye kadar her şey tek platformda</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link 
                to={service.link} 
                key={service.id} 
                className="service-card"
                style={{ '--delay': `${index * 0.1}s`, '--accent': service.color }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI & CRM Feature Section */}
      <section className="feature-section ai-feature">
        <div className="container feature-grid">
          <div className="feature-content">
            <span className="feature-tag">AI Teknolojisi</span>
            <h2>Yapay Zeka Destekli Klinik Yönetimi</h2>
            <p>
              AI Call Center ve CRM entegrasyonu ile kliniğinizin iletişimini ve hasta yönetimini 
              tamamen otomatikleştirin. 7/24 aktif asistan, WhatsApp entegrasyonu ve akıllı 
              randevu sistemi ile verimliliğinizi artırın.
            </p>
            <ul className="feature-list">
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Otomatik çağrı karşılama ve yönlendirme
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Hasta kartları ve geçmiş takibi
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                SMS/WhatsApp hatırlatma sistemi
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Before & After fotoğraf yönetimi
              </li>
            </ul>
            <div className="feature-actions">
              <Link to="/ai-call-center-crm" className="btn-primary">Demo İste</Link>
              <Link to="/ai-call-center-crm" className="btn-text">Detaylı Bilgi →</Link>
            </div>
          </div>
          <div className="feature-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="chat-message bot">
                  <span>Merhaba! HepsiClinic'e hoş geldiniz. Size nasıl yardımcı olabilirim?</span>
                </div>
                <div className="chat-message user">
                  <span>Botox fiyatları hakkında bilgi alabilir miyim?</span>
                </div>
                <div className="chat-message bot">
                  <span>Tabii ki! Botox uygulamalarımız 2.500₺'den başlamaktadır. Randevu almak ister misiniz?</span>
                </div>
                <div className="chat-message user">
                  <span>Evet, yarın öğleden sonra müsait miyim?</span>
                </div>
                <div className="chat-message bot typing">
                  <span className="typing-indicator">
                    <span></span><span></span><span></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-preview">
              <h4>Canlı Dashboard</h4>
              <div className="stat-row">
                <span>Bugünkü Randevular</span>
                <strong>24</strong>
              </div>
              <div className="stat-row">
                <span>Aktif Görüşmeler</span>
                <strong>8</strong>
              </div>
              <div className="stat-row">
                <span>Yanıt Süresi</span>
                <strong>~12 sn</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" style={{ '--delay': `${index * 0.15}s` }}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Section */}
      <section className="hr-section">
        <div className="container hr-grid">
          <div className="hr-image">
            <img src={danismanlik2} alt="Sağlık profesyonelleri" />
          </div>
          <div className="hr-content">
            <span className="section-tag">Hepsi Eleman</span>
            <h2>Kliniğiniz İçin Doğru Personeli Bulun</h2>
            <p>
              Estetisyen, klinik koordinatörü, doktor ve diğer sağlık profesyonellerini 
              kolayca bulun. KVKK uyumlu sistemimizle güvenle işe alım yapın veya 
              iş arayın.
            </p>
            <div className="hr-features">
              <div className="hr-feature">
                <div className="hr-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <div>
                  <h4>İşveren Paneli</h4>
                  <p>Pozisyon ekleyin, nitelikler belirleyin, başvuruları yönetin</p>
                </div>
              </div>
              <div className="hr-feature">
                <div className="hr-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div>
                  <h4>CV Havuzu</h4>
                  <p>CV yükleyin, meslek filtresi kullanın, gizlilik seçeneklerini ayarlayın</p>
                </div>
              </div>
            </div>
            <div className="hr-actions">
              <Link to="/personel" className="btn-primary-dark">Eleman Arıyorum</Link>
              <Link to="/personel" className="btn-outline-dark">İş Arıyorum</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Devices & Equipment Section */}
      <section className="equipment-section">
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">Cihaz & Ekipman</span>
            <h2>2. El Cihazlar, Sıfır Cihazlar & Kiralama</h2>
            <p>Klinik ihtiyaçlarınız için uygun fiyatlı ve kaliteli seçenekler</p>
          </div>
          <div className="equipment-cards">
            <Link to="/ikinci-el-cihazlar" className="equipment-card">
              <div className="equipment-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L6.75 2.906m9.944 18.08l-1.15-.964M5.463 5.106l-1.149-.964m14.946 14.164l-1.41-.514M5.106 6.215l-1.41-.513"/>
                </svg>
              </div>
              <h3>2. El Cihazlar</h3>
              <p>Garantili, test edilmiş ikinci el medikal cihazlar</p>
              <span className="card-link">Cihazları Gör →</span>
            </Link>
            <Link to="/ikinci-el-cihazlar" className="equipment-card featured">
              <div className="equipment-badge">Popüler</div>
              <div className="equipment-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Kiralama</h3>
              <p>Esnek ödeme seçenekleriyle cihaz kiralama</p>
              <span className="card-link">Kiralama Seçenekleri →</span>
            </Link>
            <Link to="/sarf-malzemeler" className="equipment-card">
              <div className="equipment-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
                </svg>
              </div>
              <h3>Sarf Malzeme</h3>
              <p>Toptan fiyatlarla tek kullanımlık malzemeler</p>
              <span className="card-link">Ürünleri Gör →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="social-cta">
        <div className="container social-cta-content">
          <div className="social-cta-text">
            <h2>Dijital Varlığınızı Güçlendirin</h2>
            <p>
              Sosyal medya yönetimi, içerik üretimi, Google ADS ve web sitesi tasarımı 
              ile kliniğinizin çevrimiçi görünürlüğünü artırın.
            </p>
            <Link to="/sosyal-medya" className="btn-white">Sosyal Medya Paketleri</Link>
          </div>
          <div className="social-cta-visual">
            <img src={aiCallCenter2} alt="Sosyal medya yönetimi" />
          </div>
        </div>
      </section>

      {/* Insurance Banner */}
      <section className="insurance-section">
        <div className="container insurance-content">
          <div className="insurance-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
            </svg>
          </div>
          <h2>Cihaz & Klinik Sigortası</h2>
          <p>
            HepsiClinic güvencesiyle cihazlarınızı ve kliniğinizi koruma altına alın. 
            Özel sigorta paketlerimizle içiniz rahat olsun.
          </p>
          <Link to="/ikinci-el-cihazlar" className="btn-outline-light">Sigorta Teklifi Al</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="main-cta">
        <div className="container main-cta-content">
          <h2>Kliniğinizi Bir Adım Öne Taşıyın</h2>
          <p>
            Ücretsiz danışmanlık için hemen iletişime geçin. Uzman ekibimiz size en uygun 
            çözümleri sunmak için hazır.
          </p>
          <div className="main-cta-actions">
            <Link to="/danismanlik" className="btn-primary-large">Ücretsiz Danışmanlık</Link>
            <a href="tel:+905551234567" className="btn-outline-large">
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

export default Home
