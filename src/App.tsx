import Cennik from './components/cennik/Cennik'
import Opinie from './components/opinie/Opinie'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import MainProp from './components/main/main_prop/MainProp'
import MainZub from './components/main/main_zub/MainZub'


export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Hero />        {/* гачок: обіцянка + CTA */}
      <MainProp />    {/* хто ти, чим займаєшся, послуги */}
      <MainZub />      {/* чому це важливо (освіта + довіра) */}
      <Cennik />      {/* прозора ціна знімає головне заперечення */}
      <Opinie />      {/* соц. доказ перед фінальним CTA */}
      <Contact />     {/* конкретний заклик до дії + карта */}
      <Footer />
    </div>
  )
}
