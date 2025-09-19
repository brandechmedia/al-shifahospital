function BreastClinic() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      
      {/* Heading */}
      <h1 className="text-center text-teal-600 font-bold text-2xl mb-6">
        BREAST CLINIC
      </h1>

      {/* Intro + Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-2 space-y-4">
          <p>
            A breast clinic is a specialized unit dedicated to the assessment, diagnosis, treatment, and ongoing care of 
            patients with breast health concerns. At Jeevan Jyoti Hospital, our breast clinic is managed by a multidisciplinary 
            team of experts including Gynecologists, Oncologists, Radiologists, Pathologists, and specialized breast care nurses.
          </p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/400x250"
            alt="Breast Clinic"
            className="rounded-lg shadow"
          />
        </div>
      </div>

      {/* Facilities */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Facilities
        </h2>
        <ul className="list-decimal list-inside space-y-3">
          <li><b>Multidisciplinary Care:</b> Our clinic brings together experts ...</li>
          <li><b>Screening & Early Detection:</b> Services such as mammograms, ultrasounds, clinical breast exams ...</li>
          <li><b>Diagnostic Services:</b> Advanced diagnostic tools including core needle biopsy ...</li>
          <li><b>Breast Cancer Screening:</b> Routine screening available for women ...</li>
          <li><b>Treatment Planning:</b> Individualized treatment plans ...</li>
          <li><b>Surgical Services:</b> Range of surgeries like lumpectomy, mastectomy ...</li>
          <li><b>Reconstruction Services:</b> Breast reconstruction options ...</li>
          <li><b>Support Services:</b> Counseling, support groups, and rehabilitation ...</li>
          <li><b>Follow-Up Care:</b> Ongoing follow-up visits ...</li>
        </ul>
      </section>

      {/* Breast Self-Examination */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Breast Self-Examination (BSE)
        </h2>
        <p className="mb-4">
          Performing a Breast Self-Examination (BSE) is an important skill for all women above 20 years of age to monitor their breast health. 
          Here’s a step-by-step guide:
        </p>
        <ul className="list-decimal list-inside space-y-2">
          <li><b>Visual Examination:</b> Stand in front of a mirror, observe for any visible changes ...</li>
          <li><b>Raised Arms:</b> Raise your arms and look for changes ...</li>
          <li><b>Lying Down:</b> Lie down and feel your breasts using your fingertips ...</li>
          <li><b>Standing Up:</b> Feel your breasts while standing (commonly done while showering) ...</li>
        </ul>
      </section>

      {/* Key Points */}
      <section className="mb-10 bg-gray-50 border rounded p-6">
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Key Points
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Early detection significantly improves treatment outcomes.</li>
          <li>Women at higher risk should have regular check-ups & screenings.</li>
          <li>Any lump or unusual change should be promptly reported to a doctor.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-10 bg-gray-50 border rounded p-6">
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Why Choose Us
        </h2>
        <p>
          At our breast clinic, we prioritize the importance of collaboration with breast cancer survivors and women’s wellness experts. 
          With a holistic approach that balances scientific excellence and compassionate care, we ensure that every patient receives the 
          highest quality of treatment and support.
        </p>
      </section>
    </div>
  );
}
export default BreastClinic;