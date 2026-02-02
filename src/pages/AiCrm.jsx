import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Import images
import aiCallCenter1 from '../assets/aiCallCenter/IMG_0398.jpeg'
import aiCallCenter2 from '../assets/aiCallCenter/IMG_0448.jpeg'
import aiCallCenter3 from '../assets/aiCallCenter/IMG_0450.jpeg'
import crm1 from '../assets/CRM/IMG_0458.jpeg'
import crm2 from '../assets/CRM/IMG_0460.jpeg'
import crm3 from '../assets/CRM/IMG_0464.jpeg'
import crm4 from '../assets/CRM/IMG_0466.jpeg'

const chatDemo = [
  { type: 'bot', text: 'Merhaba! HepsiClinic\'e hoş geldiniz. Size nasıl yardımcı olabilirim?' },
  { type: 'user', text: 'Botox fiyatları hakkında bilgi alabilir miyim?' },
  { type: 'bot', text: 'Tabii ki! Botox uygulamalarımız bölgeye göre 2.500₺\'den başlamaktadır. Tam yüz uygulaması için 4.500₺\'dir. Randevu almak ister misiniz?' },
  { type: 'user', text: 'Evet, yarın öğleden sonra müsait miyim?' },
  { type: 'bot', text: 'Yarın için müsait saatlerimiz: 14:00, 15:30 ve 17:00. Hangisi size uygun?' },
  { type: 'user', text: '14:00 olsun lütfen.' },
  { type: 'bot', text: 'Harika! 14:00 için randevunuz oluşturuldu. Lütfen ad soyad ve telefon numaranızı paylaşır mısınız?' }
]

const crmModules = [
  {
    id: 1,
    title: 'Hasta / Müşteri Kartları',
    description: 'Geçmiş işlemler, notlar, fiyatlandırma ve iletişim bilgileri',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Randevu Yönetimi',
    description: 'Ajanda takibi, otomatik hatırlatmalar ve müsaitlik yönetimi',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Depo Stok Senkronizasyonu',
    description: 'Gerçek zamanlı stok takibi ve otomatik sipariş uyarıları',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Before & After Fotoğrafları',
    description: 'Tedavi öncesi ve sonrası fotoğraf yükleme ve karşılaştırma',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Hatırlatma Sistemi',
    description: 'SMS ve WhatsApp ile otomatik randevu hatırlatmaları',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Ciro Takibi',
    description: 'Tarih aralıklı gelir raporları ve finansal analizler',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
    )
  }
]

