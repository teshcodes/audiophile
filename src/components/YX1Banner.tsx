 export default function YX1Banner() {
  return (
    <section className="md:px-10 md:mt-[-6pc] mt-5 px-6 sm:px-10 lg:px-0">
      <div className="md:flex">
        {/* Image Side */}
        <div className="flex-1 overflow-hidden rounded-[8px]">
          <img
            src="./yxl-earphone.png"
            alt="YX1 Earphones"
            className="h-[200px] w-full md:h-full object-cover object-[center_-100px] md:object-[center_10px] md:scale-130 scale-100 transition-all duration-500"
          />
        </div>

        {/* Text Side */}
        <div className="flex-1 flex flex-col justify-center bg-[#F1F1F1] rounded-[8px] px-8 py-16 text-center lg:text-left md:mt-0 mt-5">
          <h2 className="md:text-3xl text-4xl  font-semibold md:font-bold uppercase mb-6">
            YX1 Earphones
          </h2>
          <button className="ml-12 uppercase mt-4 md:ml-9 py-4 md:px-7 border border-black text-black hover:bg-black hover:text-white font-bold transition rounded md:w-[250px] w-[180px]">
            see product
          </button>
        </div>
      </div>
    </section>
  );
}