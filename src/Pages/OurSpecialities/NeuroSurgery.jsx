import NeuroSurgeryPhoto from '../../assets/Specialities/NeuroSurgeryPhoto.JPG'

const NeuroSurgery = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">NEURO SURGERY</h1>
      <p className="text-gray-700 mb-4">
        Neurosurgery as a speciality involves care and surgical services for individuals with disorders affecting the
        brain, spinal cord, and spinal column, as well as the nerves that traverse the body.
      </p>
      <p className="text-gray-700 mb-8">
        With the incorporation of minimally invasive advanced neurosurgical techniques, we aim to shorten hospital
        stays, maximize patient safety and comfort, and enhance surgical efficacy and outcomes, with the overall
        aim to restore or improve the quality of life.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
        <div>
          <h2 className="text-lg font-semibold text-teal-600 mb-2">
            Surgeries Performed At Jeevan Jyoti Hospital
          </h2>
          <ol className="list-decimal ml-5 text-gray-700 space-y-4">
            <li>
              <strong>Brain Surgery:</strong> Brain surgery is a complex medical procedure aimed at treating various
              conditions affecting the brain. Our surgeons carefully navigate the delicate structures of the brain to
              remove tumors, repair damaged blood vessels, or alleviate pressure caused by swelling. With the induction
              of the latest technologies and techniques, our neurosurgeons can perform more precise and minimally
              invasive surgeries, leading to improved patient outcomes and faster recovery times.
            </li>
            <li>
              <strong>Spine Surgery:</strong> Spine surgery involves the diagnosis and treatment of spinal conditions
              that cause pain or affect mobility. Surgeons use specialized techniques to correct spinal deformities,
              repair herniated discs, or stabilize the spine after trauma. Minimally invasive approaches, such as
              endoscopic procedures at our hospital, have revolutionized spine surgery by reducing scarring, pain, and
              recovery time. These advancements enable patients to regain mobility and quality of life more quickly.
            </li>
          </ol>
        </div>
        <div>
          <img
            src={NeuroSurgeryPhoto}
            alt="Neuro Surgery Dummy"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="bg-gray-100 p-4 mb-6 rounded">
        <h3 className="text-teal-600 font-semibold mb-2">Diseases Treated</h3>
        <ul className="grid md:grid-cols-2 gap-x-8 list-disc ml-5 text-gray-700">
          <li>Head Injury</li>
          <li>Brain and Spine Tumors</li>
          <li>Vascular Disorders of the Brain and Spine</li>
          <li>Spinal Disorders/Deformities</li>
          <li>Congenital Disorders</li>
          <li>Movement Disorders</li>
          <li>Brain and Spine Trauma</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 mb-6 rounded">
        <h3 className="text-teal-600 font-semibold mb-2">Services Offered</h3>
        <ul className="grid md:grid-cols-2 gap-x-8 list-disc ml-5 text-gray-700">
          <li>Minimally Invasive Neurosurgery for the Brain.</li>
          <li>Minimally Invasive Spine Surgery and Endoscopic Spine Surgery.</li>
          <li>Brain Tumour Surgery with Image Guidance.</li>
          <li>Surgery for Epilepsy.</li>
          <li>Stereotactic biopsies.</li>
          <li>Endoscopic Pituitary Surgery</li>
          <li>Complex Skull-Base Surgeries.</li>
          <li>Complex Craniospinal surgeries.</li>
          <li>Disc Replacement Surgery</li>
          <li>Cerebrovascular Surgeries for Aneurysms, Arteriovenous Malformations (AVM)</li>
          <li>Aneurysm Coiling and Clipping</li>
          <li>Surgeries for Head Injuries and Spinal Injuries.</li>
          <li>Craniotomy</li>
          <li>Comprehensive Pain Management for Low Backache and Neck Pain.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 mb-6 rounded">
        <h3 className="text-teal-600 font-semibold mb-2">Specialty Clinics</h3>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Cerebrovascular Clinic.</li>
          <li>Spine Surgery Clinic.</li>
          <li>Brain Tumor Clinic.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="text-teal-600 font-semibold mb-2">Why Choose Us?</h3>
        <p className="text-gray-700">
          We offer the most advanced medical technologies and excellent care at affordable prices at Jeevan Jyoti
          Hospital. We are uniquely placed to provide the best Healthcare services holistically.
        </p>
      </div>
    </div>
  );
};

export default NeuroSurgery;
