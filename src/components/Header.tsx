import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ShopArea from "./ShopArea";
import CartButton from "./CartButton"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex bg-black text-white px-4 sm:px-8 py-4 sm:py-6 justify-between items-center relative">
      {/* Left side */}
      <div className="flex items-center gap-4 sm:gap-10">
        {/* Menu button - mobile + tablet only */}
        <button
          className="lg:hidden z-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          audiophile
        </h1>

        {/* Desktop Nav (lg+) */}
        <nav className="hidden lg:flex gap-8 uppercase text-sm tracking-[2px] ml-12">
          <Link to="/" className="hover:text-amber-500">Home</Link>
          <Link to="/headphones" className="hover:text-amber-500">Headphones</Link>
          <Link to="/speakers" className="hover:text-amber-500">Speakers</Link>
          <Link to="/earphones" className="hover:text-amber-500">Earphones</Link>
        </nav>
      </div>

      {/* Cart */}
       <CartButton />
    

      {/* Dropdown (only md and sm) */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black text-white z-10">
          {/* Small screens → text links */}
          <div className="flex flex-col items-center py-4 space-y-4 md:hidden">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-500 uppercase tracking-[2px]"
            >
              Home
            </Link>
            <Link
              to="/headphones"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-500 uppercase tracking-[2px]"
            >
              Headphones
            </Link>
            <Link
              to="/speakers"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-500 uppercase tracking-[2px]"
            >
              Speakers
            </Link>
            <Link
              to="/earphones"
              onClick={() => setMenuOpen(false)}
              className="hover:text-amber-500 uppercase tracking-[2px]"
            >
              Earphones
            </Link>
          </div>

          {/* Tablet (md only) → ShopArea */}
          <div className="hidden md:block lg:hidden px-6 py-6 bg-white text-black">
            <ShopArea className="!mt-25 mb-10" />
          </div>
        </div>
      )}
    </header>
  );
}
