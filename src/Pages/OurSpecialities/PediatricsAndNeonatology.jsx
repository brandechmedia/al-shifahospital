import PediatricsAndNeonatologyPhotos from '../../assets/Specialities/PediatricsAndNeonatologyPhotos.jpg'
function PediatricsAndNeonatology() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-cyan-600 mb-8">
        PEDIATRICS AND NEONATOLOGY
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            The Department of Pediatrics and Neonatology is dedicated to promoting the
            health and well-being of children and adolescents through a comprehensive
            and balanced approach. Our team consists of highly qualified and compassionate
            Pediatricians and Neonatologists who provide excellent clinical care and
            services right from the moment a child takes their first breath.
          </p>
          <p>
            Our Neonatal Intensive Care Unit (NICU) boasts modern nurseries with incubators,
            ventilators (including High-Frequency oscillation fans), CPAP, LED phototherapy units,
            and other cutting-edge equipment. The unit is staffed by highly trained nursing
            professionals committed to providing exceptional care for neonates.
          </p>
          <p>
            Furthermore, at [Your Hospital Name], we have a fully equipped Pediatric Intensive Care
            Unit (PICU) that can handle all critical cases for children. Our Pediatric Neurology
            specialty is led by a team of experienced Pediatric Neurologists and facilities like EEG,
            EMG, NCV & BERA machines. Additionally, our hospital is equipped with advanced imaging
            facilities, as well as excellent Pathology and Microbiology services.
          </p>
          <p>
            We have seamless collaboration with other specialties like Cardiology, Nephrology,
            Orthopedics, and Surgery, ensuring comprehensive care is always available.
          </p>
          <p>
            Pediatric Surgery services are designed to optimize the operative care of infants,
            children, and adolescents. This includes surgeries on vital organs like lungs and intestines,
            as well as corrective procedures for conditions like cleft lip and palate, hernias,
            and urological abnormalities.
          </p>
          <p>
            Developmental Pediatric services focus on understanding and managing the developmental
            and behavioral aspects of children from infancy to adolescence. The developmental
            pediatricians at our hospital assess a child’s growth milestones, motor skills,
            communication abilities, and cognitive functions to identify any delays or disorders.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={PediatricsAndNeonatologyPhotos}
            alt="Pediatrics and Neonatology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-cyan-600 mb-4">
          Services Offered
        </h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Outpatient Services:</span> Includes
            general check-ups, well-baby clinic, high-risk baby clinic, and
            vaccinations.
          </li>
          <li>
            <span className="font-semibold">Emergency Management:</span> Round-the-clock
            management of all pediatric and neonatal problems.
          </li>
          <li>
            <span className="font-semibold">Paediatric Neurology:</span> OPD,
            psycho-behavioral assessment & counseling, and tests like EEG, EMG,
            NCV, VEP, BERA, etc.
          </li>
          <li>
            <span className="font-semibold">Paediatric Surgery:</span> Surgeries on
            vital organs like the heart, lungs, and intestines, as well as corrective
            procedures for cleft lip and palate, hernias, and urological abnormalities.
          </li>
          <li>
            <span className="font-semibold">Developmental Paediatrics:</span>{" "}
            Understanding and managing children’s developmental and behavioral aspects.
          </li>
          <li>
            <span className="font-semibold">PICU Services:</span> Includes assisted
            ventilation & management of severe asthma, seizures, shock, etc.
          </li>
          <li>
            <span className="font-semibold">Lactation Counselling:</span>{" "}
            Personalized guidance and assistance to support mothers in their
            breastfeeding journey.
          </li>
          <li>
            <span className="font-semibold">Clinical Genetics:</span> Identification
            of genetic abnormalities that may cause disease and development of
            strategies to prevent or treat these disorders.
          </li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-cyan-600 mb-4">
          Why Choose Us
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Supported by latest technology & experienced specialists.</li>
          <li>Direct supervision of Senior Neonatologists and Pediatricians.</li>
          <li>
            Clear communication with parents, with complete transparency &
            accountability.
          </li>
          <li>
            Antenatal clinic for parents to deal with foetal abnormalities
            detected on USG.
          </li>
          <li>Consultation with a clinical geneticist.</li>
        </ul>
      </div>
    </div>
  );
}
export default PediatricsAndNeonatology