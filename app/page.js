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
        <div
          className="flex flex-col items-start
        "
        >
          {/* Firmenvorstellung Section */}
          <div className="flex flex-col flex-col-reverse md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <Title withoutDot withStroke>
                Malerbetrieb Pascal Gerdes
              </Title>
              <RegularText textColor="text-[#889cab]" isBold>
                Ich bin Pascal Gerdes, Ihr Experte, wenn es um hochwertige
                Malerarbeiten, Innenausbau und individuelle Gestaltungslösungen
                geht.
              </RegularText>
              <RegularText withDot>
                Mit Leidenschaft für Farben, Oberflächen und handwerkliche
                Präzision setze ich seit vielen Jahren kreative und langlebige
                Gestaltungskonzepte um. Von Spachtel- und Verputzarbeiten über
                Bodenbeläge bis hin zu Spezialtechniken wie Sandstrahlarbeiten
                und Industriebeschichtungen - mein Team und ich stehen für
                maßgeschneiderte Lösungen, die nicht nur optisch überzeugen,
                sondern auch langfristig Bestand haben.
              </RegularText>
              <RegularText>
                Ob Neubau, Renovierungen oder individuelle Raumgestaltung -{" "}
                <span className="text-[#889cab] font-bold ">
                  Ich begleite Sie von der ersten Idee bis zur perfekten
                  Umsetzung.
                </span>
                &nbsp; Lassen Sie uns gemeinsam Ihre Räume in echte Wohlfülorte
                verwandeln!
              </RegularText>
            </div>
            {/* Geschäftsführer Bild */}
            <div className=" md:w-96 h-64 relative rounded-lg shadow-lg overflow-hidden my-auto mt-2">
              <Image
                src="/Logo.jpg"
                alt="Geschäftsführer Pascal Gerdes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Statistik Section */}
          <div className="w-full  mt-24 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Jahre im Geschäft */}
              <div className="flex flex-col items-center relative order-1 md:order-1">
                <Title>
                  <Counter
                    value={
                      new Date().getFullYear() - getCreationDate().getFullYear()
                    }
                  />
                </Title>
                <span className="text-[20px] font-bold text-center">
                  Jahre Erfahrung
                </span>
              </div>

              {/* Team Mitglieder */}
              <div className="flex flex-col items-center relative order-2 md:order-4">
                <Title>
                  <Counter value={targets.teamMembers} />
                </Title>
                <span className="text-[20px] font-bold text-center font-['Montserrat',_sans-serif]">
                  Team Mitglieder
                </span>
              </div>

              {/* Zufriedene Kunden */}
              <div className="flex flex-col items-center relative order-3 md:order-3">
                <Title>
                  <Counter value={targets.satisfiedCustomers} />
                </Title>
                <span className="text-[20px] font-bold text-center">
                  Zufriedene Kunden
                </span>
              </div>

              {/* Projekte */}
              <div className="flex flex-col items-center relative order-4 md:order-2">
                <Title>
                  <Counter value={targets.projectsCompleted} />
                </Title>
                <span className="text-[20px] font-bold text-center">
                  Projekte Abgeschlossen
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
