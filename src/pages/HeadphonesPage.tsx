import ShopArea from "../components/ShopArea";

export default function HeadphonePage() {
  return (
    <div className="">
      <h1 className="bg-black text-center uppercase py-37 font-bold mb-6 text-5xl text-white">
        Headphones
      </h1>

      <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center h-[400px] mt-40 mx-12">
        <img
          src="./xx9-mark-11.png"
          alt="xx9 Mark II Headphones"
          className="w-[250px] h-auto object-contain"
        />
      </div>
      <div className="text-center">
        <h5 className="text-[#D87D4a] text-lg uppercase tracking-[12px] mt-15">
          New Product
        </h5>
        <h6 className="text-black uppercase text-4xl md:text-6xl mt-6  font-semibold">
          XX99 Mark II Headphones
        </h6>
        <p className="opacity-50 mt-10 sm:px-8 md:px-10 lg:px-13 text-xl">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition mt-6">
          See Product
        </button>
      </div>

      <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center h-[400px] mt-40 mx-12">
        <img
          src="./headset.png"
          alt="xx9 Mark I Headphones"
          className="w-[250px] h-auto object-contain"
        />
      </div>
      <div className="text-center">
        <h6 className="text-black uppercase text-4xl md:text-6xl mt-15 font-semibold">
          XX99 Mark I Headphones
        </h6>
        <p className="opacity-50 mt-10 sm:px-9 md:px-6 lg:px-13 text-xl">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition mt-6">
          See Product
        </button>
      </div>


      <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center h-[400px] mt-40 mx-12">
        <img
          src="./xx59-headphones.png"
          alt="xx59 Headphones"
          className="w-[250px] h-auto object-contain"
        />
      </div>
      <div className="text-center">
        <h6 className="text-black uppercase text-4xl md:text-6xl mt-15 md:px-[10pc] font-semibold">
          XX59 Headphones
        </h6>
        <p className="opacity-50 mt-10 sm:px-9 md:px-6 lg:px-13 text-xl">
          Enjoy your audio almost anywhere and customize it to your specific 
          tastes with the XX59 headphones. The stylish yet durable versatile 
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition mt-6">
          See Product
        </button>
      </div>

      <ShopArea className="mt-[11pc]"/>
    </div>
  );
}
