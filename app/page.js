import React from "react";
import { Content } from "../components/Content";
import { RegularText } from "../components/RegularText";
import Image from "next/image";
import { Title } from "../components/Title";
import { Counter } from "@/components/Counter";

const targets = {
  businessCreationDate: {
    year: 2017,
    month: 0,
    day: 10,
  },
  projectsCompleted: 211,
  satisfiedCustomers: 180,
  teamMembers: 12,
};

function getCreationDate() {
  return new Date(
    targets.businessCreationDate.year,
    targets.businessCreationDate.month,
    targets.businessCreationDate.day,
    0,
    0,
    0
  );
}

const Home = () => {
  return (
    <>
      <Content>
        <div className="flex flex-col items-start">
          {/* Firmenvorstellung Section */}
          <div className="flex flex-col flex-col-reverse md:flex-row gap-8 ">
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
          <div className="w-full mt-24  relative">
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
                  stroke="gray"
                  strokeWidth="2"
                />
                <line
                  x1="200"
                  y1="0"
                  x2="200"
                  y2="300"
                  stroke="gray"
                  strokeWidth="0.75"
                />
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Jahre im Geschäft */}
              <div className="flex flex-col items-center relative">
                <Title className="text-6xl">
                  <Counter
                    value={
                      new Date().getFullYear() - getCreationDate().getFullYear()
                    }
                  />
                </Title>
                <span className="text-md text-center">Jahre Erfahrung</span>
              </div>

              {/* Projekte */}
              <div className="flex flex-col items-center relative">
                <Title>
                  <Counter value={targets.projectsCompleted} />
                </Title>
                <span className="text-md text-center">
                  Projekte Abgeschlossen
                </span>
              </div>

              {/* Zufriedene Kunden */}
              <div className="flex flex-col items-center relative">
                <Title>
                  <Counter value={targets.satisfiedCustomers} />
                </Title>
                <span className="text-md text-center">Zufriedene Kunden</span>
              </div>

              {/* Team Mitglieder */}
              <div className="flex flex-col items-center relative">
                <Title>
                  <Counter value={targets.teamMembers} />
                </Title>
                <span className="text-md text-center font-['Montserrat',_sans-serif]">
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
