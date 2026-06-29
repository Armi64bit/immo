import { useState } from 'react'
import './App.css'
import type { PageKey } from './types'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import Listing from './pages/Listing'
import MapPage from './pages/MapPage'
import Estimation from './pages/Estimation'
import Contact from './pages/Contact'
import { navItems, featuredProperties, zones, whatsappNumbers } from './data/siteData'

const venteProperties = featuredProperties.filter((property) => property.type === 'À vendre')
const locationProperties = featuredProperties.filter((property) => property.type === 'À louer')

function App() {
  const [activePage, setActivePage] = useState<PageKey>('accueil')

  const renderPage = () => {
    switch (activePage) {
      case 'vente':
        return <Listing title="Biens à vendre" subtitle="Explorez des propriétés soigneusement sélectionnées." properties={venteProperties} />
      case 'location':
        return <Listing title="Biens à louer" subtitle="Des locations élégantes pour un quotidien premium." properties={locationProperties} />
      case 'carte':
        return <MapPage zones={zones} />
      case 'estimation':
        return <Estimation />
      case 'contact':
        return <Contact />
      case 'accueil':
      default:
        return <Home featuredProperties={featuredProperties} zones={zones} onNavigate={(page) => setActivePage(page)} />
    }
  }

  return (
    <div className="app-shell">
      <Header
        activePage={activePage}
        navItems={navItems}
        onChangePage={setActivePage}
        onEstimateClick={() => setActivePage('estimation')}
      />

      <main className="main-content">{renderPage()}</main>

      <FloatingActions numbers={whatsappNumbers} />
      <Footer />
    </div>
  )
}

export default App
