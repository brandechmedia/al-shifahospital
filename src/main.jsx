import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'

import Home from './Component/Home.jsx'
import OurFounders from './Pages/AboutUs/OurFounders.jsx'

import PatientsGuide from './Pages/PatientsGuide.jsx'
import Gallery from './Pages/Gallery.jsx'
import NotFound from './Pages/NotFound.jsx'
import Overview from './Pages/AboutUs/Overview.jsx'
import BookYourAppointment from './Pages/BookYourAppointment.jsx'

import Consultants from './Pages/Consultants.jsx'
import FacilitiesOfHospital from './Pages/FacilitiesOfHospital.jsx'
import TpaCashless from './Pages/TPACashless.jsx'

// import PainManagement from './Pages/OurSpecialities/PainManagement.jsx'
// import Facilities from './Component/Facilities.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <> <App /></>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'book-appointment',
        element: <BookYourAppointment />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'patients-guide',
        element: <PatientsGuide />,
        children: []
      },
      {
        path: 'gallery',
        element: <Gallery />,
        children: []
      },
      {
        path: 'facilities',
        element: <FacilitiesOfHospital />,
        children: []
      },
      {
        path: 'our-founder',
        element: <OurFounders />,
        children: []
      },
      {
        path: 'overview',
        element: <Overview />,
        children: []
      },
      {
        path: 'consultants',
        element: <Consultants />,
        children: []
      },
      {
        path: 'tpa-cashless-facilities',
        element: <TpaCashless />,
        children: []
      },
      // for jjh website matter.....................................


    
// end of jjh.specialities.............................................................................. .
    ]
  },
  {
    path: '/our-founder',
    element: <> <OurFounders /></>,
    children: [
      {
        path: 'about',
        element: <About />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />,
    children: []
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>,
)

