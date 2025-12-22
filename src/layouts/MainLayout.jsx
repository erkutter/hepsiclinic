import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpeg'

function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <div className="page">
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="brand">
            <img src={logo} alt="HepsiClinic" className="brand-logo" />
          </Link>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Ana menü">
            <Link to="/danismanlik" className={location.pathname === '/danismanlik' ? 'active' : ''}>
              Danışmanlık
            </Link>
            <Link to="/ai-call-center-crm" className={location.pathname === '/ai-call-center-crm' ? 'active' : ''}>
              AI Call Center & CRM
            </Link>
            <Link to="/personel" className={location.pathname === '/personel' ? 'active' : ''}>
              Hepsi Eleman
            </Link>
            <Link to="/ikinci-el-cihazlar" className={location.pathname === '/ikinci-el-cihazlar' ? 'active' : ''}>
              2. El Cihaz & Kiralama
            </Link>
            <Link to="/sarf-malzemeler" className={location.pathname === '/sarf-malzemeler' ? 'active' : ''}>
              Sarf Malzemeler
            </Link>
            <Link to="/sosyal-medya" className={location.pathname === '/sosyal-medya' ? 'active' : ''}>
              Sosyal Medya
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/iletisim" className="btn-contact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              İletişim
            </Link>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={logo} alt="HepsiClinic" className="footer-logo" />
              <p>Tüm klinik ihtiyaçlarınız için tek platform. Danışmanlıktan teknolojiye, personelden malzemeye kadar her şey HepsiClinic'te.</p>
              <div className="social-links">
                <a href="https://instagram.com/hepsiclinic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/hepsiclinic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Hizmetler</h4>
                <Link to="/danismanlik">Danışmanlık</Link>
                <Link to="/ai-call-center-crm">AI Call Center</Link>
                <Link to="/ai-call-center-crm">CRM Programı</Link>
                <Link to="/sosyal-medya">Sosyal Medya</Link>
              </div>
              <div className="footer-column">
                <h4>Ürünler</h4>
                <Link to="/ikinci-el-cihazlar">2. El Cihazlar</Link>
                <Link to="/ikinci-el-cihazlar">Kiralama</Link>
                <Link to="/sarf-malzemeler">Sarf Malzemeler</Link>
                <Link to="/muayene-malzemeleri">Muayene Malzemeleri</Link>
              </div>
              <div className="footer-column">
                <h4>İnsan Kaynakları</h4>
                <Link to="/personel">İş İlanları</Link>
                <Link to="/personel">CV Havuzu</Link>
                <Link to="/personel">Eleman Arıyorum</Link>
              </div>
              <div className="footer-column">
                <h4>İletişim</h4>
                <Link to="/iletisim">İletişim Formu</Link>
                <a href="mailto:info@hepsiclinic.com">info@hepsiclinic.com</a>
                <a href="tel:+905551234567">+90 555 123 45 67</a>
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 HepsiClinic.com - Tüm hakları saklıdır.</p>
            <div className="footer-legal">
              <Link to="/kvkk">KVKK</Link>
              <Link to="/gizlilik">Gizlilik Politikası</Link>
              <Link to="/kullanim-sartlari">Kullanım Şartları</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
