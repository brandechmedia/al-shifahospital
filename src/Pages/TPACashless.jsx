

function TpaCashless() {
  return (
    <div className="bg-white md:w-4/5 mx-auto text-gray-800 px-6 md:px-20 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-600 uppercase">
        TPA & Cashless Facilities
      </h1>
      <p className="text-center text-gray-500 mt-2 mb-12 uppercase tracking-wide">
        Your health may not be perfect, your health insurance must be..!
      </p>

      {/* Intro */}
      <p className="text-center max-w-3xl mx-auto mb-12">
        We, at Jeevan Jyoti Hospital have made sure that your health insurance is a top
        priority. Your financials is the last thing we want you to worry about, when a loved
        one needs health care.
      </p>

      {/* Section - TPA List */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="bg-teal-600 text-white px-4 py-2 font-semibold mb-6">
            JJH List Of Empanelled TPA / Insurance Companies
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside">
            <li>FHPL</li>
            <li>MEDIASSIST</li>
            <li>HEALTH INDIA</li>
            <li>GRAND TPA</li>
            <li>ADITYA BIRLA</li>
            <li>UNITED HEALTH CARE</li>
            <li>PAREKH</li>
            <li>
              HERITAGE TPA
            </li>
            <li>UNIVERSAL SAMPOO</li>
            <li>ERICSION TPA</li>
            <li>EAST WEST TPA</li>
            <li>ICICI</li>
            <li>PRUDENTIAL</li>
            <li>FUTURE</li>
            <li>GENERALI</li>
            <li>SAFWAY TPA</li>
            <li>FOCUS TPA PART</li>
            <li>MEIDCLIAM</li>
            <li>UNITED INDIA INSURANCE</li>
            <li>NATIONAL INSURANCE</li>
            <li>ORIENTAL INSURANCE</li>
            <li>NEW INDIA INSURANCE</li>
            <li>SBI GENERAL INSURANCE</li>
            <li>UNIVERSAL SAMPOO</li>
            <li>ADITYA BIRLA HEALTH INSURANCE</li>
            <li>FUTURE GENERALY</li>
            <li>LIBERTY HEALTH INSURANCE</li>
            <li>NAVI INSURANCE</li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x300"
            alt="dummy"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section - Government Companies */}
      <div className="mt-16">
        <h2 className="bg-teal-600 text-white px-4 py-2 font-semibold mb-6">
          JJH List Of Empanelled Government Companies
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside">
          <li>CGHS – Serving & Pensioner</li>
          <li>CRPF</li>
          <li>BSNL</li>
          <li>CBSE</li>
          <li>UP Police Department</li>
          <li>Coal India Ltd.</li>
          <li>Food Corporation of India (FCI)</li>
          <li>North Central Railway (NCR)</li>
          <li>MNNIT</li>
          <li>ESIC</li>
          <li>NTPC</li>
          <li>Harish Chandra Research Institute, Jhunsi</li>
          <li>Central Inland Fisheries Research Institute (ICAR)</li>
          <li>Govind Ballabh Pant Social Science Institute, Jhunsi</li>
          <li>ECHS (Ex-Serviceman Contributory Health Scheme)</li>
        </ul>
      </div>

      {/* Footer note */}
      <p className="mt-10 text-center bg-teal-600  text-white p-3 rounded-xl">
        We at Jeevan Jyoti Hospital have a history of treating corporate patients, since the year 2002.
      </p>
    </div>
  );
}
export default TpaCashless;