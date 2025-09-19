import '../Style/neonStyle.css'
// import { Link } from 'react-router-dom'
// import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import foundersImg from '../assets/foundersImg.jpg'

const About = () => {
    return (
        <>
        <div className='w-fit mx-auto'>

                <h1 className='relative inline-block font-anton font-bold text-5xl text-teal-700 mt-20 mx-auto
             after:content-[""] after:absolute after:left-0 after:-bottom-3 after:block
             after:h-2 after:w-1/2 after:bg-teal-700 after:rounded-full'>Our Founders</h1>
             </div>
            <div className="flex flex-wrap gap-2 my-16 p-2 md:p-6">
                {/* Section 1 */}
                <div className="flex-1 min-w-[250px] p-2 md:p-6">
                    <h2 className="mb-2 font-asap font-bold text-teal-500 text-2xl">Late Dr. AK Bansal</h2>
                    <span>M.B.B.S., MS, FAIS, FCGP, FIAGES</span>
                    <p className="text-gray-700 my-3">Late Dr. Ashwini Kumar Bansal was one of the most renowned Senior Laparoscopic and General Surgeons, with a heart of gold. He was a leading specialist in Male Infertility in the state of Uttar Pradesh. He was the Founder and Director of the 210-bed Multi speciality & Super speciality Jeevan Jyoti Group of Hospitals, Allahabad.</p>
                    <p className='text-gray-700 my-3'>Late Dr. A.K. Bansal was immensely honoured by his fellow medicos. Besides being an eminent Laparoscopic & General Surgeon & Male Infertility specialist, he was also an educationist, who had held many a select position of a visiting faculty, Director. He was Consultant, Advisor, chairman, and Advisory Council member chairperson in many events and organizations.</p>
                    <p className='text-gray-700 my-3'>Besides his professional qualifications, Late Dr. A.K. Bansal was an acclaimed Motivational Guru, a Personality Developer of repute, and Counsellor-par-Excellence....</p>
                    <span className='text-teal-400 font-thin'>Read more</span>
                </div>

                {/* Section 2 */}
                <div className="flex-1 min-w-[250px] rounded-2xl p-6">
                    <img src={foundersImg} alt="" />
                </div>

                {/* Section 3 */}
                <div className="flex-1 min-w-[250px] p-2 md:p-6">
                    <h2 className="mb-2 font-asap font-bold text-teal-500 text-2xl">Dr Vandana Bansal</h2>
                    <span>MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP</span>
                    <p className="text-gray-700 my-3">Besides his professional qualifications, Late Dr. A.K. Bansal was an acclaimed Motivational Guru, a Personality Developer of repute, and Counsellor-par-Excellence....</p>
                    <p className='text-gray-700 my-3'>The old adage that every big success has a small beginning truly defines the unflagging efforts of the doctor couple, who disowned the proverbial status of being born with a silver spoon. They chose to nestle in one of the oldest, religious and historical cities of Allahabad to serve the common man.</p>
                    <p className='text-gray-700 my-3'>Their mettle was more appreciated especially in the 80s, when young technocrat doctors and engineers had a craze to go abroad in the pursuit of joining the neo-rich club. Brimming with apprehension and hope, Dr. Vandana Bansal, an infertility expert and Dr. A.K. Bansal, a laparoscopic surgeon decided....</p>
                    <span className='text-teal-400 font-thin'>Read more</span>
                </div>
                
            </div>
        </>
    )
}

export default About







