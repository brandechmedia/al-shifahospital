import SurgeryOncology from '../../assets/Specialities/SurgeryOncology.jpg'
function OncoSurgery() {
  return (
    <div className="px-6 md:px-16 py-10 max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-teal-600 text-center mb-8">
        SURGICAL ONCOLOGY
      </h1>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="space-y-4 text-gray-700">
          <p>
            Surgery is the primary treatment of choice in many early-stage cancers.
            Removal of tumor by surgery is a fast and the most effective way to
            eradicate the disease. Our surgical oncologists are highly experienced
            and trained for difficult cancer surgeries. They play a vital role in
            every sphere of cancer care, from diagnosing, staging, treatment,
            following up, and supportive care.
          </p>
          <p>
            To start treatment, our surgeons access the tumor directly by FNAC or
            perform needle biopsy under image guidance for tissue diagnosis. This
            gives biological knowledge and correct staging of the disease.
            Complete staging helps to plan further treatment and forecast expected
            outcomes and the overall result of treatment.
          </p>
          <p>
            At better understanding of tumor biology and revolutionary
            developments in radiation oncology and medical oncology have enabled
            a shift from radical surgery to lesser radical surgeries with an
            emphasis on preserving organ functions, good functioning, and
            post-operative morbidity.
          </p>
        </div>
        <div>
          <img
            src={SurgeryOncology}
            alt="Surgical Oncology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Types of Surgery */}
      <div className="mb-12">
        <h2 className="bg-teal-600 text-white font-semibold px-4 py-2 rounded-md mb-4">
          Types Of Surgery Used In Cancer Treatment At Jeevan Jyoti Hospital
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold">Curative Surgery</h3>
            <p>
              Removes cancerous tumor from the body. Done when the tumor is
              localized.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Preventive Surgery</h3>
            <p>
              Removes tissue that does not contain cancer cells but may develop
              into a malignant tumor.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Diagnostic Surgery</h3>
            <p>
              Helps to obtain a tissue sample for diagnosis, identify the type of
              cancer, or determine the stage.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Staging Surgery</h3>
            <p>
              Used to uncover the extent of cancer by inserting lens/camera
              inside the body.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Debulking Surgery</h3>
            <p>
              Removes a portion of the tumor when entire removal may cause damage
              to the organ.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Palliative Surgery</h3>
            <p>
              Used to treat advanced stages to relieve discomfort or correct
              related problems.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Supportive Surgery</h3>
            <p>
              Helps other treatments work effectively (example: insertion of
              catheter).
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Restorative Surgery</h3>
            <p>
              Follow-up surgery to restore shape/appearance or body function
              after primary treatment.
            </p>
          </div>
        </div>
      </div>

      {/* Types of Cancer Treated */}
      <div className="mb-12">
        <h2 className="bg-teal-600 text-white font-semibold px-4 py-2 rounded-md mb-4">
          Types Of Cancer Treated
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Breast, Esophagus, Throat, Lung, Gallbladder, Kidney, Liver</li>
          <li>Pancreas, Spine, Uterus, Bones, Colon</li>
        </ul>
      </div>

      {/* Services Offered */}
      <div className="mb-12">
        <h2 className="bg-teal-600 text-white font-semibold px-4 py-2 rounded-md mb-4">
          Services Offered
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold">Gynecological Oncology Services</h3>
            <p>
              Experts for surgical management of gynecological cancers using
              advanced technology.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Breast Diseases</h3>
            <p>
              Holistic health-based breast care with screening, treatment,
              surgery & rehabilitation.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Head and Neck Oncology Services</h3>
            <p>
              Focus on tumors of mouth, throat, larynx, thyroid gland with
              multidisciplinary approach.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Neuro-Oncology Services</h3>
            <p>
              Specialized management of nervous system and craniospinal neoplasms.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Gastrointestinal Oncology Services</h3>
            <p>
              Works in close association with medical and radiation oncology for
              integrated patient care.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Uro-Oncology</h3>
            <p>
              Specialized discipline focusing on urinary tract and reproductive
              organ cancers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Laparoscopic Cancer Surgery</h3>
            <ul className="list-disc list-inside">
              <li>Throat</li>
              <li>Esophagus</li>
              <li>Thyroid</li>
              <li>Lung</li>
              <li>Gallbladder</li>
              <li>Kidney</li>
              <li>Liver</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-12">
        <h2 className="bg-teal-600 text-white font-semibold px-4 py-2 rounded-md mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-700">
          Comprehensive care under a single roof. The hospital delivers holistic
          health-based cancer services with the latest technology and
          Laparoscopic Cancer Surgery.
        </p>
      </div>
    </div>
  );
}
export default OncoSurgery