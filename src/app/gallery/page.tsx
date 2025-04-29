"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  date: string;
  memory: string;
}

const featuredImages: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/masuri.jpg",
    alt: "Featured memory 1",
    date: "June 2023",
    memory: "Summer vacation in the mountains",
  },
  {
    id: 2,
    src: "/images/gallery/doon.jpg",
    alt: "Featured memory 2",
    date: "December 2022",
    memory: "Christmas family gathering",
  },
  {
    id: 3,
    src: "/images/gallery/gehu.jpg",
    alt: "Featured memory 3",
    date: "March 2023",
    memory: "Spring festival celebrations",
  },
];

const galleryImages: GalleryItem[] = [
  {
    id: 4,
    src: "/images/gallery/aa.jpg",
    alt: "Memory 1",
    date: "May 2023",
    memory: "Beach sunset with friends",
  },
  {
    id: 5,
    src: "/images/gallery/masuri.jpg",
    alt: "Memory 2",
    date: "July 2023",
    memory: "Hiking adventure",
  },
  {
    id: 6,
    src: "/images/gallery/doon.jpg",
    alt: "Memory 3",
    date: "August 2023",
    memory: "City exploration",
  },
  {
    id: 7,
    src: "/images/gallery/devalsari.jpg",
    alt: "devalsari",
    date: "September 2023",
    memory: "devalsari trip",
  },
  {
    id: 8,
    src: "/images/gallery/gehu.jpg",
    alt: "Memory 5",
    date: "October 2023",
    memory: "Autumn colors",
  },
  {
    id: 9,
    src: "/images/gallery/nagarkot.jpg",
    alt: "Memory 6",
    date: "November 2023",
    memory: "First snowfall",
  },
  {
    id: 10,
    src: "/images/gallery/nagarkot.jpg",
    alt: "Memory 6",
    date: "November 2023",
    memory: "First snowfall",
  },
  {
    id: 11,
    src: "/images/gallery/nagarkot.jpg",
    alt: "Memory 6",
    date: "November 2023",
    memory: "First snowfall",
  },
  {
    id: 12,
    src: "/images/gallery/nagarkot.jpg",
    alt: "Memory 6",
    date: "November 2023",
    memory: "First snowfall",
  },
  {
    id: 13,
    src: "/images/gallery/nagarkot.jpg",
    alt: "Memory 6",
    date: "November 2023",
    memory: "First snowfall",
  },
];

export default function GalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Take nothing but Photoes
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          &quot;Photographs are the pause button of life, capturing memories
          that words cannot describe.&quot;
        </p>
      </div>

      {/* Featured Carousel */}
      <div className="relative container mx-auto px-2 py-8">
        {/* Carousel Container */}
        <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-lg">
          {featuredImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={index !== currentSlide}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                quality={index === currentSlide ? 90 : 70}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 md:p-6 text-white">
                <p className="text-xs md:text-sm font-medium">{image.date}</p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-1">
                  {image.memory}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls - Only show if multiple images */}
        {featuredImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous slide"
            >
              <FaArrowLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next slide"
            >
              <FaArrowRight size={20} className="md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Indicators - Only show if multiple images */}
        {featuredImages.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {featuredImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-gray-800 dark:bg-white scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:scale-110"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          More Memories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-sm font-medium text-white/90">
                  {image.date}
                </p>
                <h3 className="text-lg font-bold text-white">{image.memory}</h3>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {image.date}
                </p>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {image.memory}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
