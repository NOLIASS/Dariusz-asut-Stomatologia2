// Cennik.tsx
import './cennik.css'

const PRICES = [
  { name: 'Konsultacja i przegląd', price: 'od 150 zł' },
  { name: 'Wypełnienie (leczenie próchnicy)', price: 'od 250 zł' },
  { name: 'Leczenie kanałowe', price: 'od 600 zł' },
  { name: 'Korona protetyczna', price: 'od 1200 zł' },
  { name: 'Higiena i piaskowanie', price: 'od 300 zł' },
  { name: 'Usunięcie zęba', price: 'od 200 zł' },
  { name: 'Wybielanie zębów', price: 'od 900 zł' },
  { name: 'Konsultacja implantologiczna', price: 'od 300 zł' },
]

export default function Cennik() {
  return (
    <section className="cennik" id="cennik">
      <div className="wrap">
        <div className="cennik-head">
          <span className="eyebrow">Przejrzyste zasady</span>
          <h2>Cennik</h2>
        </div>
        <p className="cennik-disclaimer">
          Poniższe stawki mają charakter orientacyjny. Ostateczny koszt leczenia ustalamy
          indywidualnie podczas konsultacji, zawsze przed rozpoczęciem zabiegu.
        </p>

        <div className="cennik-grid">
          {PRICES.map((item) => (
            <div className="cennik-row" key={item.name}>
              <span className="name">{item.name}</span>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="cennik-cta">
          <a href="#kontakt" className="btn-primary">Umów konsultację</a>
          <p>Podczas pierwszej wizyty otrzymasz pełną wycenę planu leczenia — bez zobowiązań.</p>
        </div>
      </div>
    </section>
  )
}