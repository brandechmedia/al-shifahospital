function Ophthalmology() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        OPHTHALMOLOGY
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            Ophthalmology is the branch of medicine concerned with the
            diagnosis, treatment, and prevention of disorders and diseases
            related to the eyes and visual system. It’s a multifaceted field
            that encompasses medical, surgical, and rehabilitative aspects of
            eye care.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Ophthalmology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* What We Treat */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          What We Treat At Jeevan Jyoti Hospital
        </h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold">1. Common Eye Conditions</h3>
            <p>
              We diagnose and manage a wide range of eye conditions, including
              refractive errors (such as myopia, hyperopia, and astigmatism),
              cataracts, glaucoma, age-related macular degeneration (AMD),
              diabetic retinopathy, retinal detachment, corneal diseases, and
              eye infections.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Age-related macular degeneration usually affects individuals
                over the age of 50 and may lead to loss of vision due to damage
                to the macula.
              </li>
              <li>
                Cataracts are the most common cause of vision impairment
                throughout the world, and cataract surgery is the second most
                common procedure performed in the United Kingdom.
              </li>
              <li>
                Diabetic retinopathy involves damage to the blood vessels in the
                eye due to excessive glucose in the blood. This can lead to
                vision impairment.
              </li>
              <li>
                Glaucoma is a condition that involves damage to the optic nerve
                in the eye, which can gradually worsen vision.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">2. Diagnostic Techniques</h3>
            <p>
              Our Ophthalmologists use various diagnostic tools and techniques
              to evaluate vision and diagnose eye disorders. These include
              visual acuity tests, tonometry to measure intraocular pressure,
              slit-lamp examination, fundoscopy, and visual field testing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Treatment Modalities</h3>
            <p>
              <strong>Medical Management:</strong> Our Ophthalmologists prescribe
              medications such as eye drops, ointments, or oral medications to
              treat conditions like glaucoma, infections, inflammation, and
              allergies.
            </p>
            <p className="mt-2">
              <strong>Surgical Interventions:</strong> Ophthalmic surgery may be
              necessary for conditions like cataracts, glaucoma, retinal
              detachment, corneal diseases, etc. Common procedures include
              cataract extraction by Phaco machine.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">4. Pediatric Ophthalmology</h3>
            <p>
              This subspecialty focuses on eye conditions affecting children,
              including amblyopia (lazy eye), strabismus (misaligned eyes),
              congenital cataracts, pediatric glaucoma, and retinopathy of
              prematurity (ROP).
            </p>
          </div>

          <div>
            <h3 className="font-semibold">5. Preventive Eye Care</h3>
            <p>
              Ophthalmologists promote preventive measures to maintain eye
              health and prevent vision loss. This includes regular eye exams,
              wearing protective eyewear, managing systemic conditions like
              diabetes and hypertension, and promoting healthy lifestyle
              habits.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              6. Collaboration With Other Specialists
            </h3>
            <p>
              Ophthalmologists often collaborate with other medical specialties
              such as Internal medicine, Neurology, Endocrinology, Gynecology,
              and oncology, as many systemic diseases can affect the eyes. A few
              of them are:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>High blood pressure</li>
              <li>Diabetes</li>
              <li>A family history of eye conditions</li>
              <li>HIV</li>
              <li>
                Thyroid conditions, for example, Grave’s disease
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Services Offered
        </h2>
        <p className="text-gray-700 mb-4">
          We offer a full range of eye care, from routine eye examinations to
          surgery. We have special expertise in:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Cataract Surgery by Phacoemulsification</li>
          <li>Glaucoma</li>
          <li>Corneal diseases</li>
          <li>Cancer of the eye and surrounding tissues</li>
          <li>Trauma of the eye, eyelid, and eye socket</li>
          <li>Inflammation of the eye and surrounding tissues</li>
          <li>Retina and vitreous disorders</li>
          <li>Ophthalmic nerve disorders</li>
          <li>Pediatric eye conditions</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-700">
          We provide a range of ophthalmic multi-disciplinary care under one
          roof which plays a crucial role in preserving vision and enhancing the
          quality of life for individuals affected by eye disorders.
        </p>
      </div>
    </div>
  );
}
export default Ophthalmology