import { useState } from "react";
export default function HeaderCarousel() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Descoperă Locuința Inteligentă",
      description:
        "Află cum tehnologia modernă transformă casele obișnuite în spații inteligente și eficiente.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1730967844913-29eb5cae5f34?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Siguranță la Înalte Standarde",
      description:
        "Sistemele de securitate avansate îți protejează casa în orice moment al zilei.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1729436833449-225649403fc0?q=80&w=3667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Control Total la Îndemână",
      description:
        "Gestionează totul de pe telefonul tău, oriunde te-ai afla în lume.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
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
          <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex flex-col justify-center items-end text-center text-white px-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-2xl">
              {slide.description}
            </p>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Citește tot articolul
            </a>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={prevSlide}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
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
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
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
