"use client";

import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { Content } from "../components/Content";
import { RegularText } from "../components/RegularText";
import { Subtitle } from "../components/Subtitle";
import Image from "next/image";
import { Title } from "../components/Title";

const Home = () => {
  const targets = {
    yearsInBusiness: 8,
    projectsCompleted: 211,
    satisfiedCustomers: 180,
    teamMembers: 12,
  };

  return (
    <>
      <Content withoutTopMargin>
        <div className="flex flex-col items-start">
          {/* Firmenvorstellung Section */}
          <div className="flex flex-col flex-col-reverse md:flex-row gap-8 mt-16">
            {/* Geschäftsführer Bild */}
            <div className="basis-[100vw] md:basis-auto md:h-auto flex-1 relative">
              <Image
                src="/pasi.jpg"
                alt="Geschäftsführer Pascal Gerdes"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Firmenvorstellung Text */}
            <div className="flex-1 space-y-6">
              <Title withDot>Malerbetrieb Pascal Gerdes</Title>
              <RegularText>
                Willkommen bei Ihrem Experten für hochwertige Malerarbeiten. Wir
                verbinden traditionelles Handwerk mit modernen Techniken für
                perfekte Ergebnisse.
              </RegularText>
              <RegularText withDot>
                Von der individuellen Farbberatung bis zur professionellen
                Ausführung - wir verwandeln Ihre Räume in Wohlfühloasen.
              </RegularText>
              <RegularText>
                Mit Präzision, Kreativität und jahrelanger Erfahrung setzen wir
                Ihre Wünsche um - innen wie außen.
              </RegularText>
            </div>
          </div>

          {/* Statistik Section */}
          <div className="w-full mt-32 mb-32 relative">
            {/* SVG Cross overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="150"
                  x2="400"
                  y2="150"
                  stroke="black"
                  strokeWidth="1"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="300"
                  stroke="black"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Jahre im Geschäft */}
              <div className="flex flex-col items-center relative">
                <Title className="text-4xl font-['IBM_Plex_Mono',_sans-serif] font-bold">
                  <CountUp
                    start={0}
                    end={targets.yearsInBusiness}
                    duration={2.5}
                    separator=""
                    decimal=","
                    delay={0.5}
                    enableScrollSpy={true}
                  >
                    {({ countUpRef }) => <span ref={countUpRef}>0</span>}
                  </CountUp>
                </Title>
                <span className="text-sm uppercase mt-2 text-center font-['Montserrat',_sans-serif]">
                  Jahre Erfahrung
                </span>
              </div>

              {/* Projekte */}
              <div className="flex flex-col items-center relative">
                <Title className="font-bold">
                  <CountUp
                    start={0}
                    end={targets.projectsCompleted}
                    duration={2.5}
                    separator=""
                    decimal=","
                    delay={0.5}
                    enableScrollSpy={true}
                  >
                    {({ countUpRef }) => <span ref={countUpRef}>0</span>}
                  </CountUp>
                </Title>
                <span className="text-sm uppercase mt-2 text-center font-['Montserrat',_sans-serif]">
                  Projekte Abgeschlossen
                </span>
              </div>

              {/* Zufriedene Kunden */}
              <div className="flex flex-col items-center relative">
                <Title className="font-bold">
                  <CountUp
                    start={0}
                    end={targets.satisfiedCustomers}
                    duration={2.5}
                    separator=""
                    decimal=","
                    delay={0.5}
                    enableScrollSpy={true}
                  >
                    {({ countUpRef }) => <span ref={countUpRef}>0</span>}
                  </CountUp>
                </Title>
                <span className="text-sm uppercase mt-2 text-center font-['Montserrat',_sans-serif]">
                  Zufriedene Kunden
                </span>
              </div>

              {/* Team Mitglieder */}
              <div className="flex flex-col items-center relative">
                <Title className="font-bold">
                  <CountUp
                    start={0}
                    end={targets.teamMembers}
                    duration={2.5}
                    separator=""
                    decimal=","
                    delay={0.5}
                    enableScrollSpy={true}
                  >
                    {({ countUpRef }) => <span ref={countUpRef}>0</span>}
                  </CountUp>
                </Title>
                <span className="text-sm uppercase mt-2 text-center font-['Montserrat',_sans-serif]">
                  Team Mitglieder
                </span>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Home;
