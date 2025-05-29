import { useState } from "react";
import images from "../Model/techGridData";

export default function CustomTechGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="p-4 bg-gray-100">
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
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 rounded-b-lg">
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
            className={`row-span-2 col-span-1 transition-all cursor-pointer ${
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
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
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
