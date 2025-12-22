import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Consulting from './pages/Consulting.jsx'
import Supplies from './pages/Supplies.jsx'
import Personnel from './pages/Personnel.jsx'
import Examination from './pages/Examination.jsx'
import SecondHand from './pages/SecondHand.jsx'
import AiCrm from './pages/AiCrm.jsx'
import SocialMedia from './pages/SocialMedia.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="danismanlik" element={<Consulting />} />
        <Route path="sarf-malzemeler" element={<Supplies />} />
        <Route path="personel" element={<Personnel />} />
        <Route path="muayene-malzemeleri" element={<Examination />} />
        <Route path="ikinci-el-cihazlar" element={<SecondHand />} />
        <Route path="ai-call-center-crm" element={<AiCrm />} />
        <Route path="sosyal-medya" element={<SocialMedia />} />
        <Route path="iletisim" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
