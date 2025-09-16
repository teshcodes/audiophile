import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartContext is missing. Wrap your app in <CartProvider>.");
  }

  const { state } = cart;
  const { items } = state;

  const [paymentMethod, setPaymentMethod] = useState("e-Money");

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping + vat;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8">
      {/* Checkout Form */}
      <div className="pointer md:col-span-2 bg-white rounded-lg shadow p-6 space-y-8">
        <Link to="/" className="text-sm text-gray-500 hover:text-black">
          Go Back
        </Link>

        <h1 className="text-2xl font-bold uppercase">Checkout</h1>

        {/* Billing Details */}
        <section>
          <h2 className="text-sm text-[#D87D4A] font-bold uppercase mb-4">
            Billing Details
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Name" className="border rounded p-2 w-full" />
            <input placeholder="Email Address" className="border rounded p-2 w-full" />
            <input placeholder="Phone Number" className="border rounded p-2 w-full md:col-span-2" />
          </div>
        </section>

        {/* Shipping Info */}
        <section>
          <h2 className="text-sm text-[#D87D4A] font-bold uppercase mb-4">
            Shipping Info
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Your Address" className="border rounded p-2 w-full md:col-span-2" />
            <input placeholder="ZIP Code" className="border rounded p-2 w-full" />
            <input placeholder="City" className="border rounded p-2 w-full" />
            <input placeholder="Country" className="border rounded p-2 w-full md:col-span-2" />
          </div>
        </section>

        {/* Payment Details */}
        <section>
          <h2 className="text-sm text-[#D87D4A] font-bold uppercase mb-4">
            Payment Details
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <button
                onClick={() => setPaymentMethod("e-Money")}
                className={`pointer border rounded p-2 w-full ${
                  paymentMethod === "e-Money" ? "border-[#D87D4A]" : ""
                }`}
              >
                e-Money
              </button>
              <button
                onClick={() => setPaymentMethod("Cash")}
                className={`pointer border rounded p-2 w-full ${
                  paymentMethod === "Cash" ? "border-[#D87D4A]" : ""
                }`}
              >
                Cash on Delivery
              </button>
            </div>

            {paymentMethod === "e-Money" && (
              <div className="grid md:grid-cols-2 gap-4">
                <input placeholder="e-Money Number" className="border rounded p-2 w-full" />
                <input placeholder="e-Money PIN" className="border rounded p-2 w-full" />
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Summary */}
      <aside className="bg-white rounded-lg shadow p-6 h-fit">
        <h2 className="text-lg font-bold uppercase mb-6">Summary</h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <p className="font-medium">x{item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Total</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span className="font-bold">${shipping}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">VAT (20%)</span>
            <span className="font-bold">${vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-4">
            <span>Grand Total</span>
            <span className="text-[#D87D4A]">${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <button className="pointer w-full bg-[#D87D4A] hover:bg-amber-400 text-white py-3 rounded mt-6">
          Continue & Pay
        </button>
      </aside>
    </div>
  );
}
