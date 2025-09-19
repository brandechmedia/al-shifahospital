function DentalCare() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        DENTISTRY
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            Dentistry is a branch of medicine that is involved in the study,
            diagnosis, prevention, and treatment of diseases, disorders, and
            conditions of the oral cavity, commonly in the dentition but also
            the oral mucosa, and of adjacent and related structures and tissues,
            particularly in the maxillofacial (jaw and facial) area.
          </p>
          <p>
            The objective of the Department of Dentistry is to provide
            patient-centered quality dental care. The department is running a
            general OPD daily from 9 am to 5 pm. Dental Doctors in the
            department provide all kinds of specialty dental treatment to the
            patients.
          </p>
          <p>
            The Department of Dental has been actively involved in patient’s
            dental care and gum diseases. The department consists of fully
            fledged dental equipment and dental chair.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Dentistry"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Treatments Available */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Treatments Available
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <ul className="list-disc pl-6 space-y-1">
            <li>Tooth Extraction (Removal of teeth)</li>
            <li>Cleaning of teeth</li>
            <li>Filling of teeth with various dental materials</li>
            <li>Root canal treatment and crowns</li>
            <li>
              Replacement of teeth with Removable dental prosthesis as well as
              fixed prosthesis
            </li>
            <li>Complete denture treatment</li>
            <li>Treatment for fractured teeth</li>
          </ul>

          <ul className="list-disc pl-6 space-y-1">
            <li>Whitening of teeth</li>
            <li>Cosmetic and Silver Restorations</li>
            <li>
              Complete dentures, partial dentures, cast partial dentures and
              bridges
            </li>
            <li>
              Scaling, periodontal surgeries (gingivectomy and flap surgeries)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default DentalCare;