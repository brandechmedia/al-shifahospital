function Trauma() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        TRAUMA CENTRE AND EMERGENCY SERVICES
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            A trauma centre is a medical facility equipped and staffed to provide
            specialized care for patients suffering from major traumatic injuries
            such as falls, road traffic accidents, and other serious incidents.
            The centre is designed to provide rapid assessment, resuscitation,
            stabilization, and specialized treatment to critically injured
            patients.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Trauma Centre"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Key Features Of A Trauma Centre At Jeevan Jyoti Hospital Prayagraj
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <span className="font-semibold">1. Specialized Staff:</span> The trauma
            centre has a multidisciplinary team of highly trained medical
            professionals including trauma surgeons, emergency physicians,
            nurses, anaesthesiologists, and other specialists available around the
            clock.
          </li>
          <li>
            <span className="font-semibold">2. Advanced Equipment:</span> Our centre
            is equipped with advanced medical equipment such as CT scanners,
            X-ray machines, operating rooms, and intensive care units to provide
            comprehensive care to trauma patients.
          </li>
          <li>
            <span className="font-semibold">3. Availability Hours:</span> The highest
            level of care with 24/7 availability of specialists and a full range of
            medical services.
          </li>
          <li>
            <span className="font-semibold">4. Integration with Emergency Services:</span>{" "}
            Our Trauma centre works closely with emergency medical services (EMS)
            to ensure that patients receive timely and appropriate care from the
            moment of injury through transport to the hospital and during their
            hospital stay.
          </li>
        </ul>
      </div>

      {/* Emergency Services */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Emergency Services
        </h2>
        <p className="text-gray-700">
          The emergency department (ED) is the entry point for patients seeking
          urgent medical care. It serves as the frontline for evaluating and
          stabilizing patients with a wide range of medical conditions. The
          department is staffed by emergency physicians, nurses, and other
          healthcare professionals trained in acute care medicine.
        </p>
      </div>

      {/* Services Provided */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Services Provided In The ED Include
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Triage to prioritize patient care based on the severity of their condition.</li>
          <li>Initial assessment and stabilization of patients.</li>
          <li>Diagnostic testing, such as blood tests and ECGs.</li>
          <li>
            Treatment for medical emergencies, including heart attacks, strokes,
            respiratory distress, and severe infections.
          </li>
          <li>
            Coordination of care with other hospital departments or specialty
            services as needed.
          </li>
          <li>
            Referral to inpatient units, outpatient clinics, or follow-up care
            providers for ongoing treatment.
          </li>
        </ul>
      </div>

      {/* Integration and Collaboration */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Integration And Collaboration
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Trauma centre and emergency departments work closely together to
            provide seamless care to patients.
          </li>
          <li>
            There’s typically a coordinated system in place for transferring
            patients from the ED to the trauma centre or other specialized units
            within the hospital when necessary.
          </li>
          <li>
            Collaboration with pre-hospital care providers, such as emergency
            medical services (EMS), for timely patient transport and continuity of
            care.
          </li>
        </ul>
      </div>

      {/* Golden Hour */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          The Golden Hour
        </h2>
        <p className="text-gray-700">
          In accident victims, the first hour after the accident is considered the
          “Golden Hour”. It is critical in accident patients that the time gap
          between the accident and the definitive treatment is minimized. This can
          help in saving precious lives. It is made possible by our dedicated
          trauma service unit where the patient is quickly evaluated, moves
          through diagnostics, and gets the final treatment within the golden
          hour.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-700">
          Overall, the trauma centre and emergency services at Jeevan Jyoti
          Hospital ensure that individuals with urgent medical needs receive
          prompt and appropriate treatment, potentially saving lives and
          minimizing the long-term impact of injuries and illnesses. This is
          possible because of the availability of trauma surgeons, emergency
          physicians, nurses, anaesthesiologists, and other specialists available
          around the clock.
        </p>
      </div>
    </div>
  );
}
export default Trauma;