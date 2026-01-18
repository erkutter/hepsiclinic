import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Consulting from './pages/Consulting.jsx'
import Personnel from './pages/Personnel.jsx'
import HepsiIK from './pages/HepsiIK.jsx'
import SecondHand from './pages/SecondHand.jsx'
import AiCrm from './pages/AiCrm.jsx'
import SocialMedia from './pages/SocialMedia.jsx'
import RequestForm from './pages/RequestForm.jsx'
import KVKK from './pages/KVKK.jsx'
import Privacy from './pages/Privacy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import Membership from './pages/Membership.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="danismanlik" element={<Consulting />} />
        <Route path="personel" element={<Personnel />} />
        <Route path="hepsi-ik" element={<HepsiIK />} />
        <Route path="ikinci-el-cihazlar" element={<SecondHand />} />
        <Route path="ai-hizmetleri" element={<AiCrm />} />
        <Route path="ai-call-center-crm" element={<AiCrm />} />
        <Route path="sosyal-medya" element={<SocialMedia />} />
        <Route path="talep-formu" element={<RequestForm />} />
        <Route path="kvkk" element={<KVKK />} />
        <Route path="gizlilik" element={<Privacy />} />
        <Route path="kullanim-sartlari" element={<TermsOfService />} />
        <Route path="uye-ol" element={<Membership />} />
      </Route>
    </Routes>
  )
}

export default App
