'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getAssetSrc } from '../lib/getAssetSrc'

import danismanlik2 from '../assets/danismanlik/IMG_0400.jpeg'

const jobCategories = [
  { id: 1, name: 'Estetisyen', count: 24 },
  { id: 2, name: 'Klinik Koordinatörü', count: 18 },
  { id: 3, name: 'Doktor', count: 12 },
  { id: 4, name: 'Hemşire', count: 15 },
  { id: 5, name: 'Resepsiyonist', count: 21 },
  { id: 6, name: 'Güzellik Uzmanı', count: 16 }
]

const featuredJobs = [
  {
    id: 1,
    title: 'Kıdemli Estetisyen',
    company: 'Premium Estetik Merkezi',
    location: 'İstanbul - Kadıköy',
    salary: '25.000₺ - 35.000₺',
    type: 'Tam Zamanlı',
    posted: '2 gün önce'
  },
  {
    id: 2,
    title: 'Klinik Koordinatörü',
    company: 'Beauty Plus Klinik',
    location: 'İstanbul - Şişli',
    salary: '30.000₺ - 40.000₺',
    type: 'Tam Zamanlı',
    posted: '3 gün önce'
  },
  {
    id: 3,
    title: 'Dermatoloji Uzmanı',
    company: 'Sağlık & Güzellik',
    location: 'Ankara - Çankaya',
    salary: '50.000₺ - 70.000₺',
    type: 'Tam Zamanlı',
    posted: '1 hafta önce'
  }
]

