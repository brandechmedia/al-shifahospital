function Cardiology() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        CARDIOLOGY
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-teal-600 mb-3">
              Non-Invasive Cardiology
            </h2>
            <p>
              Cardiology is derived from the Greek words ‘cardia’ which means to
              the heart and ‘logy’ meaning the study of. Cardiology is the study
              and treatment of disorders of the heart and the blood vessels. It
              includes medical diagnosis and treatment of congenital heart
              defects, coronary artery disease, heart failure, valvular heart
              disease, and electrophysiology. A person with symptoms of heart
              disease is usually referred to a cardiologist for a proper
              diagnosis and treatment.
            </p>
            <p>
              Heart Care at Jeevan Jyoti Hospital has a state-of-the-art
              Department of Cardiology, primarily aiming to treat patients with
              cardiac diseases with skill, knowledge, and an undying passion. We
              believe not only in saving lives but also in adding life to those
              years. We have Internal Physician and Cardiologist who play a
              proactive role in screening cardiac diseases and preventing them
              from taking their toll on a patient’s overall health.
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Cardiology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          OUR SERVICES
        </h2>
        <p className="text-gray-700 mb-4">
          We provide all non-invasive treatments and procedures:
        </p>

        <div className="bg-white border-l-4 border-teal-600 p-4 shadow-sm rounded mb-4">
          <h3 className="font-semibold text-gray-800">NON-INVASIVE PROCEDURES</h3>
        </div>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>CT scans</li>
          <li>ECG</li>
          <li>Heart Monitoring</li>
          <li>Computerized Stress Testing</li>
          <li>Holter Monitoring</li>
          <li>Color Doppler</li>
        </ul>

        <p className="text-gray-700 mt-4">
          Our non-invasive cardiac care center gives an advantage to our
          emergency unit for prompt and accurate diagnoses and patient
          stabilization in cases of myocardial infarction and heart failure.
        </p>
        <p className="text-gray-700 mt-2">
          With our strong commitment to the patient and our family-centric
          approach, we offer evidence-based approaches to our patients so that
          they can make informed decisions.
        </p>
      </div>
    </div>
  );
}
export default Cardiology