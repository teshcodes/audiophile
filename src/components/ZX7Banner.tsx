export default function ZX7Banner() {
  return (
    <section className="mt-20 px-6 sm:pl-11 sm:pr-9 lg:px-0">
      <div
        className="relative w-full h-[320px] sm:h-[450px] lg:h-[450px]  
                    rounded-[8px] overflow-hidden flex items-center "
      >

        {/* Image */}
        <div className="flex">
          <img
            src="./zx7-speaker.png"
            alt="ZX7 Speaker"
            className="absolute inset-0 w-full h-full object-cover object-top scale-x-[-1.2]"
          /> 

          <div className="relative z-10 flex-col items-start justify-center pl-8 sm:pl-16 max-w-[300px] translate-y-22">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-black mb-6">
              zx7 speaker
            </h2>
            <button className="uppercase mt-3 py-3 px-7 border border-black text-black hover:bg-black hover:text-white transition rounded">
              see product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
