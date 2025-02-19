"use client";

import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";

const services = [
  {
    title: "Maler- und Lackierarbeiten",
    description:
      "Fachgerechte Maler- und Lackierarbeiten für Innen- und Außenbereiche. Vom klassischen Anstrich bis hin zu kreativen Techniken setzen wir Ihre Farbideen in die Tat um.",
  },
  {
    title: "Spachtel- und Putzarbeiten",
    description:
      "Ob glatte Oberflächen oder dekorative Techniken – wir sorgen für die perfekte Grundlage für Ihre Wände.",
  },
  {
    title: "Tapezierarbeiten",
    description:
      "Wir verlegen Tapeten mit Präzision, sei es Raufaser, Vliestapeten oder individuelle Designs, um Ihren Räumen den gewünschten Look zu verleihen.",
  },
  {
    title: "Bodenbelagsarbeiten",
    description:
      "Wir verlegen eine Vielzahl von Bodenbelägen, einschließlich Linoleum, PVC, Teppich und vielen weiteren Materialien, für eine funktionale und ästhetische Raumgestaltung.",
  },
  {
    title: "Bodenbeschichtungsarbeiten",
    description:
      "Wir bieten professionelle Bodenbeschichtungen für gewerbliche und industrielle Bereiche. Unsere Beschichtungen sind robust, pflegeleicht und bieten einen langlebigen Schutz.",
  },
  {
    title: "Sandstrahlarbeiten",
    description:
      "Für die Reinigung und Vorbereitung von Oberflächen bieten wir Sandstrahlarbeiten an, um eine perfekte Grundlage für weitere Verarbeitungen zu schaffen.",
  },
  {
    title: "Parkplatz- und Hallenmarkierungen",
    description:
      "Wir übernehmen Markierungen für Parkplätze, Hallen oder andere Flächen, damit Ihre Umgebung klar und sicher strukturiert ist.",
  },
  {
    title: "Trockenbau",
    description:
      "Wir bauen Trennwände, Deckenverkleidungen und individuelle Raumgestaltungen, um Ihre Räume optimal zu nutzen.",
  },
  {
    title: "OWA-Decken",
    description:
      "Wir installieren OWA-Decken, die für ihre Akustik- und Brandschutzeigenschaften bekannt sind und in vielen gewerblichen sowie öffentlichen Gebäuden eingesetzt werden.",
  },
  {
    title: "Graffitientfernung & Graffitischutz",
    description:
      "Graffitientfernung bezeichnet das schonende und fachgerechte Entfernen unerwünschter Graffitis von verschiedenen Oberflächen, während Graffitischutz durch spezielle Schutzbeschichtungen dafür sorgt, dass neue Graffitis leichter entfernt werden können und die behandelten Flächen langfristig geschützt bleiben.",
  },
];

const ServiceCard = ({ title, description }) => (
  <div className="flex flex-col bg-[#e8e0dc] rounded-lg shadow-md p-4 sm:p-6 md:p-8 h-full transition-all duration-300 hover:shadow-lg border border-[#ded5d0]">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-fira font-medium mb-4 md:mb-6 text-[#889cab] break-words hyphens-auto">
      {title}
    </h3>
    <p className="text-base sm:text-lg md:text-xl font-montserrat text-black">
      {description}
    </p>
  </div>
);

export default function Leistungen() {
  return (
    <Content>
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col space-y-6">
          <Title withStroke>Kompetenz & Qualität</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Von klassischen Malerarbeiten bis hin zu speziellen Beschichtungen -
            wir bieten Ihnen das komplette Spektrum modernster
            Oberflächengestaltung.
          </RegularText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Content>
  );
}
