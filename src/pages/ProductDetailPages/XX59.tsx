import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopArea from "../../components/ShopArea";
import { CartContext } from "../../context/CartContext";
import { products } from "../../data/product";

export default function XX59() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("Please Add to cart");
  }

  const { dispatch } = cart;
  const product = products.xx59;

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: "/xx59-headphones.png",
        quantity: count,
      },
    });  
  };

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };


  return (
    <div className="w-full overflow-x-hidden my-10">
      {/* Go Back Button */}
      <div className="md:max-w-[1200px] md:mx-auto px-6 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-[#D87D4A] transition font-medium"
        >
          ← Go Back
        </button>
      </div>

      {/* Product Top Section */}
      <div className="md:flex md:flex-row md:items-center md:justify-between md:max-w-[1200px] md:mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center rounded-lg overflow-hidden bg-[#F1F1F1] h-[400px] lg:ml-[2pc]">
          <img
            src="/xx59-headphones.png"
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
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <p className="font-bold text-2xl mb-6">${product.price}</p>

          {/* Counter + Add to Cart */}
          <div className="flex flex-row sm:flex-col lg:flex-row md:flex-row items-center sm:items-start lg:items-center gap-4">
            {/* Counter */}
            <div className="flex items-center justify-between bg-[#F1F1F1] w-[120px] px-4 py-2">
              <button
                onClick={decrement}
                className="text-black opacity-60 hover:text-[#D87D4A] font-bold"
              >
                -
              </button>
              <span className="font-semibold">{count}</span>
              <button
                onClick={increment}
                className="text-black opacity-60 hover:text-[#D87D4A] font-bold"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick= {handleAddToCart}
              className="uppercase py-2 px-6 text-white bg-[#D87D4A] hover:bg-amber-400 transition"
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
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos.
          </p>
          <p className="opacity-70">
            More than a simple pair of headphones, this headset features a pair
            of built-in microphones for clear, hands-free calling when paired
            with a compatible smartphone. Controlling music and calls is also
            intuitive thanks to easy-access touch buttons on the earcups.
            Regardless of how you use the XX59 headphones, you can do so all day
            thanks to an impressive 30-hour battery life that can be rapidly
            recharged via USB-C.
          </p>
        </div>

        {/* In the Box */}
        <div className="md:w-1/3 mt-12 md:mt-0">
          <h2 className="uppercase font-bold text-2xl mb-6">In the Box</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span>
              Headphone Unit
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">2x</span>
              Replacement Earcups
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span>
              User Manual
            </li>
            <li>
              <span className="text-[#D87D4A] font-bold mr-4">1x</span>
              3.5mm Audio Cable
            </li>
          </ul>
        </div>
      </div>

      {/* Product Gallery */}
      <div className="mt-20 md:max-w-[1100px] md:max-h-[470px] md:mx-auto px-6 grid md:grid-cols-2 gap-6">
        <div className="grid gap-6">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/productdetail-7.png"
              alt="Gallery 7"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/productdetail-8.png"
              alt="Gallery 8"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <img
            src="/productdetail-9.png"
            alt="Gallery 9"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="lg:mt-[40pc] md:mt-[25pc] mt-20 text-center">
        <h1 className="uppercase font-bold text-3xl mb-12">
          You may also like
        </h1>

        <div className="flex flex-col md:flex-row md:justify-center md:gap-3 gap-12">
          {/* Suggestion 1: Mark II */}
          <div className="flex flex-col items-center ">
            <div className="relative rounded-lg overflow-hidden w-full md:w-[200px] lg:w-[300px] h-[300px] bg-[#F1F1F1] flex items-center justify-center">
              <img
                src="/xx9-mark-11.png"
                alt="XX99 Mark II"
                className="w-[150px] h-auto object-contain"
              />
            </div>
            <h3 className="uppercase font-bold text-xl my-6">XX99 Mark II</h3>
            <button
              onClick={() => navigate("/headphones/xx99-mark-ii")}
              className="uppercase py-2 px-6 text-white bg-[#D87D4A] hover:bg-amber-400 transition"
            >
              See Product
            </button>
          </div>

          {/* Suggestion 2: Mark I */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-lg overflow-hidden w-full md:w-[200px] lg:w-[300px] h-[300px] bg-[#F1F1F1] flex items-center justify-center">
              <img
                src="/headset.png"
                alt="XX99 Mark I"
                className="w-[150px] h-auto object-contain"
              />
            </div>
            <h3 className="uppercase font-bold text-xl my-6">XX99 mark i</h3>
            <button
              onClick={() => navigate("/headphones/xx99-mark-i")}
              className="uppercase py-2 px-6 text-white bg-[#D87D4A] hover:bg-amber-400 transition"
            >
              See Product
            </button>
          </div>

          {/* Suggestion 3: ZX9 Speaker */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-lg overflow-hidden w-full md:w-[200px] lg:w-[300px] h-[300px] bg-[#F1F1F1] flex items-center justify-center">
              <img
                src="/speaker.png"
                alt="ZX9 Speaker"
                className="w-[150px] h-auto object-contain"
              />
            </div>
            <h3 className="uppercase font-bold text-xl my-6">ZX9 Speaker</h3>
            <button 
            onClick={() => navigate("/speakers/zx9Speaker")}
            className="uppercase py-2 px-6 text-white bg-[#D87D4A] hover:bg-amber-400 transition">
              See Product
            </button>
          </div>
        </div>
      </div>

      <ShopArea className="mt-[11pc] mb-[8pc]" />

      {/* Audio Gear Section */}
      <div className="mt-32 py-20 px-6 md:px-12 lg:px-24 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img
              src="/audio-gear.png"
              alt="Audio Gear"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text */}
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
