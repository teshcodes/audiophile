import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="mt-8 py-14 px-6 sm:px-13 bg-black text-center sm:text-left">
      <div className="lg:flex justify-between">
      {/* Logo */}
      <h2 className="text-white font-bold text-4xl">audiophile</h2>

      {/* Nav links */}
      <div className="text-white mt-10 lg:mt-0">
        <nav
          className="
            flex flex-col items-center gap-4
            sm:flex-row sm:gap-8 sm:justify-start
            uppercase text-sm tracking-[2px]
          "
        >
          <Link to="/" className="hover:text-amber-500">
            Home
          </Link>
          <Link to="/headphones" className="hover:text-amber-500">
            Headphones
          </Link>
          <Link to="/speakers" className="hover:text-amber-500">
            Speakers
          </Link>
          <Link to="/earphones" className="hover:text-amber-500">
            Earphones
          </Link>
        </nav>
      </div>
      </div>

      {/* About text */}
      <div
        className="
          text-md text-gray-400 mt-10 
          max-w-[39ch] sm:max-w-[43pc] 
          mx-auto sm:mx-0
        "
      >
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </div>

      {/* Bottom row */}
      <div
        className="
          mt-16 flex flex-col items-center gap-8
          sm:flex-row sm:justify-between sm:items-center
          text-gray-400 text-xl
        "
      >
        <h2>Copyright 2025. All Rights Reserved</h2>

        {/* Social icons */}
        <div className="flex gap-6 justify-center mt-10 md:mt-0 lg:mt-[-10pc]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-10 h-10 text-white hover:text-amber-500 transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-10 h-10 text-white hover:text-amber-500 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-10 h-10 text-white hover:text-amber-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
