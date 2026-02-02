import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Import images
import danismanlik1 from '../assets/danismanlik/IMG_0377.jpeg'
import danismanlik2 from '../assets/danismanlik/IMG_0400.jpeg'
import aiCallCenter1 from '../assets/aiCallCenter/IMG_0398.jpeg'
import aiCallCenter2 from '../assets/aiCallCenter/IMG_0448.jpeg'
import crm1 from '../assets/CRM/IMG_0458.jpeg'
import socialMedia1 from '../assets/socialMedia/IMG_0474.jpeg'
import socialMedia2 from '../assets/socialMedia/IMG_0476.jpeg'
import socialMedia3 from '../assets/socialMedia/IMG_0480.jpeg'
import socialMedia4 from '../assets/socialMedia/IMG_0482.jpeg'
import iphoneImage from '../assets/apple-iphone-17-pro-max-2025-medium.png'

const heroSlides = [
  {
    id: 1,
    title: 'Danışmanlık Hizmetleri',
    subtitle: 'Klinik Kurmak, büyütmek ve yönetmek için',
    description: 'Hedefimiz, kliniğin ileride CRM, AI destekli iletişim ve otomasyon sistemlerine hazır hale gelmesini sağlamaktır.',
    image: danismanlik1,
    link: '/talep-formu',
    buttonText: 'Danışmanlık Al',
    badge: ''
  },
  {
    id: 2,
    title: 'AI HİZMETLERİ',
    subtitle: 'Akıllı Klinik Asistanınız',
    description: '7/24 Canlı Cevap Sistemi • WhatsApp & Ai Call Center Otomasyonları • CRM Entegrasyonu',
    image: aiCallCenter1,
    link: '/talep-formu',
    buttonText: 'Ücretsiz Demo',
    badge: 'Ai Teknolojisi'
  },
  {
    id: 3,
    title: 'Sosyal Medya Yönetimi',
    subtitle: 'Dijital Varlıklarınızı Güçlendirin',
    description: 'İçerik üretimi, Web sitesi tasarımı, profesyonel çekim, Google ADS ve bir çok dijital destek hizmetleri bir arada.',
    image: socialMedia1,
    link: '/sosyal-medya',
    buttonText: 'Paketleri Gör',
    badge: 'Dijital Pazarlama'
  },
  {
    id: 4,
    title: 'İK',
    subtitle: 'İş Arayan ve İşverenlerin Buluşma Noktası',
    description: 'Estetisyen, klinik koordinatörü, banko elemanı ve diğer sağlık profesyonellerinin kolayca buluştuğu KVKK uyumlu platform. İşveren paneli, CV havuzu ve güvenli işe alım.',
    image: danismanlik2,
    link: '/hepsi-ik',
    buttonText: 'Platformu Keşfet',
    badge: 'İnsan Kaynakları'
  },
  {
    id: 5,
    title: 'CRM Entegrasyonu',
    subtitle: 'Hasta Yönetiminde Yeni Dönem',
    description: 'Hasta kartları, randevu yönetimi, depo stok senkronizasyonu, before & after fotoğrafları, hatırlatma sistemi ve ciro takibi. Yakında sizlerle!',
    image: crm1,
    link: '/ai-hizmetleri#crm',
    buttonText: 'Bilgi Al',
    badge: 'Çok Yakında'
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
    title: 'Ai Hizmetleri',
    description: '7/24 WhatsApp Chat Bot ve Ai Call Center Otomasyonları',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
      </svg>
    ),
    link: '/ai-hizmetleri',
    color: '#1a5f7a'
  },
  {
    id: 3,
    title: 'Dijital & Sosyal Medya',
    description: 'İçerik üretimi, Web sitesi tasarımı, profesyonel çekim ve Google ADS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
        <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
      </svg>
    ),
    link: '/sosyal-medya',
    color: '#c43d7a'
  },
  {
    id: 4,
    title: 'İK',
    description: 'İş arayanlar ve işverenler için platform',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
      </svg>
    ),
    link: '/hepsi-ik',
    color: '#6b4c9a'
  },
  {
    id: 6,
    title: 'CRM',
    description: 'Çok yakında',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
      </svg>
    ),
    link: '/ai-hizmetleri#crm',
    color: '#3d7a62'
  }
]

