import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-end items-center">
        <div className="space-x-6 hidden md:flex ">
          <Link
            href="/bannerScroll"
            className="text-white hover:text-indigo-200"
          >
            Banner
          </Link>
          <Link href="/schedule" className="text-white hover:text-indigo-200">
            Schedule
          </Link>{" "}
          <Link
            href="/weatherAppUI"
            className="text-white hover:text-indigo-200"
          >
            WeatherAppUI
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 bg-indigo-700 p-4">
          <Link
            href="/bannerScroll"
            className="text-white hover:text-indigo-200"
          >
            Banner
          </Link>
          <Link href="/schedule" className="text-white hover:text-indigo-200">
            Schedule
          </Link>
          <Link
            href="/weatherAppUI"
            className="text-white hover:text-indigo-200"
          >
            WeatherAppUI
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
