import type { PropertyItem } from '../types'

type Props = {
  title: string
  subtitle: string
  properties: PropertyItem[]
}

export default function Listing({ title, subtitle, properties }: Props) {
  return (
    <section className="page-panel">
      <div className="page-intro">
        <p className="eyebrow">{title}</p>
        <h2>{subtitle}</h2>
        <p>
          Retrouvez des villas, appartements et terrains dans les quartiers les plus recherchés de la région.
        </p>
      </div>
      <div className="card-grid">
        {properties.map((property) => (
          <article className="property-card property-card-listing" key={property.title}>
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
        ))}
      </div>
    </section>
  )
}
