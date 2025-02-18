"use client";

import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";
import { useState } from "react";

// Beispielbilder für jedes Projekt
const projectImages = {
  "modernisierung-geschaeftshaus": [
    "/projekte/siegen/haus/1.jpg",
    "/projekte/siegen/haus/2.jpg",
    "/projekte/siegen/haus/3.jpg",
  ],
  "villa-renovierung": [
    "/projekte/siegen/villa/1.jpg",
    "/projekte/siegen/villa/2.jpg",
    "/projekte/siegen/villa/3.jpg",
    "/projekte/siegen/villa/4.jpg",
  ],
  "neubau-mehrfamilienhaus": [
    "/projekte/kreuztal/1.jpg",
    "/projekte/kreuztal/2.jpg",
    "/projekte/kreuztal/3.jpg",
  ],
  industriehalle: [
    "/projekte/olpe/1.jpg",
    "/projekte/olpe/2.jpg",
    "/projekte/olpe/3.jpg",
  ],
  frankfurttest: [
    "/projekte/frankfurt/hauptbahnhof/1.jpg",
    "/projekte/frankfurt/hauptbahnhof/2.jpg",
    "/projekte/frankfurt/hauptbahnhof/3.jpg",
  ],
};

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
  {
    id: 4,
    name: "Frankfurt",
    description: "Projekte im Raum Krankfurt",
    projects: [
      {
        title: "Hauptbahnhof",
        description: "Wandanstrich",
        type: "Bilder",
        href: "/projekte/frankfurttest",
      },
    ],
  },
];

// Image Gallery Modal Component
const ImageGallery = ({ images, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [leftButtonActive, setLeftButtonActive] = useState(false);
  const [rightButtonActive, setRightButtonActive] = useState(false);

  if (!isOpen) return null;

  const handlePrevImage = () => {
    setLeftButtonActive(true);
    setTimeout(() => setLeftButtonActive(false), 1000);
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setRightButtonActive(true);
    setTimeout(() => setRightButtonActive(false), 1000);
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Swipe Funktionalität
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextImage();
    }
    if (isRightSwipe) {
      handlePrevImage();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl mx-4 p-4 bg-[#e8e0dc] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-[#889cab] text-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-300 z-10"
        >
          ×
        </button>

        {/* Gallery Container */}
        <div className="relative h-[70vh] flex items-center">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevImage}
            className={`
              absolute left-0 top-1/2 -translate-y-1/2 z-10 
              w-8 h-8 text-white rounded-full 
              flex items-center justify-center
              transition-colors duration-300
              -ml-4
              md:left-0 md:-ml-1
              md:w-10 md:h-10
              ${leftButtonActive ? "bg-black" : "bg-[#889cab] hover:bg-black"}
            `}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-6 md:h-6"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={handleNextImage}
            className={`
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-8 h-8 text-white rounded-full
              flex items-center justify-center
              transition-colors duration-300
              -mr-4
              md:right-0 md:-mr-1
              md:w-10 md:h-10
              ${rightButtonActive ? "bg-black" : "bg-[#889cab] hover:bg-black"}
            `}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-6 md:h-6"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="w-full h-full relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 flex items-center justify-center p-4"
                >
                  <img
                    src={image}
                    alt={`Projekt Bild ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#889cab] text-white px-4 py-2 rounded-full font-montserrat">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, type, href }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const projectId = href.split("/").pop();
  const images = projectImages[projectId] || [];

  return (
    <div className="bg-[#e8e0dc] p-6 rounded-lg shadow-md border border-[#ded5d0] transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-fira text-[#889cab]">{title}</h3>
        <button
          onClick={() => setIsGalleryOpen(true)}
          className="text-md font-montserrat bg-[#889cab] text-white px-3 py-1 rounded-full hover:bg-[#000000] hover:text-white transition-all duration-300 cursor-pointer"
        >
          {type}
        </button>
      </div>
      <p className="font-montserrat text-base">{description}</p>
      <ImageGallery
        images={images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </div>
  );
};

const LocationSection = ({ location, isOpen, onToggle }) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className={`w-full text-left p-6 bg-[#e8e0dc] rounded-lg shadow-md border border-[#ded5d0] transition-all duration-300 hover:shadow-lg ${
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
