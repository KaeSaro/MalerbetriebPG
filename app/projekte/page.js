"use client";

import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";
import { useState } from "react";
import Link from "next/link";

const projectLocations = [
  {
    id: 1,
    name: "Siegen",
    description: "Projekte im Herzen von Siegen",
    projects: [
      {
        title: "Modernisierung Geschäftshaus",
        description:
          "Komplette Neugestaltung der Innenräume eines Geschäftshauses",
        type: "Bilder",
        href: "/projekte/modernisierung-geschaeftshaus",
      },
      {
        title: "Villa Renovierung",
        description: "Umfassende Renovierung einer historischen Villa",
        type: "Bilder",
        href: "/projekte/villa-renovierung",
      },
    ],
  },
  {
    id: 2,
    name: "Kreuztal",
    description: "Projekte in Kreuztal und Umgebung",
    projects: [
      {
        title: "Neubau Mehrfamilienhaus",
        description: "Malerarbeiten für 12 Wohneinheiten",
        type: "Bilder",
        href: "/projekte/neubau-mehrfamilienhaus",
      },
    ],
  },
  {
    id: 3,
    name: "Olpe",
    description: "Projekte im Raum Olpe",
    projects: [
      {
        title: "Industriehalle",
        description: "Bodenbeschichtung und Wandgestaltung",
        type: "Bilder",
        href: "/projekte/industriehalle",
      },
    ],
  },
];

const ProjectCard = ({ title, description, type, href }) => (
  <div className="bg-[#e8e0dc] p-6 rounded-lg shadow-md border border-[#ded5d0]">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-fira text-[#889cab]">{title}</h3>
      <Link href={href}>
        <span className="text-md font-montserrat bg-[#889cab] text-white px-3 py-1 rounded-full hover:bg-[#000000] hover:text-white transition-all duration-300 cursor-pointer">
          {type}
        </span>
      </Link>
    </div>
    <p className="font-montserrat text-base">{description}</p>
  </div>
);

const LocationSection = ({ location, isOpen, onToggle }) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className={`w-full text-left p-6 bg-[#e8e0dc] rounded-lg shadow-md border border-[#ded5d0] transition-all duration-300 ${
          isOpen ? "mb-8" : "mb-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-fira text-[#889cab] mb-2">
              {location.name}
            </h2>
            <p className="font-montserrat text-base">{location.description}</p>
          </div>
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9L12 16L5 9"
                stroke="#889cab"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </button>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ${
          isOpen
            ? "opacity-100 max-h-[2000px]"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {location.projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default function Projekte() {
  const [openLocationId, setOpenLocationId] = useState(null);

  const handleToggle = (locationId) => {
    setOpenLocationId(openLocationId === locationId ? null : locationId);
  };

  return (
    <Content>
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col space-y-6">
          <Title withStroke>Einblicke in unsere Arbeit</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Referenzen aus der Region
          </RegularText>
          <RegularText withDot>
            Entdecken Sie unsere abgeschlossenen Projekte in verschiedenen
            Städten und lassen Sie sich von unserer Arbeit inspirieren
          </RegularText>
        </div>

        <div className="flex flex-col space-y-4">
          {projectLocations.map((location) => (
            <LocationSection
              key={location.id}
              location={location}
              isOpen={openLocationId === location.id}
              onToggle={() => handleToggle(location.id)}
            />
          ))}
        </div>
      </div>
    </Content>
  );
}
