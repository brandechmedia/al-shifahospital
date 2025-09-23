import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 bg-gray-950 body-font">
        {/* <hr className="text-gray-300" /> */}
        <div className="container flex flex-wrap px-2 md:px-5 py-12 mx-auto ">
          {/* <div className="flex flex-wrap md:text-left order-first"> */}

          <div className="lg:w-1/4 md:w-1/2 w-full md:px-4">
            <h2 className="text-teal-200 font-asap font-semibold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Our Specialities
            </h2>
            <ul class="text-gray-200  flex flex-col mt-2 space-y-2 text-base">
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/general-and-advanced-laparoscopy-surgery">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span className="">General and Advance Laparoscopy Surgery</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/advanced-hysteroscopy">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Advance Hysteroscopy</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/interventional-radiology">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Surgical Oncology</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/bariatric-and-weight-loss-surgery">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Bariatric and Weight Loss Surgery</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/obstetrics-and-gynaecology">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Obstetrics and Gynaecology</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/infertility-and-ivf">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Infertility and IVF</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/high-risk-pregnancy-care">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>High Risk Pregnancy Care</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/well-womens-clinic">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Well Women’s Clinic</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/pediatrics-and-neonatology">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Pediatrics and Neonatology</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/orthopaedics-and-joint-replacement">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Orthopaedics and Joint Replacement</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/trauma-centre-and-emergency-services">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Trauma Centre and Emergency Services</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/cardiology">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Cardiology</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/psychiatric-and-psychology">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Psychiatric and Psychology</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="speciality/diagnostic-services">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Diagnostic Services</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/6 md:w-1/3 w-full md:px-4">
            <h2 className="text-teal-200 font-asap font-semibold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ">
              Facilities
            </h2>
            <ul class="text-gray-200 flex flex-col mt-2 space-y-2 text-base">
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/hormonal-analysis">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Hormonal Analysis</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/ai-semen-analysis">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>AI Assisted Semen Analysis</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/surgery-for-male-infertility">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Surgery for Male Infertility</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/prp-treatment">
                  <FaArrowRight />
                  <span>PRP Treatment of Endometrium & Ovary</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/stemcell-therapy">
                  <FaArrowRight />
                  <span>Stem Cell Therapy</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/6 md:w-1/3 w-full md:px-4">
            <h2 className="text-teal-200 font-asap font-semibold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Quick links
            </h2>
            <ul class="text-gray-200 flex flex-col mt-2 space-y-2 text-base">
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/patients-guide">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Patients Guide</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/facilities">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Facilities</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/consultants">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Consultants</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/gallery">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/gallery">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Meet Our Founder</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/why-choose-us">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Why Choose Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full md:px-1">
            <h2 className="text-teal-200 font-asap font-semibold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Contact Info
            </h2>
            <nav className="list-none mb-10 ">
              {/* <li>
              </li> */}
            </nav>
            <a href='https://maps.app.goo.gl/UyiKVZiL3H9uu4Bh9' className="my-4 text-white" target="_blank">
              <IoLocationOutline className="inline text-white text-xl" />162 Bai Ka Bagh, Lowther Road, Pincode - 211003, Prayagraj
              (Allahabad) UTTAR PRADESH, INDIA
            </a>
            <a className="my-3 text-white block" target="_blank" href="tel:6390103002">
              <IoCallOutline className="inline mr-2" />
              +91 6390103003</a>
            <a className="my-3 text-white block" target="_blank" href="tel:9151037784">
              <IoCallOutline className="inline mr-2" />
              +91 6390103011</a>
            <a className="my-3 text-white block" target="_blank" href="tel:9151037784">
              <IoCallOutline className="inline mr-2" />
              +91 532-2417248/ 52/ 54</a>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4273.940070119506!2d81.84658139999999!3d25.4363194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acab52d38021f%3A0x7a5c69d06d09297b!2z8J2XnfCdl7LwnZey8J2Yg_Cdl67wnZe7IPCdl53wnZiG8J2XvPCdmIHwnZe2IPCdl5vwnZe88J2YgPCdl73wnZe28J2YgfCdl67wnZe5IC0gQmVzdCBIb3NwaXRhbCB8RW1lcmdlbmN5IEhvc3BpdGFsIGluIEFsbGFoYWJhZCB8TGFwYXJvc2NvcGljIFN1cmdlb24gJiBIZXJuaWE!5e1!3m2!1sen!2sin!4v1756811785282!5m2!1sen!2sin" style={{ border: 0, width: '100%', marginTop: 10, borderRadius: 17 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.363217301936!2d81.8330134!3d25.426117599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853533d142e475%3A0x8798ce7743768b96!2sAL%20SHIFA%20MEDICAL%20CENTRE!5e0!3m2!1sen!2sin!4v1758394274674!5m2!1sen!2sin"style={{ border: 0, width: '100%', marginTop: 10, borderRadius: 17 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <button className="bg-white text-black py-2 px-6 mt-4 rounded-md">
              <Link to="/book-appointment" className="">
                Book Appointment
              </Link>
            </button>
            <button className="bg-white text-black py-2 px-6 mt-4 ml-44 hidden lg:inline rounded-md">
              <a href="tel:6390103002" className="">
                Call Now
              </a>
            </button>
          </div>

          <div className="lg:w-full md:w-1/2 w-full md:pr-16">
            <h1 className="text-teal-200 font-semibold text-2xl md:text-3xl mt-10 mb-1 font-asap relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Al-Shifa Hospital</h1>
            <p className="text-white text-justify">Jeevan Jyoti Hospital is a 210-Beds, CGHS Approved, NABH Accredited, ISO 2015 and NABL Medical Lab approved multi-speciality hospital in Prayagraj. Jeevan Jyoti Hospital is Best Hospital in Prayagraj For Any Types of Health Treatment. Here You Get The Best Physician in Allahabad.
              The hospital was founded in 1988 by renowned laparoscopic surgeon Late Dr A.K Bansal and eminent IVF expert Dr Vandana Bansal, with the vision and mission of providing top-of-the-line healthcare facilities under one roof.
            </p>
            <div className="flex m-auto my-4">
              <a
                href="https://www.instagram.com/jeevanjyotihospitalprayagraj/"
                target="_blank"
              >
                <FaInstagram className="mx-2 text-white hover:text-orange-500 text-xl" />
              </a>
              <a
                href="https://www.facebook.com/jeevanjyotihospitalprayagraj/"
                target="_blank"
              >
                <FaFacebook className="mx-2 text-white hover:text-orange-500 text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@jeevanjyotihospital6176"
                target="_blank"
              >
                <FaYoutube className="mx-2 text-white hover:text-orange-500 text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/"
                target="_blank"
              >
                <FaLinkedinIn className="mx-2 text-white hover:text-orange-500 text-xl" />
              </a>
            </div>
          </div>


          {/* </div> */}
        </div>
        <div className="bg-zinc-50 border-t-2">
          <div className="container md:px-5 w-fit p-2 md:py-6 mx-auto 
            sm:flex-row flex-col">
            {/* <a className="text-white flex title-font font-medium items-center md:justify-start justify-center">
              <span className="ml-3 text-xl">Best IVF Centre in Prayagraj</span>
            </a> */}
            <p className="text-sm text-gray-700 sm:ml-6 sm:mt-0">
              © 2025 Jeevan Jyoti Hospital | All rights reserved
            </p>
            <div className="text-center">
              <Link to='terms-and-condition'>
                Term & Condition
              </Link>
              |
              <Link to="privacy-policy texy">
                Privacy Policy
              </Link>|
            <span>Design by Salman Ansari</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
