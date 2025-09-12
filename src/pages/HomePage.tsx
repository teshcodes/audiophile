import ShopArea from "../components/ShopArea";
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

      {/* About audio gear */}
      <AudioGear />
    </div>
  );
}
