import { Menu, ShoppingCart } from "lucide-react";
import SecondHeader from "./SecondHeader";
import ShopArea from "./ShopArea";
import ShopBanner from "./ShopBanner";
import ZX7Banner from "./ZX7Banner";

export default function Header() {
  return (
    <div className="">
      <header className="bg-black text-white">
        <nav className="flex items-center mx-auto h-[50px] px-6 py-6 sm:max-w-[689px] lg:max-w-[1110px] border-b border-gray-400/20 pb-6">
          {/* Menu + Logo grouped together */}
          <div className="flex items-center gap-10">
            <Menu className="w-4 h-4 cursor-pointer" />
            <h1 className="text-lg font-bold tracking-widest">audiophile</h1>
          </div>

          {/* Cart Icon aligned right */}
          <ShoppingCart className="w-4 h-4 cursor-pointer ml-auto" />
        </nav>
      </header>

      <SecondHeader />
      <ShopArea />
      <ShopBanner />
      <ZX7Banner />
    </div>
  );
}
