import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import Listing from './pages/Listing'
import MapPage from './pages/MapPage'
import Estimation from './pages/Estimation'
import Contact from './pages/Contact'
import PropertyDetail from './pages/PropertyDetail'
import { navItems, featuredProperties, zones, whatsappNumbers } from './data/siteData'

const venteProperties = featuredProperties.filter((property) => property.type === 'À vendre')
const locationProperties = featuredProperties.filter((property) => property.type === 'À louer')

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header
          activePage="accueil"
          navItems={navItems}
          onChangePage={() => {}}
          onEstimateClick={() => {}}
        />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home featuredProperties={featuredProperties} zones={zones} onNavigate={() => {}} />} />
            <Route path="/Vente" element={<Listing title="Biens à vendre" subtitle="Explorez des propriétés soigneusement sélectionnées." properties={venteProperties} />} />
            <Route path="/Location" element={<Listing title="Biens à louer" subtitle="Des locations élégantes pour un quotidien premium." properties={locationProperties} />} />
            <Route path="/Carte" element={<MapPage properties={[...venteProperties, ...locationProperties]} zones={zones} />} />
            <Route path="/Estimation" element={<Estimation />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Routes>
        </main>

        <FloatingActions numbers={whatsappNumbers} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
