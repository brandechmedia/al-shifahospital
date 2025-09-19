function InternalMedicine() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        INTERNAL MEDICINE
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-3">
          <p>
            Internal medicine plays a crucial role as both the first line of
            contact for patients and the last line after specialized
            comprehensive care. The physician is to diagnose and treat a wide
            range of medical conditions in adult patients as he is the first
            point of contact when a patient arrives at the hospital with a
            general medical concern.
          </p>
          <p>
            At Jeevan Jyoti Hospital, the Internal Medicine Department provides
            specialized care to both In and Outpatients, along with care for
            hospitalized patients with other broad ailments. The Physician
            performs initial assessments, orders diagnostic tests, and creates
            treatment plans. If a patient’s condition requires specialized care,
            he can provide appropriate care. However, if the patient’s condition
            requires specialized care, he will refer them to the appropriate
            medical specialists.
          </p>
          <p>
            As the last line of contact after specialized comprehensive care,
            Internal Medicine doctors are often involved in coordinating a
            patient’s overall treatment plan and ensuring continuity of care
            during and after hospitalization. They play a vital role in managing
            chronic medical conditions and addressing any new health issues that
            arise.
          </p>
          <p>
            The Department is well equipped to manage chronic health conditions
            such as diabetes, hypertension, lifestyle and obesity, thyroid
            disorders, lipid abnormalities, and various febrile illnesses like
            dengue, chikungunya, malaria, respiratory infections, joint pains,
            and septicemic conditions.
          </p>
          <p>
            Lifestyle-related issues, such as obesity, are significant
            contributors to various health problems. Our medical specialist
            focuses on personalized treatment plans that include dietary
            counseling, exercise regimes, and behavioral interventions to
            address obesity and promote healthy living. The Physician understands
            that each patient is unique and tailors interventions accordingly,
            improving the chances of sustained weight loss and better overall
            health outcomes.
          </p>
          <p>
            The Internal Medicine Department’s expertise also extends to the
            management of various febrile illnesses, including infectious
            diseases like dengue, chikungunya, and malaria. Timely and accurate
            diagnosis is crucial in these cases, as prompt intervention can
            prevent severe complications and ensure a faster recovery.
          </p>
          <p>
            Moreover, the Internal Medicine Department places a special focus on
            caring for senior citizens through Geriatric Medicine. As people
            age, they may experience multiple health challenges and chronic
            conditions. Internal Medicine specialists are well-equipped to
            handle the unique health concerns of older adults, ensuring that
            they receive appropriate care to maintain their independence and
            quality of life.
          </p>
          <p>
            In critical care settings, Internal Medicine plays a vital role in
            managing non-surgical patients who require intensive medical
            treatment. These patients typically have severe medical conditions
            or organ failures that necessitate close monitoring and specialized
            care.
          </p>
          <p>
            Internal Medicine specialists, also known as intensivists in
            critical care, are trained to diagnose and manage a wide range of
            medical illnesses in adult patients. They collaborate with other
            healthcare professionals, such as critical care nurses, respiratory
            therapists, and specialists in various medical disciplines, to
            provide comprehensive care.
          </p>
          <p>
            The Internal Medicine Department is the backbone of the hospital,
            therefore it is well connected to all other super specialties, as we
            understand that some patients may require a broader outlook.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Internal Medicine"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <h2 className="text-teal-600 font-semibold">Services Offered</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 list-disc ml-6 mt-3 gap-y-1 text-gray-700">
          <li>Comprehensive preventive healthcare</li>
          <li>Infectious Diseases like tropical fevers, Tuberculosis, Pneumonia, Urinary Tract Infection</li>
          <li>Diabetes, Thyroid disorder, and other metabolic disorders</li>
          <li>Geriatric Care</li>
          <li>Critical Care</li>
          <li>Allergy, Immunology</li>
          <li>Anaemia</li>
          <li>Non-Invasive Clinical Cardiology like Hypertension, CCF</li>
          <li>Acute and Chronic pain management</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-teal-600 font-semibold">Why Choose Us?</h2>
        <p className="text-gray-700 mt-2">
          Jeevan Jyoti Hospital provides comprehensive care in general internal
          medicine and related specialties. Acute medical care is provided by a
          medical specialist round the clock and outpatient care is made
          available for at least 12 hours every day to suit everyone’s work
          commitments.
        </p>
      </div>
    </div>
  );
}
export default InternalMedicine