function RespiratoryMedicine() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        RESPIRATORY MEDICINE
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            Respiratory Medicine or Pulmonology is the specialized branch of medicine that deals with the causes, diagnosis,
            prevention, and treatment of diseases affecting the lungs. The Department of Respiratory Medicine at Jeevan Jyoti
            Hospital (Prayagraj) is a center of excellence and state-of-the-art department providing the best Respiratory,
            Critical care, Sleep disorders, and Allergy services in the eastern part of Uttar Pradesh.
          </p>
          <p>
            Besides the Intensive Care Unit (ICU), it has a well-equipped Pulmonary Function Testing (PFT) Laboratory,
            Bronchoscopy and Interventional Pulmonology Unit, ILD clinic, Asthma clinic, sleep clinic, Smoking cessation clinic, etc.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Respiratory Medicine"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Conditions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 mb-3">
          We Can Help You If You Suffer From One Of These Conditions
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc ml-6 space-y-1">
            <li>Coughing out blood - Hemoptysis</li>
            <li>Cough - acute or chronic</li>
            <li>Breathlessness - Acute or chronic</li>
            <li>Suspected to have Lung cancer by local doctor</li>
            <li>Diagnosed with Lung cancer</li>
            <li>Pleural effusion or Fluid inside chest</li>
            <li>Snoring, daytime sleepiness, insomnia, and other sleep-related problems</li>
            <li>Prolonged fever and weight loss</li>
            <li>Tuberculosis, chest infections including pneumonia</li>
          </ul>
          <ul className="list-disc ml-6 space-y-1">
            <li>Asthma, COPD, Bronchiectasis</li>
            <li>Interstitial Lung Disease</li>
            <li>Pleural disorders</li>
            <li>Lung masses and nodules</li>
            <li>Sarcoidosis</li>
          </ul>
        </div>
      </section>

      {/* Facilities */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 mb-3">Facilities</h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-700">
          <li>IP Facilities</li>
          <li>PFT</li>
          <li>Pulmonary Rehabilitation</li>
          <li>Adult immunization – Pneumonia, Influenza, Shingles and Diphtheria</li>
        </ul>
        <p className="mt-3 text-gray-700">
          The Department of Respiratory Medicine/ Pulmonology at Jeevan Jyoti Hospital has a team of surgeons and physicians
          who are experts in treating patients suffering from respiratory disorders. Supported by the experience and expertise
          of renowned clinicians in the region including nursing staff, pulmonary and bronchoscopy technicians as well as
          physiotherapists, the department provides evidence-based treatment and innovative solutions in a patient and
          family-centric manner.
        </p>
      </section>

      {/* Services */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 mb-3">Services</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc ml-6 space-y-1">
            <li>ARDS (acute respiratory distress syndrome)</li>
            <li>Asthma</li>
            <li>COPD (chronic obstructive pulmonary disease)</li>
            <li>Cystic fibrosis</li>
            <li>Interstitial lung disease</li>
            <li>Lung cancer</li>
          </ul>
          <ul className="list-disc ml-6 space-y-1">
            <li>Occupational lung disease</li>
            <li>Pulmonary hypertension</li>
            <li>Pulmonary tuberculosis</li>
            <li>Sarcoidosis of the lungs</li>
            <li>SARS (severe acute respiratory syndrome)</li>
          </ul>
        </div>
      </section>

      {/* Procedures */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 mb-3">Procedures</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc ml-6 space-y-1">
            <li>Laboratory investigation of blood (blood tests)</li>
            <li>Spirometry</li>
            <li>Response to bronchodilators, lung volumes, and diffusion capacity</li>
          </ul>
          <ul className="list-disc ml-6 space-y-1">
            <li>Bronchoscopy with bronchoalveolar lavage (BAL), endobronchial and transbronchial biopsy</li>
            <li>Chest X-rays</li>
            <li>CT scanning</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-xl font-semibold text-teal-600 mb-3">Why Choose Us?</h2>
        <p className="text-gray-700">
          The holistic care of all respiratory diseases under one roof. Supported by the experienced and renowned clinicians
          in the region including nursing staff, pulmonary and bronchoscopy technicians as well as physiotherapists.
        </p>
      </section>
    </div>
  );
}
export default RespiratoryMedicine