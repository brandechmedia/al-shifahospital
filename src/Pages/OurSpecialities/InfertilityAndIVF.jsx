import InfertilityPhoto from '../../assets/Specialities/InfertilityPhoto.PNG'
function InfertilityAndIVF () {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-teal-600 mb-8">
        INFERTILITY AND IVF
      </h1>

      {/* First Row */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        <div className="space-y-6">
          {/* Natural Pregnancy */}
          <section>
            <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
              Natural Pregnancy
            </h2>
            <p className="text-gray-700 text-justify">
              Pregnancy is the result of a chain of events. In the middle of the
              menstrual cycle an egg is released from one of the ovaries
              (ovulation). The egg must travel through the fallopian tube towards
              the uterus (Womb). If sexual intercourse occurs, the man’s sperm
              must join with (fertilize) the egg along the way. The fertilized
              egg (embryo) travels down the fallopian tube towards the uterus and
              attach (Implant). While this may seem simple, In fact many things
              can happen to prevent pregnancy from occurring.
            </p>
          </section>

          {/* What is Infertility */}
          <section>
            <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
              What Is Infertility?
            </h2>
            <p className="text-gray-700 text-justify">
              Infertility is usually defined as the inability of a couple to
              conceive a child despite trying for one year of unprotected
              intercourse. The inability to conceive after one or more successful
              pregnancies is called secondary infertility.
            </p>
          </section>

          {/* Causes in Women */}
          <section>
            <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
              What Causes Infertility In Women?
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Ovulation Disorders:</strong> Problems with ovulation are
                common causes of female infertility such as PCOS, hormonal
                imbalances, thyroid disorders, early menopause.
              </li>
              <li>
                <strong>Fallopian Tube Disorders:</strong> Blockages or damage in
                the tubes prevent egg and sperm from meeting.
              </li>
              <li>
                <strong>Uterine or Cervical Disorders:</strong> Conditions like
                fibroids, adhesions, cervical stenosis can affect fertility.
              </li>
              <li>
                <strong>Endometriosis:</strong> Endometrial tissue growth outside
                uterus causing scarring and inflammation.
              </li>
              <li>
                <strong>Age-related Factors:</strong> Decline in egg quality,
                higher risk of chromosomal abnormalities.
              </li>
              <li>
                <strong>Lifestyle Factors:</strong> Smoking, alcohol, obesity,
                stress.
              </li>
              <li>
                <strong>Medical Conditions:</strong> Diabetes, autoimmune
                diseases, thyroid disorders.
              </li>
              <li>
                <strong>Genetic Factors:</strong> Turner syndrome, Fragile X etc.
              </li>
            </ul>
          </section>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={InfertilityPhoto}
            alt="Infertility treatment"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Causes in Men */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
          What Causes Infertility In Men?
        </h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <strong>Sperm Production Disorders:</strong> Varicocele, hormonal
            imbalances, genetic issues, infections.
          </li>
          <li>
            <strong>Sperm Motility Disorders:</strong> Poor movement reduces
            chance to fertilize egg.
          </li>
          <li>
            <strong>Ejaculatory Dysfunction:</strong> Retrograde ejaculation,
            erectile dysfunction.
          </li>
          <li>
            <strong>Genetic Factors:</strong> Y chromosome deletions, mutations.
          </li>
          <li>
            <strong>Environmental Factors:</strong> Pesticides, toxins, metals.
          </li>
          <li>
            <strong>Lifestyle Factors:</strong> Smoking, alcohol, stress, obesity.
          </li>
          <li>
            <strong>Medical Conditions:</strong> Diabetes, thyroid issues.
          </li>
          <li>
            <strong>Age:</strong> Lower sperm quality with age.
          </li>
        </ul>
      </section>

      {/* Which Partner */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
          Which Partner Is Responsible?
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>40% women (Female factor)</li>
          <li>40% men (Male factor)</li>
          <li>10% couple problems (both)</li>
          <li>10% unknown causes</li>
        </ul>
      </section>

      {/* Treatment */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
          Treatment
        </h2>
        <p className="text-gray-700 text-justify">
          Treatment includes medication or surgery. 80 to 85 percent of
          infertility cases are treated with drugs or surgery. Others may require
          Assisted Reproductive Techniques (ART). Sometimes combination of
          treatments is necessary.
        </p>
      </section>

      {/* IVF Explanation */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
          What Is IVF, And How Can It Help You?
        </h2>
        <p className="text-gray-700 mb-4 text-justify">
          IVF (In vitro fertilization) is an ART method where eggs and sperm are
          fertilized in a lab and then implanted. It is used in cases like
          advanced maternal age, blocked tubes, endometriosis, male infertility,
          or unexplained infertility.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Ovarian Stimulation</li>
          <li>Monitoring</li>
          <li>Egg Retrieval</li>
          <li>Sperm Collection</li>
          <li>Fertilization</li>
          <li>Embryo Culture</li>
          <li>Embryo Transfer</li>
          <li>Cryopreservation</li>
          <li>Pregnancy Test</li>
          <li>Follow-up</li>
        </ol>
      </section>

      {/* When is IVF Recommended */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
          When Is IVF Treatment Recommended?
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Blocked fallopian tubes</li>
          <li>Male infertility</li>
          <li>Unexplained infertility</li>
          <li>Ovulation disorders</li>
          <li>Endometriosis</li>
          <li>Advanced maternal age</li>
        </ul>
      </section>

      {/* Factors Affecting Success */}
      <section>
        <h2 className="text-lg font-semibold text-teal-600 border-l-4 border-teal-600 pl-2 mb-2">
          Factors Affecting The Success Rate Of IVF
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Age: Women under 35 have higher success rates.</li>
          <li>Ovarian reserve: Higher AMH levels better chances.</li>
        </ul>
      </section>




 <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 leading-relaxed space-y-10">

      {/* Factors Affecting The Success Rate Of IVF */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-6">
          Factors Affecting The Success Rate Of IVF:
        </h2>

        {/* Patient Factors */}
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Patient Factors –</h3>
          <ul className="space-y-1">
            <li className="before:content-['›'] before:mr-2">
              <b>Age:</b> Women under 35 have the highest success rates, declining significantly after 40.
            </li>
            <li className="before:content-['›'] before:mr-2">
              <b>Ovarian reserve:</b> Higher AMH (Anti-Mullerian hormone) levels indicate better egg quality and quantity.
            </li>
            <li className="before:content-['›'] before:mr-2">
              <b>Sperm quality:</b> Motility, count, and morphology of sperm influence fertilization and embryo development.
            </li>
            <li className="before:content-['›'] before:mr-2">
              <b>Underlying medical conditions:</b> Endometriosis, PCOS, fibroids, or other medical conditions can impact implantation.
            </li>
            <li className="before:content-['›'] before:mr-2">
              <b>Lifestyle factors:</b> Smoking, obesity, excessive alcohol, and drug use can decrease success rates.
            </li>
          </ul>
        </div>

        {/* Treatment Factors */}
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Treatment Factors –</h3>
          <ul className="space-y-1">
            <li className="before:content-['›'] before:mr-2">
              <b>Number of IVF cycles:</b> Some couples achieve success on the first try, while others may need multiple attempts.
            </li>
            <li className="before:content-['›'] before:mr-2">
              <b>Embryo quality:</b> Good-quality embryos have a higher chance of implantation and pregnancy.
            </li>
            <li className="before:content-['›'] before:mr-2">
              <b>Type of IVF technique:</b> Advanced techniques like ICSI may be needed for specific cases, with varying success rates.
            </li>
          </ul>
        </div>

        {/* Other ART */}
        <div className="border rounded bg-gray-50 p-4">
          <h3 className="font-semibold mb-3">
            Other ART (Assisted Reproductive Techniques)
          </h3>
          <div className="grid grid-cols-2 gap-x-8">
            <ul className="space-y-1">
              <li className="before:content-['›'] before:mr-2">Intra Uterine Insemination (IUI)</li>
              <li className="before:content-['›'] before:mr-2">IVM</li>
              <li className="before:content-['›'] before:mr-2">IMSI</li>
            </ul>
            <ul className="space-y-1">
              <li className="before:content-['›'] before:mr-2">ICSI (Micromanipulation)</li>
              <li className="before:content-['›'] before:mr-2">Oocyte Donation</li>
              <li className="before:content-['›'] before:mr-2">Laser Assisted Hatching</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Artificial Insemination (IUI) */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Artificial Insemination (IUI)
        </h2>
        <p className="mb-4">
          This procedure relies on the natural ability of sperm to fertilize an egg within the reproductive tract.
          The sperm from the male partner is collected and then washed in the lab to improve motility and
          concentrated sperm are then placed in the uterus using a thin catheter inserted through the cervix during
          the most fertile time in the menstrual cycle.
        </p>
        <h3 className="font-semibold mb-2">IUI is Often Recommended For Women or Couples Who:</h3>
        <ul className="space-y-1">
          <li className="before:content-['›'] before:mr-2">Have ovulation problems and are undergoing ovulation induction</li>
          <li className="before:content-['›'] before:mr-2">Are unable to have normal intercourse</li>
          <li className="before:content-['›'] before:mr-2">Have mild male factor infertility</li>
          <li className="before:content-['›'] before:mr-2">Have unexplained infertility</li>
        </ul>
        <p className="mt-4">
          Donor Sperm is used only when a male partner has an abnormal semen report. The procedure is simple and does not
          require anesthesia or hospitalization.
        </p>
      </section>

      {/* IVM */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          IVM (In Vitro Maturation) – New ART Procedure:
        </h2>
        <p>
          In vitro egg maturation or IVM – Instead of removing fully mature eggs from the ovaries and then fertilizing them,
          IVF Specialists remove immature eggs, ripen them in a lab dish, and then add sperm. The rest of the procedure is
          the same as IVF; the time required for stimulation is reduced greatly. This may be particularly useful for women
          who suffer from polycystic ovarian syndrome, a hormonal disorder that disrupts ovulation.
        </p>
      </section>
    </div>


    {/* ................................... part 2... */}


     <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 leading-relaxed space-y-10">

      {/* IMSI */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          IMSI Intracytoplasmic Morphologically Selected Sperm Injection (IMSI):
        </h2>
        <p>
          A specialized technique used in in vitro fertilization (IVF) to select the highest quality sperm for fertilization.
          IMSI is typically recommended for couples with male factor infertility, where conventional sperm selection methods
          may not be sufficient to identify the highest quality sperm for fertilization. By selecting sperm with the best
          morphological characteristics, IMSI aims to improve the chances of successful fertilization and embryo development,
          ultimately leading to better outcomes in IVF treatments.
        </p>
      </section>

      {/* ICSI */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Intra Cytoplasmic Sperm Injection (ICSI):
        </h2>
        <p className="mb-4">
          Also known as micromanipulation. The approach to male fertility management has changed over the last few years.
          Patients who had compromised semen samples had to undergo years of medication and surgical manoeuvers and only
          a few benefited. Now with the advancement of ART techniques, conventional method of treating male infertility
          has been replaced by ICSI, a proven and wholly acclaimed scientific procedure. This revolutionary technique
          we performed has given fresh hope to many men whose chance to father their children was slim.
        </p>
        <p className="mb-4">
          ICSI is indicated when few sperms are available or no sperms are available/IVF is not possible or unexplained
          fertilization failure or low fertilization in previous IVF cycles. ICSI can benefit 90% of patients with
          azoospermia after confirming the presence of sperms in the testicular biopsy.
        </p>
        <p>
          In this procedure, eggs are retrieved (as in IVF) from the female partner, and under an inverted microscope,
          each egg is injected with a single sperm isolated from the male partner’s semen or by sperm collected from
          the testis (TESA/MESA). This is done as an adjunct to IVF.
        </p>
      </section>

      {/* Oocyte Donation */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Oocyte Donation
        </h2>
        <p>
          Oocyte Donation is for women whose ovaries are not functioning or have been surgically removed. In this procedure
          another woman will be the egg donor. The donated eggs will be fertilized with sperm of the husband of the recipient
          woman. The embryos are then transferred in the uterus of the recipient.
        </p>
      </section>

      {/* Laser Assisted Hatching */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Laser Assisted Hatching
        </h2>
        <p>
          Assisted Laser Hatching may help couples who have had many attempts of assisted reproductive procedures without
          success. Embryo implantation is one of the greatest barriers to success in “In Vitro Fertilization” (IVF) cycle.
          When Embryos are transferred to the woman’s uterus, they are covered by an outer coating called the Zona Pellucida,
          once the embryo is able to “hatch”, a necessary step for implantation. In certain situations, this step is less
          likely to naturally occur in women of higher age, women with elevated serum FSH levels and women who have failed
          to achieve a pregnancy in a prior IVF cycle. A hole is created with the use of a laser beam in the Zona of the
          embryo before it is transferred to the uterus. It facilitates improved implantation and increases the chances
          to pregnancy.
        </p>
      </section>

      {/* PGD */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          PGD (Preimplantation Genetic Diagnosis):
        </h2>
        <p>
          PGD is a technique used during in vitro fertilization (IVF) to screen embryos for genetic disorders before they
          are implanted into the uterus. This technique allows prospective parents to select embryos that are free from
          certain genetic abnormalities or diseases, increasing the chances of a healthy pregnancy and reducing the risk
          of passing on genetic disorders to their offspring.
        </p>
      </section>

      {/* Semen Analysis by AI */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Semen Analysis By Using Artificial Intelligence:
        </h2>
        <p className="mb-4">
          Using artificial intelligence (AI) in semen analysis is an innovative approach that has the potential to improve
          accuracy, efficiency, and objectivity in assessing semen quality. Here’s how AI can be applied in this context:
        </p>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <b>Sperm Detection and Counting:</b> AI algorithms can be trained to accurately detect and count sperm cells
            in semen samples. This process involves analyzing images of sperm motility captured under a microscope.
            AI can automate this task, reducing the time and effort required for manual counting by laboratory technicians.
          </li>
          <li>
            <b>Sperm Morphology Analysis:</b> AI can also be used to assess the morphology (shape and structural) of sperm
            cells. By analyzing images of sperm cells, AI algorithms can detect abnormalities such as head defects, tail
            deformities, or other irregularities that may affect fertility.
          </li>
          <li>
            <b>Sperm Motility Assessment:</b> Assessing sperm motility (movement) is crucial for evaluating fertility potential.
            AI algorithms can analyze videos of sperm motility captured under a microscope and classify sperm cells based
            on their movement characteristics, such as progressive motility, non-progressive motility, or no motility.
          </li>
          <li>
            <b>Quality Control:</b> AI can assist in maintaining quality control standards in semen analysis by standardizing
            the analysis process and reducing variability between different laboratory technicians. This can help ensure
            consistent and reliable results across different semen analysis procedures.
          </li>
          <li>
            <b>Predictive Analysis:</b> AI algorithms can analyze data from semen analysis results, along with other clinical
            and demographic factors, to predict fertility outcomes or recommend personalized treatment plans for couples
            undergoing fertility evaluation and treatment.
          </li>
        </ol>
        <p className="mt-4">
          By leveraging AI in semen analysis, Doctors can streamline the assessment of male fertility, improve diagnostic
          accuracy, and enhance patient care in the field of reproductive medicine.
        </p>
      </section>
    </div>



    {/* ...................................part 3 */}



     <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 leading-relaxed space-y-10">

      {/* Blastocyst Transfer */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Blastocyst Transfer
        </h2>
        <p>
          It has been proved that growing embryos In Vitro for a longer period, upto 5–6 days (the blastocyst stage),
          and transferring the embryos at this stage increases the chance of implantation. Only embryos that continue
          to grow upto this stage are more viable and have a higher chance of resulting in pregnancy.
        </p>
      </section>

      {/* Social Egg Freezing */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Social Egg Freezing / Oocyte Cryopreservation
        </h2>
        <p>
          "Social eggs" refers to the practice of women undergoing egg retrieval and freezing at a younger age
          (ideally <b>&lt; 35 years</b>) for use at a later stage in life when they plan pregnancy. This helps preserve
          fertility in women who want to delay childbearing due to career, education, or personal reasons.
        </p>
      </section>

      {/* Vitrification */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Vitrification
        </h2>
        <p>
          Latest in Cryopreservation is Vitrification Technique. This is an ultra-rapid freezing process
          which prevents formation of ice crystals within the cells. This ensures that the survival rates
          of embryos and eggs are very high after thawing. We are routinely using this technology for
          embryo and oocyte cryopreservation.
        </p>
      </section>

      {/* The Embryo Bank */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          The Embryo Bank
        </h2>
        <p>
          Many of today’s modern couples choose to start a family later in life. Some of them may need
          treatment for infertility. Often in these situations, we have excess embryos after IVF. These
          can be cryopreserved by vitrification and stored for future use. Our embryo bank provides
          couples with an opportunity to preserve their embryos safely for years.
        </p>
      </section>

      {/* Semen Bank */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Semen Bank
        </h2>
        <p>
          We maintain a dedicated Semen Bank. The male partner’s sperms are routinely frozen and stored
          in our semen bank for use in ART procedures. This helps men who are undergoing chemotherapy,
          radiation therapy, or surgery that may impair fertility. It is also helpful for men who cannot
          be present on the day of the procedure.
        </p>
      </section>

      {/* Surrogate Mothers */}
      <section>
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Surrogate Mothers
        </h2>
        <p>
          There are some women whose ovaries function normally but the uterus is absent, diseased, or
          unable to carry a pregnancy. In such cases, Surrogacy is an option. The embryo formed by IVF
          using the couple’s gametes is transferred into the uterus of the surrogate mother, who carries
          the pregnancy on behalf of the couple.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 border rounded p-6">
        <h2 className="text-lg font-semibold border-l-4 border-teal-500 pl-3 mb-4">
          Why Choose Us
        </h2>
        <p className="mb-3">
          Arpit Test Tube Baby Centre is one of the leading centers with expertise in advanced
          reproductive techniques. We use cutting-edge technology like ICSI, IMSI, PGD, Blastocyst
          transfer, vitrification, semen analysis using AI, and more.
        </p>
        <p className="mb-3">
          Our success rate is almost <b>70%</b>, which is among the highest in the region. We believe in
          patient-centric care, complete transparency, and ethical practices.
        </p>
        <p>
          For more details please visit{" "}
          <a
            href="http://www.arpitivf.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.arpitivf.com
          </a>
        </p>
      </section>
    </div>


    </div>
  );
};

export default InfertilityAndIVF;

















   