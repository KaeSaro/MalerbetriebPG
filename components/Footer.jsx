import Link from "next/link";
import { Title } from "../components/Title";

export function Footer() {
  return (
    <footer className="bg-[#889cab] w-full relative">
      <div className="w-full relative pt-12 p-8 pb-0">
        <div className="flex flex-col justify-between items-start mb-24">
          <div className="text-white w-full md:w-1/2">
            <div className="flex flex-col items-start">
              <Title
                withoutDot
                withStroke
                strokeColor="#ded5d0"
                fontSize="text-[40px] sm:text-[44px] md:text-[48px] lg:text-[52px]"
              >
                Malerbetrieb Pascal Gerdes
              </Title>
              <p className="text-[#ffffff] text-[20px] font-montserrat">
                Farbe. Struktur. Präzision.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row md:space-x-8 md:w-1/2 text-right mt-8 md:mt-0 font-fira">
          <div className="flex items-center space-x-8">
            <div className="flex w-full justify-between md:basis-auto space-x-8">
              <Link
                href="/"
                className="text-[#000000] text-[18px] hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/leistungen"
                className="text-[#000000] text-[18px] hover:text-white"
              >
                Leistungen
              </Link>
              <Link
                href="/projekte"
                className="text-[#000000] text-[18px] hover:text-white"
              >
                Projekte
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex w-full justify-between md:basis-auto space-x-8">
              <Link
                href="/kontakt"
                className="text-[#000000] text-[18px] hover:text-white"
              >
                Kontakt
              </Link>
              {/* <Link
                href="/team"
                className="text-[#000000] text-[18px] hover:text-white"
              >
                Team
              </Link> */}
              <Link
                href="/impressum"
                className="text-[#000000] text-[18px] hover:text-white"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#889cab] relative pb-12 p-8 pt-0">
        <div className="-ml-8 -mr-8 border-t-2 border-[#343434] mb-8 mt-2"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          {/* Copyright Text */}
          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-[14px] leading-tight font-montserrat text-[#000000] whitespace-nowrap">
              <span className="block custom:inline xl:inline whitespace-nowrap">
                © {new Date().getFullYear()} Malerbetrieb Pascal Gerdes
              </span>
              <span className="hidden custom:inline xl:inline"> – </span>
              <span className="block custom:inline xl:inline whitespace-nowrap">
                Alle Rechte vorbehalten.
              </span>
            </p>
          </div>

          {/* Contact Info Container */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-0">
            <div className="flex justify-center whitespace-nowrap">
              <Link
                href="tel:+4917632345137"
                className="text-[14px] leading-tight font-montserrat text-[#000000] hover:text-white transition-colors duration-300"
              >
                +49 (0) 176 3234 5137
              </Link>
            </div>
            <div className="flex whitespace-nowrap justify-center">
              <Link
                href="mailto:info@malerbetrieb-gerdes.de"
                className="text-[14px] leading-tight font-montserrat text-[#000000] hover:text-white transition-colors duration-300"
              >
                info@malerbetrieb-gerdes.de
              </Link>
            </div>
          </div>

          <p className="text-[14px] leading-tight font-montserrat text-[#000000] inline-block">
            <span className="block custom:inline xl:inline whitespace-nowrap">
              Hüttenstr. 50
            </span>
            <span className="hidden custom:inline xl:inline">, </span>
            <span className="block custom:inline xl:inline whitespace-nowrap">
              35708 Haiger
            </span>
          </p>

          <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
            <Link
              href="/agb"
              className="text-[14px] leading-tight font-montserrat text-[#000000] hover:text-white transition-colors duration-300"
            >
              AGB
            </Link>
          </div>
          <div className="flex w-full md:w-auto text-center md:text-right justify-center items-start">
            <Link
              href="/datenschutz"
              className="text-[14px] leading-tight font-montserrat text-[#000000] hover:text-white transition-colors duration-300"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
