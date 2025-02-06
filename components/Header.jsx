"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Projekte", href: "/projekte" },
  { name: "Team", href: "/team" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative w-full">
      <div className="relative w-full h-[450px] bg-black">
        <div className="relative w-full max-w-[1420px] h-full mx-auto">
          <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <img
              src="/Logo.JPG"
              alt="Banner"
              className="w-full h-[450px] object-cover object-center"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="absolute bottom-1 left-1/2 -translate-x-1/2 hidden md:flex space-x-12">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-lg font-medium font-fira text-white transition-colors ${
                  pathname === item.href
                    ? "after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-white"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute top-8 right-8 z-50 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Menü öffnen"
          >
            <div
              className={`relative w-7 h-7 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <span
                className={`absolute left-0 w-full h-[2px] bg-white transform transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? "top-3 rotate-45" : "top-2"}`}
              />
              <span
                className={`absolute left-0 w-full h-[2px] bg-white transform transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? "top-3 -rotate-45" : "top-5"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`absolute top-0 left-0 right-0 h-full bg-black md:hidden transition-all duration-300 ease-in-out z-30
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className="h-full max-w-[1920px] mx-auto relative">
            <nav className="absolute top-24 right-8 flex flex-col items-end">
              {menuItems.map((item) => (
                <div key={item.name} className="mb-4">
                  <Link
                    href={item.href}
                    className={`relative text-2xl font-fira font-medium text-white  transition-opacity duration-300 ease-in-out
                      ${
                        pathname === item.href
                          ? "font-bold after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-white"
                          : "hover:text-gray-300"
                      }
                      ${isOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
