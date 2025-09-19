import BurnUnitPhotos from '../../assets/Specialities/BurnUnitPhotos.JPG'
function BurnUnit() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold text-teal-600 mb-10">
          BURN UNIT
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              A burn unit in a hospital is a specialized facility equipped to
              provide comprehensive care for patients who have sustained burn
              injuries. At Jeevan Jyoti Hospital we have a specialist
              multidisciplinary team to treat burn cases:
            </p>

            {[
              {
                title: "1. Specialized Staff",
                desc: "Our burn unit is staffed with a multidisciplinary team of healthcare professionals, including surgeons, nurses, physical therapists, occupational therapists, psychologists, social workers, and nutritionists. This team collaborates to provide holistic care for burn patients.",
              },
              {
                title: "2. State-Of-The-Art Facilities",
                desc: "The burn unit is equipped with specialized facilities, including burn wards with controlled temperature and humidity to minimize the risk of infection and promote wound healing. They also have specialized equipment for wound care, such as hydrotherapy tubs, debridement tools, and wound dressings.",
              },
              {
                title: "3. Burn Treatment Rooms",
                desc: "The burn unit is equipped for various treatments such as wound debridement, dressing changes, and skin grafting procedures. The unit is designed to maintain a sterile environment to prevent infection.",
              },
              {
                title: "4. Intensive Care Beds",
                desc: "We have dedicated intensive care beds equipped with advanced monitoring systems to closely monitor patients’ vital signs and manage complications such as fluid imbalance, infection, and respiratory distress.",
              },
              {
                title: "5. Surgical Facilities",
                desc: "Our burn unit typically has dedicated operating rooms where burn surgeons perform surgical procedures such as debridement, skin grafting, and reconstructive surgery.",
              },
              {
                title: "6. Pain Management",
                desc: "Burn injuries are extremely painful, so effective pain management is a critical aspect of care in the burn unit. This involves a combination of medications, regional anesthesia techniques, and non-pharmacological approaches. We have an advanced pain management team.",
              },
              {
                title: "7. Psychosocial Support",
                desc: "Coping with a burn injury can be emotionally challenging for patients and their families. We have psychologists, social workers, and support groups to provide emotional support, counseling, and assistance with coping strategies.",
              },
              {
                title: "8. Rehabilitation Services",
                desc: "Once the acute phase of treatment is complete, burn patients require rehabilitation to regain function and mobility. Here we have physical and occupational therapists who work with patients to improve strength, flexibility, and functional abilities.",
              },
              {
                title: "9. Nutritional Support",
                desc: "Burn injuries increase the body’s nutritional needs, and many patients require specialized nutrition support to promote healing and prevent complications such as malnutrition. Our Nutritionist develops customized dietary plans tailored to each patient’s needs.",
              },
              {
                title: "10. Long-Term Follow-Up",
                desc: "Burn injuries have long-term physical and psychological effects, so we provide long-term follow-up care to monitor patients’ progress, address any complications, and provide ongoing support as needed.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h2 className="font-semibold text-gray-900">{item.title}</h2>
                <p className="text-sm mt-1">{item.desc}</p>
              </div>
            ))}

            <p>
              At Jeevan Jyoti Hospital, burn units play a crucial role in the
              care of patients with burn injuries, providing specialized medical
              treatment, rehabilitation services, and psychosocial support to
              help patients recover and regain function to the greatest extent
              possible.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-start">
            <img
              src={BurnUnitPhotos}
              alt="Burn Unit"
              className="rounded-xl shadow-lg max-h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BurnUnit;