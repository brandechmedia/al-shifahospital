"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import lab0 from '../assets/lab0.png'
import { Autoplay, Pagination } from "swiper/modules";
import BariatricSurgery from '../assets/Facilities/BariatricSurgery.jpg'
import ClinicalGenetics from '../assets/Facilities/ClinicalGenetics.jpg'
import LaparoscopicSurgery from '../assets/Facilities/LaparoscopicSurgery.jpg'
import ObstetricsGynaecology from '../assets/Facilities/ObstetricsGynaecology.jpg'
import InterventionalRadiology from '../assets/Facilities/InterventionalRadiology.jpg'

function Facilities() {
    const cards = [
        { id: 1, title: "Laparoscopy Surgery", desc: "The Laparoscopic Surgery Centre at ‘Jeevan Jyoti Hospital’, the first of its kind in Allahabad is functioning with exclusive", images: LaparoscopicSurgery },
        { id: 2, title: "Bariatic Surgery", desc: "Bariatric surgery at Jeevan Jyoti Hospital is performed by one of the best bariatric surgeon Dr. Arpit Bansal and his team.", images: BariatricSurgery },
        { id: 3, title: "Infertility & IVF", desc: "Test tube baby centre, IVF-ET, ICSI, IUI, IMSI, Laser Assisted Hatching, TESA, MESA, Male Infertility management.", images: lab0 },
        { id: 4, title: "Obstretics & Gynaecology", desc: "Medical specialty that encompasses the two subspecialties of Obstetrics covering pregnancy & childbirth and Gynaecology.", images: ObstetricsGynaecology },
        { id: 5, title: "Interventional Radiology", desc: "Revolutionising Patient care with minimally invasive & targeted treatment. (New age targeted diagnostic & therapeutic", images: InterventionalRadiology },
        { id: 6, title: "Clinical Genetics", desc: "Clinical Genetics is the medical specialty which provides a diagnostic service and genetic counselling for individuals", images: ClinicalGenetics },
    ];

    return (
        <div className="w-full mx-auto py-10 my-10 bg-gradient-to-t from-tel-800 to-wite bg-teal-800">
            <h1 className='text-white font-anton font-bold text-4xl lg:text-6xl mt-10 mb-2 w-11/12 text-center mx-auto  '>Facilities</h1>

            <p className="w-4/5 mx-auto text-white text-justify md:text-center mb-10">At our hospital, we provide comprehensive healthcare with state-of-the-art facilities and compassionate care. Our services include advanced diagnostics, modern operation theatres, 24×7 emergency and pharmacy support, and specialized departments for gynecology, infertility, cancer care, and IVF. With well-furnished rooms, critical care units, and a dedicated team of expert doctors and nurses, we ensure safe, innovative, and patient-centered treatment.</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 5000, // 2 seconds delay
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper md:w-11/12 "
            >

                {cards.map((card) => (
                    <SwiperSlide key={card.id} className="mt-10 pt-40 w-4/5 h-auto mb-20">
                        <div className="bg-t-to-t from-gray-700 to-cyan-400 bg-white rounded-2xl shadow-xl px-4 pt-0 pb-0 flex flex-col justify-center items-center">

                            {/* <div className="rounded-lg w-40 h-auto backdrop: transform -translate-x-1/2"> */}
                            <div className="z-50 relative -top-44 rounded-full w-4/5 md:w-3/5 md:h-4/5 border-2 p-2 border-white shadow-xl overflow-hidde">
                                <img
                                    src={card.images}
                                    alt="Profile"
                                    className="object-cover shadow-md rounded-full w-full h-full"
                                />
                            </div>
                            {/* </div> */}
                            <div className="md:mt-40 relative -top-20 mt-2 md:-4 text-center">
                                <h3 className="text-4xl  text-teal-800 font-asap font-bold mb-3">{card.title}</h3>
                                <p className="text-gray300 text-gray-500 mt-2">
                                    {card.desc}<br />
                                    {card.Knowmore}
                                </p>
                                <button className="md:mt-4 px-4 py-2 bg-whit text-teal-700 rounded-2xl hover:bg-teal-700 hover:text-white transition">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default Facilities;