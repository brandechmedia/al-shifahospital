import { useEffect, useState, useRef } from "react";
import BirthdayBansal from '../assets/NewsAndEvents/BirthdayBansal.JPG';
import IndependenceDay from '../assets/NewsAndEvents/IndependenceDay.JPG';
import NursingDay from '../assets/NewsAndEvents/NursingDay.jpg';
function NewsAndEvents() {
  const newsRef = useRef(null);

  // Auto scroll effect for News
  useEffect(() => {
    const scrollContainer = newsRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTop = scrollAmount;
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  // Events data
  const events = [
    {
      id: 1,
      title: "Remembrance of Dr. A.K. Bansal – 69th Birthday Celebration",
      date: "Sun Sep 01 2024",
      category: "Event",
      desc: "We observed the 69th birth anniversary of Dr. A.K. Bansal with deep respect and heartfelt remembrance. The celebration was held at Jeevan Jyoti Hospital on September 1, 2024",
      image: BirthdayBansal,
    },
    {
      id: 2,
      title:
        "Former President and Missile Man of India, Hon'ble Late Dr. A. P. J. Abdul Kalam's visit BBS College of Engineering & Technology",
      date: "Fri Apr 26 2024",
      category: "VIP Visit @BBS",
      desc: "Former President and Missile Man of India, Hon'ble Late Dr. A. P. J. Abdul Kalam's visited BBS College of Engineering & Technology in the year 2012.",
      image: IndependenceDay,
    },
    {
      id: 3,
      title: "Nursing Day Celebration",
      date: "Tue May 12 2024",
      category: "Event",
      desc: "The Nursing Department of Jeevan Jyoti Hospital celebrated International Nursing Day with gratitude and pride.",
      image: NursingDay,
    },
  ];

  // Slider state for events
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 sec duration
    return () => clearInterval(interval);
  }, [events.length]);

  const news = [
    "Dr Nishant Malviya Gastro Surgery 1st Saturday every month Time 12 to 2 ",
    "Dr Sourav Mishra Dm Cardio 3rd Wednesday every month  Time 12 to 2",
    ".....................",
    "...................",
  ];

  return (
    <div className="bg-gray-100 py-10 px-2 md:px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Events - Auto Slider */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-2 md:mb-5 text-center">Events</h2>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
            {/* Slider container */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${events.length * 100}%`,
              }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  className="w-ful flex-shrink-0 bg-white p-4"
                  style={{ width: "100%" }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg mb-3 w-60 md:w-96 h-52 object-cover"
                  />
                  <p className="text-sm text-gray-500">
                    Category: {event.category} • {event.date}
                  </p>
                  <h3 className="text-lg font-bold mt-2">{event.title}</h3>
                  <p className="text-gray-600 text-wrap text-sm mt-1">{event.desc}</p>
                  <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-full flex items-center gap-2">
                    Read More →
                  </button>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {events.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? "bg-blue-900" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* News */}
        <div>
          <h2 className="text-2xl font-bold mb-2 md:mb-5 text-center">News</h2>
          <div className="bg-white rounded-2xl shadow p-4 h-80 overflow-hidden">
            <div
              ref={newsRef}
              className="h-full overflow-y-hidden flex flex-col gap-4"
            >
              {news.map((item, index) => (
                <p
                  key={index}
                  className="border-b pb-2 text-gray-800 font-medium"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <p className="text-sm mt-3 text-center text-blue-700 underline cursor-pointer">
            See All News
          </p>
        </div>
      </div>
    </div>
  );
}
export default NewsAndEvents