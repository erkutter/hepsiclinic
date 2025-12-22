import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import crm1 from '../assets/CRM/IMG_0458.jpeg'
import crm2 from '../assets/CRM/IMG_0460.jpeg'
import crm3 from '../assets/CRM/IMG_0464.jpeg'
import crm4 from '../assets/CRM/IMG_0466.jpeg'
import crmMain from '../assets/CRM/LwvlOEQlQA8.png'
import aiCallCenter3 from '../assets/aiCallCenter/IMG_0450.jpeg'

const heroSlides = [
  {
    id: 1,
    title: '2. El Cihazlar',
    subtitle: 'Garantili & Test Edilmiş',
    description: 'Profesyonel bakım ve garanti ile ikinci el medikal cihazlar. Her cihaz detaylı test sürecinden geçer.',
    image: crm1,
    badge: 'En Çok Tercih Edilen'
  },
  {
    id: 2,
    title: 'Sıfır Cihazlar',
    subtitle: 'Orijinal Garantili',
    description: 'En güncel teknolojiye sahip sıfır medikal cihazlar. Yetkili distribütör garantisi ile.',
    image: crm2,
    badge: 'Yeni Gelenler'
  },
  {
    id: 3,
    title: 'Kiralama Modeli',
    subtitle: 'Esnek Ödeme Seçenekleri',
    description: 'Bütçenize uygun kiralama seçenekleri. Kısa ve uzun dönem kiralama imkanı.',
    image: crm3,
    badge: 'Popüler'
  },
  {
    id: 4,
    title: 'Cihaz Sigortası',
    subtitle: 'Tam Koruma Garantisi',
    description: 'Arıza, kaza ve hırsızlık kapsamlı sigorta paketleri ile cihazlarınızı güvence altına alın.',
    image: crm4,
    badge: 'Önerilen'
  }
]

const categories = [
  { id: 1, name: 'Tümü', count: 156 },
  { id: 2, name: 'Lazer Cihazları', count: 42 },
  { id: 3, name: 'Cilt Bakım Cihazları', count: 38 },
  { id: 4, name: 'Ultrason & Kavitasyon', count: 24 },
  { id: 5, name: 'RF & HIFU', count: 28 },
  { id: 6, name: 'Epilasyon Cihazları', count: 18 },
  { id: 7, name: 'Medikal Mobilya', count: 6 }
]

const cities = [
  'Tümü', 'İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Adana'
]

const devices = [
  {
    id: 1,
    name: 'Alexandrite Lazer Cihazı',
    brand: 'Candela GentleLase',
    category: 'Lazer Cihazları',
    price: 180000,
    originalPrice: 280000,
    condition: '2. El - İyi Durumda',
    year: 2021,
    city: 'İstanbul',
    image: crm1,
    featured: true,
    warranty: '6 Ay Garanti',
    specs: ['755nm Dalga Boyu', '18mm Spot Boyutu', 'Soğutma Sistemi']
  },
  {
    id: 2,
    name: 'HIFU Yüz Germe Cihazı',
    brand: 'Ultraformer III',
    category: 'RF & HIFU',
    price: 95000,
    originalPrice: 150000,
    condition: '2. El - Mükemmel',
    year: 2022,
    city: 'Ankara',
    image: crm2,
    featured: true,
    warranty: '1 Yıl Garanti',
    specs: ['4.5mm, 3mm, 1.5mm Kartuş', 'Yüz & Boyun', '10.000 Shot']
  },
  {
    id: 3,
    name: 'IPL Epilasyon Cihazı',
    brand: 'Lumenis M22',
    category: 'Epilasyon Cihazları',
    price: 120000,
    originalPrice: 200000,
    condition: '2. El - İyi Durumda',
    year: 2020,
    city: 'İzmir',
    image: crm3,
    featured: false,
    warranty: '3 Ay Garanti',
    specs: ['IPL + Nd:YAG', 'Tüm Cilt Tipleri', 'ExpertFilter']
  },
  {
    id: 4,
    name: 'Kavitasyon Cihazı',
    brand: 'Cavitation Pro',
    category: 'Ultrason & Kavitasyon',
    price: 45000,
    originalPrice: 75000,
    condition: '2. El - İyi Durumda',
    year: 2021,
    city: 'Antalya',
    image: crm4,
    featured: false,
    warranty: '6 Ay Garanti',
    specs: ['40KHz Ultrason', 'RF Başlık', 'Vakum Sistemi']
  },
  {
    id: 5,
    name: 'Cilt Analiz Cihazı',
    brand: 'Visia Analysis',
    category: 'Cilt Bakım Cihazları',
    price: 65000,
    originalPrice: 100000,
    condition: 'Sıfır',
    year: 2023,
    city: 'İstanbul',
    image: aiCallCenter3,
    featured: true,
    warranty: '2 Yıl Garanti',
    specs: ['UV Analiz', 'Pore Analiz', '3D Görüntüleme']
  },
  {
    id: 6,
    name: 'CO2 Fraksiyonel Lazer',
    brand: 'Deka SmartXide',
    category: 'Lazer Cihazları',
    price: 220000,
    originalPrice: 350000,
    condition: '2. El - Mükemmel',
    year: 2021,
    city: 'İstanbul',
    image: crmMain,
    featured: true,
    warranty: '1 Yıl Garanti',
    specs: ['10.600nm CO2', 'DOT Teknolojisi', 'Stack Modu']
  }
]

