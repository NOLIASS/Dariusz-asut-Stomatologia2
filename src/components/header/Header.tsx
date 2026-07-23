import { useState } from 'react'
import './header.css'

const NAV_LINKS = [
  { href: '#uslugi', label: 'Nasze usługi' },
  { href: '#gabinet', label: 'O gabinecie' },
  { href: '#cennik', label: 'Cennik' },
  { href: '#opinie', label: 'Opinie' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <h1>Dariusz Łasut Stomatologia</h1>

      <div className={`header-link ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button className="phone-button">696 424 404</button>

      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}