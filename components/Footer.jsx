import Link from "next/link";
import { Title } from "../components/Title";

export function Footer() {
  return (
    <footer className="bg-[#000000] w-full relative">
      {/* Wave SVG at the top */}
      {/* <div className="absolute top-[132px] left-0 w-full transform -translate-y-full">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 L 0,150 C 60.89487179487179,149.62307692307692 121.78974358974358,149.24615384615385 199,157 C 276.2102564102564,164.75384615384615 369.7358974358975,180.63846153846154 453,194 C 536.2641025641025,207.36153846153846 609.2666666666667,218.2 684,212 C 758.7333333333333,205.8 835.1974358974359,182.56153846153845 920,163 C 1004.8025641025641,143.43846153846155 1097.9435897435897,127.55384615384617 1186,126 C 1274.0564102564103,124.44615384615383 1357.0282051282052,137.22307692307692 1440,150 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#03020e"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
        </svg>
      </div> */}
      {/* Main container for logo and links */}
      <div className=" w-full  relative pt-12 p-8 pb-0">
        <div className="flex flex-col justify-between items-start mb-24">
          {/* Left column with logo */}
          <div className="text-white w-full md:w-1/2">
            <div className="flex flex-col items-start">
              <Title withoutDot withStroke>
                Malerbetrieb Pascal Gerdes
              </Title>
              <p className="text-[#ffffff] text-[16px] font-montserrat">
                Wir schaffen solide Farbe
              </p>
            </div>
          </div>

          {/* Right column with links */}
        </div>

        <div className="w-full flex flex-col md:flex-row md:space-x-8 md:w-1/2 text-right mt-8 md:mt-0 font-fira">
          <div className="flex items-center space-x-8">
            <div className="flex w-full justify-between md:basis-auto space-x-8">
              <Link
                href="/"
                className="text-[#e2e2e2] text-[18px] hover:text-white "
              >
                Home
              </Link>
              <Link
                href="/leistungen"
                className="text-white text-[18px] hover:text-gray-300"
              >
                Leistungen
              </Link>
              <Link
                href="/projekte"
                className="text-white text-[18px] hover:text-gray-300"
              >
                Projekte
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex w-full justify-between md:basis-auto space-x-8">
              <Link
                href="/kontakt"
                className="text-white text-[18px] hover:text-gray-300"
              >
                Kontakt
              </Link>
              <Link
                href="/team"
                className="text-white text-[18px] hover:text-gray-300"
              >
                Team
              </Link>
              <Link
                href="/impressum"
                className="text-white text-[18px] hover:text-gray-300"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[#000000]  relative pb-12 p-8 pt-0 ">
        {/* Footer Bottom with contact information */}
        <div className="-ml-8 -mr-8 border-t-2 border-[#343434] mb-8 mt-2"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          {/* Copyright Text */}
          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-[12px] leading-tight font-montserrat text-[#c4c4c4] whitespace-nowrap">
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
                className="text-[12px] leading-tight font-montserrat text-[#c4c4c4] hover:text-white transition-colors duration-300"
              >
                +49 (0) 151 7022 0139
              </Link>
            </div>
            <div className="flex whitespace-nowrap justify-center">
              <Link
                href="mailto:info@c-bau.com"
                className="text-[12px] leading-tight font-montserrat text-[#c4c4c4] hover:text-white transition-colors duration-300"
              >
                info@c-bau.com
              </Link>
            </div>
          </div>
          <p className="text-[12px] leading-tight font-montserrat text-[#c4c4c4] inline-block">
            <span className="block custom:inline whitespace-nowrap">
              Faule Birke 1
            </span>
            <span className="hidden custom:inline">, </span>
            <span className="block custom:inline whitespace-nowrap">
              57080 Siegen
            </span>
          </p>
          <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
            <Link
              href="/agb"
              className="text-[12px] leading-tight font-montserrat text-[#c4c4c4] hover:text-white transition-colors duration-300"
            >
              AGB
            </Link>
          </div>
          {/* Privacy Link */}
          <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
            <Link
              href="/datenschutz"
              className="text-[12px] leading-tight font-montserrat text-[#c4c4c4] hover:text-white transition-colors duration-300"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
