function ENT() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        EAR, NOSE AND THROAT
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            The ENT (EAR, NOSE AND THROAT) department, also known as
            Otorhinolaryngology, is a surgical specialty that focuses on the
            diagnosis and treatment of disorders related to the ear, nose,
            throat, head, and neck.
          </p>
          <p>
            The department of ENT at Jeevan Jyoti Hospital is highly equipped to
            manage any ENT ailment. We have faculties with wide experience whose
            emphasis is on accurate diagnosis, evidence-based practice, rational
            treatment, and wherever needed surgery. Our ENT specialist manages a
            wide range of conditions, including hearing and balance issues,
            speech and swallowing difficulties, breathing and sleep problems,
            allergies and sinuses, and head and neck cancer.
          </p>
          <p>
            The department offers both medical and surgical treatments. This
            includes managing ear infections, tonsillitis, chronic sinusitis,
            and hearing loss, and performing surgeries like adenoidectomy,
            tonsillectomy, and reconstructive procedures.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="ENT"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Facilities Available */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Facilities Available
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          {/* Outpatient Services */}
          <div>
            <div className="border-l-4 border-teal-600 pl-3 mb-2 font-semibold">
              Outpatient Services:
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ear suction clearance, syringing, ear toileting</li>
              <li>Microscopic examination of the ear and aural toileting</li>
              <li>Nasal endoscopy</li>
              <li>Foreign body removal from nose and ear</li>
              <li>Management of epistaxis, Anterior nasal packing</li>
              <li>Comprehensive management of Allergic rhinitis</li>
              <li>Management of Smell and taste disorders</li>
              <li>Lobuloplasty, ear piercing</li>
              <li>
                Foreign body removal from nose/ear/airway or food pipe
              </li>
            </ul>
          </div>

          {/* Surgeries */}
          <div>
            <div className="border-l-4 border-teal-600 pl-3 mb-2 font-semibold">
              Surgeries Of Ear, Nose And Throat:
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tonsillectomy</li>
              <li>Adenotonsillectomy</li>
              <li>Thyroidectomy</li>
              <li>Parotidectomy</li>
              <li>Tympanoplasty</li>
              <li>Mastoidectomy</li>
              <li>Septoplasty</li>
              <li>Rhinoplasty</li>
              <li>Sinus Surgery</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <p className="text-gray-700 leading-relaxed">
        Ear, Nose, and Throat (ENT) surgeries encompass diverse procedures. From
        rhinoplasty to Functional Endoscopic Sinus Surgery (FESS) and
        Septoplasty, each surgery serves a unique purpose in restoring function,
        relieving symptoms, or enhancing aesthetics.
      </p>
    </div>
  );
}
export default ENT