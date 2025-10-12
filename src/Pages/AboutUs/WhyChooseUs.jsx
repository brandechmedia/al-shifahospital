import WhyChooseUsImage from '../../assets/WhyChooseUsImage.JPG'
function WhyChooseUs() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 leading-relaxed">
      <h1 className="text-center text-2xl font-bold text-teal-600 mb-6">
        WHY CHOOSE US
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side Content */}
        <div className="flex-1 space-y-3">
          <p>
            There are many reasons to choose Al-Shifa Hospital as the private
            healthcare provider of your choice:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Al-Shifa Hospital, Prayagraj is a fully NABH (HCO) Accredited
              Hospital with 210 beds.
            </li>
            <li>
              Our committed team of doctors, are excellent in their field of
              specialization, with a minimum of 10 years of experience behind
              them.
            </li>
          </ul>

          <ul className="list-disc list-inside ml-4 space-y-1">
           
            <li>
              Highly advanced CT Scan machine with on-table angiography facility,
              fast and efficient routine scanning, speedy and accurate diagnosis
              of several diseases.
            </li>
          </ul>

          <p>
            Our professionals ensure being abreast of recent advances in their
            field by attending Medical Conferences, CMEs, health programs,
            medical awareness programs, and regular practical training.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              Last but not least, <strong>round-the-clock availability of
              doctors</strong> to handle any kind of emergency, especially in
              cases of Trauma, Stroke, and cardiology.
            </li>
          </ul>

          <p className="font-semibold">
            At Al-Shifa Hospital it is about keeping hope alive…! Returning
            disappointed is not an option.
          </p>
        </div>

        {/* Right Side Image */}
        <img
          src={WhyChooseUsImage}
          alt="Why Choose Us"
          className="w-full md:w-fit h-80 object-cove rounded-lg"
        />
      </div>
    </div>
  );
}
export default WhyChooseUs;