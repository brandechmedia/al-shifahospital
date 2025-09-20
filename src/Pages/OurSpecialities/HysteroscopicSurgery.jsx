import AdvancedHystroscopySurgery from '../../assets/Specialities/AdvancedHystroscopySurgery.jpg'
function HysteroscopicSurgery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      {/* Header Section */}
      <h1 className="text-3xl md:text-4xl font-bold text-teal-600 text-center mb-6">
        ADVANCED HYSTEROSCOPY
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="space-y-4 text-justify">
          <h2 className="text-xl font-semibold text-teal-600 border-b border-gray-200 pb-1">
            Advanced Hysteroscopy
          </h2>
          <p>
            Hysteroscopy is a procedure that provides a way for the Doctor to look inside the uterus. A hysteroscope is a tube with a light and a camera on the end. This scope is inserted into the cervix and then through the vagina. A doctor will use the hysteroscope to look for anything abnormal and can even take samples from the uterine wall to test for factors that will help diagnose or treat uterine problems.
          </p>
          <p>
            Hysteroscopy is a minor, outpatient surgery that can be performed with local, regional, or general anaesthesia. Sometimes no anaesthesia is needed. There is little risk to risk involved with this procedure for most women.
          </p>
        </div>

        <div>
          <img
            src={AdvancedHystroscopySurgery}
            alt="Hysteroscopy"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Types Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 border-b border-gray-200 pb-1 mb-2">
          There Are Two Kinds Of Hysteroscopy: Diagnostic And Operative.
        </h2>
        <p>
          Diagnostic hysteroscopy is commonly performed on women who are experiencing heavy menstrual periods and severe cramping or may be ordered if your doctor needs to know more about your reproductive health.
        </p>
        <p>
          Operative hysteroscopy can be used to correct various uterine conditions. Operative hysteroscopy is used to correct abnormalities that were detected during a diagnostic hysteroscopy. Hysteroscopy can be used to remove uterine polyps and fibroids, locate and remove bands of uterine scar tissue called adhesions, determine whether a septum (a malformation of the uterus from birth) is present, and help identify the cause of abnormal bleeding.
        </p>
      </div>

      {/* Candidate Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 border-b border-gray-200 pb-1 mb-2">
          Who Is A Candidate For Hysteroscopy?
        </h2>
        <p className="mb-2">Common reasons for the need for hysteroscopy are periods that are longer or heavier than usual or bleeding between periods.</p>
        <p>You might also need the procedure in these situations:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Abnormal Pap test results</li>
          <li>Bleeding or spotting after menopause</li>
          <li>Uterine fibroids, polyps, or uterine scarring</li>
          <li>More than one miscarriage</li>
          <li>Problems getting pregnant</li>
          <li>Sterilization</li>
          <li>To fix issues before the uterus is needed</li>
          <li>Trouble dislodging a dislodged IUD</li>
        </ul>
      </div>

      {/* Risks Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 border-b border-gray-200 pb-1 mb-2">
          Potential Risks And Side Effects Of Hysteroscopy
        </h2>
        <p>
          Hysteroscopy is a reasonably safe procedure and problems are seen in less than one percent of cases. If you experience symptoms like fever, severe abdominal pain, or heavy bleeding after the procedure, contact your doctor immediately.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 border-b border-gray-200 pb-1 mb-2">
          How Advanced Hysteroscopy Can Help: Is Hysteroscopy The Right Diagnostic Tool For You?
        </h2>
        <p>
          If you are suffering from uterine cancer and heavy or unusual menstrual bleeding, Advanced Hysteroscopy is here for you.
        </p>
        <p className="mt-2">
          Our team of women’s health experts is ready to help you with diagnostic care and a range of treatment options. We will counsel you about the best options for you and your health.
        </p>
      </div>

      {/* Needed Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 border-b border-gray-200 pb-1 mb-2">
          When Is Hysteroscopy Needed?
        </h2>
        <p className="mb-2">Hysteroscopy is needed for the following conditions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Narrowing down the appropriate cause for abnormal uterine bleeding</li>
          <li>Diagnosing the reason for abnormal Pap test results</li>
          <li>Finding the factor for bleeding post-menopause</li>
          <li>Inserting birth control into the fallopian tubes</li>
          <li>Diagnosing the cause of infertility or multiple miscarriages</li>
          <li>Removing and managing displaced intrauterine devices</li>
          <li>Removing small polyps, fibroid, scar tissues in the uterus</li>
          <li>Removing small tissues for biopsies</li>
          <li>Removing misplaced IUD</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-teal-600 border-b border-gray-200 pb-1 mb-2">
          Why Choose Us?
        </h2>
        <p>
          Our centre is well equipped with the latest equipment, modular OT, well-trained staff, and round-the-clock availability of senior Doctors.
        </p>
      </div>
    </div>
  );
}
export default HysteroscopicSurgery;