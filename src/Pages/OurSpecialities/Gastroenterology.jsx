function Gastroenterology() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-teal-600 mb-8">
        DEPARTMENT OF GASTROENTEROLOGY
      </h1>

      {/* Overview Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Text */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-3">
          <h2 className="text-lg font-semibold text-teal-600">Overview</h2>
          <p>
            The Gastroenterology department of Jeevan Jyoti Hospital is equipped
            with the latest state-of-the-art endoscopic, diagnostic and
            therapeutic facilities with the best Olympus Endoscopes to perform
            the following procedures:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>UGI endoscopy</li>
            <li>Colonoscopy</li>
            <li>Enteroscopy</li>
            <li>Endoscopic Variceal Band Ligation</li>
            <li>Endoscopic Sclerotherapy</li>
            <li>Polypectomy</li>
            <li>Endoscopic Foreign body removal</li>
            <li>Endoscopic stricture dilatation</li>
            <li>Endoscopic retrograde cholangiopancreatography (ERCP)</li>
            <li>Endoscopic Nasobiliary Drainage</li>
            <li>Biliary / Pancreatic Stenting</li>
            <li>Sphincterotomy & Stone Extraction</li>
            <li>Endoscopic Papillotomy</li>
          </ul>
          <p>
            We aim to improve the health and well-being of individuals suffering
            from gastrointestinal and liver diseases. With access to the
            forefront of medical advancements, we improve the treatment options,
            reduce complications for patients and provide technology and support
            systems with greater ease of operation and precision.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Gastroenterology"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Diseases Treated */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Diseases Treated
        </h2>

        {/* GI Diseases */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800">GI Diseases</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>GI functional disorder</li>
            <li>Acute & chronic Pancreatitis</li>
            <li>Peptic ulcer disease</li>
            <li>Acute & chronic liver failure</li>
            <li>Irritable Bowel Syndrome</li>
            <li>Acute & chronic Hepatitis</li>
            <li>Acute & chronic Diarrhea</li>
            <li>Inflammatory Bowel Disease</li>
            <li>Acid reflux disease</li>
            <li>
              Biliary & Pancreatic disease including autoimmune hepatitis,
              primary biliary cholangitis and primary sclerosing cholangitis
            </li>
            <li>
              Functional & motility related gastrointestinal disease like
              Constipation, Radact Chest syndrome
            </li>
            <li>GI cancers including esophageal & colorectal</li>
            <li>GI bleeds of various origin</li>
            <li>GI infections (acute gastroenteritis)</li>
          </ul>
        </div>

        {/* Pediatric Diseases */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800">Pediatric Diseases</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Pediatric gastroenteritis</li>
            <li>Pediatric pancreatitis</li>
            <li>Pediatric colitis</li>
          </ul>
        </div>

        {/* Biliary Diseases */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800">Biliary Diseases</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Bile duct diseases / Gallstone removal</li>
            <li>Biliary strictures</li>
            <li>Bile duct cancers</li>
            <li>Gall bladder cancers</li>
            <li>Gall bladder polyps</li>
            <li>Gall bladder carcinoma</li>
            <li>Bile duct obstruction</li>
          </ul>
        </div>

        {/* Liver Diseases */}
        <div className="mb-2">
          <h3 className="font-semibold text-gray-800">Liver Diseases</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              Degenerative, fibrotic and cell growth disorders leading to
              jaundice & alcohol-related disease
            </li>
            <li>Chronic Hepatitis B infection (CHB)</li>
            <li>Chronic Hepatitis C infection (CHC)</li>
            <li>Non-alcoholic fatty liver disease (NAFLD)</li>
            <li>Alcoholic liver disease (ALD)</li>
            <li>Genetic / Metabolic Liver Diseases (Wilson’s, Celiac’s, Hemochromatosis)</li>
            <li>Autoimmune hepatitis</li>
            <li>Primary Biliary Cholangitis</li>
            <li>Hepatic vascular / venous diseases</li>
            <li>Advanced cirrhosis including gastro-esophageal varices</li>
            <li>Hepatocellular carcinoma</li>
          </ul>
        </div>
      </div>

      {/* Diagnostic and Endoscopic Services */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-teal-600 mb-4">
          Diagnostic and Endoscopic Services
        </h2>
        <p className="mb-4 text-gray-700">
          The department also provides the latest in endoscopic and diagnostic
          aids that provide necessary services to patients in outpatient &
          inpatient in following acute and chronic conditions:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Diagnostic UGI endoscopy with therapeutic interventions</li>
          <li>Diagnostic & Interventional Colonoscopy including biopsies</li>
          <li>Management of GI bleeds</li>
          <li>Polypectomy, dilatation and foreign body removal</li>
          <li>Endoscopic variceal band ligation</li>
          <li>Endoscopic variceal sclerotherapy</li>
          <li>ERCP (Endoscopic retrograde cholangiopancreatography)</li>
          <li>Endoscopic retrograde stenting</li>
          <li>Endoscopic ultrasound (EUS)</li>
          <li>Therapeutic EUS including EUS guided FNAC / biopsy</li>
          <li>Management of pancreaticobiliary disorders</li>
          <li>Endoscopic management of Pancreatic necrosis</li>
          <li>Endoscopic mucosal resection (EMR)</li>
          <li>Endoscopic Submucosal Dissection (ESD)</li>
          <li>Endoscopic tattooing</li>
          <li>Endoscopic hemostasis</li>
          <li>Capsule Endoscopy</li>
        </ul>
      </div>
    </div>
  );
}
export default Gastroenterology