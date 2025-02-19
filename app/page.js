import React from "react";
import { Content } from "../components/Content";
import { RegularText } from "../components/RegularText";
import Image from "next/image";
import { Title } from "../components/Title";
import { Counter } from "@/components/Counter";
import Link from "next/link";

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
              {/* Geschäftsführer Bild */}
              <div className=" md:w-1000 h-96 relative shadow-lg overflow-hidden my-auto mb-24">
                <Image
                  src="/Logo.jpg"
                  alt="Geschäftsführer Pascal Gerdes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <Title withoutDot withStroke>
                Malerbetrieb Pascal Gerdes
              </Title>
              <RegularText textColor="text-[#889cab]" isBold>
                Wo Handwerk und Vision sich vereinen.
              </RegularText>
              <RegularText withDot>
                In einer Welt voller Farben und Möglichkeiten schaffen wir seit
                2017 mehr als nur gestrichene Wände - wir erschaffen
                Lebensräume, die Geschichten erzählen. Als Malerbetrieb mit Herz
                und Handwerkskunst verwandeln wir Ihre Visionen in greifbare
                Realität. Ob Sie von einer modernen Industriehalle träumen, Ihr
                Zuhause in einen persönlichen Wohlfühlort verwandeln möchten
                oder Ihr Geschäft einen professionellen Look benötigt - wir
                bringen die Expertise, Kreativität und Präzision mit, die Ihr
                Projekt verdient.
              </RegularText>
              <RegularText>
                Unsere Stärke liegt nicht nur in klassischen Malerarbeiten,
                sondern in der Vielfalt unserer{" "}
                <Link
                  href="/leistungen"
                  className="inline-block rounded-lg ml-[-4px] px-1 py-0 transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#889cab] hover:text-white [&>p]:!text-[16px] md:[&>p]:!text-[20px] lg:[&>p]:!text-[24px]"
                >
                  Leistungen
                </Link>
                : Von innovativen Spachteltechniken über hochwertige
                Bodenbeschichtungen bis hin zu spezialisierten
                Sandstrahlarbeiten. Mit modernster Technik und traditionellem
                Handwerksgeist schaffen wir Oberflächen, die begeistern und
                überdauern.
              </RegularText>
              <RegularText textColor="text-[#889cab]" isBold>
                Entdecken Sie den Unterschied, den echte Handwerkskunst macht -
                Ihr Pascal Gerdes und Team
              </RegularText>
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
