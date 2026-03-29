'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getAssetSrc } from '../lib/getAssetSrc'

// Import images
import aiCallCenter1 from '../assets/aiCallCenter/IMG_0398.jpeg'
import aiCallCenter2 from '../assets/aiCallCenter/IMG_0448.jpeg'
import aiCallCenter3 from '../assets/aiCallCenter/IMG_0450.jpeg'
import whatsappImage from '../assets/apple-whatsapp.png'
import crm1 from '../assets/CRM/IMG_0458.jpeg'
import crm4 from '../assets/CRM/IMG_0466.jpeg'

const chatDemo = [
  { type: 'bot', text: 'Merhaba! Kliniğimize hoş geldiniz. Size nasıl yardımcı olabilirim?' },
  { type: 'user', text: 'Merhaba, randevu almak istiyorum.' },
  { type: 'bot', text: 'Tabii ki! Hangi hizmetimiz için randevu almak istersiniz?' },
  { type: 'user', text: 'Cilt bakımı için müsait günleriniz var mı?' },
  { type: 'bot', text: 'Yarın için müsait saatlerimiz: 14:00, 15:30 ve 17:00. Hangisi size uygun?' },
  { type: 'user', text: '14:00 olsun lütfen.' },
  { type: 'bot', text: 'Mükemmel! Yarın saat 14:00 için randevunuz oluşturuldu. Google takviminize eklendi ve randevu hatırlatması için SMS göndereceğiz. Kliniğimizin konumunu paylaşayım mı?' }
]

const aiFeatures = [
  {
    id: 1,
    title: '7/24 WhatsApp & Instagram Cevap Sistemi',
    description: 'Mesajlarınız asla cevapsız kalmaz. AI asistanımız tüm sorulara anında yanıt verir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Canlı AI Call Center',
    description: 'Gelen çağrıları karşılama, bilgi verme ve uygun departmana yönlendirme.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Google Ajanda Entegrasyonu',
    description: 'Randevularınız otomatik olarak Google takviminize eklenir ve senkronize edilir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'SMS/WhatsApp Hatırlatma Sistemi',
    description: 'Randevu hatırlatmaları ve önemli bildirimler otomatik olarak gönderilir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Klinik Konum Yönlendirme',
    description: 'Hastalarınıza otomatik konum ve yol tarifi paylaşımı.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Canlı Destek',
    description: 'İhtiyaç duyulduğunda canlı destek ekibine anında bağlantı.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
      </svg>
    )
  }
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

