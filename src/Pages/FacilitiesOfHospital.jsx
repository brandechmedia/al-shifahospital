import MinimallyInvasiveSurgeries from '../assets/FacilitiesJJH/MinimallyInvasiveSurgeries.jpg'
import ModularOT from '../assets/FacilitiesJJH/ModularOT.jpg'
import InfertilityIVF from '../assets/FacilitiesJJH/InfertilityIVF.png'
import ObstetricsGynaecology from '../assets/FacilitiesJJH/ObstetricsGynaecology.jpg'
import InterventionalRadiologyHomepage from '../assets/FacilitiesJJH/InterventionalRadiologyHomepage.jpg'
import AdvancedLaserCentre from '../assets/FacilitiesJJH/AdvancedLaserCentre.jpg'
import HighRiskPregnancy from '../assets/FacilitiesJJH/HighRiskPregnancy.jpg'
import NephrologyAndDialysis from '../assets/FacilitiesJJH/NephrologyAndDialysis.jpg'
import ClinicalGenetics from '../assets/FacilitiesJJH/ClinicalGenetics.jpg'
import CARMMachine from '../assets/FacilitiesJJH/CARMMachine.jpg'
import ICU from '../assets/FacilitiesJJH/ICU.jpg'
import NICU from '../assets/FacilitiesJJH/NICU.jpg'
import Pathology from '../assets/FacilitiesJJH/Pathology.jpg'
import physiotherapy from '../assets/FacilitiesJJH/physiotherapy.jpg'
import CentralizedOxygenUnit from '../assets/FacilitiesJJH/CentralizedOxygenUnit.jpg'
import ComputersedECG from '../assets/FacilitiesJJH/ComputersedECG.jpg'
import CTScanMachine from '../assets/FacilitiesJJH/CTScanMachine.jpg'
import DigitalXRayMachine from '../assets/FacilitiesJJH/DigitalXRayMachine.JPG'
import Endoscopy from '../assets/FacilitiesJJH/Endoscopy.jpg'
import Mammography from '../assets/FacilitiesJJH/Mammography.jpg'
import UltrasoundScanner from '../assets/FacilitiesJJH/UltrasoundScanner.jpg'
import Ventilator from '../assets/FacilitiesJJH/Ventilator.jpg'
import VideoColourDoppler from '../assets/FacilitiesJJH/VideoColourDoppler.jpg'
import LabourRoomWithCTG from '../assets/FacilitiesJJH/LabourRoomWithCTG.jpg'
import GeneralPvtDeluxeRoom from '../assets/FacilitiesJJH/GeneralPvtDeluxeRoom.jpg'
import Pharmacy from '../assets/FacilitiesJJH/Pharmacy.jpg'
import Ambulance from '../assets/FacilitiesJJH/Ambulance.jpg'
import PICU from '../assets/FacilitiesJJH/PICU.JPG'

const facilities = [
  {
    title: "Minimally Invasive Surgeries",
    image: MinimallyInvasiveSurgeries,
  },
  {
    title: "Specialised Operation Theatre",
    image: ModularOT,
  },
  {
    title: "Infertility & IVF",
    image: InfertilityIVF,
  },
  {
    title: "Obstetrics & Gynaecology",
    image: ObstetricsGynaecology,
  },
  {
    title: "Interventional Radiology",
    image: InterventionalRadiologyHomepage,
  },
  {
    title: "Advanced Laser Centre",
    image: AdvancedLaserCentre,
  },
  {
    title: "High Risk Pregnancy",
    image: HighRiskPregnancy,
  },
  {
    title: "Clinical Genetics",
    image: ClinicalGenetics,
  },
  {
    title: "C-ARM Machine",
    image: CARMMachine,
  },
  {
    title: "NICU",
    image: NICU,
  },
  {
    title: "ICU",
    image: ICU,
  },
  {
    title: "PICU",
    image: PICU,
  },
  {
    title: "Nephrology Dialysis",
    image: NephrologyAndDialysis,
  },
  {
    title: "Pahtology 24X7",
    image: Pathology,
  },
  {
    title: "Psyotherapy",
    image: physiotherapy,
  },
  {
    title: "Centralized Oxygen Unit",
    image: CentralizedOxygenUnit,
  },
  {
    title: "Computerized ECG",
    image: ComputersedECG,
  },
  {
    title: "CT Scan Machine",
    image: CTScanMachine,
  },
  {
    title: "Digital X-Ray Machine",
    image: DigitalXRayMachine,
  },
  {
    title: "Endoscopy",
    image: Endoscopy,
  },
  {
    title: "Mammography",
    image: Mammography,
  },
  {
    title: "Ultrasound Scanner",
    image: UltrasoundScanner,
  },
  {
    title: "Ventilator",
    image: Ventilator,
  },
  {
    title: "Video Colour Doppler",
    image: VideoColourDoppler,
  },
  {
    title: "Labour Room with CTG",
    image: LabourRoomWithCTG,
  },
  {
    title: "General Private Deluxe Room",
    image: GeneralPvtDeluxeRoom,
  },
  {
    title: "Pharmacy",
    image: Pharmacy,
  },
  {
    title: "Ambulance",
    image: Ambulance,
  },
];

function FacilitiesOfHospital() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-10">
        FACILITIES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 text-sm font-medium">
              {facility.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FacilitiesOfHospital;