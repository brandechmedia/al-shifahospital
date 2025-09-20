import familyDoctors1 from '../assets/familyDoctors1.png'
const Milestone = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[500px]">
      {/* Left Side Image */}
      <div className=" flex pr-4 items-center justify-center">
        <img
          src={familyDoctors1}
          alt="Dummy"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side Content */}
      <div className="bg-teal-700 text-ornage-500 grid grid-cols-2 divide-x divide-y divide-white-700">
        
        <div className="text-center flex items-center justify-center p-20">
          <div>
            <h2 className="text-5xl font-asap text-orange-400 font-bold">36+</h2>
            <p className="text-white text-2xl mt-2">Years of Academic Excellence</p>
          </div>
        </div>

        <div className="text-center flex items-center justify-center p-20">
          <div>
            <h2 className="text-5xl font-asap text-orange-400 font-bold">15,000+</h2>
            <p className="text-white text-2xl mt-2">Placements Record</p>
          </div>
        </div>

        <div className="text-center flex items-center justify-center p-20">
          <div>
            <h2 className="text-5xl font-asap text-orange-400 font-bold">Dedicated</h2>
            <p className="text-white text-2xl mt-2">Doctors Team</p>
          </div>
        </div>

        <div className="text-center flex items-center justify-center p-20">
          <div>
            <h2 className="text-5xl font-asap text-orange-400 font-bold">Excellent</h2>
            <p className="text-white text-2xl mt-2">Linkage with Industry</p>
          </div>
        </div>

        <div className="text-center flex items-center justify-center p-20">
          <div>
            <h2 className="text-5xl font-asap text-orange-400 font-bold">State of Art</h2>
            <p className="text-white text-2xl mt-2">Infrastructure</p>
          </div>
        </div>

        <div className="text-center flex items-center justify-center p-20">
          <div>
            <h2 className="text-5xl font-asap text-orange-400 font-bold">20,000+</h2>
            <p className="text-white text-2xl mt-2">Patients Treated</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Milestone;
