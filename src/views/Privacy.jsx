import Link from 'next/link'

function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="container">
          <h1>Gizlilik Politikası</h1>
          <p>HepsiClinic gizlilik politikası ve veri koruma uygulamaları</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <p className="legal-date">Son güncelleme: Ocak 2024</p>

            <h2>1. Giriş</h2>
            <p>
              HepsiClinic olarak gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasını
              önemsiyoruz. Bu Gizlilik Politikası, web sitemizi ve hizmetlerimizi kullanırken
              toplanan, kullanılan ve paylaşılan bilgiler hakkında sizi bilgilendirmek amacıyla
              hazırlanmıştır.
            </p>

            <h2>2. Toplanan Bilgiler</h2>
            <h3>2.1. Doğrudan Sağladığınız Bilgiler</h3>
            <ul>
              <li>İletişim bilgileri (ad, soyad, e-posta, telefon)</li>
              <li>Hesap bilgileri</li>
              <li>Hizmet talep formlarında paylaştığınız bilgiler</li>
              <li>Müşteri hizmetleri iletişimleri</li>
            </ul>

            <h3>2.2. Otomatik Olarak Toplanan Bilgiler</h3>
            <ul>
              <li>IP adresi ve cihaz bilgileri</li>
              <li>Tarayıcı türü ve sürümü</li>
              <li>Ziyaret edilen sayfalar ve etkileşimler</li>
              <li>Çerez verileri</li>
            </ul>

            <h2>3. Bilgilerin Kullanımı</h2>
            <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanıyoruz:</p>
            <ul>
              <li>Hizmetlerimizi sunmak ve geliştirmek</li>
              <li>Sizinle iletişim kurmak</li>
              <li>Güvenliği sağlamak ve dolandırıcılığı önlemek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
              <li>İzin vermeniz halinde pazarlama iletişimleri göndermek</li>
              <li>Kullanıcı deneyimini kişiselleştirmek</li>
            </ul>

            <h2>4. Bilgilerin Paylaşımı</h2>
            <p>Bilgilerinizi aşağıdaki durumlarda üçüncü taraflarla paylaşabiliriz:</p>
            <ul>
              <li><strong>Hizmet Sağlayıcılar:</strong> Web hosting, analitik, ödeme işlemleri gibi hizmetler için</li>
              <li><strong>İş Ortakları:</strong> Hizmet sunumunun gerektirdiği durumlarda</li>
              <li><strong>Yasal Gereklilikler:</strong> Kanuni zorunluluk hallerinde yetkili makamlara</li>
              <li><strong>Onayınız ile:</strong> Açık onayınızı aldığımız diğer durumlarda</li>
            </ul>

            <h2>5. Çerezler ve İzleme Teknolojileri</h2>
            <p>
              Web sitemiz, kullanıcı deneyimini iyileştirmek ve web sitesi trafiğini analiz etmek
              amacıyla çerezler kullanmaktadır.
            </p>
            <h3>Kullandığımız Çerez Türleri:</h3>
            <ul>
              <li><strong>Zorunlu Çerezler:</strong> Web sitesinin çalışması için gerekli temel çerezler</li>
              <li><strong>Performans Çerezleri:</strong> Ziyaretçilerin web sitesini nasıl kullandığını anlamamıza yardımcı olan çerezler</li>
              <li><strong>İşlevsellik Çerezleri:</strong> Tercihlerinizi hatırlayan çerezler</li>
              <li><strong>Pazarlama Çerezleri:</strong> Reklam ve pazarlama amaçlı kullanılan çerezler</li>
            </ul>
            <p>
              Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz. Ancak bu durumda
              web sitesinin bazı özellikleri düzgün çalışmayabilir.
            </p>

            <h2>6. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizi yetkisiz erişime, değişikliğe, ifşaya veya yok edilmeye karşı
              korumak için uygun teknik ve organizasyonel güvenlik önlemleri uyguluyoruz:
            </p>
            <ul>
              <li>SSL şifreleme ile güvenli veri iletimi</li>
              <li>Erişim kontrolleri ve yetkilendirme</li>
              <li>Düzenli güvenlik değerlendirmeleri</li>
              <li>Çalışan eğitimleri ve gizlilik protokolleri</li>
            </ul>

            <h2>7. Veri Saklama</h2>
            <p>
              Kişisel verilerinizi, toplandıkları amaç için gerekli olan süre boyunca veya
              yasal gereklilikler doğrultusunda saklıyoruz. Saklama süresi dolduğunda veriler
              güvenli bir şekilde silinir veya anonim hale getirilir.
            </p>

            <h2>8. Haklarınız</h2>
            <p>Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Verilerinize erişim hakkı</li>
              <li>Verilerinizin düzeltilmesini talep etme hakkı</li>
              <li>Verilerinizin silinmesini talep etme hakkı</li>
              <li>Veri işlemeye itiraz etme hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
              <li>Pazarlama iletişimlerinden çıkma hakkı</li>
            </ul>
            <p>
              Bu haklarınızı kullanmak için <a href="mailto:info@hepsiclinic.com">info@hepsiclinic.com</a> adresinden
              bize ulaşabilirsiniz.
            </p>

            <h2>9. Üçüncü Taraf Bağlantıları</h2>
            <p>
              Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin
              gizlilik uygulamalarından sorumlu değiliz ve kendi gizlilik politikalarını
              incelemenizi öneririz.
            </p>

            <h2>10. Çocukların Gizliliği</h2>
            <p>
              Hizmetlerimiz 18 yaşın altındaki kişilere yönelik değildir. Bilerek 18 yaşın
              altındaki kişilerden kişisel veri toplamıyoruz.
            </p>

            <h2>11. Politika Değişiklikleri</h2>
            <p>
              Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Önemli değişiklikler
              yapıldığında sizi bilgilendireceğiz. Politikanın en güncel halini web sitemizde
              bulabilirsiniz.
            </p>

            <h2>12. İletişim</h2>
            <p>
              Gizlilik politikamız hakkında sorularınız veya endişeleriniz için bizimle
              iletişime geçebilirsiniz:
            </p>
            <ul>
              <li><strong>E-posta:</strong> info@hepsiclinic.com</li>
              <li><strong>Telefon:</strong> +90 537 602 30 88</li>
              <li><strong>Adres:</strong> Levent Mah. Karanfil Sk. Villa 13 Beşiktaş / İSTANBUL</li>
            </ul>

            <div className="legal-contact">
              <h3>Sorularınız mı var?</h3>
              <p>
                Gizlilik politikamız hakkında daha fazla bilgi almak için bizimle iletişime geçin.
              </p>
              <Link href="/danismanlik" className="btn-primary">İletişime Geç</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy
