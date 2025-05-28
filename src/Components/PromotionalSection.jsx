import { useState } from "react";

export default function PromotionalSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1688686804638-fadb460edc4a?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "Până la 25% reducere astăzi",
      title:
        "Găsește oferte excelente pentru jocuri PC, desktopuri și accesorii de la branduri de top.",
      linkText: "Vezi mai multe oferte electronice",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "Până la 25% reducere astăzi",
      title:
        "Găsește oferte excelente pentru cele mai populare jocuri video și console de jocuri.",
      linkText: "Vezi mai multe oferte de gaming",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "Până la 50% reducere astăzi",
      title:
        "Accesorii MacBook Pro de la Apple, Belkin, Logitech, Anker și alții.",
      linkText: "Vezi mai multe oferte pentru laptopuri",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "Până la 25% reducere astăzi",
      title:
        "Găsește oferte excelente pentru jocuri PC, desktopuri și accesorii de la branduri de top.",
      linkText: "Vezi mai multe oferte electronice",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gray-100 text-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section: Headline and Info Cards */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Nu rata ofertele exclusive făcute pentru tine.
          </h1>
          <p className="text-gray-600 mb-6 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
            Livrare gratuită în SUA pentru comenzi peste 200 USD
          </p>

          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-3 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold">Garanție de Răspuns</h3>
                <p className="text-gray-600">
                  Ți-ai schimbat părerea? Poți returna produsul în 14 zile.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-3 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-semibold">Promotii Saptamanale</h3>
                <p className="text-gray-600">
                  Explorează promoțiile săptămânale exclusive pentru reduceri
                  speciale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Carousel */}
        <div className="flex-1">
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`w-full transition-opacity duration-500 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 absolute top-0 left-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto max-h-52 sm:max-h-64 md:max-h-80 object-cover rounded-lg"
                />
                <div className="p-4">
                  <span className="inline-flex items-center text-sm text-blue-600 bg-blue-100 rounded-full px-3 py-1 mb-2">
                    <svg
                      className="w-4 h-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
                      />
                    </svg>
                    {slide.discount}
                  </span>
                  <p className="text-gray-700 mb-2">{slide.title}</p>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-500 flex items-center"
                  >
                    {slide.linkText}
                    <svg
                      className="w-5 h-5 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 flex flex-col space-y-4">
              <button
                onClick={prevSlide}
                className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Slide inapoi"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex flex-col space-y-4">
              <button
                onClick={nextSlide}
                className="bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Slide inainte"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
