 export default function ShopBanner() {
  return (
    <section className="md:mt-[11pc] mt-10 px-6 sm:px-12 lg:px-0">
      <div
        className="relative sm:w-[689px] lg:max-w-[1200px] lg:h-[400px] h-[720px] mx-auto rounded-[8px] 
                   bg-[#D87D4A] flex flex-col lg:flex-row items-center lg:items-center 
                   justify-center lg:justify-between text-center lg:text-left px-6 lg:px-18 overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute w-[350px] md:w-[472px] h-[350px] md:h-[472px] border border-gray-300 rounded-full md:mt-[-380px] mt-[-370px] lg:w-[420px] lg:h-[420px] lg:mt-[20pc] lg:ml-[-5pc]"></div>
        <div className="absolute w-[400px] md:w-[542px] h-[400px] md:h-[542px] border border-gray-300 rounded-full md:mt-[-380px] mt-[-370px] lg:w-[470px] lg:h-[470px] lg:mt-[20pc] lg:ml-[-10pc]"></div>
        <div className="absolute md:w-[944px] md:h-[944px] border border-gray-300 rounded-full mb-[320px] lg:w-[0px] lg:h-[0px]"></div>

        {/* Speaker Image */}
        <div className="flex-shrink-0 relative z-10 mb-10 lg:mb-0 lg:w-1/2 lg:h-full flex items-end justify-center overflow-hidden">
          {/* Mobile & Tablet Image */}
          <img
            src="./speaker.png"
            alt="ZX9 Speaker"
            className="w-60 h-60 md:w-72 md:h-72 lg:hidden object-contain"
          />
          {/* Desktop Image (cropped bottom) */}
          <img
            src="./zx9-desktop.png"
            alt="ZX9 Speaker Desktop"
            className="hidden lg:block w-auto h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start lg:ml-13 relative z-10 lg:w-[300px]">
          {/* Title */}
          <h2 className="text-white md:text-6xl text-4xl max-w-[200px] md:max-w-[300px] lg:max-w-full font-bold uppercase mb-6 lg:mt-[2pc]">
            ZX9 Speaker
          </h2>

          {/* Description */}
          <p className="text-white/70 max-w-[300px] lg:max-w-[400px] mb-8">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          {/* Button */}
          <button className="uppercase lg:mt-[-1pc] mt-1 md:mt-6 py-3 px-10 text-white/70 bg-black hover:bg-gray-800 transition rounded">
            See Product
          </button>
        </div>
      </div>
    </section>
  );
}