function AiCrm() {
  const [visibleMessages, setVisibleMessages] = useState(1)
  const [isTyping, setIsTyping] = useState(false)
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
              <span className="badge badge-ai">AI Teknolojisi</span>
              <span className="badge badge-crm">CRM Sistemi</span>
            </div>
            <h1>
              AI HİZMETLERİ & CRM<br />
              <span className="gradient-text">Akıllı Klinik Yönetimi</span>
            </h1>
            <p className="ai-hero-desc">
              WhatsApp Chat Bot, AI Call Center ve kapsamlı CRM entegrasyonu ile kliniğinizin iletişimini
              7/24 otomatikleştirin. Hasta yönetimi, randevu takibi ve ciro analizleri tek platformda.
            </p>
            <div className="ai-hero-features">
              <div className="mini-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                WhatsApp Chat Bot
              </div>
              <div className="mini-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                AI Call Center
              </div>
              <div className="mini-feature">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                CRM Entegrasyonu
              </div>
            </div>
            <div className="ai-hero-actions">
              <button onClick={startDemo} className="btn-primary-glow">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Ücretsiz Demo
              </button>
              <Link href="/talep-formu" className="btn-outline-dark">Teklif Al</Link>
            </div>
          </div>
          <div className="ai-hero-visual">
            <div className="whatsapp-image-wrapper">
              <img src={getAssetSrc(whatsappImage)} alt="WhatsApp AI Assistant Demo" className="whatsapp-demo-image" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="ai-features-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Özellikler</span>
              <h2>Yapay Zeka Destekli Klinik Yönetimi</h2>
              <p>WhatsApp Chat Bot ve AI Call Center entegrasyonu ile kliniğinizin iletişimini ve hasta yönetimini tamamen otomatikleştirin. 7/24 aktif asistan ile hiçbir mesajınız cevapsız kalmasın. Google ajandanızda randevularınızı hızlıca görebilirsiniz. Yakında kendi CRM sistemimiz sizlerle olacak.</p>
            </div>
            <div className="ai-features-grid">
              {aiFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  className="ai-feature-card"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="ai-feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* CRM Section */}
      <section className="crm-coming-soon" id="crm">
          <div className="container">
            <div className="coming-soon-content">
              <div className="coming-soon-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="badge-coming-soon">Çok Yakında</span>
              <h2>CRM Entegrasyonu - Hasta Yönetiminde Yeni Dönem</h2>
              <p>
                Hasta kartları, randevu yönetimi, depo stok senkronizasyonu, before & after fotoğrafları,
                hatırlatma sistemi ve ciro takibi ile kliniğinizi profesyonelce yönetebileceğiniz
                kapsamlı CRM sistemimiz üzerinde aktif olarak çalışıyoruz.
              </p>
              <div className="crm-timeline">
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div className="timeline-content">
                    <h4>AI Hizmetleri</h4>
                    <p>WhatsApp Bot & Call Center - Aktif ✓</p>
                  </div>
                </div>
                <div className="timeline-item active">
                  <div className="timeline-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="timeline-content">
                    <h4>CRM Entegrasyonu</h4>
                    <p>Geliştirme Aşamasında - Çok Yakında ⏰</p>
                  </div>
                </div>
              </div>
              <div className="crm-preview-grid">
                {crmModules.map((module, index) => (
                  <div key={module.id} className="crm-preview-card" style={{ '--delay': `${index * 0.1}s` }}>
                    <div className="crm-preview-icon">{module.icon}</div>
                    <h4>{module.title}</h4>
                    <p>{module.description}</p>
                  </div>
                ))}
              </div>
              <div className="crm-importance-note">
                <div className="importance-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                  </svg>
                </div>
                <div>
                  <h4>⏰ CRM Lansmanı Yaklaşıyor!</h4>
                  <p>
                    CRM entegrasyonumuz aktif geliştirme aşamasındadır. Erken erişim fırsatlarından
                    yararlanmak ve lansmanı kaçırmamak için bizimle iletişime geçin. İlk kullanıcılarımıza
                    özel avantajlar sunacağız.
                  </p>
                </div>
              </div>
              <div className="crm-cta-buttons">
                <Link href="/talep-formu" className="btn-primary-large">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                  </svg>
                  Lansman Bilgisi Al
                </Link>
                <a href="tel:+905376023088" className="btn-outline-dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </section>

      {/* Live Demo Section */}
      <section className="ai-demo-section">
        <div className="container">
          <div className="demo-grid">
            <div className="demo-content">
              <span className="section-tag">Canlı Demo</span>
              <h2>AI Asistanınızı Deneyin</h2>
              <p>
                Asistanımızın nasıl çalıştığını görmek için demo'yu başlatın. Gerçek zamanlı
                yanıtlar, randevu oluşturma ve bilgi paylaşımını deneyimleyin.
              </p>
              <div className="demo-features">
                <div className="demo-feature">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Anında yanıt (3-5 saniye)</span>
                </div>
                <div className="demo-feature">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Doğal dil işleme</span>
                </div>
                <div className="demo-feature">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Otomatik randevu oluşturma</span>
                </div>
              </div>
            </div>
            <div className="demo-phone">
              <div className="phone-frame-demo">
                <div className="phone-notch"></div>
                <div className="phone-screen-demo">
                  <div className="chat-header-demo">
                    <div className="chat-avatar-demo">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                      </svg>
                    </div>
                    <div className="chat-info-demo">
                      <span className="chat-name-demo">HepsiClinic AI</span>
                      <span className="chat-status-demo">
                        <span className="status-dot-demo"></span>
                        Çevrimiçi
                      </span>
                    </div>
                  </div>
                  <div className="chat-messages-demo">
                    {!demoStarted ? (
                      <div className="chat-start-demo">
                        <p>Demo'yu başlatmak için butona tıklayın</p>
                        <button onClick={startDemo} className="btn-start-demo">
                          Başlat
                        </button>
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
                </div>
              </div>
              <div className="dashboard-preview-demo">
                <h4>Canlı Dashboard</h4>
                <div className="stat-row-demo">
                  <span>Bugünkü Randevular</span>
                  <strong>24</strong>
                </div>
                <div className="stat-row-demo">
                  <span>Aktif Görüşmeler</span>
                  <strong>8</strong>
                </div>
                <div className="stat-row-demo">
                  <span>Yanıt Süresi</span>
                  <strong>3-5 sn</strong>
                </div>
              </div>
            </div>
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
              <p className="technical-intro">
                Enterprise seviyesinde güvenlik ve performans standartlarıyla tasarlanmış,
                ölçeklenebilir ve güvenilir teknoloji altyapısı.
              </p>
              <div className="technical-items-enhanced">
                <div className="technical-item-enhanced">
                  <div className="tech-icon-enhanced">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>API Endpoint Hazırlığı</h4>
                    <p>RESTful API mimarisi ile mevcut sistemlerinize sorunsuz entegrasyon. JSON formatında veri alışverişi, webhook desteği ve kapsamlı API dokümantasyonu.</p>
                    <ul className="tech-features">
                      <li>REST & GraphQL desteği</li>
                      <li>OAuth 2.0 kimlik doğrulama</li>
                      <li>Rate limiting & caching</li>
                    </ul>
                  </div>
                </div>
                <div className="technical-item-enhanced">
                  <div className="tech-icon-enhanced">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>CRM Veri Akışı</h4>
                    <p>Hasta bilgileri, randevu geçmişi ve iletişim kayıtları anlık olarak senkronize edilir. Çift yönlü veri akışı ile tutarlılık garanti altında.</p>
                    <ul className="tech-features">
                      <li>Gerçek zamanlı senkronizasyon</li>
                      <li>Otomatik veri yedekleme</li>
                      <li>Sadakat Programı</li>
                    </ul>
                  </div>
                </div>
                <div className="technical-item-enhanced">
                  <div className="tech-icon-enhanced">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>WhatsApp Business API</h4>
                    <p>Meta onaylı resmi WhatsApp Business API entegrasyonu. Yeşil tik onaylı işletme profili, şablon mesajlar ve otomatik yanıt sistemi.</p>
                    <ul className="tech-features">
                      <li>Resmi işletme hesabı</li>
                      <li>Sınırsız mesaj kapasitesi</li>
                      <li>Medya & dosya paylaşımı</li>
                    </ul>
                  </div>
                </div>
                <div className="technical-item-enhanced">
                  <div className="tech-icon-enhanced">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>KVKK & Güvenlik</h4>
                    <p>6698 sayılı KVKK kanununa tam uyumluluk. Hasta verileri Türkiye'deki sunucularda, uçtan uca şifreleme ile korunur.</p>
                    <ul className="tech-features">
                      <li>SSL/TLS şifreleme</li>
                      <li>GDPR & KVKK uyumlu</li>
                      <li>Düzenli güvenlik denetimleri</li>
                    </ul>
                  </div>
                </div>
                <div className="technical-item-enhanced">
                  <div className="tech-icon-enhanced">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>Google Calendar Entegrasyonu</h4>
                    <p>Randevular otomatik olarak Google Takvim'e eklenir. Çakışma kontrolü, hatırlatıcılar ve takım takvimi senkronizasyonu.</p>
                    <ul className="tech-features">
                      <li>Çift yönlü senkronizasyon</li>
                      <li>Otomatik hatırlatıcılar</li>
                      <li>Takım takvimi desteği</li>
                    </ul>
                  </div>
                </div>
                <div className="technical-item-enhanced">
                  <div className="tech-icon-enhanced">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>Analitik & Raporlama</h4>
                    <p>Detaylı performans metrikleri ve özelleştirilebilir raporlar. Mesaj istatistikleri, randevu dönüşüm oranları ve müşteri memnuniyeti analizi.</p>
                    <ul className="tech-features">
                      <li>Gerçek zamanlı dashboard</li>
                      <li>Özel rapor oluşturma</li>
                      <li>Excel/PDF dışa aktarım</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="technical-visual-enhanced">
              <img src={getAssetSrc(crm4)} alt="Technical Integration" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="ai-gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Görsel Galeri</span>
            <h2>AI Hizmetlerimizden Kareler</h2>
          </div>
          <div className="ai-gallery-grid">
            <div className="ai-gallery-item">
              <img src={getAssetSrc(aiCallCenter1)} alt="AI Call Center" />
            </div>
            <div className="ai-gallery-item">
              <img src={getAssetSrc(aiCallCenter2)} alt="WhatsApp Bot" />
            </div>
            <div className="ai-gallery-item">
              <img src={getAssetSrc(aiCallCenter3)} alt="Dashboard" />
            </div>
            <div className="ai-gallery-item">
              <img src={getAssetSrc(crm1)} alt="CRM Preview" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="ai-video-section">
        <div className="container">
          <div className="video-placeholder-wrapper">
            <div className="video-placeholder">
              <div className="video-placeholder-content">
                <div className="video-play-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3>Tanıtım Videosu</h3>
                <p>Çok Yakında</p>
              </div>
            </div>
            <div className="video-info">
              <h3>AI Hizmetlerimizi Keşfedin</h3>
              <p>
                Yapay zeka destekli klinik yönetim sistemimizin nasıl çalıştığını, 
                WhatsApp Chat Bot ve AI Call Center özelliklerimizi detaylı olarak 
                anlatan tanıtım videomuz çok yakında sizlerle buluşacak.
              </p>
              <div className="video-features">
                <div className="video-feature">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Canlı demo gösterimi</span>
                </div>
                <div className="video-feature">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Kurulum ve entegrasyon rehberi</span>
                </div>
                <div className="video-feature">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Müşteri başarı hikayeleri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta">
        <div className="container ai-cta-content">
          <h2>Demo Randevusu Alın</h2>
          <p>
            Uzman ekibimizle ücretsiz bir demo görüşmesi yapın ve
            AI hizmetlerinin kliniğinize nasıl değer katabileceğini keşfedin.
          </p>
          <div className="ai-cta-actions">
            <Link href="/talep-formu" className="btn-white-large">Ücretsiz Demo İste</Link>
            <a href="tel:+905376023088" className="btn-outline-white">
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
