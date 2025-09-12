  import ShopArea from "../components/ShopArea";
  import AudioGear from "../components/AudioGear";
  
  export default function SpeakerPage() {
    return (
      <div className="">
        <h1 className="bg-black text-center uppercase py-37 font-bold mb-6 text-5xl text-white">
          earphones
        </h1>
  
        <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center h-[400px] mt-40 mx-12">
          <img
            src="./speaker.png"
            alt="ZX9 Speaker"
            className="w-[250px] h-auto object-contain"
          />
        </div>
        <div className="text-center">
          <h5 className="text-[#D87D4a] text-lg uppercase tracking-[12px] mt-15">
            New Product
          </h5>
          <h6 className="text-black uppercase text-4xl md:text-6xl mt-6 md:px-[10pc] font-semibold">
            yx1 wireless earphones
          </h6>
          <p className="opacity-50 mt-11 md:px-5 lg:px-14 text-xl">
              Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
              Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
          </p>
          <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition mt-6">
            See Product
          </button>
        </div>
  
        <ShopArea className="mt-[11pc] mb-[8pc]"/>
        <AudioGear/>
      </div>
    );
  }
  