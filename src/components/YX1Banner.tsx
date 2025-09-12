export default function YX1Banner() {
  return (
    <section className="mt-20 px-6 sm:px-10 lg:px-0 ">
      <div className="flex ">
        <div className="flex-1">
          <img
            src="./yxl-earphone.png"
            alt="YX1 Earphones"
            className="w-full h-full rounded-[8px]"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center bg-[#F1F1F1] rounded-[8px] px-8 py-16 text-center lg:text-left">
          <h2 className="text-3xl sm:text-3xl font-bold uppercase mb-6">
            YX1 Earphones
          </h2>
           <button className="uppercase mt-4 ml-9 py-4 px-7 border border-black text-black hover:bg-black hover:text-white font-bold transition rounded sm:w-[200px]">
              see product
            </button>
        </div>
      </div>
    </section>
  );
}
