import ShopArea from "../components/ShopArea";
import AudioGear from "../components/AudioGear";

export default function EarphonePage() {
  return (
    <div className="">
      <h1 className="bg-black text-center uppercase py-29 font-bold mb-6 text-5xl text-white">
        earphones
      </h1>

      {/* First Product - Image Left */}
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:max-w-[1200px] lg:mx-auto flex flex-col items-center my-20">
        <div className="lg:w-1/2 flex justify-center rounded-lg overflow-hidden bg-[#F1F1F1] h-[400px]">
          <img
            src="./earphone.png"
            alt="YX1 Wireless Earphone"
            className="w-[250px] h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left px-6 py-10 lg:py-0 lg:px-16">
          <h5 className="text-[#D87D4a] text-lg uppercase tracking-[12px] mb-6">
            New Product
          </h5>
          <h6 className="text-black uppercase text-4xl md:text-6xl mb-6 font-semibold">
            yx1 wireless earphones
          </h6>
          <p className="opacity-50 mb-6 text-xl">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
           
            <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition">
              See Product
            </button>
         
        </div>
      </div>

      <ShopArea className="mt-[11pc] mb-[8pc]" />
      <AudioGear />
    </div>
  );
}
