function DiagnosticServices() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800">
      <h1 className="text-2xl font-bold text-center text-teal-600 mb-6">
        DIAGNOSTIC SERVICES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-sm font-semibold text-teal-600 mb-2">
            Department Of Radiology
          </h2>
          <p className="text-sm leading-relaxed">
            The radiology department in a medical facility is a crucial component
            of patient care, specializing in diagnostic imaging and therapeutic
            procedures. The Department of Radiology is equipped with an advanced
            imaging facility and offers comprehensive services that cover a large
            spectrum of disease profiles to support patient clinical diagnosis.
            The 32-slice CT scan from Siemens offers a one-stop solution for
            high-definition diagnostic imaging services for all patients.
          </p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/400x250"
            alt="Radiology Department"
            className="w-full rounded"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-teal-600 mb-2">
          Facilities Available
        </h3>
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-medium">1. Diagnostic Imaging Modalities</p>
            <ul className="list-disc list-inside ml-4">
              <li>X-ray: Utilizes electromagnetic radiation to create images of internal structures.</li>
              <li>Computed Tomography (CT): Combines X-rays with computer technology to produce detailed cross-sectional images.</li>
              <li>Magnetic Resonance Imaging (MRI): Uses strong magnetic fields and radio waves to generate detailed images of organs and tissues (Outsourced).</li>
              <li>Ultrasound: Relies on high-frequency sound waves to produce images of internal structures. 3D & 4D ultrasounds.</li>
              <li>Fluoroscopy: Real-time X-ray imaging to observe the movement of organs or systems within the body.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium">2. Diagnostic Interpretation</p>
            <p>
              Radiologists analyze imaging studies to diagnose diseases and injuries, often collaborating with other medical specialists to provide comprehensive care. They provide detailed reports of their findings to referring physicians.
            </p>
          </div>

          <div>
            <p className="font-medium">3. Interventional Procedures</p>
            <p>
              Radiology departments offer minimally invasive procedures for both diagnostic and therapeutic purposes. These may include:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Biopsies: Extracting tissue samples for analysis.</li>
              <li>Angiography: Imaging of blood vessels, often followed by procedures such as angioplasty or stent placement.</li>
              <li>Tumor Ablation: Destroying tumors using heat, cold, or radiation.</li>
              <li>Pain Management: Administering injections or nerve blocks to alleviate pain.</li>
            </ul>
          </div>

          <div>
            <p className="font-medium">4. Quality And Safety</p>
            <p>
              Radiology departments adhere to strict quality and safety standards to ensure accurate diagnoses and minimize risks to patients. This includes radiation safety protocols, contrast agent administration guidelines, and infection control measures.
            </p>
          </div>

          <div>
            <p className="font-medium">5. Patient Care And Communication</p>
            <p>
              Radiology departments prioritize patient comfort and safety during imaging procedures. Clear communication with patients regarding the procedure, potential risks, and follow-up care is essential for a positive patient experience.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-teal-600 mb-2">
          Department Of Radiology Offers
        </h3>
        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Routine & High-resolution ultrasound of Abdomen, Kidney, Gynecology & Obstetrics</li>
            <li>3D & 4D Ultrasound</li>
            <li>Colour and power Doppler of the whole body including peripheral vascular Doppler</li>
            <li>Musculoskeletal and Gastro Intestinal Ultrasound</li>
            <li>Whole body CT scan (32-slice)</li>
            <li>CT-guided intervention</li>
            <li>Contrast and Barium studies</li>
            <li>Mammography with Computerized Radiography system</li>
          </ul>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>High-end Ultra-sonography for Abdomen</li>
            <li>Obstetric and Gynecological Ultra-sonography</li>
            <li>Pediatric Ultra-sonography</li>
            <li>Vascular Doppler studies</li>
            <li>Renal Elastography</li>
            <li>Musculoskeletal & small parts Ultra-sonography</li>
            <li>Interventional Ultra-sonography</li>
            <li>Mobile bedside X-ray</li>
          </ul>
        </div>
        <p className="text-sm mt-2">
          Overall, the radiology department plays a vital role in modern healthcare, contributing to the diagnosis and treatment of a wide range of medical conditions through state-of-the-art imaging techniques and interventional procedures.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-teal-600 mb-2">
          Department Of Pathology
        </h3>
        <p className="text-sm leading-relaxed">
          The pathology department is a crucial component of healthcare institutions, specializing in the study and diagnosis of diseases through the examination of tissues, organs, bodily fluids, and cells. The Department of Laboratory Medicine provides a precise/accurate quality lab diagnostic service to its patients through an automated process. The services are available round the clock driven by the philosophy to provide high-quality accuracy lab results at affordable pricing and high ethical standards. The pathology Lab of Jeevan Jyoti Hospital is accredited by the prestigious National Accreditation Board for Testing and Calibration Laboratories (NABL).
        </p>
      </div>


      {/* .................*/}

        <h2 className="text-2xl font-bold text-center text-teal-700 mb-6">Facilities Available</h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-gray-700">1. Anatomical Pathology</h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li><strong>Histopathology:</strong> Involves the examination of tissues obtained from biopsies, and surgeries to diagnose diseases such as cancer, infections, and inflammatory conditions.</li>
              <li><strong>Cytopathology:</strong> Focuses on the study of individual cells obtained from various body sites, often through methods like fine needle aspiration or Pap smears, to detect cancer or other abnormalities.</li>
            </ul>
          </section>


          <section>
            <h3 className="text-lg font-semibold text-gray-700">2. Clinical Pathology</h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li><strong>Clinical Chemistry:</strong> Analyzes blood, urine, and other bodily fluids to assess organ function, diagnose diseases, and monitor treatment effectiveness.</li>
              <li><strong>Hematology:</strong> Studies blood and blood disorders, including the analysis of blood cell counts, coagulation tests, and blood smears to diagnose conditions such as anemia, leukemia, and clotting disorders.</li>
              <li><strong>Microbiology:</strong> Identifies and characterizes infectious agents such as bacteria, viruses, fungi, and parasites to guide treatment decisions and infection control measures.</li>
              <li><strong>Immunology and Serology:</strong> Evaluates the body’s immune response and detects antibodies or antigens associated with autoimmune diseases, infectious diseases, and allergies.</li>
            </ul>
          </section>


          <section>
            <h3 className="text-lg font-semibold text-gray-700">3. Diagnostic Techniques</h3>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li><strong>Microscopy:</strong> Utilizes microscopes to examine tissue samples, cells, and microorganisms for structural abnormalities or characteristic features.</li>
              <li><strong>Molecular Diagnostics:</strong> Uses techniques such as PCR (polymerase chain reaction) and DNA sequencing to detect genetic mutations, infectious agents, and biomarkers associated with diseases.</li>
              <li><strong>Flow Cytometry:</strong> Analyzes cells based on their physical and chemical properties, often used in diagnosing hematological malignancies and immunodeficiencies.</li>
            </ul>
          </section>


          <section>
            <h3 className="text-lg font-semibold text-gray-700">4. Interdisciplinary Collaboration</h3>
            <p className="text-sm ml-4">Pathologists work closely with clinicians, surgeons, radiologists, and other healthcare professionals to provide accurate diagnosis, interpret test results, and guide patient management and treatment decisions.</p>
          </section>


          <section>
            <h3 className="text-lg font-semibold text-gray-700">5. Quality Assurance And Accreditation</h3>
            <p className="text-sm ml-4">Pathology laboratories adhere to rigorous quality control measures and participate in external proficiency testing programs to ensure the accuracy and reliability of diagnostic tests and results.</p>
          </section>
        </div>


        <h2 className="text-2xl font-bold text-center text-teal-700 mt-8 mb-4">Services Offered</h2>
        <div className="space-y-4 text-sm">
          <ul className="list-disc list-inside ml-4">
            <li>Clinical Biochemistry</li>
            <li>Clinical Pathology</li>
            <li>Haematology & Immunohematology</li>
            <li>Microbiology & Serology</li>
            <li>Histopathology & Cytology</li>
          </ul>


          <p className="font-medium mt-4">The lab facility is equipped with various fully-automated and proven technologies which optimize analysis and offer a wide range of services:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Fully automatic biochemistry analyzer (Integra 400 plus)</li>
            <li>Fully automated hormone analyzer (Cobas e411)</li>
            <li>Haematology analyzer (HORIBA H550)</li>
            <li>Automated analyzer for urine analysis</li>
            <li>5-part differential Haematology cell counter</li>
            <li>Blood gas and Electrolyte analyzers</li>
            <li>HbLC-based HbA1c (Glycosylated Hb) system</li>
            <li>Automated bacterial culture system and Automated spectrophotometric susceptibility testing system</li>
            <li>In-house Histopathology and Cytology lab with Frozen section facility, Cytospin</li>
          </ul>


          <p className="text-sm mt-4">The Department of Laboratory Medicine has adopted a vacuumed closed sample collection technique, bar-coding of specimen containers, and Bi-directional interfacing. These help in minimizing pre-analytical errors.</p>


          <p className="text-sm mt-2">Overall, the pathology department plays a fundamental role in healthcare by providing essential diagnostic information to support clinical decision-making, disease management, and patient care across a wide range of medical specialties.</p>
        </div>


    </div>
  );
}
export default DiagnosticServices