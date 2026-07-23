import './main-zub.css'

export default function MainZub() {
  return (
    <section className="main-zub">
      <div className="wrap">
        <span className="eyebrow">Dlaczego warto o to zadbać</span>
        <h2>
          <u>Zdrowie zębów</u>: podstawa pewności siebie, zdrowia i komfortu na co dzień
        </h2>

        <div className="zub-diagram">
          <div className="zub-card">
            <span className="pill pill-accent zub-card-tag">Pewność w kontaktach</span>
            <p>
              Zdrowy, naturalny uśmiech pomaga czuć się swobodnie — w rozmowie, w pracy i w
              codziennych relacjach
            </p>
          </div>

          <div className="zub-rings">
            <div className="zub-ring zub-ring-1" />
            <div className="zub-ring zub-ring-2" />

            <div className="zub-photo">
              <img src={`${import.meta.env.BASE_URL}images/usmichka.jpg`} alt="Zdrowy, biały uśmiech" />
            </div>

            <span className="pill zub-tag zub-tag-top">Wpływ na samoocenę</span>
            <span className="pill zub-tag zub-tag-right-top">Profilaktyka chorób jamy ustnej</span>
            <span className="pill zub-tag zub-tag-right-bottom">Świeży oddech</span>
            <span className="pill zub-tag zub-tag-bottom">Oszczędność czasu i kosztów</span>
            <span className="pill zub-tag zub-tag-left-bottom">Trwałość i zdrowie zębów</span>
          </div>

          <p className="zub-note">
            Dbałość o zdrowy uśmiech to coś więcej niż estetyka. Zadbane zęby to mniejsze ryzyko
            powikłań, mniej wizyt awaryjnych w przyszłości i realny wpływ na codzienne
            samopoczucie.
          </p>
        </div>
      </div>
    </section>
  )
}