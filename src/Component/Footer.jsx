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
              <IoLocationOutline className="inline text-white text-xl" />Dargah Hazrat Abbas Road, Pipal Chauraha, Katehra Dariyabad, Prayagraj, Uttar Pradesh 211003
            </a>
            <a className="my-3 text-white block" target="_blank" href="tel:8840003060">
              <IoCallOutline className="inline mr-2" />
              +91 8840003060</a>
            <a className="my-3 text-white block" target="_blank" href="tel:9415157344">
              <IoCallOutline className="inline mr-2" />
              +91 9415157344</a>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.363217301936!2d81.8330134!3d25.426117599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853533d142e475%3A0x8798ce7743768b96!2sAL%20SHIFA%20MEDICAL%20CENTRE!5e0!3m2!1sen!2sin!4v1758394274674!5m2!1sen!2sin" style={{ border: 0, width: '100%', marginTop: 10, borderRadius: 17 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
            <p className="text-white text-justify">Al Shifa Hospital, located in Dariyabad, Prayagraj, is a trusted healthcare center dedicated to providing quality medical services with compassion and care. The hospital is committed to serving patients with modern facilities, experienced doctors, and a patient-friendly environment. With a focus on affordability and accessibility, Al Shifa Hospital caters to the medical needs of the local community, offering specialized treatments, diagnostic services, and personalized care for individuals and families. Its mission is to ensure better health outcomes and to stand as a reliable name in healthcare for Prayagraj and surrounding areas.
            </p>
            <div className="flex m-auto my-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
              >
                <FaInstagram className="mx-2 text-white hover:text-orange-500 text-xl" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FaFacebook className="mx-2 text-white hover:text-orange-500 text-xl" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
              >
                <FaYoutube className="mx-2 text-white hover:text-orange-500 text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/"
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
            {/* <div className="text-center">
              <Link to='terms-and-condition'>
                Term & Condition
              </Link>
              |
              <Link to="privacy-policy texy">
                Privacy Policy
              </Link>|
              <span>Design by Salman Ansari</span>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
