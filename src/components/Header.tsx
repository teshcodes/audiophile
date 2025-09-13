 import { ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header
      className="
        flex bg-black text-white 
        px-4 sm:px-8 py-4 sm:py-6 
        justify-between items-center
      "
    >
      {/* Left side (menu + logo + nav on desktop) */}
      <div className="flex items-center gap-4 sm:gap-10">
        {/* Menu button - only visible on small screens */}
        <button className="lg:hidden">
          <Menu size={22} />
        </button>

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          audiophile
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 uppercase text-sm tracking-[2px] ml-12">
          <a href="#" className="hover:text-amber-500">
            Home
          </a>
          <a href="#" className="hover:text-amber-500">
            Headphones
          </a>
          <a href="#" className="hover:text-amber-500">
            Speakers
          </a>
          <a href="#" className="hover:text-amber-500">
            Earphones
          </a>
        </nav>
      </div>

      {/* Cart */}
      <button className="relative">
        <ShoppingCart size={24} className="sm:w-[28px] sm:h-[28px]" />
      </button>
    </header>
  );
}