const rentalOptions = [
  {
    id: 1,
    title: 'Kısa Dönem Kiralama',
    duration: '1-3 Ay',
    description: 'Etkinlik veya sezonluk ihtiyaçlarınız için ideal çözüm',
    price: '2.500₺',
    priceNote: '/ay\'dan başlayan',
    features: ['Kurulum dahil', 'Teknik destek', 'Esnek süre'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Uzun Dönem Kiralama',
    duration: '6-12 Ay',
    description: 'Maliyet avantajlı, sürekli kullanım için',
    price: '1.800₺',
    priceNote: '/ay\'dan başlayan',
    features: ['%30 indirimli', 'Bakım dahil', 'Yedek parça'],
    popular: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Leasing (Finansal Kiralama)',
    duration: '24-36 Ay',
    description: 'Satın alma opsiyonlu uzun vadeli çözüm',
    price: 'Özel Fiyat',
    priceNote: 'Cihaza göre değişir',
    features: ['Satın alma hakkı', 'Vergi avantajı', 'Sabit taksit'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
      </svg>
    )
  }
]

function SecondHand() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [selectedCity, setSelectedCity] = useState('Tümü')
  const [priceRange, setPriceRange] = useState([0, 350000])
  const [viewMode, setViewMode] = useState('grid')
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('secondhand')

  // Auto-slide for hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const filteredDevices = devices.filter(device => {
    const categoryMatch = selectedCategory === 'Tümü' || device.category === selectedCategory
    const cityMatch = selectedCity === 'Tümü' || device.city === selectedCity
    const priceMatch = device.price >= priceRange[0] && device.price <= priceRange[1]
    const conditionMatch = activeTab === 'secondhand' 
      ? device.condition.includes('2. El') 
      : activeTab === 'new' 
        ? device.condition === 'Sıfır' 
        : true
    return categoryMatch && cityMatch && priceMatch && conditionMatch
  })

  const handleQuoteRequest = (device) => {
    setSelectedDevice(device)
    setShowQuoteModal(true)
  }

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setShowQuoteModal(false)
      setFormSubmitted(false)
      setSelectedDevice(null)
    }, 2000)
  }

  const slide = heroSlides[currentSlide]

  return (
    <>
      {/* Hero Slider Section */}
      <section className="device-hero-slider">
        <div className="device-hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
          <div className="device-hero-overlay"></div>
          <div className="container device-hero-content">
            <div className="device-hero-text">
              <span className="device-hero-badge">{slide.badge}</span>
              <h1 className="device-hero-title">{slide.title}</h1>
              <p className="device-hero-subtitle">{slide.subtitle}</p>
              <p className="device-hero-desc">{slide.description}</p>
              <div className="device-hero-actions">
                <a href="#devices" className="btn-primary">Cihazları Gör</a>
                <Link to="/danismanlik" className="btn-outline">Danışmanlık Al</Link>
              </div>
            </div>
            <div className="device-hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">150+</span>
                <span className="hero-stat-label">Cihaz</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">50+</span>
                <span className="hero-stat-label">Marka</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">100%</span>
                <span className="hero-stat-label">Garanti</span>
              </div>
            </div>
          </div>
        </div>
        <div className="device-slider-nav">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`slider-nav-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <div className="device-slider-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
          />
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="device-tabs-section">
        <div className="container">
          <div className="device-tabs">
            <button 
              className={`device-tab ${activeTab === 'secondhand' ? 'active' : ''}`}
              onClick={() => setActiveTab('secondhand')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21"/>
              </svg>
              2. El Cihazlar
              <span className="tab-count">145</span>
            </button>
            <button 
              className={`device-tab ${activeTab === 'new' ? 'active' : ''}`}
              onClick={() => setActiveTab('new')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
              </svg>
              Sıfır Cihazlar
              <span className="tab-count">11</span>
            </button>
            <button 
              className={`device-tab ${activeTab === 'rental' ? 'active' : ''}`}
              onClick={() => setActiveTab('rental')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Kiralama
            </button>
            <button 
              className={`device-tab ${activeTab === 'insurance' ? 'active' : ''}`}
              onClick={() => setActiveTab('insurance')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
              Sigorta
            </button>
          </div>
        </div>
      </section>

      {/* Content based on active tab */}
      {(activeTab === 'secondhand' || activeTab === 'new') && (
        <>
          {/* Filters Bar */}
          <section className="device-filters-section">
            <div className="container">
              <div className="device-filters-bar">
                <div className="filter-group">
                  <label>Kategori</label>
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name} ({cat.count})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filter-group">
                  <label>Şehir</label>
                  <select 
                    value={selectedCity} 
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="filter-group price-filter">
                  <label>Fiyat Aralığı</label>
                  <div className="price-inputs">
                    <input 
                      type="number" 
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    />
                    <span>-</span>
                    <input 
                      type="number" 
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    />
                  </div>
                </div>
                <div className="view-toggle">
                  <button 
                    className={viewMode === 'grid' ? 'active' : ''} 
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid view"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zM3 14h7v7H3v-7z"/>
                    </svg>
                  </button>
                  <button 
                    className={viewMode === 'list' ? 'active' : ''} 
                    onClick={() => setViewMode('list')}
                    aria-label="List view"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Devices Grid */}
          <section id="devices" className="device-grid-section">
            <div className="container">
              <div className="section-header-inline">
                <h2>{activeTab === 'secondhand' ? '2. El Cihazlar' : 'Sıfır Cihazlar'}</h2>
                <span className="results-count">{filteredDevices.length} cihaz bulundu</span>
              </div>
              <div className={`device-grid ${viewMode}`}>
                {filteredDevices.map((device, index) => (
                  <div 
                    key={device.id} 
                    className={`device-card-new ${device.featured ? 'featured' : ''}`}
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    {device.featured && <span className="featured-badge">Öne Çıkan</span>}
                    <div className="device-image-wrapper">
                      <img src={device.image} alt={device.name} />
                      <span className="condition-badge">{device.condition}</span>
                      <div className="device-quick-view">
                        <button onClick={() => handleQuoteRequest(device)}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          Hızlı Bakış
                        </button>
                      </div>
                    </div>
                    <div className="device-content">
                      <span className="device-brand">{device.brand}</span>
                      <h3>{device.name}</h3>
                      <div className="device-specs">
                        {device.specs.slice(0, 2).map((spec, i) => (
                          <span key={i} className="spec-tag">{spec}</span>
                        ))}
                      </div>
                      <div className="device-meta">
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                          </svg>
                          {device.city}
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
                          </svg>
                          {device.year}
                        </span>
                      </div>
                      <div className="device-warranty">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                        </svg>
                        {device.warranty}
                      </div>
                      <div className="device-price">
                        <span className="old-price">{device.originalPrice.toLocaleString()}₺</span>
                        <span className="current-price">{device.price.toLocaleString()}₺</span>
                        <span className="discount-percent">
                          %{Math.round((1 - device.price / device.originalPrice) * 100)} İndirim
                        </span>
                      </div>
                      <div className="device-actions">
                        <button 
                          className="btn-quote"
                          onClick={() => handleQuoteRequest(device)}
                        >
                          Teklif Al
                        </button>
                        <button className="btn-detail">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredDevices.length === 0 && (
                <div className="no-results">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  <h3>Sonuç Bulunamadı</h3>
                  <p>Filtrelerinizi değiştirerek tekrar arayın</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Rental Section */}
      {activeTab === 'rental' && (
        <section className="rental-section-full">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Kiralama Modeli</span>
              <h2>Esnek Kiralama Seçenekleri</h2>
              <p>Bütçenize ve ihtiyacınıza uygun kiralama modelleri ile cihaz sahibi olmanın kolay yolu</p>
            </div>
            <div className="rental-cards-grid">
              {rentalOptions.map((option, index) => (
                <div 
                  key={option.id} 
                  className={`rental-card-new ${option.popular ? 'popular' : ''}`}
                  style={{ '--delay': `${index * 0.15}s` }}
                >
                  {option.popular && <span className="popular-tag">En Popüler</span>}
                  <div className="rental-icon">{option.icon}</div>
                  <h3>{option.title}</h3>
                  <span className="rental-duration">{option.duration}</span>
                  <p>{option.description}</p>
                  <div className="rental-price">
                    <span className="price-value">{option.price}</span>
                    <span className="price-note">{option.priceNote}</span>
                  </div>
                  <ul className="rental-features">
                    {option.features.map((feature, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/danismanlik" className="btn-rental">
                    Teklif Al
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            {/* Rental Benefits */}
            <div className="rental-benefits">
              <h3>Kiralama Avantajları</h3>
              <div className="benefits-grid-rental">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h4>Düşük Başlangıç Maliyeti</h4>
                  <p>Yüksek ön ödeme yapmadan en son teknolojiye sahip olun</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
                    </svg>
                  </div>
                  <h4>Bakım & Servis Dahil</h4>
                  <p>Periyodik bakım ve teknik servis kiralama süresince ücretsiz</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
                    </svg>
                  </div>
                  <h4>Esnek Yükseltme</h4>
                  <p>Sözleşme sonunda yeni modele geçiş veya satın alma opsiyonu</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                    </svg>
                  </div>
                  <h4>Vergi Avantajı</h4>
                  <p>Kiralama giderleri vergiden düşülebilir</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Insurance Section */}
      {activeTab === 'insurance' && (
        <section className="insurance-section-full">
          <div className="container">
            <div className="insurance-hero-grid">
              <div className="insurance-content">
                <span className="section-tag">Cihaz Sigortası</span>
                <h2>Cihazlarınızı Tam Koruma Altına Alın</h2>
                <p>
                  HepsiClinic güvencesiyle cihazlarınızı ve kliniğinizi koruma altına alın. 
                  Arıza, kaza ve hırsızlık kapsamlı sigorta paketleri.
                </p>
                <div className="insurance-features-list">
                  <div className="insurance-feature">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Arıza & Kaza Güvencesi</h4>
                      <p>Beklenmedik arızalar ve kazalarda tam koruma</p>
                    </div>
                  </div>
                  <div className="insurance-feature">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Hırsızlık Koruması</h4>
                      <p>Çalınma durumunda tam tazminat</p>
                    </div>
                  </div>
                  <div className="insurance-feature">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Yedek Parça Desteği</h4>
                      <p>Orijinal yedek parça garantisi</p>
                    </div>
                  </div>
                  <div className="insurance-feature">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                      </svg>
                    </div>
                    <div>
                      <h4>7/24 Teknik Destek</h4>
                      <p>Acil durumlar için kesintisiz destek hattı</p>
                    </div>
                  </div>
                </div>
                <Link to="/danismanlik" className="btn-primary-large">
                  Sigorta Teklifi Al
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
              </div>
              <div className="insurance-visual">
                <div className="insurance-shield">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                  </svg>
                </div>
                <div className="insurance-stats">
                  <div className="ins-stat">
                    <span className="ins-stat-value">500+</span>
                    <span className="ins-stat-label">Sigortalı Cihaz</span>
                  </div>
                  <div className="ins-stat">
                    <span className="ins-stat-value">%99</span>
                    <span className="ins-stat-label">Hasar Karşılama</span>
                  </div>
                  <div className="ins-stat">
                    <span className="ins-stat-value">24s</span>
                    <span className="ins-stat-label">Ort. Müdahale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance Packages */}
            <div className="insurance-packages">
              <h3>Sigorta Paketleri</h3>
              <div className="packages-grid-insurance">
                <div className="insurance-package">
                  <h4>Temel Paket</h4>
                  <div className="package-price">
                    <span className="price">890₺</span>
                    <span className="period">/ay</span>
                  </div>
                  <ul>
                    <li>Arıza güvencesi</li>
                    <li>Telefon desteği</li>
                    <li>Yıllık bakım</li>
                  </ul>
                  <Link to="/danismanlik" className="btn-outline-dark">Teklif Al</Link>
                </div>
                <div className="insurance-package featured">
                  <span className="package-badge">Önerilen</span>
                  <h4>Kapsamlı Paket</h4>
                  <div className="package-price">
                    <span className="price">1.490₺</span>
                    <span className="period">/ay</span>
                  </div>
                  <ul>
                    <li>Tüm Temel özellikler</li>
                    <li>Hırsızlık koruması</li>
                    <li>7/24 destek</li>
                    <li>Yedek parça dahil</li>
                  </ul>
                  <Link to="/danismanlik" className="btn-primary">Teklif Al</Link>
                </div>
                <div className="insurance-package">
                  <h4>Premium Paket</h4>
                  <div className="package-price">
                    <span className="price">2.290₺</span>
                    <span className="period">/ay</span>
                  </div>
                  <ul>
                    <li>Tüm Kapsamlı özellikler</li>
                    <li>Yerinde servis</li>
                    <li>Yedek cihaz</li>
                    <li>Öncelikli müdahale</li>
                  </ul>
                  <Link to="/danismanlik" className="btn-outline-dark">Teklif Al</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Add Device CTA */}
      <section className="add-device-cta">
        <div className="container add-device-content">
          <div className="add-device-text">
            <h2>Cihazınızı Satmak mı İstiyorsunuz?</h2>
            <p>
              Kliniğinizde kullanmadığınız cihazları platformumuza ekleyin. 
              Profesyonel değerlendirme sonrası ilanınız yayınlanır.
            </p>
            <div className="add-device-features">
              <span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Ücretsiz değerlendirme
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Profesyonel fotoğraf çekimi
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Geniş alıcı ağı
              </span>
            </div>
          </div>
          <Link to="/danismanlik" className="btn-white-large">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4v16m8-8H4"/>
            </svg>
            Cihaz Ekle
          </Link>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="modal-overlay" onClick={() => setShowQuoteModal(false)}>
          <div className="modal-content modal-device" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowQuoteModal(false)}>
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
                <h3>Teklif Talebi</h3>
                {selectedDevice && (
                  <div className="modal-device-info">
                    <img src={selectedDevice.image} alt={selectedDevice.name} />
                    <div className="modal-device-details">
                      <span className="device-brand">{selectedDevice.brand}</span>
                      <strong>{selectedDevice.name}</strong>
                      <span className="device-condition">{selectedDevice.condition}</span>
                      <span className="device-price">{selectedDevice.price.toLocaleString()}₺</span>
                    </div>
                  </div>
                )}
                <form onSubmit={handleQuoteSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Ad Soyad *</label>
                      <input type="text" required />
                    </div>
                    <div className="form-group">
                      <label>Şirket/Klinik Adı</label>
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
                    <label>Mesaj</label>
                    <textarea rows="3" placeholder="Sorularınız veya notlarınız..."></textarea>
                  </div>
                  <div className="form-consent">
                    <label>
                      <input type="checkbox" required />
                      <span><Link to="/kvkk">KVKK</Link>'yı kabul ediyorum</span>
                    </label>
                  </div>
                  <button type="submit" className="btn-submit">Teklif Talep Et</button>
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
