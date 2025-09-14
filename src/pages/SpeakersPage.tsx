import ShopArea from "../components/ShopArea";
import AudioGear from "../components/AudioGear";
import { Link } from "react-router-dom";

export default function SpeakerPage() {
  return (
    <div className="">
      <h1 className="bg-black text-center uppercase py-29 font-bold mb-6 text-5xl text-white">
        speakers
      </h1>

      {/* First Product - Image Left */}
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:max-w-[1200px] lg:mx-auto flex flex-col items-center my-20">
        <div className="lg:w-1/2 flex justify-center rounded-lg overflow-hidden bg-[#F1F1F1] h-[400px]">
          <img
            src="./speaker.png"
            alt="ZX9 Speaker"
            className="w-[250px] h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left px-6 py-10 lg:py-0 lg:px-16">
          <h5 className="text-[#D87D4a] text-lg uppercase tracking-[12px] mb-6">
            New Product
          </h5>
          <h6 className="text-black uppercase text-4xl md:text-6xl mb-6 font-semibold">
            zx9 speaker
          </h6>
          <p className="opacity-50 mb-6 text-xl">
            Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
            system that offers truly wireless connectivity - creating new possibilities for more 
            pleasing and practical audio setups.
          </p>
           <Link to="/speakers/ZX9Speaker">
          <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition">
            See Product
          </button>
          </Link>
        </div>
      </div>

      {/* Second Product - Image Right */}
      <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:max-w-[1200px] lg:mx-auto flex flex-col items-center my-20">
        <div className="lg:w-1/2 flex justify-center rounded-lg overflow-hidden bg-[#F1F1F1] h-[400px]">
          <img
            src="./zx7-speakers.png"
            alt="ZX7 Speaker"
            className="w-[250px] h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left px-6 py-10 lg:py-0 lg:px-16">
          <h6 className="text-black uppercase text-4xl md:text-6xl mb-6 font-semibold">
            zx7 speaker
          </h6>
          <p className="opacity-50 mb-6 text-xl">
            Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile 
            components that represents the top of the line powered speakers for home or studio use.
          </p>
          <Link to="/speakers/ZX7Speaker">
          <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition">
            See Product
          </button>
          </Link>
         
        </div>
      </div>

      <ShopArea className="mt-[11pc] mb-[8pc]" />
      <AudioGear />
    </div>
  );
}
