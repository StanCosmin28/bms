import { useState } from "react";
import slides from "../Model/headerCarouselData";
export default function HeaderCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {" "}
      {/* md:h-[90vh] lg:h-[100vh] */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex flex-col justify-center items-end text-center text-white px-4 lg:pr-30">
            <div className="lg:max-w-2xl md:max-w-xl ms:max-w-lg max-w-md text-left gap-4 flex flex-col">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-xl">
                {slide.description}
              </p>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors max-w-[180px]"
              >
                Citește tot articolul
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
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
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
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
    </div>
  );
}
