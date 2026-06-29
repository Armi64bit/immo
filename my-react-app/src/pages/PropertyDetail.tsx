import { useParams, useNavigate } from 'react-router-dom'
import { properties } from '../data/siteData'
import FloatingActions from '../components/FloatingActions'

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const property = properties.find(p => p.reference === id)

  if (!property) {
    return (
      <section className="page-panel">
        <div className="page-intro">
          <h2>Propriété non trouvée</h2>
          <p>Cette propriété n'existe pas.</p>
          <button onClick={() => navigate('/Vente')} className="btn btn-primary">
            Retourner aux annonces
          </button>
        </div>
      </section>
    )
  }

  const getMapEmbedUrl = () => {
    if (property.lat && property.lng) {
      const { lat, lng } = property
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.123456789!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat}%2C${lng}!5e0!3m2!1sfr!2stn!4v1234567890`
    }
    return ''
  }

  return (
    <section className="page-panel property-detail">
      <div className="detail-breadcrumb">
        <button onClick={() => navigate('/Vente')} className="breadcrumb-btn">
          ← Toutes les annonces
        </button>
      </div>

      <div className="detail-header">
        <div className="detail-meta">
          <span className="meta-badge">{property.status}</span>
          <span className="meta-badge">·</span>
          <span className="meta-badge">{property.type}</span>
          <span className="meta-badge">·</span>
          <span className="meta-badge">{property.location}</span>
        </div>
        <h1 className="detail-title">{property.title}</h1>
        <div className="detail-ref-price">
          <span className="detail-ref">RÉFÉRENCE {property.reference}</span>
          <span className="detail-price">{property.price}</span>
          <span className="detail-available">DISPONIBLE</span>
        </div>
      </div>

      <div className="detail-layout">
        <div className="detail-main">
          <img src={property.imageUrl} alt={property.title} className="detail-image" />

          <div className="detail-section">
            <h2>À propos de ce bien</h2>
            <p>{property.details}</p>
          </div>

          <div className="detail-section">
            <h2>Emplacement</h2>
            <div className="map-embed">
              <iframe
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true}
                src={getMapEmbedUrl()}
              ></iframe>
            </div>
          </div>
        </div>

        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <div className="detail-specs">
              <div className="spec-item">
                <span className="spec-label">SURFACE</span>
                <span className="spec-value">{property.details.match(/(\d+)\s*m²/) ? property.details.match(/(\d+)\s*m²/)[1] + ' m²' : 'N/A'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">PIÈCES</span>
                <span className="spec-value">{property.details.includes('S+3') ? 'S+3' : property.details.includes('S+2') ? 'S+2' : 'N/A'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">SALLES DE BAIN</span>
                <span className="spec-value">2</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">ÉTAGE</span>
                <span className="spec-value">3</span>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3 className="sidebar-title">CARACTÉRISTIQUES</h3>
            <div className="characteristics-tags">
              <span className="char-tag">Parking</span>
              <span className="char-tag">Ascenseur</span>
              <span className="char-tag">Climatisation</span>
              <span className="char-tag">Terrasse</span>
            </div>
          </div>

          <a href={`https://wa.me/21650123456?text=Intéressé(e) par: ${property.title}`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            WHATSAPP
          </a>

          <button className="btn btn-dark">
            DEMANDER DES INFORMATIONS
          </button>
        </aside>
      </div>

      <FloatingActions />
    </section>
  )
}
