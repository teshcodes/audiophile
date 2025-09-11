 import { ChevronRight } from "lucide-react";

export default function ShopArea() {
  const categories = [
    { name: "Headphones", image: "./headset.png" },
    { name: "Speakers", image: "./speaker.png" },
    { name: "Earphones", image: "./earphone.png" },
  ];

  return (
    <section className="mt-20 px-6 sm:px-12 lg:px-0 max-w-[1110px] mx-auto">
      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-gray-100 rounded-xl flex flex-col items-center pt-15 pb-8 relative "
          >
            {/* Product Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute top-[-55px] left-[38px] w-[147px] h-[133px] object-contain"
            />

            {/* Category Name */}
            <h3 className="uppercase text-lg font-bold mt-20">{cat.name}</h3>

            {/* Shop link */}
            <button className="flex items-center gap-2 text-gray-500 mt-4 uppercase tracking-wider hover:text-orange-500 transition">
              Shop
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
