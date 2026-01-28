import { Menu, X } from "lucide-react";
import React, { useState } from "react";

function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950 backdrop-blur-sm">
      <div className="m-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16  md:h-20 ">
          <div className="flex items-center gap-1 group cursor-pointer">
            <div>
              <img
                src="/logo.png"
                alt="codeflow"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <span className="font-medium text-lg sm:text-xl md:text-2xl ">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

          {/* Nav-Links */} 

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>

          <button
            className="text-gray-300 hover:text-white text-sm lg:text-base"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 " />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 " />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="py-4 px-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </a>
          </div>    
        </div>
      )}
    </nav>
  );
}

export default Navbar;
