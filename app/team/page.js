"use client";

import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";
import Image from "next/image";

const teamMembers = [
  {
    name: "Michael Demolt",
    position: "Malermeister",
    image: "/test1.jpg",
  },
  {
    name: "Herbert Lau",
    position: "Malermeister",
    image: "/herbert.jpg",
  },
  {
    name: "Michel Wallenfels",
    position: "Malergeselle",
    image: "/michel.jpg",
  },
  {
    name: "Lars Varga",
    position: "Malergeselle",
    image: "/lars.jpg",
  },
  {
    name: "Manuel Witt",
    position: "Malergeselle",
    image: "/manuel.jpg",
  },
  {
    name: "Marcel Franz",
    position: "Malergeselle",
    image: "/marcel.jpg",
  },
];

const manager = {
  name: "Pascal Gerdes",
  position: "Inhaber",
  image: "/test1.jpg",
  description:
    "Seit 2017 führe ich mit Leidenschaft und Fachkompetenz meinen Malerbetrieb, in dem Teamarbeit und eine familiäre Atmosphäre an erster Stelle stehen. Gemeinsam mit meinem engagierten Team biete ich hochwertige Malerarbeiten, kreative Gestaltungskonzepte und professionelle Lösungen rund um Farbe und Oberflächen. Mit einem hohen Qualitätsanspruch, modernen Techniken und individueller Beratung sorge ich dafür, dass jedes Projekt – von klassischen Anstrichen bis hin zu innovativen Wandgestaltungen – zuverlässig und ganz nach den Wünschen meiner Kunden umgesetzt wird.",
};

const TeamMember = ({ name, position, image, description }) => (
  <div className="flex flex-col">
    <div className="aspect-[3/4] w-full relative">
      <Image
        src={image}
        alt={`${name} - ${position}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
    <div className="mt-4">
      <h3 className="text-lg sm:text-xl md:text-xl lg:text-3xl font-montserrat font-medium text-[#889cab]">
        {name}
      </h3>
      <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-fira text-black">
        {position}
      </p>
      <p className="mt-2 text-base font-fira text-black">{description}</p>
    </div>
  </div>
);

export default function Team() {
  return (
    <Content>
      <div className="flex flex-col space-y-16">
        {/* Header Section */}
        <div className="flex flex-col space-y-6">
          <Title withStroke>Unser Team</Title>
          <div className="flex flex-col w-full -ml-[12px]">
            <RegularText
              textColor="text-[#889cab]"
              isBold
              className="relative w-full"
            >
              <div className="flex ">
                <span className="w-[12px] sm:w-[12px] md:w-[13px] lg:w-[12px] xl:w-[13px] 2xl:w-[px] flex-shrink-0 text-right">
                  &quot;
                </span>
                <span className="flex-1">
                  Die Stärke des Teams ist jedes einzelne Mitglied.
                </span>
              </div>
            </RegularText>
            <RegularText
              textColor="text-[#889cab] ml-[12px] sm:ml-[12px] md:ml-[12px] lg:ml-[11px] xl:ml-[12px]"
              isBold
            >
              <span>Die Stärke jedes Mitglieds ist das Team</span>
              <span>&quot;</span>
            </RegularText>
          </div>
        </div>

        {/* Manager Section */}
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] w-full relative">
              <Image
                src={manager.image}
                alt={`${manager.name} - ${manager.position}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-montserrat font-medium text-[#889cab]">
                {manager.name}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-fira text-black">
                {manager.position}
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:w-2/3">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat text-black leading-relaxed">
              {manager.description}
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </Content>
  );
}
