function PsychiatricAndPsychology() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        PSYCHIATRIC AND PSYCHOLOGY
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-3">
          <p>
            The Department of Psychiatry and Psychology at Jeevan Jyoti Hospital
            focuses on mental health and behavioral sciences. The hospital
            provides comprehensive clinical services for a wide array of
            emotional and mental health conditions. Patients who suffer from a
            broad range of psychiatric and psychological problems like mental
            illness, depression & anxiety receive compassionate care and
            treatment according to their needs.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Psychiatric and Psychology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 p-5 rounded-lg shadow mb-8">
        <h2 className="text-teal-600 font-semibold">Services Available</h2>
      </div>

      {/* Details */}
      <div className="text-gray-700 leading-relaxed space-y-6">
        {/* Clinical Services */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            1. Clinical Services
          </h3>
          <p className="mt-2">
            <span className="font-semibold">Psychiatry:</span> This branch deals
            with the diagnosis, treatment, and prevention of mental disorders.
            Our psychiatrist specializes in mental health, prescribing
            medication, and providing various forms of therapy.
          </p>
          <p className="mt-2">
            <span className="font-semibold">Psychology:</span> Psychologist
            focuses on understanding human behavior and mental processes. We
            offer psychotherapy, conduct psychological assessments, and provide
            counseling services.
          </p>
        </div>

        {/* Specialized Clinics */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            2. Specialized Clinics And Programs
          </h3>
          <p className="mt-2">
            We have specialized clinics/programs for specific populations or
            conditions, such as child and adolescent psychiatry, geriatric
            psychiatry, addiction psychiatry, mood disorders clinics, etc.
          </p>
        </div>

        {/* Multidisciplinary Approach */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            3. Multidisciplinary Approach
          </h3>
          <p className="mt-2">
            Departments adopt a multidisciplinary approach, involving a
            psychiatrist, psychologist, social workers, nurses, occupational
            therapist, and other healthcare professionals to provide
            comprehensive care for patients.
          </p>
        </div>

        {/* Community Outreach */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            4. Community Outreach
          </h3>
          <p className="mt-2">
            Our department is involved in community outreach programs aimed at
            raising awareness about mental health issues, reducing stigma, and
            providing support to underserved populations.
          </p>
        </div>

        {/* Integration */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            5. Integration With Other Medical Specialties
          </h3>
          <p className="mt-2">
            Psychiatry and psychology departments collaborate with other medical
            specialties, such as neurology, primary care, and internal medicine,
            particularly when mental health issues intersect with physical
            health conditions.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm text-gray-700">
        <p>
          Overall, the Department of Psychiatry and Psychology plays a vital
          role in promoting mental health, providing clinical services, and
          educating the community.
        </p>
      </div>
    </div>
  );
}
export default PsychiatricAndPsychology;