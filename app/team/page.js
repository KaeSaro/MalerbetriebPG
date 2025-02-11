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
    image: "/test1.jpg",
  },
  {
    name: "Michel Wallenfels",
    position: "Malergeselle",
    image: "/test1.jpg",
  },
  {
    name: "Lars Varga",
    position: "Malergeselle",
    image: "/test1.jpg",
  },
  {
    name: "Manuel Witt",
    position: "Malergeselle",
    image: "/test1.jpg",
  },
  {
    name: "Marcel Franz",
    position: "Malergeselle",
    image: "/test1.jpg",
  },
];

const manager = {
  name: "Pascal Gerdes",
  position: "Inhaber",
  image: "/test1.jpg",
  description:
    "Mit über 20 Jahren Erfahrung im Malerhandwerk leitet Max Mustermann unser Unternehmen. Seine Expertise in modernen Maltechniken und sein Engagement für Qualität prägen unseren Betrieb. Unter seiner Führung entwickeln wir uns stetig weiter und setzen neue Maßstäbe in der Branche.",
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
          <div className="flex flex-col space-y-2">
            <RegularText textColor="text-[#889cab] " isBold>
              &quot; The strength of the team is each individual member.
            </RegularText>
            <RegularText textColor="text-[#889cab] " isBold>
              The strength of each member is the team &quot;
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
