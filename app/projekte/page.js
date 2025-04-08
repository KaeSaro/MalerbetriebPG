"use client";

import { Content } from "../../components/Content";
import { Title } from "../../components/Title";
import { RegularText } from "../../components/RegularText";
import { useState } from "react";

// Beispielbilder für jede Kategorie
const categoryImages = {
  "maler-lackier-tapezier": [
    "/projekte/maler-lackier-tapezier/1.jpg",
    "/projekte/maler-lackier-tapezier/2.jpg",
    "/projekte/maler-lackier-tapezier/3.jpg",
    "/projekte/maler-lackier-tapezier/1.jpg",
  ],
  "spachtel-putz": [
    "/projekte/spachtel-putz/2.jpg",
    "/projekte/spachtel-putz/3.jpg",
  ],
  "bodenbelag-beschichtung": [
    "/projekte/bodenbelag-beschichtung/1.jpg",
    "/projekte/bodenbelag-beschichtung/2.jpg",
    "/projekte/bodenbelag-beschichtung/3.jpg",
  ],
  "trockenbau-owa": [
    "/projekte/trockenbau-owa/1.jpg",
    "/projekte/trockenbau-owa/2.jpg",
    "/projekte/trockenbau-owa/3.jpg",
  ],
  "parkplatz-hallenmarkierung": [
    "/projekte/parkplatz-hallenmarkierung/1.jpg",
    "/projekte/parkplatz-hallenmarkierung/3.jpg",
  ],
  "sandstrahl-graffitischutz": [
    "/projekte/sandstrahl-graffitischutz/1.jpg",
    "/projekte/sandstrahl-graffitischutz/2.jpg",
    "/projekte/sandstrahl-graffitischutz/3.jpg",
  ],
};

const projectCategories = [
  {
    id: "maler-lackier-tapezier",
    name: "Maler- und Lackierarbeiten / Tapezierarbeiten",
    description: "Fachgerechte Maler-, Lackier- und Tapezierarbeiten für Innen- und Außenbereiche. Von klassischen Anstrichen bis hin zu dekorativen Tapeten.",
  },
  {
    id: "spachtel-putz",
    name: "Spachtel- und Putzarbeiten",
    description: "Perfekte Oberflächen durch fachgerechtes Spachteln und Verputzen - die ideale Grundlage für jede weitere Wandgestaltung.",
  },
  {
    id: "bodenbelag-beschichtung",
    name: "Bodenbelag / Bodenbeschichtung",
    description: "Professionelle Verlegung und Beschichtung von Böden für alle Anwendungsbereiche - robust, langlebig und pflegeleicht.",
  },
  {
    id: "trockenbau-owa",
    name: "Trockenbau / OWA-Decken",
    description: "Installation von hochwertigen Trockenbausystemen und OWA-Decken für optimale Raumakustik und modernes Design.",
  },
  {
    id: "parkplatz-hallenmarkierung",
    name: "Parkplatz- und Hallenmarkierungen",
    description: "Präzise Markierungen für strukturierte Flächen in Parkhäusern, auf Parkplätzen und in Industriehallen.",
  },
  {
    id: "sandstrahl-graffitischutz",
    name: "Sandstrahlarbeiten / Graffitischutz",
    description: "Effektive Oberflächenvorbereitung durch Sandstrahlen und langanhaltender Schutz vor Graffiti.",
  },
];

// Image Gallery Modal Component
const ImageGallery = ({ images, isOpen, onClose, categoryName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [leftButtonActive, setLeftButtonActive] = useState(false);
  const [rightButtonActive, setRightButtonActive] = useState(false);

  if (!isOpen) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
      className="fixed inset-0 bg-black bg-opacity-75 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl mx-4 p-4 bg-[#e8e0dc] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Titel-Bereich - responsiver Abstand */}
        <div className="absolute top-12 md:top-12 left-4 right-4 z-20 text-center">
          <h2 className="text-2xl font-fira text-[#889cab] truncate">
            {categoryName}
          </h2>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-[#889cab] text-white rounded-full flex items-center justify-center hover:bg-black transition-colors duration-300 z-10"
        >
          ×
        </button>

        {/* Gallery Container - nach unten verschoben für Titel */}
        <div className="relative h-[70vh] flex items-center mt-10 md:mt-24">
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
              ${leftButtonActive ? "bg-black" : "bg-[#889cab]"}
              hover:bg-black
              focus:outline-none
            `}
            onMouseDown={() => setLeftButtonActive(true)}
            onMouseUp={() => setTimeout(() => setLeftButtonActive(false), 1000)}
            onTouchStart={() => setLeftButtonActive(true)}
            onTouchEnd={() =>
              setTimeout(() => setLeftButtonActive(false), 1000)
            }
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
              ${rightButtonActive ? "bg-black" : "bg-[#889cab]"}
              hover:bg-black
              focus:outline-none
            `}
            onMouseDown={() => setRightButtonActive(true)}
            onMouseUp={() =>
              setTimeout(() => setRightButtonActive(false), 1000)
            }
            onTouchStart={() => setRightButtonActive(true)}
            onTouchEnd={() =>
              setTimeout(() => setRightButtonActive(false), 1000)
            }
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
                    alt={`Referenzbild ${index + 1}`}
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

const CategoryCard = ({ category }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const images = categoryImages[category.id] || [];

  return (
    <div className="bg-[#e8e0dc] p-6 rounded-lg shadow-md border border-[#ded5d0] transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-fira text-[#889cab]">{category.name}</h3>
        <button
          onClick={() => setIsGalleryOpen(true)}
          className="text-md font-montserrat bg-[#889cab] text-white px-3 py-1 rounded-full hover:bg-[#000000] hover:text-white transition-all duration-300 cursor-pointer"
        >
          Bilder
        </button>
      </div>
      <p className="font-montserrat text-base">{category.description}</p>
      <ImageGallery
        images={images}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        categoryName={category.name}
      />
    </div>
  );
};

export default function Projekte() {
  return (
    <Content>
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col space-y-6">
          <Title withStroke>Einblicke in unsere Arbeit</Title>
          <RegularText textColor="text-[#889cab]" isBold>
            Jedes Projekt erzählt seine eigene Geschichte von Handwerkskunst und
            Präzision.
          </RegularText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </Content>
  );
}