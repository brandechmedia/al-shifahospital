function AnesthesiologyAndPain() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        ANAESTHESIOLOGY AND CRITICAL CARE
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-lg font-semibold text-teal-600">
            Anaesthesiology And Critical Care
          </h2>
          <p>
            Anaesthesiology is a branch of medicine that allows the safe usage
            of medical drugs to induce a reversible state of total or partial
            lack of responsiveness to surgical procedures so that they can be
            carried out smoothly without causing any distress or inconvenience
            to the patient.
          </p>
          <p>
            The term Anaesthesia is derived from the Greek words 'an' meaning
            'without' and 'aesthesis' meaning 'sensation'. Thus, anaesthesia
            means 'without sensation'.
          </p>

          <p>
            Four main types of anesthesia are used in the healthcare industry.
            The type of anesthesia to be used by your doctor depends on many
            factors like the type of procedure/surgery and your current health.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Local anaesthesia:</strong> numbs one small area of the
              body. You stay awake and alert during the procedure.
            </li>
            <li>
              <strong>Conscious or intravenous (IV) sedation:</strong> uses a
              mild sedative to relax you and pain medicine to relieve pain. You
              stay awake but may not remember the procedure afterward.
            </li>
            <li>
              <strong>Regional anaesthesia:</strong> blocks pain in an area of
              the body, such as an arm or leg. Epidural anaesthesia, which is
              sometimes used during childbirth is a type of regional
              anaesthesia.
            </li>
            <li>
              <strong>General anaesthesia:</strong> acts on your whole body. You
              go to sleep and feel nothing. You have no memory of the procedure
              performed.
            </li>
          </ul>

          <p>
            The Department of Anaesthesia has a team of dedicated, focused, and
            highly experienced healthcare professionals, who provide
            comprehensive care in the areas of pre-operative anaesthesia
            evaluation, Pre-Operative Patient Management, Intensive Care
            Emergency, and Trauma Services.
          </p>

          <p>
            Jeevan Jyoti Hospital is a premier tertiary care institute with a
            state-of-the-art infrastructure comprising of modular operating
            rooms, an Anaesthesia workstation, and advanced Monitoring Gadgets.
          </p>

          <p>
            Our department provides 24x7 anaesthesia services for Emergency and
            Elective Surgical procedures, across all specialties like Oncology
            Surgery, Neurosurgery, Joint Replacement, Obstetrics and
            Gynaecology, Urology and Kidney Transplant, Minimal Access Surgery
            and Day Care Procedures, etc. We have a Pain Care Unit, providing
            services for Acute and Chronic Pain Management.
          </p>

          <p>
            Our services also include conducting CT, Endoscopies, and
            Bronchoscopies under Sedation and Anaesthesia.
          </p>

          <p>
            We have a highly specialized and dedicated Critical Care team
            providing care to seriously ill patients with state-of-the-art
            ventilators, and monitors as well as performing ultrasound-guided
            Interventional procedures.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Anaesthesiology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Team & Areas of Interest */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-teal-600 mb-4">Team</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Anaesthesiologists</li>
            <li>Critical Care Specialists</li>
            <li>Pain Physicians</li>
            <li>Emergency Care Specialists</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-teal-600 mb-4">
            Areas Of Interest
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Tier Triage</li>
            <li>Emergency Medicine</li>
            <li>Trauma Care</li>
            <li>Pre-operative Medicine</li>
            <li>Pain Clinic</li>
            <li>Intensive Care Unit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AnesthesiologyAndPain;