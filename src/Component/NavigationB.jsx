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
import LogoAlShifaa from '../assets/LogoAlShifaa.png'
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
      <nav className="bg-white py-2 px-4 shadow-sm sticky top-0 z-20">
        <div className="containe flex items-center justify-between">
          <Link to='/' className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
            <span className=" font-bol flex md:font-thin text-roe-400 ">
              <img src={LogoAlShifaa} className="w-56 md:w-80" alt="" />
            </span>
          </Link>
          <div className="hidden lg:flex space-x-4 relative">
            <Link to='/' className="text-whit text-black text-md font-semibold relative inline-block after:block after:h-[2px] after:bg-yellow-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Home</Link>
            <Link
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              onClick={toggleAboutDropdown}
              className="text-whit text-black focus:outline-none text-nowrap font-semibold text-md relative inline-block after:block after:h-[2px] after:bg-yellow-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 "
            >
              About Us
            </Link>
            {isAboutDropdownOpen && (
              <div
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                className="absolute mt-4 pt-3 w-48 bg-white rounded-md shadow-lg z-10"
              >
                <Link to='overiew' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Overview
                </Link>
                <Link to='our-fouder' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Founder
                </Link>
                <Link to='why-chose-us' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Why Choose US
                </Link>
              </div>
            )}
            <div
              className={`dropdown mt-0 font-semibold text-nowrap text-md lg:inline-block lg:mt-0 hover:text-yellow-400  text-whit text-black focus:outline-none relative inline-block after:block after:h-[2px] after:bg-yellow-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${isOpen ? "py-3" : ""}`} tabIndex={0}>
              Our Specialities
              <div className="dropdown-content overflow-scroll bg-sky-800 pb-20 h-screen w-80 font-thin mt-1">
                <a className="dropdownn">
                  <Link to='specility/general-and-advanced-laparoscopy-surgery' className="text-white hover:!text-black  dropbtnn">Advanced Laparoscopy Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='specility/laser-treatment-in-general-surgery' className="text-white hover:!text-black dropbtnn">Laser Surgery for Piles & Varicose Veins</Link>
                </a>
                <a className="dropdownn">
                  <Link to='specialty/urology' className="text-white hover:!text-black dropbtnn">Urology Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='specility/neuro-surgery' className="text-white hover:!text-black dropbtnn">Neuro Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciaity/obstetrics-and-gynaecology' className="text-white hover:!text-black dropbtnn">Obstetrics & Gynaecology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='specialty/high-risk-pregnancy-care' className="text-white hover:!text-black dropbtnn">High Risk Pregnancy Care</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciaity/pediatrics-and-neonatology' className="text-white hover:!text-black dropbtnn">Pediatrics & Neonatology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciaity/cardiology' className="text-white hover:!text-black dropbtnn">Cardiac Care Unit</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciaity/ear-nose-and-throat' className="text-white hover:!text-black dropbtnn">Department of ENT</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/anaesthesiology-and-critical-care' className="text-white hover:!text-black  dropbtnn">Department of Anaesthesiology & Pain</Link>
                </a>
                <a className="dropdownn">
                  <Link to='specility/department-of-gastroenterology' className="text-white hover:!text-black dropbtnn">Department of Gastroenterology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='specility/skin-care-and-dermatology' className="text-white hover:!text-black dropbtnn">Skin Care and Dermatology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciaity/diagnostic-services' className="text-white hover:!text-black dropbtnn">Diagnostic Services</Link>
                </a>
              </div>
            </div>
            <Link to='facities' className="text-whit text-black text-md font-semibold relative inline-block after:block after:h-[2px] after:bg-yellow-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Facilities
            </Link>
            <Link to='csultants' className="text-whit text-black text-md font-semibold relative inline-block after:block after:h-[2px] after:bg-yellow-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Consultants
            </Link>
            <Link to='galery' className="text-whit text-black text-md font-semibold relative hidden xl:inline-block after:block after:h-[2px] after:bg-yellow-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Gallery
            </Link>
          </div>
          <Link to='book-appointment' className="hidden text-nowrap lg:block text-white bg-yellow-500 font-bold px-4 py-1 text-lg rounded-3xl">
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
                <Link to='our-profile' className="block px-4 py-2">
                  Our Profile
                </Link>
                <Link to='our-vision-mission' className="block px-4 py-2">
                  Why Choose Us
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
                  <Link to='speciality/neuro-surgery' className="dropbtnn">Neuro Surgery</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/obstetrics-and-gynaecology' className="dropbtnn">Obstetrics & Gynaecology</Link>
                </a>
              
                <a className="dropdownn">
                  <Link to='speciality/high-risk-pregnancy-care' className="dropbtnn">High Risk Pregnancy Care</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/pediatrics-and-neonatology' className="dropbtnn">Pediatrics & Neonatology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/opthalmology' className="dropbtnn">Department of Ophthalmology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/ear-nose-and-throat' className="dropbtnn">Department of ENT</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/department-of-gastroenterology' className="dropbtnn">Department of Gastroenterology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/skin-care-and-dermatology' className="dropbtnn">Skin Care and Dermatology</Link>
                </a>
                <a className="dropdownn">
                  <Link to='speciality/diagnostic-services' className="dropbtnn">Diagnostic Services</Link>
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
