 export default function SecondHeader() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        className="w-full h-[700px] object-cover"
        src="./headphone.png"
        alt="Headphone"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mb-35">
        <h5 className="text-gray-400 text-sm uppercase tracking-[12px] mb-4">
          New Product
        </h5>
        <h6 className="text-white uppercase text-3xl md:text-6xl font-bold mb-6">
          XX99 Mark II Headphones
        </h6>
        <h3 className="text-gray-300 max-w-[350px] mb-6">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </h3>
        <button className="uppercase py-4 px-6 text-white bg-amber-600 hover:bg-amber-400 transition mt-6">
          See Product
        </button>
      </div>
    </div>
  );
}
