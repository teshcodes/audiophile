export default function SecondHeader() {
  return (
    <div className="relative w-full">
      {/* Mobile & Tablet version (overlay text on image) */}
      <div className="lg:hidden relative">
        {/* Background Image */}
        <img
          className="w-full h-[480px] sm:h-[600px] md:h-[700px] object-cover"
          src="./headphone.png"
          alt="Headphone"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          {/* Small Title */}
          <h5 className="text-gray-400 text-xs sm:text-sm uppercase tracking-[6px] sm:tracking-[12px] mb-2">
            New Product
          </h5>

          {/* Main Heading */}
          <h6 className="text-white uppercase text-3xl sm:text-5xl md:text-6xl font-bold leading-snug mb-3">
            XX99 Mark II <br />
            Headphones
          </h6>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base max-w-[70%] sm:max-w-[400px] mb-2 leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          {/* Button */}
          <button className="pointer uppercase py-2 px-6 sm:py-4 sm:px-8 text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-400 transition">
            See Product
          </button>
        </div>
      </div>

      {/* Desktop version (text + image side by side) */}
      <div className="hidden lg:flex items-center justify-between px-20 bg-black h-[700px] rounded-md overflow-hidden">
        {/* Text Block */}
        <div className="max-w-lg text-left">
          <h5 className="text-gray-400 text-sm uppercase tracking-[12px] mb-4">
            New Product
          </h5>
          <h6 className="text-white uppercase text-6xl font-bold leading-snug mb-6">
            XX99 Mark II <br />
            Headphones
          </h6>
          <p className="text-gray-300 text-base max-w-[23pc] mb-6 leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="pointer uppercase py-4 px-8 font-semibold text-white bg-amber-600 hover:bg-amber-400 transition">
            See Product
          </button>
        </div>

        <div className="flex-shrink-0 relative h-[600px]">
           
          <img
            src="./headphone.png"
            alt="Headphone"
            className="h-full object-contain relative z-10"
          />

          <div className="hidden lg:block absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

          <div className="hidden lg:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}
