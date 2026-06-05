import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../constants";

interface NavbarProps {
  scrolled: boolean;
  navigateToSection: (sectionId: string, section?: "iso" | "knowledge") => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, navigateToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-[#448AFF] rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            <img src="/socis-logo.png" alt="Socis" className="w-8 h-8" />
          </div>
          <span
            className={`text-2xl font-extrabold tracking-tight ${scrolled ? "text-white" : "text-slate-900"}`}
          >
            SOCIS
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                scrolled ? "text-slate-300" : "text-slate-600"
              }`}
              onClick={(e) => {
                e.preventDefault();

                switch (item.href) {
                  case "#isoStandards":
                    navigateToSection("isoStandards", "iso");
                    break;

                  case "#lec":
                    navigateToSection("lec", "knowledge");
                    break;

                  default:
                    navigateToSection(item.href.replace("#", ""));
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? "text-white" : "text-slate-900"} />
          ) : (
            <Menu className={scrolled ? "text-white" : "text-slate-900"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-dark absolute top-full left-0 right-0 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
