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
import BookYourAppointment from './Pages/BookYourAppointment.jsx'

import NotFound from './Pages/NotFound.jsx'
import TermsAndConditions from './Pages/TermsAndCondition.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'

import Overview from './Pages/AboutUs/Overview.jsx'
import ENT from './Pages/OurSpecialities/ENT.jsx'
import LaparoscopicSurgery from './Pages/OurSpecialities/LaparoscopicSurgery.jsx'
import HysteroscopicSurgery from './Pages/OurSpecialities/HysteroscopicSurgery.jsx'
import Opthamology from './Pages/OurSpecialities/Opthamology.jsx'
import InterventionalRadiology from './Pages/OurSpecialities/InterventionalRadiology.jsx'
import BariatricSurgery from './Pages/OurSpecialities/BariatricSurgery.jsx'
import ClinicalGenetics from './Pages/OurSpecialities/ClinicalGenetics.jsx'
import OncoSurgery from './Pages/OurSpecialities/OncoSurgery.jsx'
import LaserSurgeryforPiles from './Pages/OurSpecialities/LaserSurgeryforPiles.jsx'
import UrologySurgery from './Pages/OurSpecialities/UrologySurgery.jsx'
import NeuroSurgery from './Pages/OurSpecialities/NeuroSurgery.jsx'
import PlasticSurgery from './Pages/OurSpecialities/PlasticSurgery.jsx'
import BurnUnit from './Pages/OurSpecialities/BurnUnit.jsx'
import ObsAndGynea from './Pages/OurSpecialities/ObsAndGynea.jsx'
import InfertilityAndIVF from './Pages/OurSpecialities/InfertilityAndIVF.jsx'
import WomensClinic from './Pages/OurSpecialities/WomensClinic.jsx'
import BreastClinic from './Pages/OurSpecialities/BreastClinic.jsx'
import HighRiskPregnancy from './Pages/OurSpecialities/HighRiskPregnancy.jsx'
import PediatricsAndNeonatology from './Pages/OurSpecialities/PediatricsAndNeonatology.jsx'
import Orthopedics from './Pages/OurSpecialities/Orthopedics.jsx'
import Trauma from './Pages/OurSpecialities/Trauma.jsx'
import Cardiology from './Pages/OurSpecialities/Cardiology.jsx'
import DentalCare from './Pages/OurSpecialities/DentalCare.jsx'
import AnesthesiologyAndPain from './Pages/OurSpecialities/AnesthesiologyAndPain.jsx'
import Nephrology from './Pages/OurSpecialities/Nephrology.jsx'
import Gastroenterology from './Pages/OurSpecialities/Gastroenterology.jsx'
import Colposcopy from './Pages/OurSpecialities/Colposcopy.jsx'
import PsychiatricAndPsychology from './Pages/OurSpecialities/PsychiatricAndPsychology.jsx'
import Dermatology from './Pages/OurSpecialities/Dermatology.jsx'
import RespiratoryMedicine from './Pages/OurSpecialities/RespiratoryMedicine.jsx'
import PRPTreatmentGynaecology from './Pages/OurSpecialities/PRPTreatmentGynaecology.jsx'
import LaserTreatmentGynecology from './Pages/OurSpecialities/LaserTreatmentGynecology.jsx'
import PainManagement from './Pages/OurSpecialities/PainManagement.jsx'
import InternalMedicine from './Pages/OurSpecialities/InternalMedicine.jsx'
import DiagnosticServices from './Pages/OurSpecialities/DiagnosticServices.jsx'
import NeuroPhysicianAndStrokeMedicine from './Pages/OurSpecialities/NeuroPhysicianAndStrokeMedicine.jsx'
import WhyChooseUs from './Pages/AboutUs/WhyChooseUs.jsx'
import DirectorsMessage from './Pages/AboutUs/DirectorsMessage.jsx'
import Consultants from './Pages/Consultants.jsx'
import FacilitiesOfHospital from './Pages/FacilitiesOfHospital.jsx'
import TpaCashless from './Pages/TPACashless.jsx'
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
        path: 'directors-message',
        element: <DirectorsMessage />,
        children: []
      },
      {
        path: 'Why-choose-us',
        element: <WhyChooseUs />,
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
      {
        path: 'terms-and-condition',
        element: <TermsAndConditions />,
        children: []
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
        children: []
      },
      // for jjh website matter.....................................


      {
        path: 'speciality/general-and-advanced-laparoscopy-surgery',
        element: <LaparoscopicSurgery/> ,
        children: []
      },
      {
        path: 'speciality/advanced-hysteroscopy',
        element: <HysteroscopicSurgery /> ,
        children: []
      },
      {
        path: 'speciality/interventional-radiology',
        element: <InterventionalRadiology />,
        children: []
      },
      {
        path: 'speciality/clinical-genetics',
        element: <ClinicalGenetics />,
        children: []
      },
      {
        path: 'speciality/surgical-oncology',
        element: <OncoSurgery />,
        children: []
      },
      {
        path: 'speciality/bariatric-and-weight-loss-surgery',
        element:<BariatricSurgery /> ,
        children: []
      },
      {
        path: 'speciality/laser-treatment-in-general-surgery',
        element:<LaserSurgeryforPiles /> ,
        children: []
      },
      {
        path: 'speciality/urology',
        element: <UrologySurgery />,
        children: []
      },
      {
        path: 'speciality/neuro-surgery',
        element:<NeuroSurgery /> ,
        children: []
      },
      {
        path: 'speciality/plastic-surgery',
        element: <PlasticSurgery />,
        children: []
      },
      {
        path: 'speciality/burn-unit',
        element: <BurnUnit />,
        children: []
      },
      {
        path: 'speciality/obstetrics-and-gynaecology',
        element: <ObsAndGynea />,
        children: []
      },
      {
        path: 'speciality/infertility-and-ivf',
        element: <InfertilityAndIVF />,
        children: []
      },
      {
        path: 'speciality/well-womens-clinic',
        element:<WomensClinic /> ,
        children: []
      },
      {
        path: 'speciality/breast-clinic',
        element: <BreastClinic/>,
        children: []
      },
      {
        path: 'speciality/high-risk-pregnancy-care',
        element: <HighRiskPregnancy />,
        children: []
      },
      {
        path: 'speciality/pediatrics-and-neonatology',
        element:<PediatricsAndNeonatology /> ,
        children: []
      },
      {
        path: 'speciality/orthopaedics-and-joint-replacement',
        element: <Orthopedics />,
        children: []
      },
      {
        path: 'speciality/trauma-centre-and-emergency-services',
        element: <Trauma />,
        children: []
      },
      {
        path: 'speciality/cardiology',
        element: <Cardiology />,
        children: []
      },
      {
        path: 'speciality/opthalmology',
        element:<Opthamology /> ,
        children: []
      },
      {
        path: 'speciality/ear-nose-and-throat',
        element: <ENT />,
        children: []
      },
      {
        path: 'speciality/dentistry',
        element: <DentalCare />,
        children: []
      },
      {
        path: 'speciality/anaesthesiology-and-critical-care',
        element: <AnesthesiologyAndPain />,
        children: []
      },
      {
        path: 'speciality/nephrology',
        element: <Nephrology />,
        children: []
      },
      {
        path: 'speciality/department-of-gastroenterology',
        element: <Gastroenterology />,
        children: []
      },
      {
        path: 'speciality/colposcopy',
        element: <Colposcopy />,
        children: []
      },
      {
        path: 'speciality/neuro-physician-and-stroke-medicine',
        element: <NeuroPhysicianAndStrokeMedicine />,
        children: []
      },
      {
        path: 'speciality/psychiatric-and-psychology',
        element: <PsychiatricAndPsychology />,
        children: []
      },
      {
        path: 'speciality/skin-care-and-dermatology',
        element: <Dermatology />,
        children: []
      },
      {
        path: 'speciality/diagnostic-services',
        element: <DiagnosticServices />,
        children: []
      },
      {
        path: 'speciality/pain-management',
        element: <PainManagement />,
        children: []
      },
      {
        path: 'speciality/internal-medicine',
        element: <InternalMedicine />,
        children: []
      },
      {
        path: 'speciality/laser-treatment-in-gynecology',
        element: <LaserTreatmentGynecology />,
        children: []
      },
      {
        path: 'speciality/prp-treatment-gynecology',
        element: <PRPTreatmentGynaecology />,
        children: []
      },
      {
        path: 'speciality/respiratory-medicine',
        element: <RespiratoryMedicine />,
        children: []
      },
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

