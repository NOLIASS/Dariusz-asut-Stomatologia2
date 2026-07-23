import './hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="hero-content">
          <div className="hero-icons">
            <button className="icon-btn" aria-label="Telegram">✈️</button>
            <button className="icon-btn" aria-label="WhatsApp">💬</button>
          </div>

          <span className="icon-circle hero-icon">🦷</span>

          <h1>
            Zaufaj swój <span className="text-accent">uśmiech</span> doświadczeniu
          </h1>

          <p className="hero-lead">
            Ponad 10 lat doświadczenia, nowoczesny sprzęt i indywidualne podejście do każdego
            pacjenta — prywatna opieka bez pośpiechu i bez kolejek NFZ.
          </p>

          <button className="btn-primary hero-cta">Umów wizytę</button>

          <div className="hero-proof">
            <div className="avatar-stack">
              <span className="avatar" />
              <span className="avatar" />
              <span className="avatar" />
            </div>
            <div className="hero-proof-text">
              <span className="stars">★★★★★</span>
              <span className="hero-subtext">+1000 zadowolonych pacjentów</span>
            </div>
          </div>
        </div>

        <span className="hero-photo-caption">Gabinet Stomatologiczny</span>

        <div className="badge-offer hero-badge">
          <strong>Konsultacja wstępna</strong>
          <span>Pierwsza wizyta z pełną diagnostyką — plan leczenia i koszt przed rozpoczęciem</span>
        </div>
      </div>
    </section>
  )
}