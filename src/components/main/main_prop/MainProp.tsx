import './mainprop.css'

export default function MainProp() {
  return (
    <div className="main-prop">
      <span className="eyebrow" id="gabinet">
        Nasz gabinet
      </span>
      <h3>
        <u>Łączymy</u> precyzję leczenia z indywidualnym podejściem do zdrowia Twoich zębów,
        korzystając ze sprawdzonych materiałów i nowoczesnych metod
      </h3>

      <div className="main-prop-content">
        <div className="main-prop_text">
          <div className="prop_1">
            <div className="prop_card_head">
              <span className="pill pill-accent">O gabinecie</span>
              <span className="prop_arrow">↗</span>
            </div>
            <h4>Gabinet Dariusz Łasut, Wrocław</h4>
            <p>
              Kameralny gabinet stomatologiczny prowadzony osobiście przez lek. dent. Dariusza
              Łasuta — wizyty wyłącznie prywatne, bez limitów NFZ.
            </p>
          </div>

          <div className="prop_2">
            <img src={`${import.meta.env.BASE_URL}images/images.jpg`} alt="Wnętrze gabinetu stomatologicznego" />
          </div>

          <div className="prop_3">
            <span className="icon-circle prop_icon">🛡️</span>
            <h4>Twoje zdrowie i komfort — nasz priorytet</h4>
          </div>

          <div className="prop_4">
            <div className="prop_card_head">
              <span className="pill pill-accent">Dla nowych pacjentów</span>
              <span className="prop_arrow">↗</span>
            </div>
            <h4>Bezpłatna wstępna konsultacja i plan leczenia</h4>
            <p>
              Pierwsza wizyta obejmuje przegląd, rozmowę o oczekiwaniach i jasną wycenę dalszego
              leczenia — bez zobowiązań.
            </p>
          </div>
        </div>

        <div className="main-prop_uslugi" id="uslugi">
          <span className="pill">Stomatologia zachowawcza</span>
          <span className="pill">Protetyka stomatologiczna</span>
          <span className="pill">Stomatologia estetyczna</span>
          <span className="pill">Chirurgia stomatologiczna</span>
          <span className="pill">Endodoncja</span>
          <span className="pill">Higiena i profilaktyka</span>
          <span className="pill">Konsultacje w j. angielskim / niderlandzkim</span>
          <span className="pill">Znieczulenie dopasowane do pacjenta</span>
        </div>
      </div>
    </div>
  )
}