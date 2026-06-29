import { useState } from 'react'
import type { PropertyItem } from '../types'

type Props = {
  properties: PropertyItem[]
  zones: string[]
}

export default function MapPage({ properties, zones }: Props) {
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null)

  return (
    <section className="page-panel">
      <div className="page-intro">
        <p className="eyebrow">Carte</p>
        <h2>Carte des biens</h2>
        <p>Localisation approximative de nos biens dans le Grand Tunis.</p>
      </div>

      <div className="map-layout">
        <div className="map-container">
          <div className="map-placeholder">
            <p>Google Maps</p>
            {selectedProperty && (
              <div className="map-selected-info">
                <strong>{selectedProperty.title}</strong>
                <p>{selectedProperty.location}</p>
                <p>{selectedProperty.price}</p>
              </div>
            )}
            <p className="map-hint">Cliquez sur un bien pour le localiser</p>
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
