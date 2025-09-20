import InterventionalRadiologyDrHarshit from '../../assets/Specialities/InterventionalRadiologyDrHarshit.jpg'
function InterventionalRadiology() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        INTERVENTIONAL RADIOLOGY
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            Interventional radiology (IR) is a medical specialty that uses minimally invasive techniques,
            guided by medical imaging such as X-rays, CT scans, or ultrasound, to diagnose and treat a wide
            range of conditions throughout the body. Here are some common uses of interventional radiology:
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={InterventionalRadiologyDrHarshit}
            alt="Interventional Radiology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Procedures / Uses */}
      <section className="mb-8">
        <ul className="list-decimal ml-6 space-y-2 text-gray-700">
          <li>
            <strong>Angiography and Angioplasty:</strong> Used to diagnose and treat conditions affecting
            blood vessels by injecting contrast dye into blood vessels to visualize them on X-ray images.
          </li>
          <li>
            <strong>Embolization:</strong> Blocks blood flow to specific areas of the body to treat abnormal
            blood vessels or stop bleeding.
          </li>
          <li>
            <strong>Biopsies and Drainage:</strong> Obtains tissue samples or removes fluid buildup from
            various organs using minimally invasive techniques.
          </li>
          <li>
            <strong>Tumor Ablation:</strong> Destroys tumors without the need for surgery using methods
            like radiofrequency ablation (RFA), microwave ablation, or cryoablation.
          </li>
          <li>
            <strong>Vascular Interventions:</strong> Includes EVLT, TACE, angioplasty/stenting, and
            management of DVT and arterial thrombosis.
          </li>
          <li>
            <strong>Vertebroplasty and Kyphoplasty:</strong> Injections of bone cement into fractured vertebrae
            to stabilize them and relieve pain.
          </li>
          <li>
            <strong>Percutaneous Image-Guided Therapies:</strong> Minimally invasive treatments for conditions
            such as uterine fibroids, varicose veins, and prostate enlargement.
          </li>
          <li>
            <strong>Intravascular Foreign Body Retrieval:</strong> Removal of broken catheters or medical
            devices without open surgery.
          </li>
          <li>
            <strong>Portal Hypertension Management:</strong> Redirection of blood flow to relieve pressure
            in the liver.
          </li>
          <li>
            <strong>Pain Management:</strong> Certain IR procedures can help alleviate chronic pain.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 mb-3">
          Benefits of Interventional Radiology
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc ml-6 space-y-1">
            <li>Minimally Invasive</li>
            <li>Day Care Procedures</li>
            <li>Very Fast Recovery</li>
            <li>Targeted Therapy</li>
          </ul>
          <ul className="list-disc ml-6 space-y-1">
            <li>Very Low Complication Risk</li>
            <li>No requirement for General Anesthesia</li>
            <li>Cosmetically Better – No Scar</li>
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <p className="text-gray-700">
          Overall, interventional radiology plays a crucial role in providing minimally invasive alternatives
          to traditional surgery and often offers patients faster recovery times, reduced risk of complications,
          and improved outcomes.
        </p>
      </section>
    </div>
  );
}
export default InterventionalRadiology