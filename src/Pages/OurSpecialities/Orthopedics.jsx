function Orthopedics() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-cyan-600 mb-8">
        ORTHOPAEDICS AND JOINT REPLACEMENT
      </h1>

      {/* Intro with Image */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            The Orthopaedics and Joint Replacement Department at a hospital typically
            focuses on the diagnosis, treatment, and management of musculoskeletal
            conditions and injuries. This department often deals with various issues
            related to bones, joints, ligaments, tendons, and muscles.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Orthopaedics and Joint Replacement"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services and Treatments */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-cyan-600 mb-4">
          Services And Treatments
        </h2>
        <p className="mb-4 text-gray-700">
          Here are some common services and treatments that are offered:
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">1. Knee :</h3>
              <ul className="list-disc pl-6">
                <li>Knee arthritis (Osteoarthritis, Rheumatoid arthritis), Ligament sports injuries (ACL/PCL/MCL/LCL)</li>
                <li>Chondral/Articular cartilage injuries, Meniscal injuries and tears</li>
                <li>Osteonecrosis/Avascular necrosis of Knee, Fractures around the knee</li>
                <li>Patellofemoral disorders, and dislocation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">2. Hip :</h3>
              <ul className="list-disc pl-6">
                <li>Hip arthritis (Osteoarthritis, Rheumatoid arthritis), Avascular Necrosis of Hip</li>
                <li>Fractures of the hip, acetabulum, and pelvis, Femoro-acetabular impingement</li>
                <li>Hip Dysplasia</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">4. Ankle :</h3>
              <ul className="list-disc pl-6">
                <li>Fractures/dislocations of foot and ankle, Ankle and subtalar joint arthritis</li>
                <li>Ankle Arthroscopy and sprains</li>
                <li>Neglected foot & ankle trauma, Lisfranc injuries, AVN Talus</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6. Wrist And Hand :</h3>
              <ul className="list-disc pl-6">
                <li>Wrist Arthroscopy, Wrist fractures, Ligament injuries, Wrist arthritis (Osteoarthritis, Rheumatoid arthritis)</li>
                <li>Median nerve compression (Carpal tunnel syndrome)</li>
                <li>Hand surgeries under WALANT anaesthesia</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">8. Pediatric Orthopaedics :</h3>
              <ul className="list-disc pl-6">
                <li>DDH, Perthes Diseases, CTEV, Polotic Limb, Radial Club Hand, Syndactyly, CVT</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">10. Pelvis & Acetabulum Surgery :</h3>
              <ul className="list-disc pl-6">
                <li>Pelvis & Acetabulum Trauma Fixation, Sacral Fracture</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">3. Elbow :</h3>
              <ul className="list-disc pl-6">
                <li>Fractures around the elbow, Elbow arthritis (Osteoarthritis, Rheumatoid arthritis)</li>
                <li>Ligament injuries (Medial and lateral ligaments), Elbow contractures and stiffness</li>
                <li>Ulnar nerve compression (Cubital tunnel syndrome)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">5. Shoulder :</h3>
              <ul className="list-disc pl-6">
                <li>Shoulder instability/dislocation, Acromioclavicular joint arthritis</li>
                <li>Shoulder arthritis (Osteoarthritis, Rheumatoid arthritis) Rotator cuff tears</li>
                <li>Subacromial impingement</li>
                <li>Frozen shoulder, Fractures, and dislocations of the upper limb and shoulder</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">7. Spinal Injury And Surgery :</h3>
              <ul className="list-disc pl-6">
                <li>Traumatic Spinal Injuries, Neck & Back Pain, TB Spine, Inflammatory Spondyloarthropathy</li>
                <li>Spinal Surgeries: Discectomy, TLIF, Thoracolumbar spine fixation, Vertebroplasty & Kyphoplasty</li>
                <li>Selective Nerve Root Block injection (SNRB)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">9. Deformity Correction :</h3>
              <ul className="list-disc pl-6">
                <li>
                  Genu Valgus/Varum, Cubitus Varus/Valgus, Malunited/Non-union Fractures
                  (Ilizarov application), Hallux Valgus/Varus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-cyan-600 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-700">
          The Centre for Orthopaedic and Joint Replacement focuses on quality care,
          restoring function, alleviating pain, and promoting long-term wellness,
          ensuring each patient receives the highest Orthopaedic treatment and rehabilitation.
        </p>
      </div>
    </div>
  );
}
export default Orthopedics;