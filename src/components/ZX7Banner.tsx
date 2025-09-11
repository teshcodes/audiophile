export default function ZX7Banner() {
  return (
    <section className="mt-20 px-6 sm:px-12 lg:px-0">
      <div
        className="flex flex-col lg:flex-row items-center justify-between 
                   max-w-[1110px] mx-auto bg-[#F1F1F1] rounded-[8px] overflow-hidden"
      >

        {/* Image */}
        <div className="">
          <div className="flex-1 p-10 lg:p-20 text-center lg:text-left">
            <h2 className="text-3xl font-bold uppercase mb-6">ZX7 Speaker</h2>
          <button className="uppercase py-3 px-6 border border-black text-black hover:bg-black hover:text-white transition rounded">see product</button>
          </div>
          <img
            src="./zx7-speaker.png"
            alt="ZX7 Speaker"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
