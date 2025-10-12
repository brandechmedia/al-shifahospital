import './App.css'
import { Outlet }
  from 'react-router-dom'
import NavigationB from './Component/NavigationB.jsx'
import Footer from './Component/Footer.jsx'
import CurrentRoute from './Component/CurrentRoute.jsx'


function App() {

  return (
    <>
      {/* ff918d hexa color code for webstie 
    74cef0 sky blue color for website
     */}
      <NavigationB  />
      <div className="">
        <CurrentRoute />
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
export default App