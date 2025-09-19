function Dermatology() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        SKIN CARE AND DERMATOLOGY
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-3">
          <p>
            The Department of Dermatology at Jeevan Jyoti Hospital, Prayagraj,
            offers services to diagnose and treat skin diseases including those
            of children. The department has the expertise to manage both acute
            and chronic skin diseases including acne, psoriasis, leukoderma,
            pigmentation of the skin, infections like fungal (especially
            tinea/crytomyset), immuno bullous disorders (like pemphigus,
            pemphigoid group), autoimmune diseases (like lupus, systemic
            sclerosis), allergic disorders (like urticaria, skin allergies,
            chemical allergies, drug allergies), diseases of hairs (like
            alopecia/hair fall, hirsutism) and nails, cancers of the skin and
            genetic diseases of skin.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Skin Care and Dermatology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 p-5 rounded-lg shadow mb-8">
        <h2 className="text-teal-600 font-semibold">Services Offered</h2>
      </div>

      {/* Service Items */}
      <div className="text-gray-700 leading-relaxed space-y-8">
        {/* Skin Biopsy */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            Skin Biopsy
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Done either to confirm clinical diagnosis, establish a diagnosis
              in a doubtful skin lesion, and sometimes to strategize treatment.
            </li>
            <li>
              It is a minor procedure using a disposable punch. Depending on the
              lesion and diagnosis, a sample biopsy will need to be done and
              stitched.
            </li>
          </ul>
        </div>

        {/* Electrosurgery/RFA */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            Electrosurgery / RFA
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Used for removal of warts, molluscum contagiosum, seborrheic
              keratosis, and skin tags. Also used for skin rejuvenation.
            </li>
            <li>
              Uses electric current to create heat in different modes – electro
              section, electrocoagulation, electrodessication, and fulguration.
            </li>
            <li>
              Skin lesions are effectively treated while producing minimal side
              effects.
            </li>
          </ul>
        </div>

        {/* Cryosurgery */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            Cryosurgery
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Used for treatment of warts, molluscum contagiosum, seborrheic
              keratosis, skin tags, and other small lesions.
            </li>
            <li>
              Utilizes extremely cold temperature of liquid nitrogen, delivered
              in a controlled fashion.
            </li>
            <li>
              Simple, cost-effective, efficacious, and cosmetically acceptable.
            </li>
          </ul>
        </div>

        {/* Chemical Peels */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            Chemical Peels
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Used to improve skin texture (blotchy complexion, uneven tone,
              fine wrinkles, pigmentation, etc.).
            </li>
            <li>
              Different peels available like glycolic acid, salicylic acid,
              lactic acid, and combination peels. They can be superficial,
              medium, or deep.
            </li>
          </ul>
        </div>

        {/* Micro-Needling RF */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            Micro-Needling Radiofrequency
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Also called collagen induction therapy.</li>
            <li>
              Used to treat acne scarring, fine lines, wrinkles, loose skin,
              texture, pores, and stretch marks.
            </li>
          </ul>
        </div>

        {/* Laser */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            Laser
          </h3>
          <p className="mt-2">
            Laser facility is available for Pigmentation, Acne Scar, Skin
            Rejuvenation, Tattoo Removal, and Laser Hair Removal (LHR).
          </p>
        </div>

        {/* Botox */}
        <div>
          <h3 className="font-semibold border-l-4 border-teal-600 pl-2">
            Botox
          </h3>
          <p className="mt-2">It is used for:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Facial Wrinkles</li>
            <li>Aging-related facial issues</li>
            <li>Hyperhidrosis of Palm & sole</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Dermatology