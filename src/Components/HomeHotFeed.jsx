import { useState } from "react";
import cards from "../Posts/hotFeedData";

export default function HomeHotFeed() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4 mt-10">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">
          Articole Recomandate
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer ${
                hoveredIndex !== null && hoveredIndex !== index
                  ? "blur-[3px]"
                  : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={`http://localhost:5173/bms/${
                  card.isHot ? "hot-feed" : "domenii"
                }/${card.id}`}
                className="block w-full"
              >
                <img
                  src={card.coverImage}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-row items-center justify-between">
                    <span className="text-xs text-black/50 font-semibold">
                      {card.date}
                    </span>
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
                      {card.tag}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
