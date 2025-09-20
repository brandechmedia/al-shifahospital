import BbariatricSurgery from '../../assets/Specialities/BbariatricSurgery.jpg'
function BariatricSurgery (){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
        BARIATRIC AND WEIGHT LOSS SURGERY
      </h1>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div className="text-gray-700 space-y-4">
          <p>
            Achieving a healthy weight promotes overall health and well-being.
            However, for some individuals, traditional methods of diet and
            exercise may not be sufficient to achieve significant weight loss.
            In such cases, weight loss surgery, also known as bariatric surgery,
            has emerged as one of the most effective surgical methods for Obesity
            and a range of its health impacts.
          </p>
        </div>
        <div>
          <img
            src={BbariatricSurgery}
            alt="Bariatric Surgery"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section - Obesity */}
      <div className="mb-6">
        <h2 className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 inline-block rounded">
          Obesity
        </h2>
        <p className="mt-3 text-gray-700">
          Obesity is a medical condition, in which excess body fat has
          accumulated to such an extent that it can potentially have negative
          effects on health. People are classified as obese when their body mass
          index (BMI) is over 30 kg/m².
        </p>
      </div>

      {/* Section - Impact of Obesity */}
      <div className="mb-6">
        <h2 className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 inline-block rounded">
          Impact Of Obesity Or Excess Weight:
        </h2>
        <p className="mt-3 text-gray-700">
          The impact of excess weight on one’s health and quality of life cannot
          be overstated. Being overweight can make it difficult to maintain an
          active lifestyle and/or the ability to engage in crucial activities
          like playing and functioning. Moreover, excess weight affects physical
          health and can also contribute to various medical conditions,
          including:
        </p>
        <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
          <li>Diabetes</li>
          <li>High Blood Pressure</li>
          <li>Sleep Apnea</li>
          <li>Arthritis</li>
          <li>Asthma</li>
          <li>Acid Reflux</li>
          <li>Infertility</li>
          <li>High Cholesterol</li>
          <li>Osteoarthritis</li>
          <li>Non-alcoholic fatty liver disease (NAFLD)</li>
          <li>Urinary incontinence</li>
          <li>Depression & other mental health conditions</li>
          <li>Cancers</li>
        </ul>
      </div>

      {/* Section - Bariatric Procedures */}
      <div className="mb-6">
        <h2 className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 inline-block rounded">
          Bariatric Procedures:
        </h2>
        <p className="mt-3 text-gray-700">
          We offer a range of Bariatric (Weight Loss) procedures, each tailored
          to work in different ways to promote weight loss and improve overall
          health. These procedures can be categorized into two main aspects:
        </p>
        <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
          <li>
            <span className="font-semibold">
              Gastric restriction procedures:
            </span>{" "}
            Bariatric weight loss surgery involves the use of surgical
            techniques to reduce the size of the stomach. By creating a smaller
            stomach pouch, these procedures limit the amount of food an
            individual can consume.
          </li>
          <li>
            <span className="font-semibold">Malabsorptive procedures:</span> On
            the other hand, alter the way the body absorbs nutrients from food
            by rerouting the digestive tract. These procedures reduce the number
            of calories and nutrients absorbed by the body, leading to weight
            loss.
          </li>
        </ul>
        <p className="mt-3 text-gray-700">
          At our hospital, Bariatric surgeries are performed using Minimally
          Invasive techniques such as Laparoscopic Surgery. These techniques
          involve small incisions, resulting in reduced scarring, shorter
          recovery times, and lower risk of complications. We use staples &
          stitches.
        </p>
      </div>

      {/* Section - Preventive Obesity Package */}
      <div className="mb-6">
        <h2 className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 inline-block rounded">
          Preventive Obesity Package At Jeevan Jyoti Hospital
        </h2>
        <p className="mt-3 text-gray-700">
          Taking into account the fact that the modern lifestyle has been marred
          by unhealthy practices and improper diet habits, Jeevan Jyoti Hospital
          offers a Preventive Obesity Package. Our multidisciplinary team of
          weight-loss experts guides the patient regarding nutrition, exercise,
          and lifestyle choices. This package ensures that the complex medical
          disorders due to obesity are directed at one time.
        </p>
      </div>

      {/* Section - Why Choose Us */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8">
        <h2 className="text-teal-600 font-semibold text-lg mb-3">
          Why Choose Us
        </h2>
        <p className="text-gray-700">
          Availability of minimally invasive/bariatric surgery techniques with
          high success rates, with outcomes comparable at affordable cost.
        </p>
      </div>
    </div>
  );
};

export default BariatricSurgery;
