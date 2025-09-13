 export default function ZX7Banner() {
  return (
    <section className="md:mt-20 mt-8 px-6 sm:pl-11 sm:pr-9 lg:px-0">
      <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[450px] rounded-[8px] overflow-hidden flex items-center">
        {/* Image */}
        <div className="flex w-full h-full">
          <div className="absolute inset-0">
            <img
              src="./zx7-speaker.png"
              alt="ZX7 Speaker"
              className="
                w-full h-full object-cover
                md:w-[50pc] md:h-[29pc] md:object-[center_-160px] md:scale-x-[-1] md:translate-x-[-10px]
              "
            />
            {/* Dark overlay only for tablet+ */}
            <div className="hidden md:block absolute inset-0 bg-black/30 md:h-[19.8pc] md:w-[42.5pc]"></div>
          </div>

          {/* Text */}
          <div
            className="
              relative flex flex-col justify-center
              text-left px-6
              md:pl-10 md:mt-[-5pc] sm:pl-16 max-w-[300px]
            "
          >
            <h2
              className="
                text-2xl font-semibold uppercase text-black mb-4
                sm:text-4xl md:text-3xl
              "
            >
              zx7 speaker
            </h2>
            <button
              className="
                uppercase py-2 px-6 border border-black text-black font-semibold 
                hover:bg-black hover:text-white transition rounded
                sm:py-3 sm:px-7
              "
            >
              see product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
