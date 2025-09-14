import ShopArea from "../components/ShopArea";
import AudioGear from "../components/AudioGear";
import { Link } from "react-router-dom";

export default function HeadphonePage() {
  return (
    <div className="">
      <h1 className="bg-black text-center uppercase py-29 font-bold mb-6 text-5xl text-white">
        Headphones
      </h1>

      {/* First Product - Image Left */}
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:max-w-[1200px] lg:mx-auto flex flex-col items-center my-20">
        <div className="lg:w-1/2 flex justify-center rounded-lg overflow-hidden bg-[#F1F1F1] h-[400px]">
          <img
            src="./xx9-mark-11.png"
            alt="xx9 Mark II Headphones"
            className="w-[250px] h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left px-6 py-10 lg:py-0 lg:px-16">
          <h5 className="text-[#D87D4a] text-lg uppercase tracking-[12px] mb-6">
            New Product
          </h5>
          <h6 className="text-black uppercase text-4xl md:text-6xl mb-6 font-semibold">
            XX99 Mark II Headphones
          </h6>
          <p className="opacity-50 mb-6 text-xl">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link to="/headphones/xx99-mark-ii">
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
            src="./headset.png"
            alt="xx9 Mark I Headphones"
            className="w-[250px] h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left px-6 py-10 lg:py-0 lg:px-16">
          <h6 className="text-black uppercase text-4xl md:text-6xl mb-6 font-semibold">
            XX99 Mark I Headphones
          </h6>
          <p className="opacity-50 mb-6 text-xl">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          .
          <Link to="/headphones/xx99-mark-i">
            <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition">
              See Product
            </button>
          </Link>
        </div>
      </div>

      {/* Third Product - Image Left */}
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:max-w-[1200px] lg:mx-auto flex flex-col items-center my-20">
        <div className="lg:w-1/2 flex justify-center rounded-lg overflow-hidden bg-[#F1F1F1] h-[400px]">
          <img
            src="./xx59-headphones.png"
            alt="xx59 Headphones"
            className="w-[250px] h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left px-6 py-10 lg:py-0 lg:px-16">
          <h6 className="text-black uppercase text-4xl md:text-6xl mb-6 font-semibold">
            XX59 Headphones
          </h6>
          <p className="opacity-50 mb-6 text-xl">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link to="/headphones/xx59">
            <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition">
              See Product
            </button>
          </Link>
        </div>
      </div>

      <AudioGear />
      <ShopArea className="mt-[11pc]" />
    </div>
  );
}
