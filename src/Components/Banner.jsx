import { useEffect, useState, useRef } from "react";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(bannerRef.current);
        }
      },
      { threshold: 0.5 } // Animația pornește când 50% din secțiune e vizibilă
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes grow-width-100 {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }

          @keyframes grow-width-75 {
            0% {
              width: 0%;
            }
            100% {
              width: 75%;
            }
          }

          @keyframes grow-width-50 {
            0% {
              width: 0%;
            }
            100% {
              width: 50%;
            }
          }

          @keyframes grow-width-25 {
            0% {
              width: 0%;
            }
            100% {
              width: 25%;
            }
          }

          .animate-grow-width-1 {
            animation: grow-width-100 0.8s ease-in-out forwards;
          }

          .animate-grow-width-2 {
            animation: grow-width-75 0.8s ease-in-out 0.2s forwards;
          }

          .animate-grow-width-3 {
            animation: grow-width-50 0.8s ease-in-out 0.4s forwards;
          }

          .animate-grow-width-4 {
            animation: grow-width-25 0.8s ease-in-out 0.6s forwards;
          }
        `}
      </style>

      <section
        ref={bannerRef}
        className="relative bg-gradient-to-br from-blue-900 to-blue-950 overflow-hidden"
      >
        {/* Imagine de fundal */}
        <div
          className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1729436833449-225649403fc0?q=80&w=3667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          {/* Overlay semi-transparent cu gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/50"></div>

          {/* Elemente decorative */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>

          {/* Conținut suprapus */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 sm:px-8 lg:px-12  max-w-[600px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight bg-blue-500/80 p-4 rounded-xl shadow-lg">
              Descoperă Tehnologia{" "}
              <span className="text-cyan-200">BMS cu BMS România</span>
            </h1>

            {/* Linii animate */}
            <div className="w-full max-w-[600px] mt-2 mb-8">
              <div
                className={`bg-blue-500 h-4 mb-1 rounded-sm w-0 ${
                  isVisible ? "animate-grow-width-1" : ""
                }`}
              ></div>
              <div
                className={`bg-blue-500 h-4 mb-1 rounded-sm w-0 ${
                  isVisible ? "animate-grow-width-2" : ""
                }`}
              ></div>
              <div
                className={`bg-blue-500 h-4 mb-1 rounded-sm w-0 ${
                  isVisible ? "animate-grow-width-3" : ""
                }`}
              ></div>
              <div
                className={`bg-blue-500 h-4 mb-4 rounded-sm w-0 ${
                  isVisible ? "animate-grow-width-4" : ""
                }`}
              ></div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
              Simplificăm tehnologia pentru tine. Află cum sistemele BMS pot
              transforma spațiul tău într-un mediu inteligent și sustenabil.
            </p>

            <a
              href="#"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 text-base sm:text-lg font-semibold shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Află Mai Mult
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
