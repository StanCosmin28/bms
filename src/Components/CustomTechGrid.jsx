import { useState } from "react";

export default function CustomTechGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Tabletă control smart,
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=3520&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // title: "Control Vocal",
      // description: "Controlează dispozitivele prin comenzi vocale integrate.",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60 Hannah Watson, CC BY-SA 2.0, https://creativecommons.org/licenses/by-sa/2.0/",
      title: "Iluminat Inteligent",
      description: "Personalizează atmosfera cu lumini reglabile.",
    },
    {
      src: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60",
      title: "Climat Automatizat",
      description: "Menține confortul ideal cu senzori și programări.",
    },
  ];

  return (
    <div className="p-4">
      {/* Layout pentru mobile (sm și mai jos) */}
      <div className="block md:hidden">
        <div className="space-y-4">
          {/* Prima imagine mare pe mobile */}
          <div
            className={`w-full h-64 transition-all ${
              hoveredIndex !== null && hoveredIndex !== 0 ? "blur-xs" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={images[0].src}
              alt="Smart home main"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Restul imaginilor în grid 2x2 pe mobile */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((img, index) => (
              <div
                key={index}
                className={`relative h-48 transition-all ${
                  hoveredIndex !== null && hoveredIndex !== index + 1
                    ? "blur-xs"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={img.src}
                  alt={`Smart home ${index + 2}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                {img.title && img.description && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                    <h3 className="text-sm font-semibold">{img.title}</h3>
                    <p className="text-xs">{img.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Layout pentru tablet și desktop (md și mai mare) */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-auto lg:h-screen">
          {/* Elementul mare din stânga */}
          <div
            className={`row-span-2 col-span-1 transition-all ${
              hoveredIndex !== null && hoveredIndex !== 0 ? "blur-xs" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={images[0].src}
              alt="Smart home main"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Pozițiile 2–6 */}
          {images.slice(1).map((img, index) => (
            <div
              key={index}
              className={`relative cursor-pointer ${
                index === 3 ? "col-span-2" : "col-span-1"
              } h-64 lg:h-auto transition-all ${
                hoveredIndex !== null && hoveredIndex !== index + 1
                  ? "blur-xs"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img.src}
                alt={`Smart home ${index + 2}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {img.title && img.description && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                  <h3 className="text-lg font-semibold">{img.title}</h3>
                  <p className="text-sm">{img.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
