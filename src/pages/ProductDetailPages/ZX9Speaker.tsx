import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopArea from "../../components/ShopArea";
import { CartContext } from "../../context/CartContext";
import {products} from "../../data/product";

export default function ZX9Speaker() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("Please Add to cart");
  }
  const { dispatch } = cart;
  const product = products.zx9;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: "/speaker.png",
        quantity: count,
      },
    });  
  };

  return (
    <div className="w-full overflow-x-hidden my-10">
      <div className="md:max-w-[1200px] md:mx-auto px-6 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="pointer text-gray-400 hover:text-[#D87D4A] transition font-medium"
        >
          ← Go Back
        </button>
      </div>
      {/* Product Top Section */}
      <div className="md:flex md:flex-row md:items-center md:justify-between md:max-w-[1200px] md:mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center rounded-lg overflow-hidden bg-[#F1F1F1] h-[400px] lg:ml-[2pc]">
          <img
            src="/speaker.png"
            alt={product.name}
            className="w-[250px] h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left px-6 py-10 md:py-0 md:px-12">
          <h5 className="text-[#D87D4a] text-lg uppercase tracking-[12px] mb-6">
            New Product
          </h5>
          <h6 className="text-black uppercase text-4xl md:text-3xl mb-6 font-semibold">
            {product.name}
          </h6>
          <p className="opacity-50 mb-6 text-xl">
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <p className="font-bold text-2xl mb-6">${product.price}</p>

          {/* Counter + Add to Cart */}
          <div className="flex flex-row sm:flex-col lg:flex-row md:flex-row items-center sm:items-start lg:items-center gap-4">
            {/* Counter */}
            <div className="flex items-center justify-between bg-[#F1F1F1] w-[120px] px-4 py-2">
              <button
                onClick={decrement}
                className="pointer text-black opacity-60 hover:text-[#D87D4A] font-bold"
              >
                -
              </button>
              <span className="font-semibold">{count}</span>
              <button
                onClick={increment}
                className="pointer text-black opacity-60 hover:text-[#D87D4A] font-bold"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick= {handleAddToCart}
              className="pointer uppercase py-2 px-6 text-white bg-[#D87D4A] hover:bg-amber-400 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Features + In the Box */}
      <div className="md:flex md:gap-12 md:max-w-[1200px] md:mx-auto px-6 mt-20">
        {/* Features */}
        <div className="md:w-2/3">
          <h2 className="uppercase font-bold text-2xl mb-6">Features</h2>
          <p className="opacity-70 mb-4">
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
          </p>
          <p className="opacity-70">
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
          </p>
        </div>

        {/* In the Box */}
        <div className="md:w-1/3 mt-12 md:mt-0">
          <h2 className="uppercase font-bold text-2xl mb-6">In the Box</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span>
              Speaker Unit
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">2x</span>
              Speaker Cloth Panel
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span>
              User Manual
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span>
              3.5mm 10m Audio Cable
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span>
              10m Optical Cable
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 md:max-w-[1100px] md:max-h-[470px] md:mx-auto px-6 grid md:grid-cols-2 gap-6">
        <div className="grid gap-6">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/productdetail-10.png"
              alt="Gallery 10"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/productdetail-11.png"
              alt="Gallery 11"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/productdetail-12.png"
            alt="Gallery 12"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      <div className="lg:mt-[63pc] md:mt-[34pc] mt-20 text-center">
        {/* Heading */}
        <h1 className="uppercase font-bold text-3xl mb-12">
          You may also like
        </h1>

        {/* Product Suggestions */}
        <div className="flex flex-col md:flex-row md:justify-center md:gap-3 gap-12">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-lg overflow-hidden w-full md:w-[200px] lg:w-[300px] h-[300px] bg-[#F1F1F1] flex items-center justify-center">
              <img
                src="/zx7-speakers.png"
                alt="Product 3"
                className="w-[150px] h-auto object-contain"
              />
            </div>
            <h3 className="uppercase font-bold text-xl my-6">ZX7 Speaker</h3>
            <button
              onClick={() => navigate("/speakers/ZX7Speaker")}
              className="pointer uppercase py-2 px-6 text-white bg-[#D87D4A] hover:bg-amber-400 transition"
            >
              See Product
            </button>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center ">
            <div className="relative rounded-lg overflow-hidden w-full md:w-[200px] lg:w-[300px] h-[300px] bg-[#F1F1F1] flex items-center justify-center">
              <img
                src="/headset.png"
                alt="Product 1"
                className="w-[150px] h-auto object-contain"
              />
            </div>
            <h3 className="uppercase font-bold text-xl my-6">XX99 Mark I</h3>
            <button
              onClick={() => navigate("/headphones/xx99-mark-i")}
              className="pointer uppercase py-2 px-6 text-white bg-[#D87D4A] hover:bg-amber-400 transition"
            >
              See Product
            </button>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-lg overflow-hidden w-full md:w-[200px] lg:w-[300px] h-[300px] bg-[#F1F1F1] flex items-center justify-center">
              <img
                src="/xx59-headphones.png"
                alt="Product 2"
                className="w-[150px] h-auto object-contain"
              />
            </div>
            <h3 className="uppercase font-bold text-xl my-6">XX59</h3>
            <button
              onClick={() => navigate("/headphones/xx99-mark-i")}
              className="pointer uppercase py-2 px-6 text-white bg-[#D87D4A] hover:bg-amber-400 transition"
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      <ShopArea className="mt-[11pc] mb-[8pc]" />

      {/* Audio Gear Section */}
      <div className="mt-32 py-20 px-6 md:px-12 lg:px-24 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          {/* Image - comes first on mobile, last on desktop */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="/audio-gear.png"
              alt="Audio Gear"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center mt-10 md:mt-0 order-2 md:order-1">
            <h2 className="uppercase text-3xl font-bold mb-6">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h2>
            <p className="opacity-70 text-lg leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
