import ClinicalGeneticsDrSakshi from '../../assets/Specialities/ClinicalGeneticsDrSakshi.jpg'
function ClinicalGenetics() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-3xl font-bold text-teal-600 mb-6 text-center">
        CLINICAL GENETICS
      </h1>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Text */}
        <div>
          <p className="mb-6 text-gray-700">
            Clinical genetics is a medical specialty that focuses on diagnosing, managing, and counselling individuals and families affected by genetic disorders or at risk of inheriting such conditions. Clinical genetics plays a crucial role in various aspects of medical treatment.
          </p>
          <p className="mb-6 text-gray-700">
            Jeevan Jyoti Hospital is the first institution where a clinical genetics specialist is available who is primarily looking after the following aspects of Genetics:
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-gray-800">1. Diagnosis Of Genetic Disorders</h2>
              <p className="text-gray-700">
                Clinical genetics uses various diagnostic tools, including genetic testing, family history evaluation, and physical examinations, to identify genetic disorders. Early diagnosis allows for prompt intervention and management of the condition.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">2. Risk Assessment And Genetic Counselling</h2>
              <p className="text-gray-700">
                Clinical geneticists assess an individual’s risk of developing genetic disorders based on family history and genetic testing results. They provide genetic counseling to individuals and families, offering information about inheritance patterns, recurrence risks, and available options for prevention or management.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">3. Personalized Medicine</h2>
              <p className="text-gray-700">
                Genetic information can guide personalized treatment approaches tailored to an individual’s genetic makeup. Pharmacogenomics, for example, uses genetic data to predict how individuals will respond to certain medications, enabling physicians to prescribe the most effective and safe treatments.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">4. Preventive Medicine</h2>
              <p className="text-gray-700">
                Genetic testing can identify individuals at increased risk for certain diseases, allowing for proactive preventive measures. This may include lifestyle modifications, increased surveillance, or preventive surgeries in some cases.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">5. Management And Treatment</h2>
              <p className="text-gray-700">
                Clinical genetics is a medical specialty that focuses on the diagnosis, management, and counseling of individuals and families affected by genetic disorders or at risk of inheriting such conditions.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">6. Reproductive Medicine</h2>
              <p className="text-gray-700">
                Clinical genetics plays a vital role in reproductive health by offering preconception and prenatal genetic testing to assess the risk of genetic disorders in offspring. This information enables couples to make informed decisions about family planning, including the use of assisted reproductive technologies and prenatal interventions.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">7. Cancer Genetics</h2>
              <p className="text-gray-700">
                Clinical geneticists evaluate individuals with a personal or family history of cancer to assess their risk of hereditary cancer syndromes. Genetic testing can identify inherited mutations predisposing individuals to certain types of cancer, facilitating early detection, risk reduction strategies, and targeted therapies.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">8. Gene Therapy</h2>
              <p className="text-gray-700">
                Clinical genetics is at the forefront of developing and implementing gene therapy treatments for genetic disorders. By correcting or replacing faulty genes, gene therapy holds the potential to cure or mitigate the symptoms of various genetic diseases.
              </p>
            </div>

            <p className="text-gray-700">
              Hence, Clinical genetics plays a pivotal role in medical treatment by facilitating accurate diagnosis, risk assessment, personalized treatment strategies, preventive measures, and the development of novel therapeutic interventions for genetic disorders.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mt-8 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-teal-600 font-semibold mb-2">Why Choose Us</h2>
            <p className="text-gray-700">
              Jeevan Jyoti Hospital is the pioneer in the field of providing facilities for Clinical Genetics which encompasses a wide range of medical and counseling services aimed at improving the health and well-being of individuals and families affected by genetic disorders. It combines medical expertise with a compassionate approach to address the complex challenges associated with genetic conditions.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={ClinicalGeneticsDrSakshi}
            alt="Clinical Genetics"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
export default ClinicalGenetics;