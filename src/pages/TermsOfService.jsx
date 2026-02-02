import { Link } from 'react-router-dom'

function TermsOfService() {
  return (
    <>
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="container">
          <h1>Kullanım Şartları</h1>
          <p>HepsiClinic web sitesi ve hizmetleri kullanım koşulları</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <p className="legal-date">Son güncelleme: Ocak 2024</p>

            <h2>1. Kabul ve Onay</h2>
            <p>
              HepsiClinic web sitesini ("Site") ve hizmetlerini kullanarak, bu Kullanım Şartları'nı
              okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Bu şartları
              kabul etmiyorsanız, lütfen Sitemizi kullanmayınız.
            </p>

            <h2>2. Hizmet Tanımı</h2>
            <p>
              HepsiClinic, sağlık ve güzellik sektöründe faaliyet gösteren kliniklere yönelik
              danışmanlık, yazılım, insan kaynakları ve ekipman hizmetleri sunan bir platformdur.
              Hizmetlerimiz şunları içerebilir:
            </p>
            <ul>
              <li>Klinik kurulum ve işletme danışmanlığı</li>
              <li>AI destekli müşteri hizmetleri ve CRM çözümleri</li>
              <li>Sosyal medya ve dijital pazarlama hizmetleri</li>
              <li>İnsan kaynakları ve personel bulma hizmetleri</li>
              <li>İkinci el medikal cihaz alım-satım platformu</li>
            </ul>

            <h2>3. Kullanıcı Hesapları</h2>
            <h3>3.1. Hesap Oluşturma</h3>
            <p>
              Bazı hizmetlerimizden yararlanmak için hesap oluşturmanız gerekebilir. Hesap
              oluştururken doğru ve güncel bilgiler vermeyi kabul edersiniz.
            </p>
            <h3>3.2. Hesap Güvenliği</h3>
            <p>
              Hesap bilgilerinizin gizliliğini korumak ve hesabınız üzerinden gerçekleştirilen
              tüm faaliyetlerden sorumlu olmak sizin yükümlülüğünüzdedir. Yetkisiz erişim
              durumunda derhal bizi bilgilendirmeniz gerekmektedir.
            </p>

            <h2>4. Kullanım Kuralları</h2>
            <p>Sitemizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:</p>
            <ul>
              <li>Yürürlükteki tüm yasalara ve düzenlemelere uymak</li>
              <li>Başkalarının haklarına saygı göstermek</li>
              <li>Yanıltıcı veya yanlış bilgi vermemek</li>
              <li>Siteye veya hizmetlere zarar verebilecek faaliyetlerden kaçınmak</li>
              <li>Spam veya istenmeyen iletişim göndermemek</li>
              <li>Virüs veya zararlı yazılım yaymamak</li>
              <li>Siteye yetkisiz erişim sağlamaya çalışmamak</li>
            </ul>

            <h2>5. Fikri Mülkiyet Hakları</h2>
            <p>
              Site üzerindeki tüm içerik, tasarım, grafik, logo, metin, görsel ve yazılımlar
              dahil ancak bunlarla sınırlı olmamak üzere tüm materyaller HepsiClinic'in veya
              lisans verenlerin mülkiyetindedir ve telif hakkı, ticari marka ve diğer fikri
              mülkiyet yasaları ile korunmaktadır.
            </p>
            <p>
              Önceden yazılı izin almadan Site içeriğini kopyalayamaz, çoğaltamaz,
              dağıtamaz veya türev eserler oluşturamazsınız.
            </p>

            <h2>6. Hizmet Ücretleri ve Ödeme</h2>
            <p>
              Bazı hizmetlerimiz ücretli olabilir. Ücretli hizmetler için geçerli fiyatlar ve
              ödeme koşulları ilgili hizmet sayfasında belirtilecektir.
            </p>
            <ul>
              <li>Belirtilen ücretlere KDV dahil değildir (aksi belirtilmedikçe)</li>
              <li>Ödemeler belirtilen ödeme yöntemleri ile yapılmalıdır</li>
              <li>Geç ödemeler için faiz uygulanabilir</li>
              <li>İade koşulları hizmet türüne göre değişiklik gösterebilir</li>
            </ul>

            <h2>7. Sorumluluk Sınırlaması</h2>
            <p>
              HepsiClinic, yasaların izin verdiği azami ölçüde, aşağıdaki hususlardan doğan
              herhangi bir zarardan sorumlu tutulamaz:
            </p>
            <ul>
              <li>Sitenin kullanımı veya kullanılamaması</li>
              <li>Site üzerinden erişilen üçüncü taraf hizmetleri</li>
              <li>Site içeriğindeki hatalar veya eksiklikler</li>
              <li>Teknik arızalar veya kesintiler</li>
              <li>Yetkisiz erişim veya veri kaybı</li>
            </ul>
            <p>
              Hiçbir durumda HepsiClinic'in toplam sorumluluğu, söz konusu zarara neden olan
              hizmet için ödediğiniz tutarı aşmayacaktır.
            </p>

            <h2>8. Tazminat</h2>
            <p>
              Bu Kullanım Şartları'nı ihlal etmeniz veya Site kullanımınızdan kaynaklanan
              herhangi bir talep, zarar, kayıp veya masrafa karşı HepsiClinic'i, yöneticilerini,
              çalışanlarını ve iş ortaklarını tazmin etmeyi ve korumayı kabul edersiniz.
            </p>

            <h2>9. Üçüncü Taraf Bağlantıları</h2>
            <p>
              Site, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar
              yalnızca kolaylık sağlamak amacıyla verilmiştir. Bu sitelerin içeriğinden
              veya gizlilik uygulamalarından sorumlu değiliz.
            </p>

            <h2>10. Hizmet Değişiklikleri</h2>
            <p>
              HepsiClinic, herhangi bir zamanda ve herhangi bir nedenle, önceden bildirimde
              bulunarak veya bulunmaksızın:
            </p>
            <ul>
              <li>Hizmetlerini değiştirme veya sonlandırma</li>
              <li>Site içeriğini güncelleme</li>
              <li>Fiyatları değiştirme</li>
              <li>Yeni özellikler ekleme veya mevcut özellikleri kaldırma</li>
            </ul>
            <p>hakkını saklı tutar.</p>

            <h2>11. Fesih</h2>
            <p>
              HepsiClinic, bu Kullanım Şartları'nı ihlal etmeniz durumunda, herhangi bir
              bildirimde bulunmaksızın hesabınızı askıya alabilir veya feshedebilir ve
              Site'ye erişiminizi engelleyebilir.
            </p>

            <h2>12. Uygulanacak Hukuk ve Uyuşmazlık Çözümü</h2>
            <p>
              Bu Kullanım Şartları, Türkiye Cumhuriyeti yasalarına tabidir. Bu şartlardan
              doğan herhangi bir uyuşmazlık, İstanbul Mahkemeleri ve İcra Daireleri'nin
              münhasır yargı yetkisine tabidir.
            </p>

            <h2>13. Bölünebilirlik</h2>
            <p>
              Bu Kullanım Şartları'nın herhangi bir hükmünün geçersiz veya uygulanamaz
              olduğuna karar verilmesi halinde, diğer hükümler tam olarak yürürlükte
              kalmaya devam edecektir.
            </p>

            <h2>14. Şartların Değiştirilmesi</h2>
            <p>
              Bu Kullanım Şartları'nı herhangi bir zamanda değiştirme hakkını saklı tutarız.
              Değişiklikler Site'de yayınlandığı anda yürürlüğe girer. Önemli değişiklikler
              için e-posta ile bildirim yapılabilir.
            </p>

            <h2>15. İletişim</h2>
            <p>
              Bu Kullanım Şartları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <ul>
              <li><strong>E-posta:</strong> info@hepsiclinic.com</li>
              <li><strong>Telefon:</strong> +90 537 602 30 88</li>
              <li><strong>Adres:</strong> İstanbul, Türkiye</li>
            </ul>

            <div className="legal-contact">
              <h3>Sorularınız mı var?</h3>
              <p>
                Kullanım şartlarımız hakkında daha fazla bilgi almak için bizimle iletişime geçin.
              </p>
              <Link to="/danismanlik" className="btn-primary">İletişime Geç</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfService
