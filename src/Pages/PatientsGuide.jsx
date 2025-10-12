import React from 'react'
import { Helmet } from "react-helmet";

const PatientsGuide = () => {
  return (
    <>
    <Helmet>
        <title>Al-Shifa Hospital</title>
        <meta name="description" content="A complete IVF patient guide from Arpit Test Tube Baby Centre – step-by-step fertility journey, treatment options, FAQs, and support for hopeful parents." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
    <div className='w-11/12 md:w-4/5 m-auto pt-10 pb-24'>
     <h1 className='font-bold text-3xl my-3'> PatientsGuide</h1>
     <div className="my-8">
      Your health, our priority
      </div>

    </div>
    </>
  )
}

export default PatientsGuide;