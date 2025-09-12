import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <section className="mt-8 py-14 px-13 bg-black">
      <h2 className="text-white font-bold text-4xl">audiophile</h2>
      <div className="text-white mt-10">
        <nav className="flex gap-8 uppercase text-sm tracking-[2px]">
          <a href="#" className="hover:text-amber-500">
            Home
          </a>
          <a href="#" className="hover:text-amber-500">
            Headphones
          </a>
          <a href="#" className="hover:text-amber-500">
            Speakers
          </a>
          <a href="#" className="hover:text-amber-500">
            Earphones
          </a>
        </nav>
      </div>
      <div className="text-md text-gray-400 mt-10 w-[43pc]">
        Audiophile is an all in one stop to fuffil your audio needs. 
        We're a small team of music lovers and sound specialists 
        who are devoted to helping you get the most out of personal audio. 
        Come and visit our demo facility - We're open 7 days a week.
      </div>

      <div className="mx-auto flex justify-between items-center text-gray-400 mt-25 text-xl">
        <h2>Copyright 2025. All Rights Reserved</h2>
        <div className="flex gap-6 ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-12 h-13 text-white hover:opacity-80 hover:text-amber-500 transition" />            
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-10 h-10 text-white sm:mt-2 hover:text-amber-500 transition"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-10 h-10 text-white sm:mt-2 hover:text-amber-500 transition"/>
            </a>
        </div>
      </div>
    </section>
  );
}
