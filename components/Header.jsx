"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Projekte", href: "/projekte" },
  // { name: "Team", href: "/team" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header({ bgColor = "bg-black" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle swipe to close
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientY;
    const diff = touchStart - currentTouch;

    if (diff > 50) {
      setIsOpen(false);
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <header className="w-full fixed top-0 z-[1000] shadow-md">
      <div className="relative w-full h-[90px] bg-[#e8e0dc]">
        {/* Logo Container with conditional Link */}
        <div className="absolute top-0 right-1 sm:right-6 md:right-6 lg:right-10 xl:right-10 h-[90px] w-[90px] flex items-center justify-end z-10">
          {isHomePage ? (
            <img
              src="/PGlogo2.svg"
              alt="PG Logo"
              className="w-full h-[60px] object-contain cursor-default"
            />
          ) : (
            <Link href="/" className="w-full h-[60px]">
              <img
                src="/PGlogo2.svg"
                alt="PG Logo"
                className="w-full h-full object-contain cursor-pointer"
              />
            </Link>
          )}
        </div>

        <div className="relative w-full max-w-[1400px] h-full mx-auto">
          <div className="relative h-full px-8 sm:px-12 lg:px-16 flex items-center">
            {/* Mobile Menu Button */}
            <div className={`md:hidden ${isOpen ? "fixed" : "relative"} z-50`}>
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
                    className={`absolute left-0 w-full h-[2px] bg-[#000000] transform transition-all duration-300 ease-in-out origin-center
                      ${isOpen ? "top-3 rotate-45 bg-[#ffffff]" : "top-2"}`}
                  />
                  <span
                    className={`absolute left-0 w-full h-[2px] bg-[#000000] transform transition-all duration-300 ease-in-out origin-center
                      ${isOpen ? "top-3 -rotate-45 bg-[#ffffff]" : "top-5"}`}
                  />
                </div>
              </button>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-12 pl-0">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-[24px] font-medium font-fira text-[#000000] transition-colors ${
                    pathname === item.href
                      ? "after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-[#000000]"
                      : "hover:text-[#ffffff]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed top-0 left-0 right-0 h-screen bg-black md:hidden transition-all duration-300 ease-in-out z-40 overflow-hidden
              ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="h-full max-w-[1920px] mx-auto relative">
              <nav className="absolute top-24 flex flex-col items-start px-8 sm:px-12 lg:px-16">
                {menuItems.map((item) => (
                  <div key={item.name} className="mb-4">
                    <Link
                      href={item.href}
                      className={`relative text-2xl font-fira font-medium text-[#ded5d0] transition-opacity duration-300 ease-in-out
                        ${
                          pathname === item.href
                            ? "font-bold after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-[#ded5d0]"
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
      </div>
    </header>
  );
}
