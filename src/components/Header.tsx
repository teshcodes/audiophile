 import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="flex  bg-black text-white p-6 justify-between items-center py-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        audioPhile
      </h1>

      <button className="relative">
        <ShoppingCart size={28} />
      </button>
    </header>
  );
}
