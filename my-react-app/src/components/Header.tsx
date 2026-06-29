import type { PageKey, NavItem } from '../types'

type Props = {
  activePage: PageKey
  navItems: NavItem[]
  onChangePage: (page: PageKey) => void
  onEstimateClick: () => void
}

export default function Header({ activePage, navItems, onChangePage, onEstimateClick }: Props) {
  return (
    <header className="main-header">
      <div className="topbar">
        <div className="brand" role="banner">
          <span>Immo</span>Connect
        </div>

        <nav className="nav-links" aria-label="Navigation principale">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={activePage === item.key ? 'nav-link active' : 'nav-link'}
              onClick={() => onChangePage(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="header-cta" onClick={onEstimateClick}>
            Estimer mon bien
          </button>
          <button type="button" className="locale-button">EN</button>
        </div>
      </div>
    </header>
  )
}