function Personnel() {
  const [activePanel, setActivePanel] = useState('jobseeker')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    experience: '',
    city: '',
    cv: null,
    privacy: 'public'
  })
  const [employerData, setEmployerData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    position: '',
    requirements: '',
    salary: '',
    location: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', activePanel === 'jobseeker' ? formData : employerData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="personnel-hero-new">
        <div className="personnel-hero-bg">
          <img src={getAssetSrc(danismanlik2)} alt="Personel" />
          <div className="hero-gradient"></div>
        </div>
        <div className="container personnel-hero-content">
          <div className="hero-badge-wrapper">
            <span className="hero-badge">Hepsi Eleman</span>
          </div>
          <h1>Sağlık Sektöründe<br /><span>Kariyer Fırsatları</span></h1>
          <p>
            Estetisyen, klinik koordinatörü, doktor ve diğer sağlık profesyonellerini 
            kolayca bulun veya kariyerinizi bir adım öne taşıyın.
          </p>
          <div className="hero-actions">
            <button 
              onClick={() => setActivePanel('jobseeker')} 
              className="btn-primary"
            >
              İş Arıyorum
            </button>
            <button 
              onClick={() => setActivePanel('employer')} 
              className="btn-outline"
            >
              Eleman Arıyorum
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="personnel-stats">
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item-mini">
              <strong>500+</strong>
              <span>Aktif İlan</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item-mini">
              <strong>1000+</strong>
              <span>CV Havuzu</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item-mini">
              <strong>200+</strong>
              <span>İşveren</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item-mini">
              <strong>850+</strong>
              <span>Yerleştirme</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="personnel-main">
        <div className="container">
          <div className="personnel-layout">
            {/* Sidebar */}
            <aside className="personnel-sidebar">
              <div className="panel-switcher">
                <button 
                  className={`switcher-btn ${activePanel === 'jobseeker' ? 'active' : ''}`}
                  onClick={() => setActivePanel('jobseeker')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  İş Arayan
                </button>
                <button 
                  className={`switcher-btn ${activePanel === 'employer' ? 'active' : ''}`}
                  onClick={() => setActivePanel('employer')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  İşveren
                </button>
              </div>

              <div className="categories-card">
                <h3>Meslek Kategorileri</h3>
                <ul className="category-list">
                  {jobCategories.map((cat) => (
                    <li key={cat.id}>
                      <span>{cat.name}</span>
                      <span className="count">{cat.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-card">
                <h4>KVKK Uyumlu Sistem</h4>
                <p>Tüm verileriniz güvenle saklanır. Taraflar birbirini görmez, sadece HepsiClinic yönetir.</p>
              </div>
            </aside>

            {/* Main Panel */}
            <div className="personnel-content">
              {activePanel === 'jobseeker' ? (
                <div className="jobseeker-panel">
                  <div className="panel-header">
                    <h2>İş Arayan Paneli</h2>
                    <p>CV'nizi yükleyin ve kariyer fırsatlarını keşfedin</p>
                  </div>

                  {submitted ? (
                    <div className="form-success-card">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <h3>Başvurunuz Alındı!</h3>
                      <p>CV'niz havuzumuza eklendi. Uygun pozisyonlar için sizinle iletişime geçeceğiz.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="cv-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>Ad Soyad *</label>
                          <input 
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label>E-posta *</label>
                          <input 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required 
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Telefon *</label>
                          <input 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label>Şehir</label>
                          <select 
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                          >
                            <option value="">Seçiniz</option>
                            <option value="istanbul">İstanbul</option>
                            <option value="ankara">Ankara</option>
                            <option value="izmir">İzmir</option>
                            <option value="antalya">Antalya</option>
                            <option value="bursa">Bursa</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Meslek *</label>
                          <select 
                            value={formData.profession}
                            onChange={(e) => setFormData({...formData, profession: e.target.value})}
                            required
                          >
                            <option value="">Seçiniz</option>
                            {jobCategories.map((cat) => (
                              <option key={cat.id} value={cat.name}>{cat.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Deneyim</label>
                          <select 
                            value={formData.experience}
                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                          >
                            <option value="">Seçiniz</option>
                            <option value="0-1">0-1 Yıl</option>
                            <option value="1-3">1-3 Yıl</option>
                            <option value="3-5">3-5 Yıl</option>
                            <option value="5+">5+ Yıl</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>CV Yükle (PDF, DOC)</label>
                        <div className="file-upload">
                          <input 
                            type="file" 
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setFormData({...formData, cv: e.target.files[0]})}
                          />
                          <div className="file-upload-text">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                            </svg>
                            <span>CV'nizi sürükleyin veya tıklayın</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Gizlilik Ayarı</label>
                        <div className="radio-group">
                          <label className="radio-label">
                            <input 
                              type="radio" 
                              name="privacy" 
                              value="public"
                              checked={formData.privacy === 'public'}
                              onChange={(e) => setFormData({...formData, privacy: e.target.value})}
                            />
                            <span>İşverenlere Açık</span>
                          </label>
                          <label className="radio-label">
                            <input 
                              type="radio" 
                              name="privacy" 
                              value="private"
                              checked={formData.privacy === 'private'}
                              onChange={(e) => setFormData({...formData, privacy: e.target.value})}
                            />
                            <span>Sadece Başvurduklarıma</span>
                          </label>
                        </div>
                      </div>
                      <div className="form-consent">
                        <label>
                          <input type="checkbox" required />
                          <span><Link href="/kvkk">KVKK Aydınlatma Metni</Link>'ni okudum ve kabul ediyorum.</span>
                        </label>
                      </div>
                      <button type="submit" className="btn-submit">
                        CV Yükle
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </button>
                    </form>
                  )}

                  {/* Featured Jobs */}
                  <div className="featured-jobs">
                    <h3>Öne Çıkan İlanlar</h3>
                    <div className="jobs-list">
                      {featuredJobs.map((job) => (
                        <div key={job.id} className="job-card">
                          <div className="job-header">
                            <h4>{job.title}</h4>
                            <span className="job-type">{job.type}</span>
                          </div>
                          <p className="job-company">{job.company}</p>
                          <div className="job-details">
                            <span>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                              </svg>
                              {job.location}
                            </span>
                            <span>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                              {job.salary}
                            </span>
                          </div>
                          <div className="job-footer">
                            <span className="job-posted">{job.posted}</span>
                            <button className="btn-apply">Başvur</button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/ilanlar" className="btn-view-all">Tüm İlanları Gör →</Link>
                  </div>
                </div>
              ) : (
                <div className="employer-panel">
                  <div className="panel-header">
                    <h2>İşveren Paneli</h2>
                    <p>Pozisyon ekleyin ve nitelikli adaylara ulaşın</p>
                  </div>

                  {submitted ? (
                    <div className="form-success-card">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <h3>İlanınız Alındı!</h3>
                      <p>Onay sürecinin ardından ilanınız yayınlanacaktır.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="employer-form">
                      <div className="form-section">
                        <h4>Şirket Bilgileri</h4>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Şirket/Klinik Adı *</label>
                            <input 
                              type="text" 
                              value={employerData.companyName}
                              onChange={(e) => setEmployerData({...employerData, companyName: e.target.value})}
                              required 
                            />
                          </div>
                          <div className="form-group">
                            <label>Yetkili Adı *</label>
                            <input 
                              type="text" 
                              value={employerData.contactName}
                              onChange={(e) => setEmployerData({...employerData, contactName: e.target.value})}
                              required 
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label>E-posta *</label>
                            <input 
                              type="email" 
                              value={employerData.email}
                              onChange={(e) => setEmployerData({...employerData, email: e.target.value})}
                              required 
                            />
                          </div>
                          <div className="form-group">
                            <label>Telefon *</label>
                            <input 
                              type="tel" 
                              value={employerData.phone}
                              onChange={(e) => setEmployerData({...employerData, phone: e.target.value})}
                              required 
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-section">
                        <h4>Pozisyon Bilgileri</h4>
                        <div className="form-row">
                          <div className="form-group">
                            <label>Pozisyon *</label>
                            <select 
                              value={employerData.position}
                              onChange={(e) => setEmployerData({...employerData, position: e.target.value})}
                              required
                            >
                              <option value="">Seçiniz</option>
                              {jobCategories.map((cat) => (
                                <option key={cat.id} value={cat.name}>{cat.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Lokasyon *</label>
                            <input 
                              type="text" 
                              placeholder="Örn: İstanbul - Kadıköy"
                              value={employerData.location}
                              onChange={(e) => setEmployerData({...employerData, location: e.target.value})}
                              required 
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Maaş Aralığı</label>
                          <input 
                            type="text" 
                            placeholder="Örn: 25.000₺ - 35.000₺"
                            value={employerData.salary}
                            onChange={(e) => setEmployerData({...employerData, salary: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label>Aranan Nitelikler *</label>
                          <textarea 
                            rows="4"
                            placeholder="Gerekli deneyim, sertifikalar, beceriler..."
                            value={employerData.requirements}
                            onChange={(e) => setEmployerData({...employerData, requirements: e.target.value})}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-consent">
                        <label>
                          <input type="checkbox" required />
                          <span><Link href="/kvkk">KVKK Aydınlatma Metni</Link>'ni okudum ve kabul ediyorum.</span>
                        </label>
                      </div>
                      <button type="submit" className="btn-submit">
                        İlan Yayınla
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                        </svg>
                      </button>
                    </form>
                  )}

                  <div className="employer-benefits">
                    <h3>İşveren Avantajları</h3>
                    <div className="benefits-grid">
                      <div className="benefit-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Doğrulanmış CV havuzu</span>
                      </div>
                      <div className="benefit-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>KVKK uyumlu sistem</span>
                      </div>
                      <div className="benefit-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Hızlı eşleştirme</span>
                      </div>
                      <div className="benefit-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Sektöre özel adaylar</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="personnel-cta">
        <div className="container personnel-cta-content">
          <h2>Sorularınız mı Var?</h2>
          <p>İnsan kaynakları ekibimizle iletişime geçin</p>
          <a href="tel:+905551234567" className="btn-white">
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

export default Personnel
