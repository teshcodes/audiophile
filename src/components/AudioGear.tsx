export default function AudioGear() {
  return (
    <section className="mt-20 px-2 md:px-10 lg:px-0">
      <div className="relative">
        {/* Image */}
        <div className="relative">
          <img
            src="./audio-gear.png"
            alt="Audio Gear"
            className="
              w-full h-[300px] sm:h-full rounded-[10px] object-cover
              sm:object-center object-[left_center] 
            "
          />
          {/* Black overlay only on mobile */}
          <div className="absolute inset-0 bg-black/40 sm:hidden rounded-[10px]"></div>
        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col justify-center sm:px-13 px-10 py-16 text-center lg:text-left">
          <h2
            className="
    text-4xl font-bold mb-6 uppercase 
    max-w-[20pc] md:max-w-[30pc]   
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
      </div>
    </section>
  );
}
