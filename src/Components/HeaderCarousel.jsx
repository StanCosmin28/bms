import { useState } from "react";
import articles from "../Posts/hotFeedData";

export default function HeaderCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const articlesData = articles.slice(0, 3);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === articlesData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? articlesData.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {articlesData.map((slide, index) => (
        <div
          key={slide.id} // Folosește ID-ul unic în loc de index
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.coverImage}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay pentru text - doar pe slide-ul activ pentru a evita suprapunerile */}
          {index === currentSlide && (
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-end text-white px-4 lg:pr-30">
              <div className="lg:max-w-2xl md:max-w-xl max-w-md text-left gap-4 flex flex-col">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-xl">
                  {slide.description}
                </p>
                <a
                  href={`http://localhost:5173/bms/hot-feed/${slide.id}`}
                  className="bg-transparent border-amber-50 border-1 hover:bg-white hover:scale-105 hover:text-black text-white font-semibold py-4 px-5 rounded-full transition-all duration-200 max-w-fit inline-block z-10"
                >
                  Citește tot articolul
                </a>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Butoanele de navigare cu z-index mai mare */}
      <div className="absolute md:bottom-4 bottom-10 right-4 flex space-x-2 z-20">
        <button
          onClick={prevSlide}
          className="bg-transparent border-1 border-amber-100 text-white hover:text-black hover:scale-105 px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-250 cursor-pointer shadow-lg"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-transparent border-1 border-amber-100 text-white hover:text-black hover:scale-105 px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-250 cursor-pointer shadow-lg"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicatori de slide-uri */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {articlesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
