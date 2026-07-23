// api/reviews.ts
// Serverless endpoint (Vercel / Netlify Functions style).
// Keeps the Google API key on the server — never expose it in frontend code.

export default async function handler(_req: Request): Promise<Response> {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID // wklej swój place_id do zmiennych środowiskowych
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY // klucz też trzymamy tylko po stronie serwera

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&language=pl&key=${API_KEY}`

  const res = await fetch(url)
  const data = await res.json()

  const reviews = (data.result?.reviews ?? []).map((r: any) => ({
    author: r.author_name,
    rating: r.rating,
    text: r.text,
    relativeTime: r.relative_time_description,
    profilePhoto: r.profile_photo_url,
  }))

  return new Response(
    JSON.stringify({
      rating: data.result?.rating,
      totalReviews: data.result?.user_ratings_total,
      reviews,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        // Google wymaga, by dane nie były cache'owane zbyt długo
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    },
  )
}