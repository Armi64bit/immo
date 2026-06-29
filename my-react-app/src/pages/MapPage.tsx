import { useState } from 'react'
import type { PropertyItem } from '../types'

type Props = {
  properties: PropertyItem[]
  zones: string[]
}

export default function MapPage({ properties, zones }: Props) {
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null)

  const getMapEmbedUrl = () => {
    if (selectedProperty && selectedProperty.lat && selectedProperty.lng) {
      const { lat, lng } = selectedProperty
      // Center map on property with red marker
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.827597858!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${lat}%2C${lng}!5e0!3m2!1sen!2stn!4v1640000000000&q=${lat},${lng}`
    }
    // Default view Tunis
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105481.66928306253!2d10.146305!3d36.806389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e340c5c29f8d5d%3A0x263df8b88e42b689!2sTunis!5e0!3m2!1sen!2stn!4v1640000000000`
  }

  return (
    <section className="page-panel">
      <div className="page-intro">
        <p className="eyebrow">Carte</p>
        <h2>Carte des biens</h2>
        <p>Localisation approximative de nos biens dans le Grand Tunis.</p>
      </div>

      <div className="map-layout">
        <div className="map-container">
          <iframe
            key={selectedProperty?.reference}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '28px' }}
            src={getMapEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte des biens"
          />
          {selectedProperty && (
            <div className="map-pin-marker">
              <div className="pin-icon">📍</div>
              <div className="pin-label">{selectedProperty.title}</div>
            </div>
          )}
          {selectedProperty && (
            <div className="map-selected-card">
              <div>
                <strong>{selectedProperty.title}</strong>
                <p className="selected-location">{selectedProperty.location}</p>
              </div>
              <div className="selected-price">{selectedProperty.price}</div>
            </div>
          )}
          <div className="map-markers-info">
            <p className="markers-legend">
              <span className="marker-pin">📍</span> {properties.filter(p => p.lat && p.lng).length} biens sur la carte
            </p>
          </div>
        </div>

        <div className="properties-sidebar">
          <div className="sidebar-header">
            <h3>Biens disponibles</h3>
            <p className="sidebar-count">{properties.length} biens</p>
          </div>
          <div className="properties-list">
            {properties.map((property) => (
              <button
                key={property.reference}
                className={`property-list-item ${selectedProperty?.reference === property.reference ? 'active' : ''}`}
                onClick={() => setSelectedProperty(property)}
              >
                <div className="property-list-image">
                  <img src={property.imageUrl} alt={property.title} />
                </div>
                <div className="property-list-content">
                  <p className="property-list-label">{property.type} · {property.location}</p>
                  <h4>{property.title}</h4>
                  <p className="property-list-price">{property.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
