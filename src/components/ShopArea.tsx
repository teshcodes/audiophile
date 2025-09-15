import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ShopArea({ className = "" }: { className?: string }) {
  const categories = [
    { name: "Headphones", image: "/headset.png", link: "/headphones" },
    { name: "Speakers", image: "/speaker.png", link: "/speakers" },
    { name: "Earphones", image: "/earphone.png", link: "/earphones" },
  ];

  return (
    <section className={`mt-28 px-6 sm:px-8 md:px-10 lg:px-0 ${className}`}>
      {/* Responsive grid: 1 col on mobile, 3 cols on tablet+ */}
      <div className="grid gap-20 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-3 lg:px-40">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-gray-100 rounded-xl flex flex-col items-center pt-24 pb-8 relative"
          >
            {/* Product Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute -top-14 md:-top-22 w-[120px] sm:w-[140px] h-auto object-contain drop-shadow-[0_17px_15px_rgba(0,0,0,0.50)]"
            />

            {/* Category Name */}
            <h3 className="uppercase text-lg font-bold mt-4 opacity-75">
              {cat.name}
            </h3>

            {/* Shop link */}
            <Link
              to={cat.link}
              className="flex items-center gap-2 text-gray-500 mt-3 uppercase tracking-wider hover:text-orange-500 transition"
            >
              Shop
              <ChevronRight className="w-5 h-5 text-orange-500" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
