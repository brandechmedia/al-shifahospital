function WomensClinic() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Title */}
      <h1 className="text-center text-2xl font-bold text-teal-600 mb-8">
        WELL WOMENS CLINIC
      </h1>

      {/* Intro + Image */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
        <p>
          A Well Women clinic in a hospital is a specialised healthcare facility dedicated to providing comprehensive
          medical services tailored specifically to women’s health needs. At Jeevan Jyoti Hospital we offer a holistic
          approach to all age groups of women from adolescence to menopause under one roof. It is a one-stop
          destination for the health, harmony, and happiness of women of all ages.
        </p>

        <div className="w-full">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Clinic"
            className="rounded shadow-md mx-auto"
          />
        </div>
      </div>

      {/* Services */}
      <section className="space-y-6">
        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            1. Preventive Care Services
          </h3>
          <p>
            The clinic offers a range of preventive healthcare services aimed at maintaining and improving women’s
            overall health. This includes routine screening such as Pap smears, mammograms, pelvic exams, and
            screenings for sexually transmitted infections (STIs).
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            2. Family Planning And Contraception
          </h3>
          <p>
            Services related to family planning, contraception counseling, and access to various birth control methods
            are provided. This may include contraceptive pills, intrauterine devices (IUDs), implants, and sterilization
            procedures.
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            3. Prenatal And Postnatal Care
          </h3>
          <p>
            For women who are pregnant or planning to become pregnant, the clinic offers prenatal care services including
            regular check-ups, ultrasounds, prenatal vitamins, and guidance on healthy pregnancy practices. Postnatal care
            services include breastfeeding support, postpartum depression screening, and contraception counseling.
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            4. Menstrual Health And Menopause Management
          </h3>
          <p>
            The clinic provides care and support for menstrual health issues such as irregular periods, menstrual pain,
            and menopausal symptoms. This may involve hormone therapy, lifestyle modifications, and other treatments to
            manage symptoms and improve quality of life.
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            5. Breast Health Services
          </h3>
          <p>
            The clinic offers breast health services including clinical breast examination, breast cancer screenings
            (Mammography), and counseling on breast self-examination techniques. For women at high risk of breast cancer,
            genetic counseling and testing are also available.
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            6. Gynecological Care
          </h3>
          <p>
            Comprehensive gynecological care is provided, including evaluation and treatment of conditions such as pelvic
            pain, vaginal infections, urinary tract infections (UTIs), and menstrual disorders.
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            7. Sexual Health Services
          </h3>
          <p>
            The clinic offers sexual health services including counseling and testing for STIs, HIV/AIDS prevention, and
            treatment of sexual dysfunction.
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            8. Nutritional Counseling And Lifestyle Management
          </h3>
          <p>
            Women’s health is closely tied to lifestyle factors such as diet, exercise, and stress management. The clinic
            may offer nutritional counseling, weight management programs, and guidance on adopting healthy lifestyle habits.
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            9. Psychological Support And Counseling
          </h3>
          <p>
            Mental health and emotional well-being are important aspects of women’s health. The clinic may provide
            counseling services for issues such as anxiety, depression, relationship problems, and coping with life transitions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold bg-gray-100 inline-block px-2 py-1 rounded">
            10. Multidisciplinary Approach
          </h3>
          <p>
            At our well-women’s clinic, we offer a multidisciplinary team including Gynecologists & Obstetricians, Nurses,
            Nutritionists, Psychologists, and social workers to provide comprehensive care and support tailored to each
            woman’s individual needs.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <p className="mt-8">
        We aim to be a one-stop destination for women to address their diverse healthcare needs throughout all stages of
        life, from adolescence to menopause and beyond. As we move forward, we remain steadfast in our dedication to
        providing high-quality, compassionate care to women of all ages. We strive to expand our services, incorporate
        advancements in healthcare technology, and strengthen ourselves to serve better in the future.
      </p>
    </div>
  );
}
export default WomensClinic