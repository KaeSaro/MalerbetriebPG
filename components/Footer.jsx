import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#03020e] w-full py-12 p-8 relative">
      {/* Main container for logo and links */}
      <div className="flex flex-col justify-between items-start mb-24">
        {/* Left column with logo */}
        <div className="text-white w-full md:w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="text-[25px] font-fira uppercase">
              Malerbetrieb Pascal Gerdes
              <span className="text-[#D0312D]">.</span>
            </h1>
            <p className="text-[#ffffff] text-[16px] font-montserrat">
              Wir schaffen solide Farbe
            </p>
          </div>
        </div>

        {/* Right column with links */}
      </div>

      <div className="w-full md:w-1/2 text-right mt-8 md:mt-0 font-fira">
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              href="/"
              className="text-[#e2e2e2] text-[18px] hover:text-white "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/leistungen"
              className="text-[#e2e2e2] text-[18px] hover:text-white"
            >
              Leistungen
            </Link>
          </li>
          <li>
            <Link
              href="/projekte"
              className="text-[#e2e2e2] text-[18px] hover:text-white"
            >
              Projekte
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-[#e2e2e2] text-[18px] hover:text-white"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="text-[#e2e2e2] text-[18px] hover:text-white"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/impressum"
              className="text-[#e2e2e2] text-[18px] hover:text-white"
            >
              Impressum
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer Bottom with contact information */}
      <div className="-ml-8 -mr-8 border-t-2 border-[#343434] mb-8 mt-2"></div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        {/* Copyright Text */}
        <div className="w-full md:w-auto text-center md:text-left">
          <p className="text-[12px] leading-tight font-montserrat text-[#999999] whitespace-nowrap">
            <span className="block custom:inline whitespace-nowrap">
              © {new Date().getFullYear()} Malerbetrieb Pascal Gerdes
            </span>
            <span className="hidden custom:inline"> – </span>
            <span className="block custom:inline whitespace-nowrap">
              Alle Rechte vorbehalten.
            </span>
          </p>
        </div>

        {/* Contact Info Container */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-0">
          <div className="flex whitespace-nowrap">
            <Link
              href="tel:+4915170220139"
              className="text-[12px] leading-tight font-montserrat text-[#999999] hover:text-white transition-colors duration-300"
            >
              +49 (0) 151 7022 0139
            </Link>
          </div>
          <div className="flex whitespace-nowrap justify-center">
            <Link
              href="mailto:info@c-bau.com"
              className="text-[12px] leading-tight font-montserrat text-[#999999] hover:text-white transition-colors duration-300"
            >
              info@c-bau.com
            </Link>
          </div>
        </div>

        <p className="text-[12px] leading-tight font-montserrat text-[#999999] inline-block">
          <span className="block custom:inline whitespace-nowrap">
            Faule Birke 1
          </span>
          <span className="hidden custom:inline">, </span>
          <span className="block custom:inline whitespace-nowrap">
            57080 Siegen
          </span>
        </p>

        {/* Privacy Link */}
        <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
          <Link
            href="/datenschutz"
            className="text-[12px] leading-tight font-montserrat text-[#999999] hover:text-white transition-colors duration-300"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
