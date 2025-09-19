function Colposcopy() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        COLPOSCOPY
      </h1>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-3">
          <p>
            Colposcopy is a medical procedure used to closely examine the cervix,
            vagina, and vulva for signs of disease or abnormalities. It’s
            typically performed by a Gynaecologist. Here’s an overview of what
            colposcopy involves:
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Colposcopy Procedure"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Steps */}
      <div className="text-gray-700 leading-relaxed space-y-5">
        <p>
          <span className="font-semibold">1. Purpose:</span> Colposcopy is
          primarily used to investigate abnormalities found during routine
          cervical cancer screening tests, such as Pap smears or HPV tests. It
          helps to identify precancerous changes, cervical dysplasia, genital
          warts, inflammation, or other abnormal tissue changes.
        </p>

        <p>
          <span className="font-semibold">2. Procedure:</span> During
          colposcopy, the patient lies on an examination table, similar to a
          pelvic exam. A speculum is inserted into the vagina to provide a clear
          view of the cervix. The colposcope, which is a specialized magnifying
          instrument with a light source, is then positioned near the vaginal
          opening to allow to examine the cervix, vagina, and vulva in detail.
        </p>

        <p>
          <span className="font-semibold">3. Dye or Acetic Acid Application:</span>{" "}
          In some cases, acetic acid or iodine may be applied to the cervix to
          highlight abnormal areas, making it easier to see through the
          colposcope.
        </p>

        <p>
          <span className="font-semibold">4. Biopsy:</span> If abnormal areas
          are detected during colposcopy, a biopsy may be performed. During a
          biopsy, small tissue samples are taken from the abnormal areas for
          further examination under a microscope. This helps to confirm a
          diagnosis and determine the severity of any abnormality.
        </p>

        <p>
          <span className="font-semibold">5. Potential Discomfort:</span> While
          colposcopy is generally well-tolerated, some women may experience mild
          discomfort or cramping during the procedure, particularly during
          biopsy. However, it is usually brief and manageable.
        </p>

        <p>
          <span className="font-semibold">6. Aftercare:</span> After colposcopy,
          most women can resume their normal activities immediately. However,
          it’s common to experience light vaginal bleeding or discharge for a
          few days after the procedure.
        </p>

        <p>
          <span className="font-semibold">7. Follow-Up:</span> Depending on the
          findings of the colposcopy and biopsy, further monitoring or treatment
          may be necessary. This could include repeat colposcopy, additional
          biopsies, or interventions such as cryotherapy, laser therapy, or
          surgical excision to remove abnormal tissue.
        </p>
      </div>

      {/* Conclusion */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mt-10 text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold text-teal-600">
            Colposcopy is a valuable tool in the early detection and management
            of cervical abnormalities, providing important information for the
            prevention and treatment of cervical cancer.
          </span>{" "}
          Individuals need to attend regular cervical cancer screenings as
          recommended by their healthcare provider, as early detection greatly
          improves treatment outcomes.
        </p>
      </div>
    </div>
  );
}
export default Colposcopy;