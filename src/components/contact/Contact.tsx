// Contact.tsx
import './contact.css'

export default function Contact() {
  return (
    <section className="contact" id="kontakt">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Kontakt i lokalizacja</span>
          <h2>Umów wizytę</h2>
          <div className="contact-details">
            <p><strong>Adres:</strong> ul. Macedońska 3, 51-113 Wrocław</p>
            <p><strong>Telefon:</strong> <a href="tel:+48696424404">696 424 404</a></p>
            <p><strong>E-mail:</strong> <a href="mailto:dariuszlasut@gmail.com">dariuszlasut@gmail.com</a></p>
            <p><strong>Wizyty:</strong> wyłącznie prywatne, po wcześniejszym umówieniu telefonicznym</p>
          </div>
          <a href="tel:+48696424404" className="btn-primary contact-cta">Zadzwoń i umów wizytę</a>
        </div>

        <div className="map-frame">
          <iframe
            src="https://www.google.com/maps?q=51.1339164,17.0316707&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa — lokalizacja gabinetu"
          />
        </div>
      </div>
    </section>
  )
}