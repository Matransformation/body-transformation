"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "/01003167.JPG",
  "/01003169.JPG",
  "/01003177.JPG",
  "/01003179.JPG",
  "/01003182.JPG",
  "/IMG_1502.JPG",
  "/IMG_1503.JPG",
  "/IMG_1504.JPG",
  "/IMG_1505.JPG",
];

export default function ImageCarousel() {
  const [slidePercent, setSlidePercent] = useState(25);

  useEffect(() => {
    const update = () => {
      setSlidePercent(window.innerWidth < 768 ? 50 : 25);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Carousel
      showIndicators
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={4000}
      transitionTime={500}
      centerMode
      centerSlidePercentage={slidePercent}
      dynamicHeight={false}
      className="py-4 relative"
      renderArrowPrev={(onClick, hasPrev) =>
        hasPrev && (
          <button
            onClick={onClick}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full z-10"
            aria-label="Précédent"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )
      }
      renderArrowNext={(onClick, hasNext) =>
        hasNext && (
          <button
            onClick={onClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full z-10"
            aria-label="Suivant"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )
      }
      renderIndicator={(onClick, isSelected, idx, label) => (
        <li
          className={`mx-1 w-2 h-2 rounded-full cursor-pointer ${
            isSelected ? "bg-white" : "bg-gray-400"
          }`}
          onClick={onClick}
          aria-label={`Aller à l’image ${idx + 1}`}
          key={idx}
        />
      )}
    >
      {images.map((src, idx) => (
        <div key={idx} className="relative aspect-square px-3">
          <Image
            src={src}
            alt={`Photo ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-md"
          />
        </div>
      ))}
    </Carousel>
  );
}
