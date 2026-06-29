import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { PropertyItem } from '../types'

type Props = {
  title: string
  subtitle: string
  properties: PropertyItem[]
}

export default function Listing({ title, subtitle, properties }: Props) {
  const [filters, setFilters] = useState({
    type: 'Tous',
    zone: 'Tous',
    priceMin: '',
    priceMax: '',
    surfaceMin: '',
    pieces: 'Tous'
  })

  return (
    <section className="page-panel" style={{ padding: '2rem' ,borderRadius: '0.5rem',}}>
      <div className="page-intro">
        <h3 className="eyebrow">{title}</h3>
        <h3>{subtitle}</h3>
        <p>
          Retrouvez des villas, appartements et terrains dans les quartiers les plus recherchés de la région.
        </p>
      </div>

      <div className="filter-panel">
        <div className="filter-group">
          <label>TYPE</label>
          <select 
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option>Tous</option>
            <option>Villa</option>
            <option>Appartement</option>
            <option>Terrain</option>
          </select>
        </div>

        <div className="filter-group">
          <label>ZONE</label>
          <select
            value={filters.zone}
            onChange={(e) => setFilters({ ...filters, zone: e.target.value })}
          >
            <option>Tous</option>
            <option>Menzah</option>
            <option>La Marsa</option>
            <option>Carthage</option>
          </select>
        </div>

        <div className="filter-group">
          <label>PRIX MIN</label>
          <input
            type="number"
            placeholder="Min"
            value={filters.priceMin}
            onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
          />
        </div>

        <div className="filter-group">
          <label>PRIX MAX</label>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceMax}
            onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
          />
        </div>

        <div className="filter-group">
          <label>SURFACE MIN</label>
          <input
            type="number"
            placeholder="Min"
            value={filters.surfaceMin}
            onChange={(e) => setFilters({ ...filters, surfaceMin: e.target.value })}
          />
        </div>

        <div className="filter-group">
          <label>PIÈCES</label>
          <select
            value={filters.pieces}
            onChange={(e) => setFilters({ ...filters, pieces: e.target.value })}
          >
            <option>Tous</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
        </div>
      </div>

      <div className="card-grid">
        {properties.map((property) => (
          <Link key={property.title} to={`/property/${property.reference}`} className="property-card-link">
            <article className="property-card property-card-listing">
              <div className="property-card-image">
                <img src={property.imageUrl} alt={property.title} />
                <span className="property-status">{property.status}</span>
                <span className="property-star">★</span>
                <span className="property-ref">{property.reference}</span>
              </div>
              <div className="property-card-body">
                <p className="property-label">{property.type} · {property.location}</p>
                <h3>{property.title}</h3>
                <p className="property-meta">{property.details}</p>
              </div>
              <div className="property-price">{property.price}</div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
