import { useEffect, useState } from 'react'
import './opinie.css'

interface GoogleReview {
  author: string
  rating: number
  text: string
  relativeTime: string
  profilePhoto: string
}

const FALLBACK: GoogleReview[] = [
  {
    author: 'Pacjentka',
    rating: 5,
    text: 'Profesjonalne podejście i uczciwe ceny ustalone przed rozpoczęciem leczenia.',
    relativeTime: '',
    profilePhoto: '',
  },
  {
    author: 'Pacjent',
    rating: 5,
    text: 'Spokojna atmosfera i dokładne wyjaśnienie każdego etapu leczenia.',
    relativeTime: '',
    profilePhoto: '',
  },
  {
    author: 'Pacjent zagraniczny',
    rating: 5,
    text: 'Wizyta po angielsku przebiegła bardzo sprawnie, czułem się swobodnie.',
    relativeTime: '',
    profilePhoto: '',
  },
]

export default function Opinie() {
  const [reviews, setReviews] = useState<GoogleReview[]>(FALLBACK)
  const [rating, setRating] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews?.length) setReviews(data.reviews.slice(0, 3))
        if (data.rating) setRating(data.rating)
      })
      .catch(() => {
        /* zostajemy przy FALLBACK */
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="opinie" id="opinie">
      <div className="wrap">
        <div className="opinie-head">
          <span className="eyebrow">Głos pacjentów</span>
          <h2>Opinie o gabinecie</h2>
          {rating && (
            <p className="opinie-rating">
              ★ {rating.toFixed(1)} na Google
            </p>
          )}
        </div>

        <div className="opinie-grid">
          {loading ? (
            <p>Ładowanie opinii…</p>
          ) : (
            reviews.map((r, i) => (
              <div className="opinie-card" key={i}>
                <span className="stars">{'★'.repeat(Math.round(r.rating))}</span>
                <p>„{r.text}"</p>
                <div className="who">— {r.author}, Google</div>
              </div>
            ))
          )}
        </div>

        <a
          className="opinie-google-link"
          href="https://maps.app.goo.gl/5jxV6YLzM5zPdj19A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zobacz wszystkie opinie na Google →
        </a>
      </div>
    </section>
  )
}