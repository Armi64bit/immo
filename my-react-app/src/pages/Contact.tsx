export default function Contact() {
  return (
    <section className="page-panel contact-grid">
      <div className="page-intro">
        <p className="eyebrow">Contact</p>
        <h2>Nous sommes à votre écoute.</h2>
        <p>Pour toute question, visite, ou demande de recrutement.</p>
        <ul className="contact-list">
          <li>Email : contact@immoconnect.tn</li>
          <li>Téléphone : +216 71 000 000</li>
          <li>Recrutement : recrutement@immoconnect.tn</li>
        </ul>
      </div>
      <form className="form-card">
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message" rows={5} />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  )
}
