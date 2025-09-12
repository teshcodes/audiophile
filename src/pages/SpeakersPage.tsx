 import ShopArea from "../components/ShopArea";
 import AudioGear from "../components/AudioGear";
 
 export default function SpeakerPage() {
   return (
     <div className="">
       <h1 className="bg-black text-center uppercase py-37 font-bold mb-6 text-5xl text-white">
         speakers
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
         <h6 className="text-black uppercase text-4xl md:text-6xl mt-6 md:px-[15pc] font-semibold">
           zx9 speaker
         </h6>
         <p className="opacity-50 mt-10 md:px-5 lg:px-13 text-xl">
            Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
            system that offers truly wireless connectivity - creating new possibilities for more 
            pleasing and practical audio setups.
         </p>
         <button className="uppercase py-4 px-9 text-[#FFFFFF] bg-[#D87D4A] hover:bg-amber-400 transition mt-6">
           See Product
         </button>
       </div>
 
       <div className="bg-[#F1F1F1] rounded-lg flex items-center justify-center h-[400px] mt-40 mx-12">
         <img
           src="./zx7-speakers.png"
           alt="xx9 Mark I Headphones"
           className="w-[250px] h-auto object-contain"
         />
       </div>
       <div className="text-center">
         <h6 className="text-black uppercase text-4xl md:text-6xl mt-15 md:px-[15pc] font-semibold">
           zx7 speaker
         </h6>
         <p className="opacity-50 mt-10 md:px-6  text-xl">
          Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile 
          components that represents the top of the line powered speakers for home or studio use.
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
 