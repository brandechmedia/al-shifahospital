import AdvancedLaparoscopySurgery from '../../assets/Specialities/AdvancedLaparoscopySurgery.jpg'
function LaparoscopicSurgery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-teal-600 text-center mb-6">
        GENERAL AND ADVANCED LAPAROSCOPY SURGERY
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="space-y-4 text-justify">
          <p>
            General Surgery is a discipline of surgery comprising a central core
            of knowledge embracing anatomy, physiology, metabolism, immunology,
            nutrition, pathology, wound healing, shock and resuscitation,
            intensive care, and neoplasia, which are common to all surgical
            specialties.
          </p>
          <p>
            General Surgery at Jeevan Jyoti Hospital offers new surgical
            innovation to the benefit of surgical patients. Due to high-tech
            instrumentation and innovative technology, major procedures such as
            abdominal surgery are now replaced with minimally invasive
            laparoscopic techniques that often reduce pain, accelerate
            recuperation, minimize recovery time and reduce cost without
            sacrificing good outcomes.
          </p>
          <p>
            Our Laparoscopic Surgeons is deeply committed to the patient’s
            welfare & safety, and follow the best clinical practices based upon
            ethical and evidence-based surgical options to all our patients.
          </p>
        </div>

        <div>
          <img
            src={AdvancedLaparoscopySurgery}
            alt="Surgery"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 border-b-4 border-teal-600 inline-block pb-1 mb-4">
          Services
        </h2>
        <p className="mb-4">
          The Department of General & Laparoscopic surgery at Jeevan Jyoti
          Hospital has the best Laparoscopic surgeon in Prayagraj who deal with
          diseases which require effective surgical management. The surgical
          spectrum covered for surgical ailments includes:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Alimentary Tract issues: Perforations, Appendicitis, Obstruction, Chronic pancreatitis</li>
          <li>Abdomen & its Contents: Splenectomy, Laparoscopic Cholecystectomy</li>
          <li>Hernias (simple/complicated, inguinal/femoral/incisional)</li>
          <li>Endocrine issues like Thyroid diseases</li>
          <li>Trauma – Surgery & Care</li>
          <li>Anorectal diseases – abscesses, fistula, fissure, piles</li>
          <li>Varicose Veins</li>
          <li>Skin and soft tissue including tumours, cysts, Fasciitis</li>
          <li>Surgery for Hydrocele, diabetic complications</li>
          <li>Abscesses</li>
          <li>Laser surgery for Varicose veins</li>
          <li>Embolectomy</li>
          <li>Colonoscopy</li>
          <li>Thyroidectomy</li>
        </ul>
      </div>

      {/* Advanced Laparoscopic Centre */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 border-b-4 border-teal-600 inline-block pb-1 mb-4">
          Advanced Laparoscopic Centre
        </h2>
        <p className="mb-4">
          The Minimal Invasive Surgery Centre at Jeevan Jyoti Hospital is
          functioning with exclusive focus on evaluation, development and
          expansion of procedures. We have a sophisticated ultramodern theatre
          complex having Modular operation theatres, equipped with latest
          state-of-the-art technology.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Cholecystectomy (removal of gallbladder)</li>
          <li>Appendectomy (removal of appendix)</li>
          <li>Splenectomy (removal of spleen)</li>
          <li>Nephrectomy</li>
          <li>Adrenalectomy</li>
          <li>Thymectomy</li>
          <li>Colorectal surgery</li>
          <li>Fundoplication</li>
          <li>Hernia</li>
          <li>Obesity surgeries</li>
          <li>Breast Surgery</li>
          <li>Thoracoscopy</li>
        </ul>
        <p className="mt-2">
          We perform <span className="font-semibold">Laparoscopic emergency surgeries</span>
          — intestinal perforations, Splenectomy, strangulated hernias etc.
        </p>
      </div>

      {/* Advanced LASER Centre */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 border-b-4 border-teal-600 inline-block pb-1 mb-4">
          Advanced LASER Centre: For
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Piles</li>
          <li>Fistula</li>
          <li>Pilonidal sinus</li>
          <li>Varicose Veins</li>
        </ul>
      </div>

      {/* Day Care Surgery */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 border-b-4 border-teal-600 inline-block pb-1 mb-4">
          Day Care Surgery
        </h2>
        <p className="mb-4">
          Our advanced anaesthetic and surgical techniques enable patients to go
          home on the same day after surgery.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Day Care Hysterectomy (Removal of Uterus)</li>
          <li>Day Care Cholecystectomy (Removal of Gall Bladder)</li>
          <li>Varicose Veins ablation</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-teal-600 border-b-4 border-teal-600 inline-block pb-1 mb-4">
          Why Choose Us
        </h2>
        <p>
          Availability of latest technologies under one roof, much experienced
          surgeon, facility of Laparoscopic and LASER surgery at affordable cost.
        </p>
        <blockquote className="italic text-teal-700 mt-4 border-l-4 border-teal-600 pl-4">
          "A Good Surgeon Knows How to Operate. A Better Surgeon Knows When to
          Operate and the Best Surgeon Knows When NOT to Operate"
        </blockquote>
      </div>
    </div>
  );
}
export default LaparoscopicSurgery;