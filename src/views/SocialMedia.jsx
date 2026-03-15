'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getAssetSrc } from '../lib/getAssetSrc'

import socialMedia1 from '../assets/socialMedia/IMG_0474.jpeg'
import socialMedia2 from '../assets/socialMedia/IMG_0476.jpeg'
import socialMedia3 from '../assets/socialMedia/IMG_0480.jpeg'
import socialMedia4 from '../assets/socialMedia/IMG_0482.jpeg'
import danismanlik1 from '../assets/danismanlik/IMG_0377.jpeg'
import danismanlik2 from '../assets/danismanlik/IMG_0400.jpeg'

const heroVisuals = [
  { icon: '📱', label: 'Sosyal Medya' },
  { icon: '🌐', label: 'Web Sitesi' },
  { icon: '🎬', label: 'TikTok' },
  { icon: '📸', label: 'Çekim Ekibi' }
]

const services = [
  {
    id: 1,
    title: 'Sosyal Medya Yönetimi',
    description: 'Instagram, Facebook, TikTok ve LinkedIn hesaplarınızın profesyonel yönetimi. İçerik planlaması, paylaşım ve etkileşim yönetimi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
      </svg>
    ),
    features: ['İçerik takvimi', 'Günlük yönetim', 'Topluluk yönetimi', 'Raporlama']
  },
  {
    id: 2,
    title: 'Profesyonel Çekim Hizmetleri',
    description: 'Klinik ortamında profesyonel fotoğraf ve video çekimleri. Before/After çekimleri, tanıtım videoları, ürün fotoğrafları ve sosyal medya içerikleri.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
        <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
      </svg>
    ),
    features: ['Video prodüksiyon', 'Fotoğraf çekimi', 'Before/After', 'Tanıtım videoları']
  },
  {
    id: 3,
    title: 'Google ADS Yönetimi',
    description: 'Hedefli reklam kampanyaları ile potansiyel hastalarınıza ulaşın. Arama, Display ve YouTube reklamları.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
    ),
    features: ['Kampanya yönetimi', 'A/B testleri', 'Dönüşüm takibi', 'ROI optimizasyonu']
  },
  {
    id: 4,
    title: 'Web Sitesi Tasarımı',
    description: 'Modern, mobil uyumlu ve SEO dostu web siteleri. Randevu sistemi, hizmet tanıtımı, galeri, blog ve landing page tasarımı. Kullanıcı dostu arayüz ve hızlı performans.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
      </svg>
    ),
    features: ['Responsive tasarım', 'Randevu sistemi', 'Blog entegrasyonu', 'Bakım & güncelleme']
  },
  {
    id: 5,
    title: 'SEO & Dijital PR',
    description: 'Arama motoru optimizasyonu ve dijital PR çalışmaları. Organik trafik artışı ve marka bilinirliği.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    features: ['SEO optimizasyonu', 'Anahtar kelime analizi', 'Link building', 'İçerik stratejisi']
  },
  {
    id: 6,
    title: 'İçerik Üretimi',
    description: 'Sosyal medya için özgün içerik üretimi. Reels, Story, Feed tasarımları ve animasyonlar.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/>
      </svg>
    ),
    features: ['Grafik tasarım', 'Animasyon', 'Reels & Story', 'Marka kimliği']
  },
  {
    id: 7,
    title: 'Marka Danışmanlığı',
    description: 'Kurumsal kimlik, logo tasarımı ve marka stratejisi. Rakip analizi ve konumlandırma çalışmaları.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
      </svg>
    ),
    features: ['Logo tasarımı', 'Kurumsal kimlik', 'Marka stratejisi', 'Ton ve ses']
  },
  {
    id: 8,
    title: 'Influencer Marketing',
    description: 'Influencer işbirlikleri ve sponsorlu içerik yönetimi. Doğru influencer seçimi ve kampanya takibi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
      </svg>
    ),
    features: ['Influencer seçimi', 'Kampanya yönetimi', 'İçerik onayı', 'Performans analizi']
  },
  {
    id: 9,
    title: 'Yazılı ve Dijital Basın PR Destekleri',
    description: 'Dergi, dijital basın ve outdoor reklam destekleri. Markanızın görünürlüğünü artırın.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/>
      </svg>
    ),
    features: ['Dergi yayınları', 'Dijital basın', 'Outdoor reklamlar', 'PR stratejisi']
  }
]


