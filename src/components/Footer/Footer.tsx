import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <span className="footer-logo">
          Dariusz Łasut <span className="text-accent">· Stomatologia</span>
        </span>
        <div className="footer-contact">
          
            <a href="https://www.google.com/maps/search/?api=1&query=ul.+Macedo%C5%84ska+3%2C+51-113+Wroc%C5%82aw"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            ul. Macedońska 3, 51-113 Wrocław
          </a>
          <a href="tel:+48696424404">696 424 404</a>
        </div>
      </div>

      <div className="footer-content">
        <nav className="footer-links">
          <a href="#uslugi">Usługi</a>
          <a href="#gabinet">O gabinecie</a>
          <a href="#opinie">Opinie</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <span className="footer-copy">© {new Date().getFullYear()} Gabinet Dariusz Łasut, Wrocław</span>
      </div>
    </footer>
  )
}