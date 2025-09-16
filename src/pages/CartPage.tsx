import { useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function CartPage() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  if (!cart) {
    throw new Error("CartContext is missing. Wrap your app in <CartProvider>.");
  }

  const { state, dispatch } = cart;
  const { items } = state;

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        navigate(-1); // go back when clicking outside
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal content */}
      <div
        ref={modalRef}
        className="bg-white w-full max-w-2xl mx-4 p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {items.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.{" "}
            <Link to="/" className="text-[#D87D4A] font-medium">
              Continue Shopping
            </Link>
          </p>
        ) : (
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
              >
                {/* Product Info */}
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-500">
                    ${item.price} × {item.quantity}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
                  }
                  className="pointer text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between items-center border-t pt-6">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>

            {/* Clear Cart + Checkout */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="pointer bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded"
              >
                Clear Cart
              </button>
                <button className="pointer bg-[#D87D4A] hover:bg-amber-400 text-white py-2 px-4 rounded">
                  Checkout
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
