import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { NavItem } from '../types'

type Props = {
  activePage: string
  navItems: NavItem[]
  onChangePage: (page: string) => void
  onEstimateClick: () => void
}

export default function Header({ navItems }: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  const getActivePage = () => {
    const path = location.pathname.toLowerCase()
    if (path === '/') return 'accueil'
    if (path.includes('vente')) return 'vente'
    if (path.includes('location')) return 'location'
    if (path.includes('carte')) return 'carte'
    if (path.includes('estimation')) return 'estimation'
    if (path.includes('contact')) return 'contact'
    return 'accueil'
  }

  const activePage = getActivePage()

  const getRouteForKey = (key: string) => {
    const routeMap: Record<string, string> = {
      'accueil': '/',
      'vente': '/Vente',
      'location': '/Location',
      'carte': '/Carte',
      'estimation': '/Estimation',
      'contact': '/Contact'
    }
    return routeMap[key] || '/'
  }

  return (
    <header className="main-header">
      <div className="topbar">
        <Link to="/" className="brand" role="banner">
          <span>Immo</span>Connect
        </Link>

        <nav className="nav-links" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={getRouteForKey(item.key)}
              className={activePage === item.key ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="header-cta" onClick={() => navigate('/Estimation')}>
            Estimer mon bien
          </button>
          <button type="button" className="locale-button">EN</button>
        </div>
      </div>
    </header>
  )
}

