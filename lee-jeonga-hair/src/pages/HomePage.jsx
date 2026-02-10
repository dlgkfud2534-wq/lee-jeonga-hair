import Hero from '../components/Hero'
import Services from '../components/Services'
import Products from '../components/Products'
import Stylists from '../components/Stylists'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Reservation from '../components/Reservation'
import Location from '../components/Location'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <Stylists />
      <Gallery />
      <Reviews />
      <Reservation />
      <Location />
    </main>
  )
}
