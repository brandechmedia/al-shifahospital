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
            There are many reasons to choose Jeevan Jyoti Hospital as the private
            healthcare provider of your choice:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>
              Jeevan Jyoti Hospital, Prayagraj is a fully NABH (HCO) Accredited
              Hospital with 210 beds.
            </li>
            <li>
              Our committed team of doctors, are excellent in their field of
              specialization, with a minimum of 10 years of experience behind
              them.
            </li>
            <li>
              Our continuous upgradation of newer technologies and enhancement of
              our facilities, attract leading consultants and specialists to work
              with us.
            </li>
            <li>
              Our outstanding patient care, and reputation for a friendly
              environment that promotes health, happiness, and harmony is a
              positive landmark for us, it is not just about medicine, it is the
              personal care of our patients.
            </li>
            <li>
              Jeevan Jyoti Hospital is committed to providing world-class
              healthcare services with commitment, transparency, trust, and
              affordability under one roof. A few advanced facilities are listed
              here:
            </li>
          </ul>

          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong>State-of-art modular IVF</strong> lab with a new Laminar
              Flow Station for performing IVF procedures.
            </li>
            <li>
              The First Artificial Intelligence based Automated Semen Analysis
              Centre
            </li>
            <li>
              <strong>Advanced Laparoscopic facility</strong> for General
              Surgery, Gynecology and Urology
            </li>
            <li>
              Facility for Cosmetic Gynecology
            </li>
            <li>
              <strong>Advanced LASER Surgery facility</strong> for Laparoscopic
              Surgery, Piles, Anal Fistula and Fissures.
            </li>
            <li>
              <strong>Advanced Hysteroscopic Centre</strong>: for all kinds of
              abnormalities like – Polyps, Fibroids, Cancer, Biopsy, abnormal
              uterine bleeding, bleeding after menopause, and Adhesions.
            </li>
            <li>Interventional Radiology</li>
            <li>Clinical Genetics</li>
            <li>
              <strong>
                Advanced Diagnostic Centre, Modular OTs with the best State - of
                - Art Medical and Pediatric ICU.
              </strong>
            </li>
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
              Jeevan Jyoti Hospital is <strong>empanelled with all Government
              sectors and PSUs, TPAs, and Insurance companies</strong> for
              providing cashless treatment to their beneficiaries.
            </li>
            <li>
              Jeeval Jyoti Hospital is also providing <strong>cashless
              services</strong> to the cardholders of Ayushman Bharat, Pandit
              Deendayal Upadhyay, and other state government schemes.
            </li>
            <li>
              Jeevan Jyoti Hospital is located in Prayagraj, India which is well
              connected to all major cities in the country, making it convenient
              for international patients.
            </li>
            <li>
              Last but not least, <strong>round-the-clock availability of
              doctors</strong> to handle any kind of emergency, especially in
              cases of Trauma, Stroke, and cardiology.
            </li>
          </ul>

          <p className="font-semibold">
            At Jeevan Jyoti Hospital it is about keeping hope alive…! Returning
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