 export default function ShopBanner() {
  return (
    <section className="mt-20 px-6 sm:px-12 lg:px-0">
      <div
        className="relative sm:w-[689px] h-[720px] mx-auto rounded-[8px] 
                   bg-[#D87D4A] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute w-[472px] h-[472px] border border-gray-100 rounded-full mt-[-380px]"></div>
        <div className="absolute w-[542px] h-[542px] border border-gray-100 rounded-full mt-[-380px]"></div>
        <div className="absolute w-[944px] h-[944px] border border-gray-100 rounded-full mb-[320px]"></div>

        {/* Speaker Image */}
        <img
          src="./speaker.png"
          alt="ZX9 Speaker"
          className="w-60 h-60 object-contain mb-10 relative z-10"
        />

        {/* Title */}
        <h2 className="text-white text-6xl max-w-[300px] font-bold uppercase mb-6 relative z-10">
          ZX9 Speaker
        </h2>

        {/* Description */}
        <p className="text-white/80 max-w-[300px] mb-8 relative z-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        {/* Button */}
        <button className="uppercase mt-10 py-3 px-6 text-white bg-black hover:bg-gray-800 transition rounded relative z-10">
          See Product
        </button>
      </div>
    </section>
  );
}
