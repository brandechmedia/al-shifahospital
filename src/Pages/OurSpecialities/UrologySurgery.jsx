import UrologySurgeryPhoto from '../../assets/Specialities/UrologySurgeryPhoto.jpg'
function UrologySurgery() {
  return (
    <div className="max-w-6xl mx-auto p-8 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">UROLOGY</h1>

      {/* Intro */}
      <p className="mb-6">
        The department of urology deals with the management of urinary stones, cancer of the urinary tract and male genital tract,
        enlargement of the prostate gland, male infertility, urinary tract infection and urinary incontinence. With recent advances in
        science and technology, a number of surgical procedures in urology do not involve open surgery.
      </p>

      {/* Services Offered */}
      <h2 className="text-lg font-semibold text-teal-700 border-l-4 border-teal-600 pl-2 mb-3">Services Offered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <ul className="list-disc list-inside space-y-1">
          <li>Endoscopic Surgery – no more surgery – cutting / opening</li>
          <li>Obstructive Lesions of the Kidney</li>
          <li>Outlet Obstruction</li>
          <li>Vascular access surgery for dialysis</li>
          <li>BHP, Stricture, Posterior Urethral Valve</li>
          <li>Female urology problems</li>
          <li>SUI (Stress Urine Incontinence), Cystocoele</li>
          <li>Infertility Management</li>
          <li>Impotence Management</li>
        </ul>
        <ul className="list-disc list-inside space-y-1">
          <li>Laparoscopic Surgery</li>
          <li>For Nephrectomy, Renal Cyst</li>
          <li>For Cancer surgery of Urogenital system</li>
          <li>Laparoscopic Pyeloplasty for hydronephrosis</li>
          <li>Undescended testis (lap Orchiopexy)</li>
          <li>Total Cystectomy</li>
          <li>Other congenital anomalies like hypospadias, epispadias, ectopia vesicae etc</li>
          <li>Emergency urology services / varieties of urinary fistulae</li>
        </ul>
      </div>

      {/* Endourology note */}
      <p className="mb-8">
        All aspects of Endourology (surgery through a telescope, which does not require open procedure) including treatment of prostate
        (TURP), bladder cancers (TURBT), urethral stricture and kidney and ureteric stones (PCNL & URS) are available.
      </p>

      {/* Lithotripsy + image */}
      <h2 className="text-lg font-semibold text-teal-700 border-l-4 border-teal-600 pl-2 mb-3">LITHOTRIPSY</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mb-6">
        <div className="lg:col-span-2">
          <h3 className="font-semibold mb-2">Why Tele-Medicine?</h3>
          <p className="mb-4">
            A painless OPD procedure of treating kidney and urinary tract stones without surgery using one of the best machines available for the purpose.
            The positioning, focusing and delivery of shock waves are all controlled by advanced computerized system with safety cutoffs to prevent damage &
            human error.
          </p>
        </div>
        <div className="lg:col-span-1 flex justify-center">
          {/* Dummy image as requested */}
          <img src={UrologySurgeryPhoto} alt="Urology dummy" className="rounded shadow" />
        </div>
      </div>

      <h3 className="font-semibold mb-3">Facts About Lithotripsy</h3>

      <div className="space-y-5 text-sm leading-relaxed">
        {/* Q1 */}
        <div>
          <p className="font-semibold">Question: What is Lithotripsy?</p>
          <p>Answer: It is a scientific and non-invasive procedure to disintegrate stones in Kidney, Ureter and Bladder without surgery.</p>
        </div>

        {/* Q2 */}
        <div>
          <p className="font-semibold">Question: What is ESWL?</p>
          <p>
            Answer: ESWL is short form of Extra Corporeal (outside the body) Shock Wave Lithotripsy (breaking up of stones). This procedure breaks up the
            stones in kidney and ureters without surgery into fine sand like particles which subsequently pass out with urine. This procedure is being widely
            and successfully used in U.S.A., U.K., Germany and other European countries since 1980. It is considered to be the most superior, safe, modern and
            scientific procedure of removing stones and is approved by the health authorities all over the world. Over 50 lakh patients have already been
            treated by over 800 installations all over the world.
          </p>
        </div>

        {/* Q3 advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold">Question: What are the advantages of ESWL over open surgery?</p>
            <ul className="list-disc list-inside">
              <li>No cutting, hence no long incisions and ugly scars.</li>
              <li>No damage to kidney or other vital organs.</li>
              <li>Internationally popular procedure.</li>
              <li>Early resumption of normal activities.</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside mt-6 md:mt-8">
              <li>Method of choice for treatment of recurrent stones as repeated surgery often results in kidney removal or damage.</li>
              <li>No need for blood transfusion, avoids hazards to hepatitis and AIDS.</li>
              <li>Patients, unfit for surgery due to medical reasons, can be safely treated.</li>
              <li>Outpatient; safe—patient treated goes out 90%.</li>
            </ul>
          </div>
        </div>

        {/* Q4 */}
        <div>
          <p className="font-semibold">Question: What types of stones can be treated?</p>
          <p>
            Answer: Single and multiple stones of various chemical compositions, sizes and shapes can now be disintegrated. Till recently major surgery with
            its risks was the only answer.
          </p>
        </div>

        {/* Q5 */}
        <div>
          <p className="font-semibold">Question: Can recurrent stones be treated?</p>
          <p>
            Answer: This is the procedure of choice for recurrent stones, as repeated surgery is often difficult, hazardous and sometimes results in removal of
            the kidney.
          </p>
        </div>

        {/* Q6 */}
        <div>
          <p className="font-semibold">Question: Can ureters stones be treated?</p>
          <p>Answer: Yes. Ureteric stones can also be treated.</p>
        </div>

        {/* Q7 */}
        <div>
          <p className="font-semibold">Question: What preparations are required for Lithotripsy?</p>
          <p>Answer: Routine check-up and usual investigations are required (as advised by your physician / surgeon / urologist).</p>
        </div>

        {/* Q8 duplicate title from image (kept as-is) */}
        <div>
          <p className="font-semibold">Question: What preparations are required in Lithotripsy?</p>
          <p>Answer: Routine check-up and usual investigations are required (as advised by your physician / urologist).</p>
        </div>

        {/* Q9 */}
        <div>
          <p className="font-semibold">Question: How long does the treatment take and what is the duration of hospital stay?</p>
          <p>
            Answer: Average sitting takes 20 – 40 minutes depending on the size and site of stone. No anesthesia is required in most cases and usually hospital
            stay is not required.
          </p>
        </div>

        {/* Q10 */}
        <div>
          <p className="font-semibold">Question: Whether elderly patients and patients suffering from other medical problems can be treated?</p>
          <p>
            Answer: Patients ranging from infants to aged, as well as those with heart diseases, hypertension, diabetes, respiratory disorders, kidney failure
            etc. can be treated safely by this procedure.
          </p>
        </div>

        {/* Q11 */}
        <div>
          <p className="font-semibold">Question: What happens after the stone is fragmented?</p>
          <p>
            Answer: The stone is fragmented into very fine particles. The patient is asked to drink plenty of fluids. The fragmented particles pass out with
            urine.
          </p>
        </div>

        {/* Q12 */}
        <div>
          <p className="font-semibold">Question: What are the provisions for pre and post lithotripsy follow up?</p>
          <p>Answer: Adequate facilities for follow up are available at the centres.</p>
        </div>

        {/* Q13 */}
        <div>
          <p className="font-semibold">Question: Who will implement the treatment?</p>
          <p>
            Answer: The treatment will be carried out by a team of eminent Doctors, under direct supervision of qualified, trained Urologist. The cost of
            treatment varies depending upon the size and area and calcified processes involved.
          </p>
        </div>

        {/* Q14 */}
        <div>
          <p className="font-semibold">Question: Is it true that the stone size left behind after one sitting affect the lithotripsy treatment?</p>
          <p>Answer: No. Lithotripsy does never cause stone reformation. Stone disease is known for recurrence irrespective of the treatment modality.</p>
        </div>

        {/* Q15 */}
        <div>
          <p className="font-semibold">Question: Is lithotripsy ESWL an answer to all stones?</p>
          <p>Answer: Yes. Lithotripsy can break all stones. If any stone is retained we give complete clearance as package without any charge.</p>
        </div>

        {/* Q16 */}
        <div>
          <p className="font-semibold">Question: What are the chances of success of stone treatment by ESWL?</p>
          <p>
            Answer: ESWL is the most effective method to treat selected patients. However, there are 8 – 10% cases which may require a second sitting. Rarely
            stones of very large size may need surgical completion of stone. All stones do not break in one sitting. Depending on their hardness, 2–3 sessions
            is safe. They shall be offered either DPCNL (puncture) or open surgery.
          </p>
        </div>
      </div>
    </div>
  );
}
export default UrologySurgery