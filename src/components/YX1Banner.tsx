import { Link } from "react-router-dom";

export default function YX1Banner() {
  return (
    <section className="md:px-10 md:mt-[6pc] lg:mt-[6pc] mt-5 px-6 sm:px-10 lg:px-40">
      <div className="md:flex">
        {/* Image Side */}
        <div className="flex-1 overflow-hidden rounded-[8px]">
          <img
            src="./yxl-earphone.png"
            alt="YX1 Earphones"
            className="h-[200px] w-full md:h-full object-cover object-[center_-10px] md:object-[center_10px] md:scale-130 scale-100 transition-all duration-500"
          />
        </div>

        {/* Text Side */}
        <div className="flex-1 flex flex-col justify-center bg-[#F1F1F1] rounded-[8px] px-8 py-16 text-center lg:text-left md:mt-0 mt-5">
          <h2 className="md:text-3xl text-4xl font-semibold md:font-bold uppercase mb-6 md:ml-[-5pc] lg:ml-[0px]">
            YX1 Earphones
          </h2>
          <Link to="/earphones/YXI">
            <button
              className="pointer uppercase mt-4 py-4 md:px-7 border border-black text-black 
                     hover:bg-black hover:text-white font-bold transition rounded
                      w-[180px] md:w-[250px] lg:w-[170px] mx-auto md:mx-0 lg:text-white lg:bg-black lg:ml-[-3px]"
            >
              see product
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
