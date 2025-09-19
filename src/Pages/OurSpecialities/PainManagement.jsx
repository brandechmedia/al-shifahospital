function PainManagement() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        PAIN MANAGEMENT
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-3">
          <p>
            Pain Management is a specialty of medicine that deals with acute,
            chronic, and cancer pain. A Pain Specialist uses an
            interdisciplinary approach to ease the suffering and improve the
            quality of life of those living with pain. Treatment of pain
            includes pharmacological, non-pharmacological, interventional
            procedures, physical therapy, rehabilitation, and psychological
            counseling.
          </p>
          <p>
            The Pain Clinic is a specially designed outpatient facility to
            deliver such specialized care. Various techniques are used based on
            the patient’s condition, providing relief and improving the quality
            of life.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Pain Management"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* What's the Goal */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <h2 className="text-teal-600 font-semibold">What’s The Goal?</h2>
        <p className="text-gray-700 mt-2">
          The main goal is to give pain relief, improve functional status, and
          enhance quality of life by minimizing pain in patients with acute,
          chronic, and cancer pain.
        </p>
      </div>

      {/* Diseases Managed */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <h2 className="text-teal-600 font-semibold">
          Diseases Managed in The Pain Clinic
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 list-disc ml-6 mt-3 gap-y-1 text-gray-700">
          <li>Chronic Low Back Pain</li>
          <li>Cervical Radiculopathy</li>
          <li>Shoulder Pain</li>
          <li>Knee Osteoarthritis Pain</li>
          <li>Cancer Pain</li>
          <li>Headache / Migraine</li>
          <li>Diabetic Neuropathy</li>
          <li>Trigeminal Neuralgia</li>
          <li>Slip Disc</li>
          <li>Post-Herpetic Neuralgia</li>
          <li>Complex Regional Pain Syndrome</li>
          <li>Myofascial Pain Syndrome</li>
          <li>Post-Surgical Pain</li>
          <li>Phantom Limb Pain</li>
          <li>Pelvic Pain Syndrome</li>
          <li>Fibromyalgia</li>
        </ul>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <h2 className="text-teal-600 font-semibold">Services Offered</h2>
        <p className="text-gray-700 mt-2">
          These include advanced pain treatment and management using medication,
          physiotherapy, counseling, and interventional procedures.
        </p>
      </div>

      {/* Types Of Nerve Blocks */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <h2 className="text-teal-600 font-semibold">Types Of Nerve Blocks</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 list-disc ml-6 mt-3 gap-y-1 text-gray-700">
          <li>Suprascapular Nerve Block (Shoulder Pain)</li>
          <li>Facet Joint Block (Back & Neck Pain)</li>
          <li>Transforaminal Epidural Steroid Injection (Sciatica)</li>
          <li>Sacroiliac Joint Injection (Low Back Pain)</li>
          <li>Intercostal Nerve Block (Rib Fracture Pain)</li>
          <li>Pudendal Nerve Block (Pelvic Pain)</li>
          <li>Stellate Ganglion Block (CRPS, Headache)</li>
          <li>Occipital Nerve Block (Headache & Migraine)</li>
          <li>Trigeminal Nerve Block (Trigeminal Neuralgia, Facial Pain)</li>
          <li>Caudal Epidural Injection (Chronic Back Pain, Failed Back Surgery)</li>
          <li>Hypogastric Plexus Block (Pelvic Pain, Cancer Pain)</li>
        </ul>
      </div>

      {/* Other Blocks */}
      <div className="bg-gray-100 p-4 rounded-lg shadow mb-8">
        <h2 className="text-teal-600 font-semibold">Other Blocks</h2>
        <div className="space-y-4 mt-2 text-gray-700">
          <div>
            <h3 className="font-semibold">Sympathetic Nerve Block</h3>
            <p>
              A sympathetic block is performed to decrease pain arising from
              sympathetic nerves like CRPS, Peripheral Neuropathy, etc.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Stellate Ganglion Block</h3>
            <p>
              This block is used for neuropathic pain conditions and decreases
              abnormal nerve activity supplying the head, neck, and arms.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Platelet Rich Plasma Injection (PRP)</h3>
            <p>
              PRP is used in treating chronic musculoskeletal pain including
              knee pain, tennis elbow, plantar fasciitis, and tendon injuries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PainManagement