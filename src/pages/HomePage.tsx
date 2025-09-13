import ShopArea from "../components/ShopArea";
import ZX7Banner from "../components/ZX7Banner";
import YX1Banner from "../components/YX1Banner";
import AudioGear from "../components/AudioGear";
import ShopBanner from "../components/ShopBanner";
import SecondHeader from "../components/SecondHeader";

export default function HomePage() {
  return (
    <div>
      {/* Hero / second header section */}
      <SecondHeader />

      {/* Product categories */}
      <ShopArea />

      {/* Promotional banner */}
      <ShopBanner />
 
      {/* ZX7Banner */}
      <ZX7Banner />
  
      {/* YX1Banner */}
      <YX1Banner />

      {/* About audio gear */}
      <AudioGear />
    </div>
  );
}
