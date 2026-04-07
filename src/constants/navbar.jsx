import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/vincecolelogo2.png';
import backgroundImage from '../assets/images/hero-bg.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Hero background wrapper */}
      <div
        className="relative bg-cover bg-center h-dvh"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Sticky navbar */}
        <div className="bg-white w-full opacity-90 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-20" />
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex ml-auto space-x-6">
              <a href="#home" className="text-red-700 font-semibold hover:text-yellow-600">HOME</a>
              <a href="#services" className="text-sky-950 font-semibold hover:text-red-700">SERVICES</a>
              <a href="#about" className="text-sky-950 font-semibold hover:text-red-700">ABOUT US</a>
              <a href="#blog" className="text-sky-950 font-semibold hover:text-red-700">BLOG</a>
              <a href="#contact" className="text-sky-950 font-semibold hover:text-red-700">CONTACT</a>
              <a href="#testimonials" className="text-sky-950 font-semibold hover:text-red-700">TESTIMONIALS</a>
            </nav>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-sky-950" />
                ) : (
                  <Menu className="h-6 w-6 text-sky-950" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu overlay */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white opacity-95 sticky top-0 w-full z-40">
              <nav className="flex flex-col items-center space-y-4 py-4">
                <a href="#home" className="text-red-700 font-semibold hover:text-yellow-600">HOME</a>
                <a href="#services" className="text-sky-950 font-semibold hover:text-red-700">SERVICES</a>
                <a href="#about" className="text-sky-950 font-semibold hover:text-red-700">ABOUT US</a>
                <a href="#blog" className="text-sky-950 font-semibold hover:text-red-700">BLOG</a>
                <a href="#contact" className="text-sky-950 font-semibold hover:text-red-700">CONTACT</a>
                <a href="#testimonials" className="text-sky-950 font-semibold hover:text-red-700">TESTIMONIALS</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
