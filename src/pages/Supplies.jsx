import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import crm1 from '../assets/CRM/IMG_0458.jpeg'
import crm2 from '../assets/CRM/IMG_0460.jpeg'
import crm3 from '../assets/CRM/IMG_0464.jpeg'
import crm4 from '../assets/CRM/IMG_0466.jpeg'
import aiCallCenter1 from '../assets/aiCallCenter/IMG_0398.jpeg'
import aiCallCenter2 from '../assets/aiCallCenter/IMG_0448.jpeg'

const heroSlides = [
  {
    id: 1,
    title: 'Tek Kullanımlık Malzemeler',
    description: 'İğne, şırınga, eldiven ve hijyen malzemeleri toptan fiyatlarla',
    image: crm1
  },
  {
    id: 2,
    title: 'Uzun Süreli Ekipmanlar',
    description: 'Sterilizatör, otoklov ve medikal ekipmanlar',
    image: crm2
  },
  {
    id: 3,
    title: 'Ofis Malzemeleri',
    description: 'Hasta dosyaları, kırtasiye ve organizasyon ürünleri',
    image: crm3
  }
]

const categories = [
  {
    id: 1,
    name: 'Tek Kullanımlık Malzemeler',
    shortName: 'Tek Kullanımlık',
    description: 'İğne, şırınga, eldiven ve hijyen malzemeleri',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    count: 245,
    color: '#2d5a4a'
  },
  {
    id: 2,
    name: 'Uzun Süreli Kullanım Cihaz & Ekipman',
    shortName: 'Uzun Süreli',
    description: 'Sterilizatör, otoklov ve bakım ekipmanları',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3"/>
      </svg>
    ),
    count: 89,
    color: '#1a5f7a'
  },
  {
    id: 3,
    name: 'Ofis Malzemeleri',
    shortName: 'Ofis',
    description: 'Hasta dosyaları, kırtasiye ve organizasyon',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
      </svg>
    ),
    count: 156,
    color: '#6b4c9a'
  }
]

const products = [
  {
    id: 1,
    name: 'Botox İğnesi 30G',
    category: 'Tek Kullanımlık',
    price: 85,
    unit: 'Kutu (100 adet)',
    minOrder: 10,
    image: crm1,
    discount: 15,
    stock: 'Stokta',
    brand: 'BD Medical'
  },
  {
    id: 2,
    name: 'Cerrahi Eldiven (L)',
    category: 'Tek Kullanımlık',
    price: 120,
    unit: 'Kutu (100 adet)',
    minOrder: 20,
    image: crm2,
    discount: 10,
    stock: 'Stokta',
    brand: 'Sempermed'
  },
  {
    id: 3,
    name: 'Sterilizasyon Poşeti',
    category: 'Tek Kullanımlık',
    price: 95,
    unit: 'Paket (200 adet)',
    minOrder: 5,
    image: crm3,
    discount: 0,
    stock: 'Stokta',
    brand: 'Medipack'
  },
  {
    id: 4,
    name: 'Otoklov Cihazı',
    category: 'Uzun Süreli',
    price: 8500,
    unit: 'Adet',
    minOrder: 1,
    image: aiCallCenter1,
    discount: 20,
    stock: 'Stokta',
    brand: 'Tuttnauer'
  },
  {
    id: 5,
    name: 'Hasta Dosyası Set',
    category: 'Ofis',
    price: 45,
    unit: 'Paket (50 adet)',
    minOrder: 5,
    image: crm4,
    discount: 5,
    stock: 'Stokta',
    brand: 'Leitz'
  },
  {
    id: 6,
    name: 'UV Sterilizatör',
    category: 'Uzun Süreli',
    price: 2500,
    unit: 'Adet',
    minOrder: 1,
    image: aiCallCenter2,
    discount: 15,
    stock: 'Sınırlı Stok',
    brand: 'Philips'
  },
  {
    id: 7,
    name: 'Nitril Eldiven (M)',
    category: 'Tek Kullanımlık',
    price: 150,
    unit: 'Kutu (100 adet)',
    minOrder: 10,
    image: crm1,
    discount: 12,
    stock: 'Stokta',
    brand: 'Ansell'
  },
  {
    id: 8,
    name: 'Dezenfektan 5L',
    category: 'Tek Kullanımlık',
    price: 280,
    unit: 'Bidon',
    minOrder: 4,
    image: crm2,
    discount: 8,
    stock: 'Stokta',
    brand: 'Biorad'
  }
]

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"/>
      </svg>
    ),
    title: '%15-30 Toptan İndirimi',
    description: 'Yüksek adetli siparişlerde ekstra indirimler'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
      </svg>
    ),
    title: 'Ücretsiz Kargo',
    description: '1.000₺ üzeri siparişlerde ücretsiz kargo'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
      </svg>
    ),
    title: 'Vadeli Ödeme',
    description: 'Anlaşmalı klinikler için vadeli ödeme imkanı'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
      </svg>
    ),
    title: 'Periyodik Teslimat',
    description: 'Düzenli sipariş planlaması ve otomatik teslimat'
  }
]

