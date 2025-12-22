function Examination() {
  return (
    <section className="product-page">
      <div className="container">
        <h2 className="page-title">MUAYENE MALZEMELERİ</h2>
        <div className="product-grid">
          <div className="product-image">
            <img src="/examination-chair.svg" alt="Elektronik muayene koltuğu" />
          </div>
          <div className="product-details">
            <div className="product-breadcrumb">
              Products / 2. El Cihaz / Elektronik Muayene Koltuğu
            </div>
            <h1>Elektronik Muayene Koltuğu</h1>
            <div className="product-price">
              <span className="price-old">₺2,500.00</span>
              <span className="price-new">₺1,875.00</span>
            </div>
            <p className="product-subtitle">
              Elektronik Muayene Koltuğu – Konforlu Medikal Koltuk
            </p>
            <div className="product-qty">
              <input type="number" min="1" defaultValue="1" />
            </div>
            <button className="add-to-cart">Add to cart</button>
            <p className="product-description">
              Bu elektronik muayene koltuğu, hasta konforu ve sağlık
              profesyonellerinin kullanım kolaylığı için tasarlanmıştır.
              Ayarlanabilir yükseklik, yatma özelliklerine ve yüksek kaliteli
              malzemelerden yapılmış sağlam bir çerçeveye sahiptir. Koltuk,
              dermatoloji klinikleri, diş hekimliği muayenehaneleri ve estetik
              merkezleri için uygundur. Şık tasarımı, günlük klinik kullanım
              için hijyen ve dayanıklılık sağlar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Examination
