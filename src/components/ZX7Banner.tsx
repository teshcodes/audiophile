export default function ZX7Banner() {
  return (
    <section className="md:mt-20 mt-8 px-6 sm:pl-11 sm:pr-9 lg:px-40">
      <div
        className="relative w-full lg:max-w-[1200px] lg:h-[400px] h-[320px] sm:h-[450px] rounded-[8px] overflow-hidden flex items-center mx-auto"
      >
        {/* Image */}
        <div className="flex w-full h-full">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="./zx7-speaker.png"
              alt="ZX7 Speaker"
              className="w-full h-full object-cover object-top"
            />
            {/* Adjusted dark overlay for desktop */}
            <div className="absolute inset-0 bg-black/20 lg:bg-black/25"></div>
          </div>

          {/* Text */}
          <div
            className="
              relative flex flex-col justify-center items-center
              text-center px-6
              max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] mx-auto lg:ml-[25pc]
            "
          >
            <h2
              className="
                text-2xl font-semibold uppercase text-black mb-4
                sm:text-4xl md:text-3xl lg:text-4xl
              "
            >
              zx7 speaker
            </h2>
            <button
              className="
                uppercase py-2 px-6 border border-black text-black font-semibold 
                hover:bg-black hover:text-white transition rounded
                sm:py-3 sm:px-7 lg:ml-[-4pc] lg:text-white lg:bg-black
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
