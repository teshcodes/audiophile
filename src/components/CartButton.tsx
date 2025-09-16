import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartButton() {
  const [open, setOpen] = useState(false);
  const cart = useContext(CartContext);
  if (!cart) return null;

  const { state, dispatch } = cart;

  // calculate total
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // increment / decrement
  const increment = (id: string) => {
    dispatch({ type: "INCREMENT_ITEM", payload: { id } });
  };

  const decrement = (id: string) => {
    dispatch({ type: "DECREMENT_ITEM", payload: { id } });
  };

  return (
    <div className="relative">
      {/* Cart icon */}
      <button onClick={() => setOpen(!open)} className="relative">
        <ShoppingCart size={24} />
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
            {state.items.length}
          </span>
        )}
      </button>

      {/* Dropdown / Fullscreen modal */}
      {open && (
        <div
          className="
            fixed md:absolute right-0 mt-20 
            inset-0 md:inset-auto 
            md:right-0 md:mt-4 
            w-[72%] md:w-96 
            mx-4 md:mx-0 
            bg-white text-black 
            shadow-lg rounded md:rounded-lg 
            p-4 z-20 left-1/2 -translate-x-1/2
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold uppercase">
              Cart ({state.items.length})
            </h3>
            {state.items.length > 0 && (
              <button
                className="text-gray-500 text-sm hover:text-red-500"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Remove all
              </button>
            )}
          </div>

          {/* Cart Items */}
          {state.items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {state.items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  {/* Left: Image + Details */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded bg-gray-100"
                    />
                    <div>
                      <p className="font-bold text-sm uppercase">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        ${item.price}
                      </p>
                    </div>
                  </div>

                  {/* Right: Quantity Controls */}
                  <div className="flex items-center bg-gray-100 px-3 py-1">
                    <button
                      onClick={() => decrement(item.id)}
                      className="pointer px-2 text-gray-600 hover:text-[#D87D4A]"
                    >
                      -
                    </button>
                    <span className="px-2 font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increment(item.id)}
                      className="pointer px-2 text-gray-600 hover:text-[#D87D4A]"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Total */}
          {state.items.length > 0 && (
            <>
              <div className="flex justify-between items-center mt-6">
                <span className="uppercase text-gray-500 text-sm">
                  Total
                </span>
                <span className="font-bold text-lg">${total}</span>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
              <button className="pointer mt-6 w-full bg-[#D87D4A] text-white py-3 rounded hover:bg-amber-400 transition">
                Checkout
              </button>
                </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
