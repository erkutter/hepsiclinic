import { Link } from 'react-router-dom'
import { useState } from 'react'

// Import images
import danismanlik1 from '../assets/danismanlik/IMG_0377.jpeg'
import danismanlik2 from '../assets/danismanlik/IMG_0400.jpeg'
import danismanlik3 from '../assets/danismanlik/01cdfa31d3c63618.png'
import danismanlik4 from '../assets/danismanlik/c4efd87a00a568bf.png'

const serviceAreas = [
  {
    id: 1,
    title: 'Klinik Kurulum ve Yapılandırma',
    description: 'Yeni açılan ya da yeniden yapılandırılacak klinikler için:',
    features: [
      'Lokasyon ve konsept değerlendirmesi',
      'Fiziki alan planlaması',
      'Mimari Destek',
      'Cihaz ve hizmet kombinasyonu',
      'Operasyonel kurulum desteği'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.75m-.75 3h.75m-.75 3h.75m-9 1.5h.75"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Operasyon ve Süreç Yönetimi',
    description: '',
    features: [
      'Randevu ve hasta akışının sadeleştirilmesi',
      'Bekleme sürelerinin azaltılması',
      'İş akışlarının netleştirilmesi',
      'Standart operasyon prosedürlerinin (KPI) oluşturulması'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Finansal Planlama ve Kârlılık',
    description: '',
    features: [
      'Gelir–gider dengesi analizi',
      'Hizmet bazlı kârlılık tespiti',
      'Fiyatlandırma ve hizmet stratejileri',
      'Büyüme ve yatırım planlaması'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'İnsan Kaynakları ve Ekip Yönetimi',
    description: '',
    features: [
      'Doğru pozisyon – doğru personel yapısı',
      'Performans ve görev tanımlarının netleştirilmesi',
      'Eğitim ve adaptasyon süreçleri',
      'Ekip içi verimlilik artışı'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Marka, Pazarlama ve Konumlandırma',
    description: '',
    features: [
      'Klinik marka dili ve duruşu',
      'Sosyal medya ve dijital görünürlük',
      'Doğru hedef kitleye ulaşma',
      'Hasta kazanım maliyetlerinin düşürülmesi'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Dijital Dönüşüm ve Teknoloji Entegrasyonu',
    description: '',
    features: [
      'Randevu ve hasta kayıt sistemleri',
      'WhatsApp chatbot ve AI destekli çözümler',
      'CRM altyapısına geçiş hazırlıkları',
      'Veri güvenliği ve KVKK uyumluluğu'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
      </svg>
    )
  }
]

const goals = [
  'Kliniğin iş yükünü azaltmak',
  'Doğru hizmetleri doğru hastayla buluşturmak',
  'Gereksiz maliyetleri görünür kılmak',
  'Teknolojiyi gerçekten fayda sağlayacak şekilde entegre etmek'
]

const approachSteps = [
  'Kliniğin mevcut durumunu 360° analiz ederiz',
  'Kör noktaları ve görünmeyen kayıpları tespit ederiz',
  'Klinik ölçeğine uygun, uygulanabilir bir yol haritası çıkarırız',
  'Süreci sadece planlamaz, uygulama aşamasında da yanında oluruz'
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
          <h1>Klinik Kurmak, Büyütmek ve Yönetmek İçin<br /><span>İş Ortağınız</span></h1>
          <p className="hero-subtitle-large">Kliniklerin bugünü için çözüm, yarını için sistem kurarız.</p>
          <div className="hero-actions">
            <Link to="/talep-formu" className="btn-primary">Danışmanlık Al</Link>
            <a href="tel:+905376023088" className="btn-outline">İletişime Geç</a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Aşağı Kaydır</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Danışmanlık Modülü Section */}
      <section id="services" className="consulting-module">
        <div className="container">
          <div className="module-grid">
            <div className="module-content">
              <span className="section-tag">Danışmanlık Modülü</span>
              <h2>İşletmelerde Uçtan Uca Süreç Yönetimi</h2>
              <p className="module-intro">
                HepsiClinic Danışmanlık, kliniklere dışarıdan bakan klasik bir denetim modeli değildir.
                Biz; sağlık, estetik ve güzellik alanında faaliyet gösteren kliniklerin operasyonel yapısını, 
                finansal dengesini, hasta deneyimini ve dijital altyapısını birlikte ele alarak, 
                ölçülebilir ve sürdürülebilir bir büyüme modeli kurarız.
              </p>
              
              <div className="goals-section">
                <h3>Hedefimiz;</h3>
                <ul className="goals-list">
                  {goals.map((goal, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="module-outro">
                HepsiClinic'te danışmanlık, rapor yazıp kenara çekilmek değil; kliniğin işleyişine 
                entegre olan, sonuç üreten bir ortaklıktır.
              </p>
            </div>
            <div className="module-visual">
              <img src={danismanlik2} alt="İş Ortağı" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="service-areas-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Hizmet Alanları</span>
            <h2>HepsiClinic Danışmanlık Hizmet Alanları</h2>
          </div>
          <div className="service-areas-grid">
            {serviceAreas.map((service, index) => (
              <div 
                key={service.id} 
                className="service-area-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="service-area-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                {service.description && <p className="service-area-desc">{service.description}</p>}
                <ul className="service-area-features">
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

      {/* Process Section - Nasıl Çalışıyoruz */}
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

      {/* Approach Section - Kapsamlı Danışmanlık */}
      <section className="consulting-approach-full">
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">Kapsamlı Danışmanlık</span>
            <h2>HepsiClinic Danışmanlık Yaklaşımı</h2>
          </div>
          
          <div className="approach-content-full">
            <p className="approach-lead">
              Birçok klinik "işler yürüyor" düşüncesiyle ilerler.<br />
              Ancak yürüyen bir yapı ile kontrollü büyüyen ve kârlılığı artan bir yapı arasında ciddi fark vardır.
            </p>
            
            <div className="approach-steps-full">
              <h3>HepsiClinic olarak biz:</h3>
              <ul className="steps-list-full">
                {approachSteps.map((step, index) => (
                  <li key={index}>
                    <span className="step-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <p className="approach-conclusion">
              Danışmanlığı; kliniğin işletme sağlığını koruyan, riskleri azaltan ve 
              geleceği planlayan stratejik bir sistem olarak ele alırız.
            </p>
          </div>

          {/* Animated Photo Gallery */}
          <div className="approach-gallery">
            <div className="gallery-track">
              <div className="gallery-slide">
                <img src={danismanlik1} alt="Danışmanlık" />
              </div>
              <div className="gallery-slide">
                <img src={danismanlik2} alt="Klinik Danışmanlığı" />
              </div>
              <div className="gallery-slide">
                <img src={danismanlik3} alt="İş Ortaklığı" />
              </div>
              <div className="gallery-slide">
                <img src={danismanlik4} alt="Profesyonel Destek" />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="gallery-slide">
                <img src={danismanlik1} alt="Danışmanlık" />
              </div>
              <div className="gallery-slide">
                <img src={danismanlik2} alt="Klinik Danışmanlığı" />
              </div>
              <div className="gallery-slide">
                <img src={danismanlik3} alt="İş Ortaklığı" />
              </div>
              <div className="gallery-slide">
                <img src={danismanlik4} alt="Profesyonel Destek" />
              </div>
            </div>
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
                  className={`form-tab ${activeForm === 'ai' ? 'active' : ''}`}
                  onClick={() => setActiveForm('ai')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
                  </svg>
                  Ai Hizmetleri
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
                  Dijital & Sosyal Medya
                </button>
              </div>
              <div className="form-contact-info">
                <h4>Hemen Arayın</h4>
                <a href="tel:+905376023088">0537 602 30 88</a>
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
                    {activeForm === 'ai' && 'Ai Hizmetleri Talebi'}
                    {activeForm === 'training' && 'Klinik İçi Eğitim Talebi'}
                    {activeForm === 'social' && 'Dijital & Sosyal Medya Talebi'}
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
                            <option value="mimari">Mimari Tasarım</option>
                          </>
                        )}
                        {activeForm === 'ai' && (
                          <>
                            <option value="whatsapp-chatbot">7/24 WhatsApp ChatBot</option>
                            <option value="cagri-merkezi">7/24 Canlı Çağrı Merkezi</option>
                            <option value="instagram-chatbot">7/24 Instagram ChatBot</option>
                            <option value="crm-entegrasyon">CRM Entegrasyonu</option>
                          </>
                        )}
                        {activeForm === 'training' && (
                          <>
                            <option value="personel-egitim">Personel Eğitimi</option>
                            <option value="satis-egitim">Satış Teknikleri Eğitimi</option>
                            <option value="musteri-iliskileri">Müşteri İlişkileri Eğitimi</option>
                            <option value="liderlik">Liderlik Eğitimi</option>
                            <option value="bakim-egitim">Bakım Eğitimleri</option>
                          </>
                        )}
                        {activeForm === 'social' && (
                          <>
                            <option value="sosyal-medya">Sosyal Medya Yönetimi</option>
                            <option value="icerik-uretim">İçerik Üretimi</option>
                            <option value="marka-kimlik">Marka Kimlik Çalışması</option>
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
          <a href="tel:+905376023088" className="btn-white-large">
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
