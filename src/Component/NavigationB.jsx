import React, { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Style/Style.css";
import "../Style/neonStyle.css";
import { VscLayoutPanel } from "react-icons/vsc";
// import LogoAB from '../assets/LogoAB.png'
// import ATTBClogo1 from "../assets/ATTBClogo1.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import LogoJJH from '../assets/Logo/LogoJJH.png'
import {
  ChevronDownIcon,
  PlusIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
// import { Button } from "@material-tailwind/react";
function NavigationB() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => !prev);
    setIsServicesDropdownOpen(false); // Close Services dropdown if About is opened
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen((prev) => !prev);
    setIsAboutDropdownOpen(false); // Close About dropdown if Services is opened
  };

  const toggleNestedDropdown = (menu) => {
    setIsNestedDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const [isOpen, setIsOpen] = useState(false);
  const navClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className=" hidde md:flex flex-wrap z-50 text-center justify-center md:justify-between py-2 px-1 md:px-3 bg-teal-800">
        <div className="flex flex-wrap">
          <span className="md:pr-8 text-sm my-2 md:mb-0 text-white">
            <IoCallOutline className="mr-2 hidden md:inline" />
            <a className="pr-3 text-sm hidden md:inline text-white" href="tel:9151037784">Phone: 0532 241 7252,</a>
            <a className="pr-6 text-sm text-white bg-red-600 p-2 md:px-4 rounded-lg" href="tel:9151037783">Emergency No. | +91 1800-1235460</a>
          </span>
          <span className="pr-8 text-sm text-white align-middle">
            <MdOutlineMail className="mr-2 hidden md:inline" />
            <a href="mailto:jeevanjyotihospital@gmail.com?subject=Inquiry&body=Hello, I have a question about..." className='hidden md:inline' target="_blank">jeevanjyotihospital@gmail.com</a>
          </span>
          <span className="pr-8 text-sm text-white bg-orane-500 px-4 p-1 rounded-lg border-2">
            <Link to='tpa-cashless-facilities'>TPA & Cashless Facilities</Link>
          </span>
        </div>

        <div className="hidden lg:flex">
          <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className="pr-8 text-sm text-white">
            <IoLocationOutline className="inline " />162 Bai Ka Bagh, Lowther Rd, Jeevan Jyoti Hospital, Prayagraj, Uttar Pradesh 211003
          </a>
        </div>
      </div>
      <nav className="bg-white py-2 px-4 shadow-sm sticky top-0 z-20">
        <div className="containe flex items-center justify-between">
          {/* <div className="text-white text-lg font-bold">ARPIT TEST TUBE BABY CENTRE</div> */}
          <Link to='/' className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
            <span className=" font-bol flex md:font-thin text-roe-400 ">
              <img src={LogoJJH} className="w-56 md:w-80" alt="" />
              {/* Jeevan Jyoti Hospital */}

            </span>
          </Link>
          <div className="hidden lg:flex space-x-4 relative">
            <Link to='/' className="text-whit text-black text-md font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Home</Link>
            <Link
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              onClick={toggleAboutDropdown}
              className="text-whit text-black focus:outline-none text-nowrap font-semibold text-md relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 "
            >
              About Us
              {/* <ChevronDownIcon className="h-5 w-5 inline" /> */}
            </Link>
            {isAboutDropdownOpen && (
              <div
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                className="absolute mt-4 pt-3 w-48 bg-white rounded-md shadow-lg z-10"
              >
                <Link to='overview' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Overview
                </Link>
                <Link to='our-founder' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Founder
                </Link>
                <Link to='directors-message' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Director's Message
                </Link>
                <Link to='why-choose-us' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Why Choose US
                </Link>
              </div>
            )}
            <div
              className={`dropdown mt-0 font-semibold text-nowrap text-md lg:inline-block lg:mt-0 hover:text-cyan-400  text-whit text-black md:text-white focus:outline-none relative inline-block after:block after:h-[2px] after:bg-cyan-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${isOpen ? "py-3" : ""}`} tabIndex={0}>
              Our Specialities
              <div className="dropdown-content overflow-scroll pb-20 h-screen w-80 font-thin mt-1">
                <a className="dropdownn">
                  <Link to='speciality/general-and-advanced-laparoscopy-surgery' className="dropbtnn">Advanced Laparoscopy Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/advanced-hysteroscopy' className="dropbtnn">Advanced Hysteroscopy Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/interventional-radiology' className="dropbtnn">Interventional Radiology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/clinical-genetics' className="dropbtnn">Clinical Genetics</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/surgical-oncology' className="dropbtnn">Onco Surgical Oncology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/bariatric-and-weight-loss-surgery' className="dropbtnn">Bariatric Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/laser-treatment-in-general-surgery' className="dropbtnn">Laser Surgery for Piles & Varicose Veins</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/urology' className="dropbtnn">Urology Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/neuro-surgery' className="dropbtnn">Neuro Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/plastic-surgery' className="dropbtnn">Plastic Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/burn-unit' className="dropbtnn">Burn Unit</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/obstetrics-and-gynaecology' className="dropbtnn">Obstetrics & Gynaecology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/infertility-and-ivf' className="dropbtnn">Infertility & IVF</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/well-womens-clinic' className="dropbtnn">Well Women’s Clinic</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/breast-clinic' className="dropbtnn">Breast Clinic</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/high-risk-pregnancy-care' className="dropbtnn">High Risk Pregnancy Care</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/pediatrics-and-neonatology' className="dropbtnn">Pediatrics & Neonatology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/orthopaedics-and-joint-replacement' className="dropbtnn">Orthopaedics & Joint Replacement</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/trauma-centre-and-emergency-services' className="dropbtnn">Trauma Centre</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/cardiology' className="dropbtnn">Cardiac Care Unit</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/opthalmology' className="dropbtnn">Department of Ophthalmology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/ear-nose-and-throat' className="dropbtnn">Department of ENT</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/dentistry' className="dropbtnn">Department of Dental Care</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/anaesthesiology-and-critical-care' className="dropbtnn">Department of Anaesthesiology & Pain</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/nephrology' className="dropbtnn">Department of Nephrology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/department-of-gastroenterology' className="dropbtnn">Department of Gastroenterology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/neuro-physician-and-stroke-medicine' className="dropbtnn">Neuro Physician and Stroke Medicine</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/colposcopy' className="dropbtnn">Colposcopy</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/neuro-physician-and-stroke-medicine' className="dropbtnn">Pulmonary Medicine</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/psychiatric-and-psychology' className="dropbtnn">Psychiatric Department & Psychology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/skin-care-and-dermatology' className="dropbtnn">Skin Care and Dermatology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/diagnostic-services' className="dropbtnn">Diagnostic Services</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/pain-management' className="dropbtnn">Pain Management</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/internal-medicine' className="dropbtnn">Internal Medicine</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/laser-treatment-in-gynecology' className="dropbtnn">Laser Treatment in Gynaecology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/prp-treatment-gynecology' className="dropbtnn">PRP Treatment in Gynaecology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/respiratory-medicine' className="dropbtnn">Respiratory Medicine</Link>
                </a>
              </div>
            </div>
            <Link to='facilities' className="text-whit text-black text-md font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Facilities
            </Link>
            <Link to='consultants' className="text-whit text-black text-md font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Consultants
            </Link>
            <Link to='patients-guide' className="hidden xl:inline-block text-nowrap text-whit text-black text-md font-semibold relative after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Patients Guide
            </Link>
            <Link to='gallery' className="text-whit text-black text-md font-semibold relative hidden xl:inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Gallery
            </Link>
          </div>
          <Link to='book-appointment' className="hidden text-nowrap lg:block text-white bg-teal-600 font-bold px-4 py-1 text-lg rounded-3xl">
            Contact Us
          </Link>
          <button
            className="lg:hidden text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>


        {/* ............................................................................... */}

        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white p-1 md:p-4 flex flex-col space-y-2">
            {/* <div className=""> */}
            <Link to='/' className="text-black py-3 border-b-2 font-semibold">
              Home
            </Link>
            <button
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              onClick={toggleAboutDropdown}
              className="text-black py-3 font-semibold text-left border-b-2 focus:outline-none"
            >
              About Us
              <ChevronDownIcon className="h-5 w-5 inline" />
            </button>
            {isAboutDropdownOpen && (
              <div
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                className="ml-4 bg-gray-800 text-white pl-5 py-2 rounded-md"
              >
                <Link to='our-founder' className="block px-4 py-2">
                  Our Founders
                </Link>
                <Link to='our-profile' className="block px-4 py-2">
                  Our Profile
                </Link>
                <Link to='our-vision-mission' className="block px-4 py-2">
                  Our Vision & Mission
                </Link>
                <Link to='spiritual-journey' className="block px-4 py-2">
                  Spiritual Journey
                </Link>
              </div>
            )}
            <button
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
              onClick={toggleServicesDropdown}
              className="text-black py-3 font-semibold text-left border-b-2 focus:outline-none">
              Our specialities
              <ChevronDownIcon className="h-5 w-5 inline" />
            </button>
            {isServicesDropdownOpen && (
              <div className="ml-4 h-96 bg-gray-800 text-white pl-3 py-2 rounded-md overflow-scroll">
                <a className="dropdownn">
                  <Link to='speciality/general-and-advanced-laparoscopy-surgery' className="block dropbtnn">Advanced Laparoscopy Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/advanced-hysteroscopy' className="dropbtnn">Advanced Hysteroscopy Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/interventional-radiology' className="dropbtnn">Interventional Radiology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/clinical-genetics' className="dropbtnn">Clinical Genetics</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/surgical-oncology' className="dropbtnn">Onco Surgical Oncology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/bariatric-and-weight-loss-surgery' className="dropbtnn">Bariatric Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/laser-treatment-in-general-surgery' className="dropbtnn">Laser Surgery for Piles & Varicose Veins</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/urology' className="dropbtnn">Urology Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/neuro-surgery' className="dropbtnn">Neuro Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/plastic-surgery' className="dropbtnn">Plastic Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/burn-unit' className="dropbtnn">Burn Unit</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/obstetrics-and-gynaecology' className="dropbtnn">Obstetrics & Gynaecology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/infertility-and-ivf' className="dropbtnn">Infertility & IVF</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/well-womens-clinic' className="dropbtnn">Well Women’s Clinic</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/breast-clinic' className="dropbtnn">Breast Clinic</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/high-risk-pregnancy-care' className="dropbtnn">High Risk Pregnancy Care</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/pediatrics-and-neonatology' className="dropbtnn">Pediatrics & Neonatology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/orthopaedics-and-joint-replacement' className="dropbtnn">Orthopaedics & Joint Replacement</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/trauma-centre-and-emergency-services' className="dropbtnn">Trauma Centre</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/cardiology' className="dropbtnn">Cardiac Care Unit</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/opthalmology' className="dropbtnn">Department of Ophthalmology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/ear-nose-and-throat' className="dropbtnn">Department of ENT</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/dentistry' className="dropbtnn">Department of Dental Care</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/anaesthesiology-and-critical-care' className="dropbtnn">Department of Anaesthesiology & Pain</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/nephrology' className="dropbtnn">Department of Nephrology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/department-of-gastroenterology' className="dropbtnn">Department of Gastroenterology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/neuro-physician-and-stroke-medicine' className="dropbtnn">Neuro Physician and Stroke Medicine</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/colposcopy' className="dropbtnn">Colposcopy</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/neuro-physician-and-stroke-medicine' className="dropbtnn">Pulmonary Medicine</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/psychiatric-and-psychology' className="dropbtnn">Psychiatric Department & Psychology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/skin-care-and-dermatology' className="dropbtnn">Skin Care and Dermatology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/diagnostic-services' className="dropbtnn">Diagnostic Services</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/pain-management' className="dropbtnn">Pain Management</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/internal-medicine' className="dropbtnn">Internal Medicine</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/laser-treatment-in-gynecology' className="dropbtnn">Laser Treatment in Gynaecology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/prp-treatment-gynecology' className="dropbtnn">PRP Treatment in Gynaecology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/respiratory-medicine' className="dropbtnn">Respiratory Medicine</Link>
                </a>
              </div>
            )}
            <Link to='facilities' className="text-black py-3 border-b-2 font-semibold">
              Facilities
            </Link>
            <Link to='patients-guide' className="text-black py-3 border-b-2 font-semibold">
              Patients Guide
            </Link>
            <Link to='achievments' className="text-black py-3 border-b-2 font-semibold">
              Success Rate
            </Link>
            <Link to='ivf-team' className="text-black py-3 border-b-2 font-semibold">
              Our IVF Team
            </Link>
            <Link to='news-paper-images' className="text-black py-3 border-b-2 font-semibold">
              In News
            </Link>
            <Link to='gallery' className="text-black py-3 border-b-2 font-semibold">
              Gallery
            </Link>
            <Link to='book-appointment' className="text-white bg-cyan-600 font-bold px-4 py-2 text-lg rounded-3xl">
              Contact Us
            </Link>
          </div>
          // </div>
        )}
      </nav>
    </>
  );
}
export default NavigationB;
