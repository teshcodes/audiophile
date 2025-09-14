export default function AudioGear() {
  return (
    <section className="mt-20 px-2 md:px-10 lg:px-0">
      <div className="relative lg:px-[10pc] lg:ml-[-4pc] lg:flex lg:flex-row lg:max-w-[] lg:mx-auto lg:rounded-[10px] lg:overflow-hidden flex flex-col items-center">
        
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-16 text-center lg:text-left lg:px-16 lg:py-20 lg:max-w-[50%] z-10">
          <h2
            className="
              text-4xl font-bold mb-6 uppercase 
              max-w-[20pc] md:max-w-[30pc] lg:max-w-full
              text-black
            "
          >
            bringing you the{" "}
            <span className="text-orange-500 opacity-75 font-semibold">
              best
            </span>{" "}
            audio gear
          </h2>

          <h6 className="text-gray-500 sm:text-black">
            Located at the heart of New York City, Audiphile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </h6>
        </div>

        {/* Image */}
        <div className="relative flex-1 w-full mt-6 lg:mt-0 lg:w-1/2 lg:h-full">
          <img
            src="./audio-gear.png"
            alt="Audio Gear"
            className="w-full h-[300px] sm:h-full lg:h-full object-cover rounded-[10px] object-center"
          />
          {/* Black overlay only on desktop */}
          <div className="hidden lg:block absolute inset-0 bg-black/20 rounded-[10px]"></div>
        </div>
      </div>
    </section>
  );
}
