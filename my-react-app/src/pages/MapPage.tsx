type Props = {
  zones: string[]
}

export default function MapPage({ zones }: Props) {
  return (
    <section className="page-panel">
      <div className="page-intro">
        <p className="eyebrow">Carte interactive</p>
        <h2>Visualisez les biens par secteur et par prix.</h2>
        <p>Cette vue prépare la future intégration Google Maps avec des points d’intérêt.</p>
      </div>
      <div className="map-placeholder">
        <p>Carte Google Maps à venir</p>
        <div className="map-pins">
          {zones.map((zone) => (
            <span key={zone}>{zone}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
