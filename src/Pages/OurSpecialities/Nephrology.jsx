function Nephrology() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        NEPHROLOGY
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            Nephrology is a medical specialty that focuses on the diagnosis and
            treatment of kidney-related ailments. Kidneys are vital organs that
            not only filter waste from the blood but also help to regulate blood
            pressure, balance electrolytes, and perform various other essential
            functions in the body. At Jeevan Jyoti Hospital, our team of experts
            is dedicated to providing top-notch treatment to individuals of all
            age groups, from children to the elderly.
          </p>

          <p>
            Our multidisciplinary team comprises nephrologists – urologists,
            interventional radiologists, and dedicated nursing staff. Together,
            we aim to ensure that people remain free from kidney diseases by
            timely diagnosing and promptly treating conditions that threaten
            kidney health. The field of nephrology is not limited to addressing
            kidney issues, and dialysis alone; it also involves managing
            associated conditions like high blood pressure, fluid retention, and
            electrolyte and acid base imbalances, which can significantly impact
            a patient’s overall well-being.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Nephrology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">Services</h2>
        <p className="text-gray-700">
          One of the salient features of the Nephrology specialty is the
          comprehensive coverage of kidney-related disorders including dialysis.
          We are recognized as a leading centre for critical renal conditions,
          including the whole spectrum of glomerular kidney disorders, and
          end-stage renal disease. The Centre has excellent backup support for
          Urology, Pathology, Radiology, and general medicine. The Nephrology
          Department follows international guidelines and strives to be the best
          nephrology treatment and care facility in Eastern Uttar Pradesh.
        </p>
      </div>

      {/* Facilities Available */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Facilities Available:
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-1">
            <li>Daily OPD Services</li>
            <li>Preventive Nephrology</li>
            <li>Pediatric Nephrology</li>
            <li>Outpatient Dialysis Unit</li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li>Inpatient Dialysis facilities</li>
            <li>Critical Care Nephrology</li>
            <li>Interventional Nephrology</li>
            <li>Renal Biopsy</li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li>Perm Catheter Insertion</li>
            <li>CAPD Catheter Insertion</li>
            <li>Slow Low Efficiency Dialysis (SLED)</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Highly experienced & trained professionals.</li>
          <li>24x7 dialysis facility.</li>
          <li>
            Latest generation, fully computerized machines with volumetric
            ultrafiltration and adjustable sodium facility, provide a better
            patient safety profile.
          </li>
          <li>
            A facility for continuous monitoring of sick patients on dialysis
            through highly sophisticated monitors throughout the dialytic
            procedure is available.
          </li>
          <li>
            Special emphasis on the quality of dialysis as per Internationally
            accepted protocols.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nephrology