import DrVandanaPhoto from '../assets/Consultants/DrVandanaPhoto.JPG'
import ArpitPic from '../assets/Consultants/ArpitPic.png'
import HarshitBansal from '../assets/Consultants/HarshitBansal.jpg'
import SakshiBansal from '../assets/Consultants/SakshiBansal.jpg'
import RKSharma from '../assets/Consultants/RKSharma.jpg'
import AjaiGopal from '../assets/Consultants/AjaiGopal.jpg'
import VishalSrivastava from '../assets/Consultants/VishalSrivastava.jpg'
import AnjulaSahai from '../assets/Consultants/AnjulaSahai.jpg'
import MohdTariqAnsari from '../assets/Consultants/MohdTariqAnsari.jpg'
import AlokKhare from '../assets/Consultants/AlokKhare.jpg'
import HimaniJaiswal from '../assets/Consultants/HimaniJaiswal.jpg'
import SaurabhGujrati from '../assets/Consultants/SaurabhGujrati.jpg'
import NKKhare from '../assets/Consultants/NKKhare.jpg'
import AmritaSingh from '../assets/Consultants/AmritaSingh.jpg'
import PravinKTripathi from '../assets/Consultants/PravinKTripathi.jpg'
import JaiSaini from '../assets/Consultants/JaiSaini.jpg'
import MaleDoctor from '../assets/Consultants/MaleDoctor.jpg'
import { Link } from 'react-router-dom'

const doctors = [
  {
    name: "Dr. Vandana Bansal",
    qualification: "MS | D.Phil (Gold Medalist) | DGO",
    specialization: "Senior Gynaecologist & IVF Specialist",
    extra: "FCGP Dip. In Endoscopic Surgery (Keil, Germany)",
    experience: "20+ Years Experience in Gynaecology & Obstetrics",
    image: DrVandanaPhoto,
  },
  {
    name: "Dr Arpit Bansal",
    qualification:" MBBS | MS | FMAS | FCS ",
    specialization: "Onco Surgery, Laparoscopic Surgeon, Gut Specialist",
    extra: "",
    experience: "10 Years of Experience",
    image: ArpitPic,
  },
  {
    name: "Dr Harshit Bansal",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: HarshitBansal,
  },
  {
    name: "Dr Sakhshi Rajoria Bansal",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: SakshiBansal,
  },
  {
    name: "Dr RK Sharma",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: RKSharma,
  },
  {
    name: "Dr Ajay Gopal",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: AjaiGopal,
  },
  {
    name: "Dr Vishal Shrivastav",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: VishalSrivastava,
  },
  {
    name: "Dr Anjula Sahai",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: AnjulaSahai,
  },
  {
    name: "Dr Tariq Ansari",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MohdTariqAnsari,
  },
  {
    name: "Dr Ashish Rai",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr Alok khare",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: AlokKhare,
  },
  {
    name: "Dr Himani A Jaiswal",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: HimaniJaiswal,
  },
  {
    name: "Dr Saurabh Gujrati",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: SaurabhGujrati,
  },
  {
    name: "Dr Deepak Gupta",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr Alankar Jaiswal",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr Kuldeep Gupta",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr Sandeep Mishra",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr AK Mishra",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr N.K. Khare",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: NKKhare,
  },
  {
    name: "Dr Saurabh Pandey",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr Amrita Singh",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: AmritaSingh,
  },
  {
    name: "Dr Santosh Singh",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr Anurag Kapoor",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: MaleDoctor,
  },
  {
    name: "Dr Praveen K Tripathi",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: PravinKTripathi,
  },
  {
    name: "Dr jai Saini",
    qualification: "",
    specialization: "",
    extra: "",
    experience: "",
    image: JaiSaini,
  },
];

function Consultants() {
  return (
    <div className="bg-teal-800 max-w7xl mx-auto px60 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Our Expert Doctors
      </h1>
      <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-gradent-to-b from-white to-gray-50  bg-transparent hover:bg-stone-50 border-3 border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <img
                className="w-32 h-32 rounded-2xl object-cover shadow-lg border border-gray-300"
                src={doctor.image}
                alt={doctor.name}
              />
              <h2 className="mt-4 text-xl font-bold text-white">
                {doctor.name}
              </h2>
              <p className="text-sm text-white mt-1">
                {doctor.qualification}
              </p>
              <p className="text-xs text-white mt-1">{doctor.extra}</p>
              <p className="text-sm text-white mt-2">{doctor.specialization}</p>
            </div>
            <div className="my-4 border-t border-gray-500"></div>
            <div className="text-center">
              <p className="text-sm text-white">{doctor.experience}</p>
              <Link to='/book-appointment' className="mt-4 inline-block w-full bg-white hover:bg-indigo-700 py-2 px-4 rounded-xl text-sm transition-all">
                Book Appointment
              </Link>
              <button className="mt-2 w-full border border-gray-300 text-teal-950 hover:bg-white hover:text-black py-2 px-4 rounded-xl text-sm transition-all">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Consultants