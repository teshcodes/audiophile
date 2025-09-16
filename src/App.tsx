import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartProvider";

import HeadphonesPage from "./pages/HeadphonesPage";
import EarphonesPage from "./pages/EarphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

import XX99MarkII from "./pages/ProductDetailPages/XX99MarkII";
import XX99MarkI from "./pages/ProductDetailPages/XX99MarkI";
import XX59 from "./pages/ProductDetailPages/XX59";

import ZX9Speaker from "./pages/ProductDetailPages/ZX9Speaker";
import ZX7Speaker from "./pages/ProductDetailPages/ZX7Speaker";

import YXI from "./pages/ProductDetailPages/YXI";

import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/headphones" element={<HeadphonesPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/earphones" element={<EarphonesPage />} />

            {/* Product Detail Pages */}
            <Route path="/headphones/xx99-mark-ii" element={<XX99MarkII />} />
            <Route path="/headphones/xx99-mark-i" element={<XX99MarkI />} />
            <Route path="/headphones/xx59" element={<XX59 />} />

            <Route path="/speakers/ZX9Speaker" element={<ZX9Speaker />} />
            <Route path="/speakers/ZX7Speaker" element={<ZX7Speaker />} />
            <Route path="/earphones/YXI" element={<YXI />} />

            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} /> 
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}