function Supplies() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [cart, setCart] = useState([])
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  // Auto-slide for hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const filteredProducts = products
    .filter(product => {
      const categoryMatch = selectedCategory === 'Tümü' || product.category === selectedCategory
      const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatch && searchMatch
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'discount') return b.discount - a.discount
      return 0
    })

  const addToQuote = (product) => {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + product.minOrder}
          : item
      ))
    } else {
      setCart([...cart, {...product, quantity: product.minOrder}])
    }
  }

  const removeFromQuote = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    const product = cart.find(p => p.id === productId)
    if (product) {
      setCart(cart.map(item => 
        item.id === productId 
          ? {...item, quantity: Math.max(product.minOrder, quantity)}
          : item
      ))
    }
  }

  const totalPrice = cart.reduce((sum, item) => {
    const discountedPrice = item.price * (1 - item.discount / 100)
    return sum + (discountedPrice * item.quantity)
  }, 0)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleSubmitQuote = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setShowQuoteModal(false)
      setFormSubmitted(false)
      setCart([])
    }, 2000)
  }

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="supplies-hero">
        <div className="supplies-hero-slider">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`supplies-hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="supplies-hero-overlay"></div>
            </div>
          ))}
        </div>
        <div className="container supplies-hero-content">
          <span className="hero-badge">Sarf Malzemeler</span>
          <h1>Klinik Malzemeleri<br /><span>Toptan Fiyatlarla</span></h1>
          <p>
            Tek kullanımlık malzemelerden uzun süreli ekipmanlara kadar tüm 
            klinik ihtiyaçlarınız için teklif ve toplu sipariş sistemi.
          </p>
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Ürün veya marka ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>
          <div className="hero-slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={index === currentSlide ? 'active' : ''}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="supplies-benefits">
        <div className="container">
          <div className="benefits-bar">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item-bar">
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-text">
                  <strong>{benefit.title}</strong>
                  <span>{benefit.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="supplies-categories-new">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Kategoriler</span>
            <h2>Ürün Kategorileri</h2>
          </div>
          <div className="category-cards-new">
            <button 
              className={`category-card-new ${selectedCategory === 'Tümü' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Tümü')}
            >
              <div className="cat-icon-new">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                </svg>
              </div>
              <h3>Tüm Ürünler</h3>
              <span className="cat-count-new">{products.length} Ürün</span>
            </button>
            {categories.map((cat) => (
              <button 
                key={cat.id}
                className={`category-card-new ${selectedCategory === cat.shortName ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.shortName)}
                style={{ '--cat-color': cat.color }}
              >
                <div className="cat-icon-new">{cat.icon}</div>
                <h3>{cat.shortName}</h3>
                <p>{cat.description}</p>
                <span className="cat-count-new">{cat.count} Ürün</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="supplies-products-new">
        <div className="container">
          <div className="products-layout-new">
            {/* Products Grid */}
            <div className="products-main-new">
              <div className="products-header">
                <h2>
                  {selectedCategory === 'Tümü' ? 'Tüm Ürünler' : selectedCategory}
                  <span className="product-count">{filteredProducts.length} ürün</span>
                </h2>
                <div className="products-controls">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="default">Varsayılan Sıralama</option>
                    <option value="price-low">Fiyat: Düşükten Yükseğe</option>
                    <option value="price-high">Fiyat: Yüksekten Düşüğe</option>
                    <option value="discount">En Yüksek İndirim</option>
                  </select>
                </div>
              </div>

              <div className="products-grid-new">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="product-card-new"
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    {product.discount > 0 && (
                      <span className="discount-badge">%{product.discount}</span>
                    )}
                    <span className={`stock-badge ${product.stock === 'Sınırlı Stok' ? 'limited' : ''}`}>
                      {product.stock}
                    </span>
                    <div className="product-image-new">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-content-new">
                      <span className="product-brand">{product.brand}</span>
                      <h3>{product.name}</h3>
                      <span className="product-category-tag">{product.category}</span>
                      <div className="product-unit">{product.unit}</div>
                      <div className="product-price-row">
                        {product.discount > 0 ? (
                          <>
                            <span className="old-price">{product.price}₺</span>
                            <span className="current-price">
                              {(product.price * (1 - product.discount / 100)).toFixed(0)}₺
                            </span>
                          </>
                        ) : (
                          <span className="current-price">{product.price}₺</span>
                        )}
                      </div>
                      <div className="min-order-notice">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                        </svg>
                        Min. sipariş: {product.minOrder} {product.unit.split('(')[0]}
                      </div>
                      <button 
                        className="btn-add-quote-new"
                        onClick={() => addToQuote(product)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 4v16m8-8H4"/>
                        </svg>
                        Teklife Ekle
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="no-results">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  <h3>Ürün Bulunamadı</h3>
                  <p>Arama kriterlerinizi değiştirerek tekrar deneyin</p>
                </div>
              )}
            </div>

            {/* Quote Sidebar */}
            <aside className="quote-sidebar-new">
              <div className="quote-card-new">
                <div className="quote-header">
                  <h3>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"/>
                    </svg>
                    Teklif Sepeti
                  </h3>
                  {cart.length > 0 && (
                    <span className="cart-count">{totalItems} ürün</span>
                  )}
                </div>
                {cart.length === 0 ? (
                  <div className="empty-cart-new">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                    </svg>
                    <p>Sepetiniz boş</p>
                    <span>Ürünleri teklife eklemek için "Teklife Ekle" butonuna tıklayın</span>
                  </div>
                ) : (
                  <>
                    <div className="cart-items-new">
                      {cart.map((item) => (
                        <div key={item.id} className="cart-item-new">
                          <div className="cart-item-image">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <div className="cart-item-info">
                            <strong>{item.name}</strong>
                            <span>{item.unit}</span>
                            <div className="cart-item-price">
                              {((item.price * (1 - item.discount / 100)) * item.quantity).toLocaleString()}₺
                            </div>
                          </div>
                          <div className="cart-item-controls">
                            <div className="cart-item-qty">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button 
                              className="remove-btn"
                              onClick={() => removeFromQuote(item.id)}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="cart-summary">
                      <div className="cart-total">
                        <span>Tahmini Toplam</span>
                        <strong>{totalPrice.toLocaleString()}₺</strong>
                      </div>
                      <p className="cart-note">* Fiyatlar tahminidir. Kesin fiyat teklif sonrası iletilir.</p>
                      <button 
                        className="btn-create-quote-new"
                        onClick={() => setShowQuoteModal(true)}
                      >
                        Teklif Oluştur
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="sidebar-info-card">
                <h4>Toplu Sipariş Avantajları</h4>
                <ul>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    %15-30 toptan indirimi
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Ücretsiz kargo (1000₺+)
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Vadeli ödeme imkanı
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Periyodik teslimat planı
                  </li>
                </ul>
              </div>

              <div className="sidebar-contact-card">
                <h4>Özel Teklif mi İstiyorsunuz?</h4>
                <p>Büyük siparişler için özel fiyatlandırma sunuyoruz.</p>
                <a href="tel:+905551234567" className="btn-call">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Hemen Arayın
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="supplies-cta-new">
        <div className="container supplies-cta-content-new">
          <div className="cta-text">
            <h2>Periyodik Sipariş Planı</h2>
            <p>
              Düzenli ihtiyaçlarınız için otomatik sipariş planı oluşturun. 
              Hiç stok sıkıntısı yaşamayın, özel indirimlerden yararlanın.
            </p>
            <ul className="cta-features">
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Otomatik sipariş
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Ekstra %10 indirim
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Öncelikli teslimat
              </li>
            </ul>
          </div>
          <div className="cta-actions">
            <Link to="/danismanlik" className="btn-white-large">
              Plan Oluştur
            </Link>
            <a href="tel:+905551234567" className="btn-outline-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="modal-overlay" onClick={() => setShowQuoteModal(false)}>
          <div className="modal-content modal-large" onClick={e => e.stopPropagation()}>
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
                <h3>Teklif Talebiniz Alındı!</h3>
                <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <>
                <h3>Teklif Talebi Oluştur</h3>
                <div className="modal-cart-summary">
                  <h4>Sepet Özeti ({cart.length} ürün)</h4>
                  <div className="summary-items">
                    {cart.map((item) => (
                      <div key={item.id} className="summary-item">
                        <span className="item-name">{item.name} x {item.quantity}</span>
                        <span className="item-price">{((item.price * (1 - item.discount / 100)) * item.quantity).toLocaleString()}₺</span>
                      </div>
                    ))}
                  </div>
                  <div className="summary-total">
                    <strong>Tahmini Toplam:</strong>
                    <strong>{totalPrice.toLocaleString()}₺</strong>
                  </div>
                </div>
                <form onSubmit={handleSubmitQuote}>
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
                    <label>Teslimat Adresi</label>
                    <textarea rows="2" placeholder="Şehir, ilçe, adres..."></textarea>
                  </div>
                  <div className="form-group">
                    <label>Ek Notlar</label>
                    <textarea rows="2" placeholder="Özel istekleriniz veya sorularınız..."></textarea>
                  </div>
                  <div className="form-consent">
                    <label>
                      <input type="checkbox" required />
                      <span><Link to="/kvkk">KVKK</Link>'yı kabul ediyorum</span>
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

export default Supplies
