import { Link } from "react-router-dom";

export default function ZX7Banner() {
  return (
    <section className="md:px-10 md:mt-[6pc] lg:mt-[6pc] mt-8 px-6 sm:px-10 lg:px-40">
      <div className="md:flex">
        {/* Image Side */}
        <div className="flex-1 overflow-hidden rounded-[8px]">
          <img
            src="./zx7-speaker.png"
            alt="ZX7 Speaker"
            className="h-[200px] w-full md:h-full object-cover object-top transition-all duration-500"
          />
        </div>

        {/* Text Side */}
        <div className="flex-1 flex flex-col justify-center bg-[#F1F1F1] rounded-[8px] px-8 py-16 text-center lg:text-left md:mt-0 mt-5">
          <h2 className="md:text-3xl text-4xl font-semibold md:font-bold uppercase mb-6 md:ml-[-7pc] lg:ml-[0px]">
            ZX7 Speaker
          </h2>
          <Link to="/speakers/ZX7Speaker">
            <button
              className="pointer uppercase mt-4 py-4 md:px-7 border border-black text-black 
              hover:bg-black hover:text-white font-bold transition rounded
                w-[180px] md:w-[250px] lg:w-[170px] mx-auto md:mx-0               
              lg:text-white lg:bg-black lg:ml-[-3px]"
            >
              see product
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