const stats = [
  { value: '50+', label: 'Klinik Partneri' },
  { value: '10+', label: 'Uzman Danışman' },
  { value: '100+', label: 'Yerleştirilen Personel' },
  { value: '95%', label: 'Müşteri Memnuniyeti' }
]

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Hero slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsAnimating(false)
      }, 500)
    }, 12000) // Longer duration for slides

    return () => clearInterval(timer)
  }, [])

  // Scroll animation effect - Basic & Reliable
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animate')
    
    // Fallback: If no IntersectionObserver support, show all elements
    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach(el => el.classList.add('animate-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
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
              {slide.badge && <span className="hero-badge">{slide.badge}</span>}
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-actions">
                <Link to={slide.link} className="btn-primary">{slide.buttonText}</Link>
                <a href="tel:+905376023088" className="btn-outline">İletişime Geç</a>
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
          <div className="section-header scroll-animate fade-up">
            <span className="section-tag">Hizmetlerimiz</span>
            <h2>Tüm Klinik Çözümleri Tek Platformda</h2>
            <p>Danışmanlıktan AI hizmetlerine, dijital pazarlamadan personel ihtiyaçlarına kadar her şey tek platformda</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={service.id}
                className={`service-card scroll-animate fade-up delay-${Math.min(index + 1, 5)}00`}
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
          <div className="feature-content scroll-animate fade-left">
            <span className="feature-tag">AI Hizmetleri</span>
            <h2>Yapay Zeka Destekli Klinik Yönetimi</h2>
            <p>
              WhatsApp Chat Bot ve AI Call Center entegrasyonu ile kliniğinizin iletişimini ve hasta yönetimini
              tamamen otomatikleştirin. 7/24 aktif asistan ile hiçbir mesajınız cevapsız kalmasın.
              Google ajandanızda randevularınızı hızlıca görebilirsiniz. Yakında kendi CRM sistemimiz sizlerle olacak.
            </p>
            <ul className="feature-list">
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                7/24 WhatsApp & Instagram mesajlarına cevap sistemi
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Google ajanda entegrasyonu
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Otomatik çağrı karşılama, bilgi verme ve yönlendirme
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
                Klinik konum yönlendirme
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Canlı destek
              </li>
            </ul>
            <div className="feature-actions">
              <Link to="/ai-hizmetleri" className="btn-primary">Demo İste</Link>
              <Link to="/ai-hizmetleri" className="btn-text">Detaylı Bilgi →</Link>
            </div>
          </div>
          <div className="feature-visual scroll-animate fade-right">
            <div className="iphone-chat-wrapper">
              <img src={iphoneImage} alt="iPhone AI Assistant" className="iphone-frame" />
              <div className="iphone-chat-overlay">
                <div className="chat-header-mini">
                  <div className="chat-avatar-mini">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                    </svg>
                  </div>
                  <div className="chat-info-mini">
                    <span className="chat-name-mini">HepsiClinic AI</span>
                    <span className="chat-status-mini">Çevrimiçi</span>
                  </div>
                </div>
                <div className="chat-messages-mini">
                  <div className="chat-msg bot">Merhaba! 👋 Size nasıl yardımcı olabilirim?</div>
                  <div className="chat-msg user">Botox fiyatları hakkında bilgi alabilir miyim?</div>
                  <div className="chat-msg bot">Tabii! 3.500₺'den başlıyor. Randevu ister misiniz?</div>
                  <div className="chat-msg user">Evet, bu hafta müsait misiniz?</div>
                  <div className="chat-msg bot">📅 Salı 14:00, Çarşamba 10:00, Cuma 11:00 müsait.</div>
                </div>
                <div className="chat-input-mini">
                  <span>Mesaj yazın...</span>
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
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
                <strong>3-5 sn</strong>
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
              <div key={index} className={`stat-item scroll-animate fade-up delay-${Math.min(index + 1, 5)}00`} style={{ '--delay': `${index * 0.15}s` }}>
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
          <div className="hr-image scroll-animate fade-left">
            <img src={danismanlik2} alt="Sağlık profesyonelleri" />
          </div>
          <div className="hr-content scroll-animate fade-right">
            <span className="section-tag">İK</span>
            <h2>İş Arayan ve İşverenlerin Ortak Buluşma Noktası</h2>
            <p>
              Estetisyen, klinik koordinatörü, banko elemanı ve diğer sağlık profesyonellerinin
              kolayca buluştuğu bir platform. KVKK uyumlu sistemimizle güvenle işe alım yapın veya
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
              <Link to="/hepsi-ik" className="btn-primary-dark">Eleman Arıyorum</Link>
              <Link to="/hepsi-ik" className="btn-outline-dark">İş Arıyorum</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing & Social Media Section */}
      <section className="digital-marketing-section">
        <div className="container">
          <div className="section-header scroll-animate fade-up">
            <span className="section-tag">Dijital Pazarlama</span>
            <h2>Dijital Varlığınızı Güçlendirin</h2>
            <p>Sosyal medya yönetiminden profesyonel çekime, SEO'dan dijital PR'a kadar tüm dijital pazarlama hizmetlerimiz</p>
          </div>

          <div className="digital-services-grid">
            <div className="digital-service-card scroll-animate fade-up delay-100">
              <div className="digital-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                </svg>
              </div>
              <h3>Sosyal Medya Yönetimi</h3>
              <p>Instagram, Facebook, TikTok ve LinkedIn hesaplarınızın profesyonel yönetimi. İçerik planlaması, paylaşım ve etkileşim yönetimi.</p>
            </div>

            <div className="digital-service-card scroll-animate fade-up delay-200">
              <div className="digital-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
                  <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
                </svg>
              </div>
              <h3>Profesyonel Çekim Hizmetleri</h3>
              <p>Klinik ortamında profesyonel fotoğraf ve video çekimleri. Before/After, tanıtım videoları, ürün fotoğrafları ve sosyal medya içerikleri.</p>
            </div>

            <div className="digital-service-card scroll-animate fade-up delay-300">
              <div className="digital-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
                </svg>
              </div>
              <h3>Google ADS Yönetimi</h3>
              <p>Hedefli reklam kampanyaları ile potansiyel hastalarınıza ulaşın. Arama, Display ve YouTube reklamları ile ROI optimizasyonu.</p>
            </div>

            <div className="digital-service-card scroll-animate fade-up delay-400">
              <div className="digital-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                </svg>
              </div>
              <h3>Web Sitesi Tasarımı</h3>
              <p>Modern, mobil uyumlu ve SEO dostu web siteleri. Randevu sistemi, hizmet tanıtımı, galeri ve blog entegrasyonu.</p>
            </div>

            <div className="digital-service-card scroll-animate fade-up delay-500">
              <div className="digital-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <h3>SEO & Dijital PR</h3>
              <p>Arama motoru optimizasyonu ve dijital PR çalışmaları. Organik trafik artışı, anahtar kelime analizi ve link building.</p>
            </div>

            <div className="digital-service-card scroll-animate fade-up delay-600">
              <div className="digital-service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
                </svg>
              </div>
              <h3>İçerik Üretimi</h3>
              <p>Sosyal medya için özgün içerik üretimi. Reels, Story, Feed tasarımları, animasyonlar ve grafik tasarım hizmetleri.</p>
            </div>
          </div>

          <div className="digital-gallery scroll-animate fade-up">
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={socialMedia2} alt="Profesyonel Çekim" />
                <div className="gallery-overlay">
                  <h4>Profesyonel Çekim</h4>
                </div>
              </div>
              <div className="gallery-item">
                <img src={socialMedia3} alt="Grafik Tasarım" />
                <div className="gallery-overlay">
                  <h4>Grafik Tasarım</h4>
                </div>
              </div>
              <div className="gallery-item">
                <img src={socialMedia4} alt="Video Prodüksiyon" />
                <div className="gallery-overlay">
                  <h4>Video Prodüksiyon</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="digital-cta scroll-animate fade-up">
            <h3>Kliniğinizin Dijital Varlığını Güçlendirin</h3>
            <p>Sosyal medya paketlerimizi inceleyin ve size en uygun çözümü bulun</p>
            <Link to="/sosyal-medya" className="btn-primary-large">Paketleri İncele</Link>
          </div>
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
            <Link to="/talep-formu" className="btn-primary-large">Ücretsiz Danışmanlık</Link>
            <a href="tel:+905376023088" className="btn-outline-large">
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
