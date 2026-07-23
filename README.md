# Dariusz Łasut — Stomatologia (React + TypeScript)

Strona typu landing page dla prywatnego gabinetu stomatologicznego, zbudowana w
React + TypeScript (Vite).

## Struktura

```
src/
  components/       # Header, Hero, Philosophy, Services, Approach, Testimonials, Contact, Footer, SmileArc
  hooks/useReveal.ts # hook do animacji scroll-reveal (IntersectionObserver)
  data.ts           # treści (usługi, opinie, dane kontaktowe) - edytuj tutaj
  types.ts          # typy TypeScript dla danych
  index.css         # design tokens (kolory, typografia) i style
```

## Uruchomienie

```bash
npm install
npm run dev       # serwer deweloperski, domyślnie http://localhost:5173
npm run build     # build produkcyjny do /dist
npm run preview   # podgląd builda produkcyjnego
```

## Design tokens (kolory)

| Zmienna       | Hex       | Zastosowanie                              |
|---------------|-----------|--------------------------------------------|
| `--petrol`    | `#123C3D` | kolor główny, nagłówki, tła ciemnych sekcji |
| `--petrol-2`  | `#0B2C2D` | sekcja kontaktowa (najciemniejszy)           |
| `--sage`      | `#CFE3DD` | miętowy akcent                              |
| `--sage-2`    | `#E7F1EC` | jasne tło sekcji (Approach)                  |
| `--porcelain` | `#FBF9F4` | tło strony, kolor "emalii"                   |
| `--gold`      | `#B08D57` | akcent / hover / CTA                        |
| `--gold-2`    | `#8F7040` | ciemniejsze złoto, hover na CTA              |
| `--charcoal`  | `#1E2726` | tekst podstawowy                             |

Fonty: **Fraunces** (nagłówki), **Inter** (tekst), **IBM Plex Mono** (etykiety, dane kontaktowe).

## Do zrobienia przed publikacją

- Zastąpić przykładowe opinie (`src/data.ts` → `testimonials`) realnymi, z odpowiednią zgodą pacjentów.
- Podmienić dane kontaktowe, jeśli się zmienią (`src/data.ts` → `contactInfo`).
