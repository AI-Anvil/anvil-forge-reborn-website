
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="font-bold text-2xl text-anvil-700">AI Anvil</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-gray-700 hover:text-anvil-600 transition-colors">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-anvil-600 transition-colors">
            Services
          </a>
          <a href="#process" className="text-gray-700 hover:text-anvil-600 transition-colors">
            Process
          </a>
          <a href="#contact" className="text-gray-700 hover:text-anvil-600 transition-colors">
            Contact
          </a>
          <Button className="bg-anvil-600 hover:bg-anvil-700 text-white">
            Get Started
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <a
              href="#about"
              className="block text-gray-700 hover:text-anvil-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-anvil-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="block text-gray-700 hover:text-anvil-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-anvil-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full bg-anvil-600 hover:bg-anvil-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
