import SurgeryOncology from '../../assets/Specialities/SurgeryOncology.jpg'
function PlasticSurgery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl font-bold text-teal-600 uppercase mb-6">
        Plastic Surgery
      </h1>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Plastic surgery is a surgical specialty involving the restoration,
            reconstruction, or alteration of the human body. It can be divided
            into two categories. The first is reconstructive surgery which
            includes craniofacial surgery, hand surgery, microsurgery, and the
            treatment of burns. The other is cosmetic or aesthetic surgery. While
            reconstructive surgery aims to reconstruct a part of the body or
            improve its functioning, cosmetic surgery aims to improve its
            appearance.
          </p>
          <p>
            The Department of Plastic & Cosmetic Surgery is supported by expert
            aesthetic surgeons with many years of experience in the specialized
            field for saving limbs, enabling life, and aiding faster recovery
            toward normal routine.
          </p>
          <p>
            At Jeevan Jyoti Hospital, the team of aesthetic plastic surgeons is
            supported by high-end resources such as advanced microscopes, laser
            machines, liposuction machines, and well-equipped Daycare facilities
            for treating the clinical needs of such patients and giving lease to
            new life.
          </p>
        </div>

        {/* Dummy Image */}
        <div>
          <img
          src={SurgeryOncology}
            alt="Plastic Surgery"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-10">
        <h2 className="bg-teal-50 border-l-4 border-teal-500 px-4 py-2 text-lg font-semibold text-gray-800">
          Services
        </h2>
        <p className="mt-3 text-gray-700">
          Jeevan Jyoti Hospital provides complete plastic surgical solutions and
          is trusted today for its expertise and experience in the treatment of
          all types of emergency vascular injuries and cosmetic corrections.
        </p>
      </div>

      {/* Cosmetic Procedures */}
      <div className="mt-8 border-l-4 border-gray-400 pl-4">
        <h3 className="bg-gray-100 inline-block px-3 py-1 rounded-t font-medium text-gray-800">
          The Cosmetic Procedures Performed By Us
        </h3>
        <ul className="grid md:grid-cols-2 gap-2 mt-3 text-gray-700 list-disc list-inside">
          <li>Reconstructive surgery</li>
          <li>Emergency Plastic Surgeries</li>
          <li>Cosmetic surgery</li>
          <li>Facial surgery</li>
          <li>Masking of surgical scars</li>
        </ul>
      </div>

      {/* Sub Specialities */}
      <div className="mt-8 border-l-4 border-gray-400 pl-4">
        <h3 className="bg-gray-100 inline-block px-3 py-1 rounded-t font-medium text-gray-800">
          Sub Specialities
        </h3>
        <ul className="grid md:grid-cols-2 gap-2 mt-3 text-gray-700 list-disc list-inside">
          <li>Aesthetic Surgery</li>
          <li>Rhinoplasty</li>
          <li>Breast Surgery</li>
          <li>Scar Revision</li>
          <li>Burns and post-burn deformities</li>
          <li>Birth Defects</li>
          <li>Hand and Microvascular Surgery</li>
          <li>Chest and craniofacial deformities</li>
          <li>Reconstructive Trauma surgery</li>
          <li>Diabetic foot and chronic wound problems</li>
          <li>Cancer Reconstruction</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mt-10">
        <h2 className="bg-teal-50 border-l-4 border-teal-500 px-4 py-2 text-lg font-semibold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="mt-3 text-gray-700">
          Jeevan Jyoti Hospital provides complete plastic surgical solutions
          under one roof and is trusted today for its expertise and experience in
          the treatment of all types of emergency vascular injuries, and
          reconstructive corrections.
        </p>
      </div>
    </div>
  );
}
export default PlasticSurgery;