const packages = [
  {
    id: 1,
    name: 'Başlangıç',
    price: '2.990',
    period: '/ay',
    features: [
      'AI Çağrı Karşılama',
      'Temel CRM',
      '500 Çağrı/ay',
      'WhatsApp Entegrasyonu',
      'Email Desteği'
    ],
    popular: false
  },
  {
    id: 2,
    name: 'Profesyonel',
    price: '5.990',
    period: '/ay',
    features: [
      'Tüm Başlangıç Özellikleri',
      'Gelişmiş CRM Modülleri',
      '2000 Çağrı/ay',
      'SMS Hatırlatmaları',
      'Before/After Modülü',
      '7/24 Destek'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Kurumsal',
    price: 'Özel',
    period: 'Fiyat',
    features: [
      'Tüm Profesyonel Özellikleri',
      'Sınırsız Çağrı',
      'Özel Entegrasyonlar',
      'Dedicated Account Manager',
      'API Erişimi',
      'SLA Garantisi'
    ],
    popular: false
  }
]

function AiCrm() {
  const [visibleMessages, setVisibleMessages] = useState(1)
  const [isTyping, setIsTyping] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [demoStarted, setDemoStarted] = useState(false)

  const startDemo = () => {
    setDemoStarted(true)
    setVisibleMessages(1)
  }

  useEffect(() => {
    if (demoStarted && visibleMessages < chatDemo.length) {
      const timer = setTimeout(() => {
        if (chatDemo[visibleMessages].type === 'bot') {
          setIsTyping(true)
          setTimeout(() => {
            setIsTyping(false)
            setVisibleMessages(prev => prev + 1)
          }, 1500)
        } else {
          setVisibleMessages(prev => prev + 1)
        }
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [visibleMessages, demoStarted])

  return (
    <>
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="ai-hero-bg">
          <div className="ai-gradient-orb orb-1"></div>
          <div className="ai-gradient-orb orb-2"></div>
          <div className="ai-gradient-orb orb-3"></div>
        </div>
        <div className="container ai-hero-grid">
          <div className="ai-hero-content">
            <div className="badge-group">
              <span className="badge badge-beta">Beta Sürüm</span>
              <span className="badge badge-new">Çok Yakında</span>
            </div>
            <h1>
              Yapay Zeka Destekli<br />
              <span className="gradient-text">Klinik Asistanı</span>
            </h1>
            <p className="ai-hero-desc">
              AI Call Center ve CRM entegrasyonu ile kliniğinizin iletişimini 
              7/24 otomatikleştirin. Çağrı karşılama, randevu yönetimi, 
              otomatik bilgi iletimi ve satış desteği tek platformda.
            </p>
            <div className="ai-hero-features">
              <div className="mini-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                WhatsApp Otomasyonu
              </div>
              <div className="mini-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                CRM Entegrasyonu
              </div>
              <div className="mini-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Randevu Akışı
              </div>
            </div>
            <div className="ai-hero-actions">
              <button onClick={startDemo} className="btn-primary-glow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Asistanı Deneyin
              </button>
              <Link to="#pricing" className="btn-outline-light">Paketleri Gör</Link>
            </div>
          </div>
          <div className="ai-hero-visual">
            <div className="phone-3d">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="chat-header">
                    <div className="chat-avatar">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                      </svg>
                    </div>
                    <div className="chat-info">
                      <span className="chat-name">HepsiClinic AI</span>
                      <span className="chat-status">
                        <span className="status-dot"></span>
                        Çevrimiçi
                      </span>
                    </div>
                  </div>
                  <div className="chat-messages">
                    {!demoStarted ? (
                      <div className="chat-start">
                        <p>Demo'yu başlatmak için "Asistanı Deneyin" butonuna tıklayın</p>
                      </div>
                    ) : (
                      <>
                        {chatDemo.slice(0, visibleMessages).map((msg, index) => (
                          <div key={index} className={`chat-message ${msg.type}`}>
                            <span>{msg.text}</span>
                          </div>
                        ))}
                        {isTyping && (
                          <div className="chat-message bot">
                            <span className="typing-indicator">
                              <span></span><span></span><span></span>
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="chat-input">
                    <input type="text" placeholder="Mesaj yazın..." disabled />
                    <button disabled>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="ai-features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Özellikler</span>
            <h2>AI Call Center & CRM Özellikleri</h2>
          </div>
          <div className="feature-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Genel Bakış
            </button>
            <button 
              className={`tab-btn ${activeTab === 'callcenter' ? 'active' : ''}`}
              onClick={() => setActiveTab('callcenter')}
            >
              AI Call Center
            </button>
            <button 
              className={`tab-btn ${activeTab === 'crm' ? 'active' : ''}`}
              onClick={() => setActiveTab('crm')}
            >
              CRM Modülleri
            </button>
            <button 
              className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="tab-panel overview-panel">
                <div className="overview-grid">
                  <div className="overview-text">
                    <h3>Klinik Yönetiminde Yeni Dönem</h3>
                    <p>
                      HepsiClinic AI, WhatsApp ve telefon üzerinden hasta sorularını 
                      yanıtlar, randevu oluşturur ve CRM'inize anında işler. 7/24 aktif 
                      sohbetler, otomatik takipler ve ölçülebilir müşteri deneyimi ile 
                      kliniğinizin iletişimini tek panelde yönetin.
                    </p>
                    <ul className="overview-list">
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Sesli konuşma → Yazılı metin dönüşümü
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Soru-cevap örnekleri (botox, cilt bakımı, cihaz bilgisi)
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Otomatik randevu önerileri
                      </li>
                      <li>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        Web formları entegrasyonu
                      </li>
                    </ul>
                  </div>
                  <div className="overview-image">
                    <img src={aiCallCenter1} alt="AI Call Center" />
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'callcenter' && (
              <div className="tab-panel callcenter-panel">
                <div className="callcenter-grid">
                  <div className="callcenter-card">
                    <div className="callcenter-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                      </svg>
                    </div>
                    <h4>Gelen Çağrı Listesi</h4>
                    <p>Tüm gelen çağrıları anlık takip edin</p>
                  </div>
                  <div className="callcenter-card">
                    <div className="callcenter-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                      </svg>
                    </div>
                    <h4>Arama Transkriptleri</h4>
                    <p>Tüm konuşmalar yazıya dönüştürülür</p>
                  </div>
                  <div className="callcenter-card">
                    <div className="callcenter-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
                      </svg>
                    </div>
                    <h4>Otomatik Randevu</h4>
                    <p>AI müsaitliğe göre randevu önerir</p>
                  </div>
                  <div className="callcenter-card">
                    <div className="callcenter-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                      </svg>
                    </div>
                    <h4>Akıllı Asistan</h4>
                    <p>Botox, cilt bakımı, fiyat bilgisi</p>
                  </div>
                </div>
                <div className="callcenter-image">
                  <img src={aiCallCenter2} alt="AI Call Center Dashboard" />
                </div>
              </div>
            )}
            {activeTab === 'crm' && (
              <div className="tab-panel crm-panel">
                <div className="crm-modules-grid">
                  {crmModules.map((module) => (
                    <div key={module.id} className="crm-module-card">
                      <div className="module-icon">{module.icon}</div>
                      <h4>{module.title}</h4>
                      <p>{module.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'dashboard' && (
              <div className="tab-panel dashboard-panel">
                <div className="dashboard-preview-grid">
                  <div className="dashboard-image-large">
                    <img src={crm1} alt="Dashboard Preview" />
                    <span className="image-label">Klinik Dashboard</span>
                  </div>
                  <div className="dashboard-images-small">
                    <div className="dashboard-image-small">
                      <img src={crm2} alt="Müşteri Kartı" />
                      <span className="image-label">Müşteri Kartları</span>
                    </div>
                    <div className="dashboard-image-small">
                      <img src={crm3} alt="Raporlama" />
                      <span className="image-label">Raporlama</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="ai-technical">
        <div className="container">
          <div className="technical-grid">
            <div className="technical-content">
              <span className="section-tag">Teknik Entegrasyonlar</span>
              <h2>Güçlü Altyapı</h2>
              <div className="technical-items">
                <div className="technical-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>API Endpoint Hazırlığı</h4>
                    <p>RESTful API ile kolay entegrasyon</p>
                  </div>
                </div>
                <div className="technical-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>CRM Veri Akışı</h4>
                    <p>Gerçek zamanlı veri senkronizasyonu</p>
                  </div>
                </div>
                <div className="technical-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>WhatsApp Business API</h4>
                    <p>Resmi WhatsApp entegrasyonu</p>
                  </div>
                </div>
                <div className="technical-item">
                  <div className="tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>KVKK Uyumlu</h4>
                    <p>Veri güvenliği ve gizlilik</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="technical-visual">
              <img src={crm4} alt="Technical Integration" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="ai-pricing">
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">Paketler</span>
            <h2>Size Uygun Paketi Seçin</h2>
            <p>Her büyüklükteki klinik için esnek çözümler</p>
          </div>
          <div className="pricing-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`pricing-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <span className="popular-badge">En Popüler</span>}
                <h3>{pkg.name}</h3>
                <div className="price">
                  <span className="currency">₺</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="period">{pkg.period}</span>
                </div>
                <ul className="pricing-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/iletisim" className={`btn-pricing ${pkg.popular ? 'btn-primary' : 'btn-outline-dark'}`}>
                  {pkg.id === 3 ? 'Teklif Al' : 'Başla'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta">
        <div className="container ai-cta-content">
          <h2>Demo Randevusu Alın</h2>
          <p>
            Uzman ekibimizle ücretsiz bir demo görüşmesi yapın ve 
            AI Call Center & CRM'in kliniğinize nasıl değer katabileceğini keşfedin.
          </p>
          <div className="ai-cta-actions">
            <Link to="/danismanlik" className="btn-white-large">Demo İste</Link>
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

export default AiCrm
