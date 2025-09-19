import Head from './Head'
import About from './About'
// import NewsImages from './NewsImages' 
// import { FAQ } from './FAQ'
// import VideoOfCentre from './VideoOfCentre'
// import Ivfteam from '../Pages/Ivfteam'
import Contact from './Contact'
import Stats from './Stats'
import Appointment from './Appointment'
import { Helmet } from "react-helmet";
import Arrow from './Arrow'
import ContactButton from './ContactButton'
import Facilities from './Facilities'
import NewsAndEvents from './NewsAndEvents'
import AboutHospital from './AboutHospital'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Jeevan Jyoti Hospital | Best Hospital in Prayagraj</title>
        <meta name="description" content="Arpit Test Tube Baby Centre, Prayagraj – trusted IVF and fertility clinic with advanced technology, expert team, and high success rates. Book your consultation today!" />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <Arrow />
      <ContactButton />
      <Head />
      <About />
      <AboutHospital/>
      {/* <Rewards /> */}
      <Facilities/>
      {/* <Treatements /> */}
      <Stats />
      {/* <NewsImages/> */}
      <Contact />
      <NewsAndEvents/>
      {/* <GoogleReview /> */}
      {/* <FAQ /> */}
      <Appointment />
    </div>
  )
}
export default Home