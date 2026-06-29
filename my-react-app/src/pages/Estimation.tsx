export default function Estimation() {
  return (
    <section className="page-panel">
      <div className="page-intro">
        <p className="eyebrow">Estimation</p>
        <h2>Obtenez une estimation rapide et fiable.</h2>
        <p>Remplissez les informations ci-dessous et notre équipe vous répondra rapidement.</p>
      </div>
      <form className="form-card">
        <input type="text" placeholder="Nom complet" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Téléphone" />
        <input type="text" placeholder="Type de bien" />
        <textarea placeholder="Décrivez votre bien et vos besoins" rows={5} />
        <button type="submit">Demander une estimation</button>
      </form>
    </section>
  )
}
