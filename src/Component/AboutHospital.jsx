import React from "react";

const AboutHospital = () => {
  return (
    <div className="w-full mx-auto bg-white py-6 px-4">
      {/* NABH Accredited Banner */}
      <div className="bg-teal-600 text-white px-4 py-3 w-96 rounded-r-lg text-md  font-bold">
        NABH Accredited
      </div>

      {/* Moving Marquee Text */}
      <div className="overflow-hidden whitespace-nowrap mt-2">
        <div className="animate-marquee text-orange-600 font-semibold">
          Jeevan Jyoti Hospital, Prayagraj is a NABH Accredited Hospital
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-gray-800">
          About <br />
          <span className="text-4xl">Jeevan Jyoti Hospital</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
          Jeevan Jyoti Hospital is a 210-Beds, CGHS Approved, NABH Accredited,
          ISO 2015 and NABL Medical Lab approved multi-speciality hospital in
          Prayagraj. Jeevan Jyoti Hospital is Best Hospital in Prayagraj For Any
          Types of Health Treatment. Here You Get The Best Physician in
          Allahabad.
          <br />
          The hospital was founded in 1988 by renowned laparoscopic surgeon Late
          Dr A.K Bansal and eminent IVF expert Dr Vandana Bansal, with the
          vision and mission of providing top-of-the-line healthcare facilities
          under one roof.
        </p>
        <a
          href="#"
          className="mt-3 inline-block text-blue-500 hover:underline font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default AboutHospital;
