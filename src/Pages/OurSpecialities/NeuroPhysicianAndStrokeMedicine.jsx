function NeuroPhysicianAndStrokeMedicine() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        NEURO PHYSICIAN AND STROKE MEDICINE
      </h1>

      {/* Overview Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-3">
          <p>
            The nervous system is the body’s top controlling, regulatory, and
            communicating system. It also serves as the centre of all mental
            activity including thought process, learning and memory. It comprises
            the brain, spinal cord and nerves coming out of the spinal cord. It
            is responsible for controlling the body’s movements and automatic
            responses to the external environment. It maintains proper
            functioning of the other body systems and functions like digestion,
            breathing and puberty. The proper functioning of the nervous system
            is pivotal to the entire body’s functions.
          </p>
          <p>
            The Centre for Neurosciences at Jeevan Jyoti Hospital, Prayagraj
            provides full facilities for investigations and treatment of
            neurological disorders in adults and children. The Department
            utilizes state-of-the-art technology and a world-class medical team
            to provide care to patients with Stroke, Parkinson’s disease and
            movement disorders, epilepsy, neuromuscular, and autoimmune
            disorders.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Neuro Medicine"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Disorders Treated */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Disorders Treated
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc pl-6 space-y-1">
            <li>Stroke</li>
            <li>
              Parkinson’s disease and movement disorders such as Dystonia,
              Essential Tremors, Ataxias, Tic disease, Chorea
            </li>
            <li>Epilepsy</li>
            <li>Headache including migraine</li>
            <li>Degenerative diseases, including Alzheimer’s disease</li>
            <li>Demyelinating diseases such as multiple sclerosis</li>
            <li>
              Blood vessel disorders in the brain, including arteriovenous
              malformations and cerebral aneurysms
            </li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Peripheral nerve diseases (neuropathy), which affect the nerves
              that carry information to and from the brain and spinal cord
            </li>
            <li>Psychiatric disorders, such as schizophrenia</li>
            <li>
              Neuro-ophthalmologic diseases, which are vision problems that
              result from damage to the optic nerve or its connections to the
              brain
            </li>
            <li>Infections, such as meningitis</li>
            <li>Neuro infections</li>
            <li>Neuromuscular disorders</li>
          </ul>
        </div>
      </div>

      {/* Speciality Clinics */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Speciality Clinics
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc pl-6 space-y-1">
            <li>Parkinson’s disease and movement disorders</li>
            <li>Stroke and neurovascular disorders</li>
            <li>Epilepsy Clinic</li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li>Headache Clinic</li>
            <li>Neuromuscular Disorders Clinic</li>
          </ul>
        </div>
      </div>

      {/* Diagnostic Tests */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Diagnostic Tests
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc pl-6 space-y-1">
            <li>Electroencephalography (EEG)</li>
            <li>Electromyography</li>
            <li>Evoked potentials</li>
            <li>Polysomnography</li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li>Electroneurography</li>
            <li>Rapid Nerve Stimulation test</li>
            <li>Neuromuscular Ultrasonography</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Unmatched in brain care, with Cutting-edge technology for the best
              treatment
            </li>
            <li>Best in Adult Neuro Care</li>
            <li>Sub-Speciality Based Approach</li>
          </ul>
          <ul className="list-disc pl-6 space-y-1">
            <li>Multidisciplinary And Interdisciplinary teams</li>
            <li>Cutting-edge diagnostic and Treatment Technologies</li>
            <li>Cost-Effective</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NeuroPhysicianAndStrokeMedicine