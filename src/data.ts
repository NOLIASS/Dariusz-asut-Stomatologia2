import type { Pillar, Service, Testimonial, HeroFact } from './types'

export const heroFacts: HeroFact[] = [
  { value: '10+ lat', label: 'DOŚWIADCZENIA' },
  { value: 'PL / EN / NL', label: 'JĘZYKI WIZYTY' },
  { value: '100% PRYWATNIE', label: 'BEZ LIMITÓW NFZ' },
]

export const pillars: Pillar[] = [
  {
    number: '01 / PRECYZJA',
    title: 'Diagnostyka bez skrótów',
    description:
      'Każde leczenie — od ubytku po odbudowę protetyczną — zaczyna się od dokładnej diagnozy i planu dopasowanego do Twojej sytuacji, nie do grafiku.',
  },
  {
    number: '02 / MATERIAŁY',
    title: 'Tylko sprawdzone rozwiązania',
    description:
      'Pracujemy na materiałach najwyższej jakości, zachowując przy tym uczciwe, przejrzyste ceny — bez ukrytych kosztów po wizycie.',
  },
  {
    number: '03 / KOMFORT',
    title: 'Pacjent, nie numerek',
    description:
      'Kameralny gabinet oznacza więcej czasu na rozmowę, znieczulenie dopasowane do Twoich potrzeb i opiekę po zabiegu.',
  },
]

export const servicesLeft: Service[] = [
  { name: 'Stomatologia zachowawcza', tag: 'próchnica / wypełnienia' },
  { name: 'Protetyka stomatologiczna', tag: 'korony / mosty / protezy' },
  { name: 'Chirurgia stomatologiczna', tag: 'ekstrakcje / implanty' },
  { name: 'Endodoncja', tag: 'leczenie kanałowe' },
]

export const servicesRight: Service[] = [
  { name: 'Stomatologia estetyczna', tag: 'bonding / licówki' },
  { name: 'Higiena i profilaktyka', tag: 'skaling / piaskowanie' },
  { name: 'Konsultacje', tag: 'plan leczenia' },
  { name: 'Wizyty w j. angielskim / niderlandzkim', tag: 'english / nederlands' },
]

export const approachPoints: string[] = [
  'Termin dopasowany do Ciebie, nie do miesięcy oczekiwania',
  'Pełna informacja o kosztach przed rozpoczęciem leczenia',
  'Ciągłość opieki — od diagnozy po długoterminowe utrzymanie efektu',
  'Gabinet działa w ramach wizyt prywatnych, bez limitów NFZ',
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Lekarz poświęcił czas na wyjaśnienie każdego etapu leczenia — czułam się partnerem w procesie, a nie kolejnym numerkiem w grafiku.',
    author: 'pacjentka, leczenie zachowawcze',
  },
  {
    quote:
      'Doceniam przejrzystość cen ustalonych przed zabiegiem i spokojne, dokładne podejście podczas samej wizyty.',
    author: 'pacjent, leczenie protetyczne',
  },
  {
    quote:
      'Umówienie wizyty w języku angielskim było bardzo pomocne — poczułem się swobodnie mimo bariery językowej.',
    author: 'pacjent zagraniczny',
  },
]

export const contactInfo = {
  address: 'ul. Macedońska 3, 51-113 Wrocław',
  phone: '696 424 404',
  phoneHref: '+48696424404',
  email: 'dariuszlasut@gmail.com',
  mapSrc: 'https://www.google.com/maps?q=51.1339164,17.0316707&z=15&output=embed',
}