const portfolio = [
  { id: 1, image: socialMedia1, title: 'Instagram Feed Tasarımı', category: 'Sosyal Medya', client: 'Estetik Klinik' },
  { id: 2, image: socialMedia2, title: 'Reels Video Prodüksiyon', category: 'İçerik Üretimi', client: 'Diş Kliniği' },
  { id: 3, image: socialMedia3, title: 'Story Kampanyası', category: 'Sosyal Medya', client: 'Güzellik Merkezi' },
  { id: 4, image: socialMedia4, title: 'Marka Kimliği', category: 'Branding', client: 'Medikal Spa' },
  { id: 5, image: danismanlik1, title: 'Web Sitesi Tasarımı', category: 'Web', client: 'Poliklinik' },
  { id: 6, image: danismanlik2, title: 'Google ADS Kampanyası', category: 'Reklam', client: 'Dermatoloji' }
]

const instagramMetrics = [
  { label: 'Takipçi Artışı', value: '+156%', icon: '📈' },
  { label: 'Etkileşim Oranı', value: '%4.8', icon: '❤️' },
  { label: 'Erişim', value: '2.4M', icon: '👁️' },
  { label: 'Web Trafiği', value: '+89%', icon: '🌐' }
]

function SocialMedia() {
  const [showForm, setShowForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const categories = ['Tümü', ...new Set(portfolio.map(p => p.category))]
  const filteredPortfolio = activeCategory === 'Tümü' 
    ? portfolio 
    : portfolio.filter(p => p.category === activeCategory)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setShowForm(false)
      setFormSubmitted(false)
    }, 2000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="social-hero-new">
        <div className="social-hero-bg">
          <div className="social-gradient-mesh"></div>
          <div className="floating-icons">
            <span className="float-icon" style={{ '--delay': '0s', '--x': '10%', '--y': '20%' }}>👍</span>
            <span className="float-icon" style={{ '--delay': '0.5s', '--x': '85%', '--y': '12%' }}>❤️</span>
            <span className="float-icon" style={{ '--delay': '1s', '--x': '75%', '--y': '65%' }}>👍</span>
            <span className="float-icon" style={{ '--delay': '1.5s', '--x': '15%', '--y': '70%' }}>❤️</span>
            <span className="float-icon" style={{ '--delay': '2s', '--x': '50%', '--y': '25%' }}>👍</span>
            <span className="float-icon" style={{ '--delay': '2.5s', '--x': '90%', '--y': '40%' }}>❤️</span>
            <span className="float-icon" style={{ '--delay': '3s', '--x': '5%', '--y': '45%' }}>👍</span>
            <span className="float-icon" style={{ '--delay': '3.5s', '--x': '60%', '--y': '80%' }}>❤️</span>
            <span className="float-icon" style={{ '--delay': '4s', '--x': '30%', '--y': '15%' }}>👍</span>
            <span className="float-icon" style={{ '--delay': '4.5s', '--x': '70%', '--y': '35%' }}>❤️</span>
          </div>
        </div>
        <div className="container social-hero-content-new">
          <div className="hero-text-new">
            <span className="hero-badge pulse">Dijital Pazarlama</span>
            <h1>Sosyal Medya<br /><span className="gradient-text-social">Yönetimi</span></h1>
            <p className="hero-subtitle-large">Dijital Varlıklarınızı Güçlendirin</p>
            <p>
              İçerik üretimi, Web sitesi tasarımı, profesyonel çekim, Google ADS ve bir çok dijital destek hizmetleri bir arada.
            </p>
            <div className="hero-actions-new">
              <a href="#services" className="btn-primary-glow">Hizmetleri Keşfet</a>
              <button onClick={() => setShowForm(true)} className="btn-outline">
                İletişime Geç
              </button>
            </div>
          </div>
          <div className="hero-visuals-grid">
            {heroVisuals.map((item, index) => (
              <div key={index} className="hero-visual-card" style={{ '--delay': `${index * 0.15}s` }}>
                <span className="visual-icon">{item.icon}</span>
                <span className="visual-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-scroll">
          <span>Keşfet</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="social-services-new">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Hizmetlerimiz</span>
            <h2>Dijital Pazarlama Çözümleri</h2>
            <p>Kliniğinizin dijital varlığını güçlendirmek için kapsamlı hizmetler</p>
          </div>
          <div className="services-grid-social-new">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="service-card-social-new"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="service-icon-social-new">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features-list">
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

      {/* Instagram Strategy Section */}
      <section className="instagram-section-new">
        <div className="container">
          <div className="instagram-grid-new">
            <div className="instagram-content-new">
              <span className="section-tag">Instagram Stratejisi</span>
              <h2>Etkili Instagram Yönetimi</h2>
              <p>
                Paylaşım planlaması, içerik takvimi ve analitik raporlama ile 
                Instagram hesabınızı profesyonelce yönetiyoruz. Hedefe yönelik 
                içerikler ile takipçi sayınızı ve etkileşiminizi artırın.
              </p>
              <div className="instagram-metrics">
                {instagramMetrics.map((metric, index) => (
                  <div key={index} className="metric-card">
                    <span className="metric-icon">{metric.icon}</span>
                    <span className="metric-value">{metric.value}</span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
              <div className="instagram-features-new">
                <div className="insta-feature-new">
                  <div className="insta-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4>İçerik Takvimi</h4>
                    <p>Aylık planlama ve otomatik paylaşım ile düzenli içerik akışı</p>
                  </div>
                </div>
                <div className="insta-feature-new">
                  <div className="insta-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Performans Analizi</h4>
                    <p>Detaylı metrikler ve haftalık/aylık büyüme raporları</p>
                  </div>
                </div>
                <div className="insta-feature-new">
                  <div className="insta-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Etkileşim Yönetimi</h4>
                    <p>Yorum ve DM yanıtlama ile topluluk yönetimi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="instagram-visual-new">
              <div className="iphone-promax-mockup">
                <div className="iphone-dynamic-island"></div>
                <div className="iphone-screen-promax">
                  <div className="insta-header-promax">
                    <div className="insta-profile-row">
                      <div className="insta-avatar-small">
                        <img src={getAssetSrc(socialMedia1)} alt="Profile" />
                      </div>
                      <span className="insta-username">klinik_demo</span>
                      <span className="insta-verified">✓</span>
                    </div>
                  </div>
                  <div className="insta-post-promax">
                    <img src={getAssetSrc(socialMedia1)} alt="Clinic post" className="insta-post-image" />
                  </div>
                  <div className="insta-actions-promax">
                    <div className="action-left-promax">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
                      </svg>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"/>
                    </svg>
                  </div>
                  <div className="insta-likes-promax">4,592 beğenme</div>
                </div>
              </div>
              <div className="floating-stats-promax">
                <div className="floating-stat">
                  <span className="fs-icon">🔥</span>
                  <span className="fs-value">+340%</span>
                  <span className="fs-label">Etkileşim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section-new">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Örnek Çalışmalar</span>
            <h2>Portfolyo</h2>
            <p>Klinikler için gerçekleştirdiğimiz başarılı projeler</p>
          </div>
          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="portfolio-grid-new">
            {filteredPortfolio.map((item, index) => (
              <div 
                key={item.id} 
                className="portfolio-item-new"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <img src={getAssetSrc(item.image)} alt={item.title} />
                <div className="portfolio-overlay-new">
                  <span className="portfolio-category-new">{item.category}</span>
                  <h4>{item.title}</h4>
                  <span className="portfolio-client">{item.client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section - Coming Soon */}
      <section id="packages" className="social-packages-new">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Paketler</span>
            <h2>Sosyal Medya Paketleri</h2>
            <p>Size özel paket tekliflerimiz için bizimle iletişime geçin</p>
          </div>
          <div className="packages-coming-soon">
            <div className="coming-soon-card">
              <div className="coming-soon-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Paket Detayları Çok Yakında</h3>
              <p>İhtiyaçlarınıza özel paket ve fiyat bilgisi için ekibimizle iletişime geçin. Size en uygun çözümü birlikte belirleyelim.</p>
              <div className="coming-soon-actions">
                <button onClick={() => setShowForm(true)} className="btn-primary">
                  Teklif İste
                </button>
                <a href="tel:+905376023088" className="btn-outline-dark">
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo/Video Section */}
      <section className="photo-section-new">
        <div className="container">
          <div className="photo-grid-new">
            <div className="photo-content-new">
              <span className="section-tag">Profesyonel Çekim</span>
              <h2>Fotoğraf & Video Hizmetleri</h2>
              <p>
                Kliniğiniz için profesyonel fotoğraf ve video çekimleri. 
                Before/After fotoğrafları, tanıtım videoları ve sosyal medya içerikleri.
              </p>
              <ul className="photo-features-new">
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Profesyonel ekipman ve ekip
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Kurgu ve düzenleme dahil
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Sosyal medya optimizasyonu
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  7 gün içinde teslimat
                </li>
              </ul>
              <button onClick={() => setShowForm(true)} className="btn-primary">
                Teklif Al
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
            <div className="photo-gallery-new">
              <div className="gallery-grid">
                <img src={getAssetSrc(socialMedia3)} alt="Profesyonel çekim" className="gallery-large" />
                <img src={getAssetSrc(socialMedia4)} alt="Video çekim" className="gallery-small-1" />
                <img src={getAssetSrc(socialMedia2)} alt="İçerik üretimi" className="gallery-small-2" />
              </div>
              <div className="gallery-badge">
                <span>100+</span>
                <small>Proje Tamamlandı</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="social-cta-section-new">
        <div className="container">
          <div className="social-cta-content-new">
            <h2>Dijital Stratejinizi Belirleyelim</h2>
            <p>
              Ücretsiz sosyal medya analizi için hemen iletişime geçin. 
              Kliniğiniz için en uygun dijital pazarlama stratejisini birlikte oluşturalım.
            </p>
            <div className="social-cta-actions-new">
              <button onClick={() => setShowForm(true)} className="btn-white-large">
                Ücretsiz Analiz İste
              </button>
              <a href="tel:+905376023088" className="btn-outline-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowForm(false)}>
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
                <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <>
                <h3>Teklif Formu</h3>
                <p>Bilgilerinizi bırakın, size özel teklif hazırlayalım.</p>
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
                    <label>İlgilendiğiniz Hizmet</label>
                    <select>
                      <option value="">Seçiniz</option>
                      <option value="social">Sosyal Medya Yönetimi</option>
                      <option value="content">İçerik Üretimi</option>
                      <option value="ads">Google ADS</option>
                      <option value="web">Web Sitesi Tasarımı</option>
                      <option value="branding">Marka Danışmanlığı</option>
                      <option value="photo">Fotoğraf/Video Çekimi</option>
                      <option value="seo">SEO & Dijital PR</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Instagram Hesabı</label>
                    <input type="text" placeholder="@hesabiniz" />
                  </div>
                  <div className="form-group">
                    <label>Mesajınız</label>
                    <textarea rows="3" placeholder="Beklentilerinizi ve ihtiyaçlarınızı belirtin..."></textarea>
                  </div>
                  <div className="form-consent">
                    <label>
                      <input type="checkbox" required />
                      <span><Link href="/kvkk">KVKK</Link>'yı kabul ediyorum</span>
                    </label>
                  </div>
                  <button type="submit" className="btn-submit">Teklif İste</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default SocialMedia
