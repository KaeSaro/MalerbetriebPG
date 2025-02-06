"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Projekte", href: "/impressionen" },
  { name: "Team", href: "/team" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="relative w-full">
      {/* Homepage Banner */}
      {isHomePage && (
        <div className="relative w-full h-[400px] bg-black flex justify-center items-center overflow-hidden">
          <div className="relative w-full max-w-[1920px] h-full">
            <img
              src="/Logo.JPG"
              alt="Banner"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto min-w-full object-cover"
            />
          </div>

          {/* Burger Button - now positioned absolute within banner */}
          <div className="absolute top-8 right-8 z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center"
              aria-label="Menü öffnen"
            >
              <div
                className={`relative w-7 h-7 transition-transform duration-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <span
                  className={`
                  absolute left-0 w-full h-[2px] bg-white transform transition-all duration-500 ease-in-out origin-center
                  ${isOpen ? "top-3 rotate-45" : "top-2"}
                `}
                />
                <span
                  className={`
                  absolute left-0 w-full h-[2px] bg-white transform transition-all duration-500 ease-in-out origin-center
                  ${isOpen ? "top-3 -rotate-45" : "top-5"}
                `}
                />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Menu without background */}
      <div
        className={`absolute top-0 left-0 right-0 h-[400px] z-40 transition-opacity duration-700 ease-in-out
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="h-full flex flex-col justify-center pr-24">
          {menuItems.map((item) => (
            <div key={item.name} className="text-right">
              <Link
                href={item.href}
                className={`inline-block text-[24px] font-[500] font-bold font-['Montserrat',_sans-serif] 
                  transition-opacity duration-700 ease-in-out mb-4 relative
                  ${
                    pathname === item.href
                      ? "text-white"
                      : "text-white hover:text-gray-300"
                  }
                  ${isOpen ? "opacity-100" : "opacity-0"}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
