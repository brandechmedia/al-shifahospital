import ObstetricsGynaecologyPhotos from '../../assets/Specialities/ObstetricsGynaecologyPhotos.jpg'

function Obstetrics () {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-center text-teal-600 text-2xl font-bold uppercase mb-8">
        Obstetrics and Gynaecology
      </h1>

      {/* Intro + Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          Department of Obstetrics and Gynaecology at Jeevan Jyoti Hospital,
          Prayagraj is committed to offering quality health care to women across
          all age groups and from all walks of life. The department provides a
          range of routine as well as specialized services in the fields of
          Obstetrics and Gynaecology. The multidisciplinary team approach
          involves integration with specialists in maternal and fetal medicine,
          reproductive medicine, genetics, and other specialties to ensure
          comprehensive yet personalized care to every woman as per her needs.
          <br />
          <br />
          Our vision is to offer diagnostic, medical, and surgical expertise at
          an affordable cost in the setting of state-of-the-art facilities and
          to guide women in making choices that best fit their needs.
        </p>
        <img
          src={ObstetricsGynaecologyPhotos}
          alt="Obstetrics"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {/* Obstetrics */}
        <div>
          <h2 className="bg-gray-100 text-teal-600 px-3 py-1 font-semibold inline-block">
            Obstetrics
          </h2>
          <p className="text-gray-700 mt-2">
            We offer a full range of healthcare, education, and supportive
            services for pregnant women right from preconception counseling
            through the antenatal, labor, delivery, and postpartum period...
          </p>
        </div>

        {/* Gynecology */}
        <div>
          <h2 className="bg-gray-100 text-teal-600 px-3 py-1 font-semibold inline-block">
            Gynecology
          </h2>
          <p className="text-gray-700 mt-2">
            The Department of Gynecology caters to the needs of women from
            pre-pubertal to menopausal age groups addressing the full spectrum
            of diseases related to the female reproductive tract...
          </p>
        </div>

        {/* Services Offered */}
        <div>
          <h2 className="bg-gray-100 text-teal-600 px-3 py-1 font-semibold inline-block">
            Services Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>Out-patient Services, In-patient Services</li>
              <li>Routine Antenatal care, Postnatal care</li>
              <li>Early pregnancy assessment and first-trimester screening</li>
              <li>Target scan, Double and Quadruple screening</li>
              <li>Normal and Instrumental delivery</li>
              <li>Painless Delivery</li>
              <li>
                Second-trimester termination of pregnancy for anomalous fetus
              </li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>Vaginal Birth after Cesarean (VBAC)</li>
              <li>Elective and Emergency LSCS</li>
              <li>Cesarean Myomectomy</li>
              <li>
                Cesarean Hysterectomy for placental adhesive disorders
              </li>
              <li>Elective and Emergency cervical cerclage</li>
              <li>In-house Newborn Photography Studio</li>
            </ul>
          </div>
        </div>

        {/* Special Clinics */}
        <div>
          <h2 className="bg-gray-100 text-teal-600 px-3 py-1 font-semibold inline-block">
            Special Clinics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>Pre Conceptional Clinic</li>
              <li>Fetal Medicine Clinic</li>
              <li>Adolescent Clinic</li>
              <li>Well Women Clinic</li>
              <li>Pelvic Pain Clinic</li>
              <li>Fibroid Clinic</li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>Family planning services</li>
              <li>Minimally invasive surgery</li>
              <li>Genetic Clinic</li>
              <li>Menopause Clinic</li>
              <li>Cancer Detection Clinic</li>
              <li>Day care surgery unit</li>
            </ul>
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h2 className="bg-gray-100 text-teal-600 px-3 py-1 font-semibold inline-block">
            Facilities
          </h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 mt-2">
            <li>Single dedicated floor for maternity care...</li>
            <li>A dedicated operation theatre adjacent to labor room...</li>
            <li>The NICU facility is located on the same floor...</li>
            <li>High dependency unit for managing critical cases...</li>
            <li>Antenatal education for pregnant mothers...</li>
            <li>Postpartum care with counseling and support...</li>
            <li>Multidisciplinary team approach for high-risk pregnancies...</li>
          </ul>
        </div>

        {/* Out Patient Services */}
        <div>
          <h2 className="bg-gray-100 text-teal-600 px-3 py-1 font-semibold inline-block">
            Out Patient Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>Conventional Pap/ Liquid Pap test</li>
              <li>HPV co-testing</li>
              <li>Endometrial biopsy</li>
              <li>Colposcopy</li>
              <li>Transvaginal ultrasound 3D – 4D USG</li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>Follicular monitoring</li>
              <li>STD Screening</li>
              <li>IUCD insertion and removal</li>
              <li>Cervical and Vulval biopsy</li>
              <li>Hysterosalpingography/Sono Salpingography</li>
            </ul>
          </div>
        </div>

        {/* Treatments */}
        <div>
          <h2 className="bg-gray-100 text-teal-600 px-3 py-1 font-semibold inline-block">
            Treatments
          </h2>

          {/* Conventional */}
          <h3 className="font-semibold text-gray-800 mt-3">Conventional Surgeries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>Total abdominal Hysterectomy</li>
              <li>Non-descent vaginal hysterectomy</li>
              <li>Abdominal/vaginal myomectomy</li>
              <li>Tubal re-anastomosis/Tuboplasty</li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>Vaginal reconstruction/Vaginoplasty</li>
              <li>Vaginal Hysterectomy and Pelvic floor surgeries</li>
              <li>Sacrospinous fixation</li>
              <li>Sling Operation</li>
            </ul>
          </div>

          {/* Laparoscopic */}
          <h3 className="font-semibold text-gray-800 mt-3">Laparoscopic Procedures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>Diagnostic Laparoscopy and chromo tubation</li>
              <li>Total Laparoscopic Hysterectomy</li>
              <li>Laparoscopic Myomectomy</li>
              <li>Laparoscopic Ovarian Cystectomy</li>
              <li>Laparoscopic Adhesiolysis</li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>Laparoscopic tubal ligation</li>
              <li>Laparoscopic Rudimentary Horn excision</li>
              <li>Laparoscopic Colpopexy</li>
              <li>Laparoscopic Sling procedures</li>
            </ul>
          </div>

          {/* Hysteroscopic */}
          <h3 className="font-semibold text-gray-800 mt-3">Hysteroscopic Procedures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>Diagnostic and Operative Hysteroscopy</li>
              <li>Hysteroscopic Polypectomy</li>
              <li>Hysteroscopic Myomectomy</li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>Hysteroscopic tubal cannulation</li>
              <li>Hysteroscopic septum resection</li>
              <li>Hysteroscopic removal of displaced IUCD/Hysto Adhesiolysis</li>
            </ul>
          </div>

          {/* Aesthetic Gynaecology */}
          <h3 className="font-semibold text-gray-800 mt-3">Aesthetic Gynaecology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <ul className="list-disc ml-6 space-y-1">
              <li>Vaginoplasty</li>
              <li>Vaginal Rejuvenation</li>
              <li>Vaginal Tightening</li>
              <li>Post-Delivery Rehabilitation</li>
              <li>Vaginal Dryness & Recurring Infections</li>
              <li>Labiaplasty</li>
            </ul>
            <ul className="list-disc ml-6 space-y-1">
              <li>Stress Urinary Incontinence</li>
              <li>Recurrent UTI</li>
              <li>Recurrent vaginal Infections</li>
              <li>Hymenoplasty</li>
              <li>Platelet-Rich Plasma (PRP) Therapy</li>
              <li>Vaginismus: Botox treatment</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="bg-gray-100 text-teal-600 px-3 py-1 font-semibold inline-block">
            Why Choose Us
          </h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 mt-2">
            <li>All Gynaecological and mother and child treatment under one roof</li>
            <li>Round-the-clock availability of senior Obstetricians & Gynaecologist</li>
            <li>Modular OT for any time emergency surgery</li>
            <li>Ultra-modern equipments</li>
            <li>Integrated Gynec ICU</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Obstetrics;
