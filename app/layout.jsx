import '../src/index.css'
import '../src/App.css'
import MainLayout from '../src/layouts/MainLayout'

export const metadata = {
  title: 'HepsiClinic',
  description: 'Tüm Klinik Çözümleri Tek Platformda',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
