import { useState } from "react";
import articles from "../Posts/domainsData";

export default function PostsSection() {
  const [selectedTag, setSelectedTag] = useState(null);

  const data = articles.slice(0, 6);
  console.log(data);

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag); // Toggle filter off if the same tag is clicked
  };

  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tag === selectedTag)
    : articles;

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">
          Articole Recomandate
        </h1>
        <div className="w-full h-20 flex flex-row gap-4 justify-center items-center">
          <button
            className={`py-2 px-6 border-1 border-black rounded-full cursor-pointer ${
              selectedTag === "Eficienta Energetica"
                ? "bg-blue-600 text-white"
                : ""
            }`}
            onClick={() => handleTagClick("Eficienta Energetica")}
          >
            Eficienta Energetica
          </button>
          <button
            className={`py-2 px-6 border-1 border-black rounded-full cursor-pointer ${
              selectedTag === "Inovatii BMS" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => handleTagClick("Inovatii BMS")}
          >
            Inovatii BMS
          </button>
          <button
            className={`py-2 px-6 border-1 border-black rounded-full cursor-pointer ${
              selectedTag === "Sustenabilitate" ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => handleTagClick("Sustenabilitate")}
          >
            Sustenabilitate
          </button>
          <button
            className={`py-2 px-6 border-1 border-black rounded-full cursor-pointer ${
              selectedTag === "Date & Statistici"
                ? "bg-blue-600 text-white"
                : ""
            }`}
            onClick={() => handleTagClick("Date & Statistici")}
          >
            Date & Statistici
          </button>
          <button
            className={`py-2 px-6 border-1 border-black rounded-full cursor-pointer ${
              selectedTag === "Ghiduri & Tutoriale"
                ? "bg-blue-600 text-white"
                : ""
            }`}
            onClick={() => handleTagClick("Ghiduri & Tutoriale")}
          >
            Ghiduri & Tutoriale
          </button>
          <button
            className={`py-2 px-6 border-1 border-black rounded-full cursor-pointer ${
              selectedTag === "Proiecte & Aplicatii"
                ? "bg-blue-600 text-white"
                : ""
            }`}
            onClick={() => handleTagClick("Proiecte & Aplicatii")}
          >
            Proiecte & Aplicatii
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((product, index) => (
            <div
              key={index}
              className="cursor-pointer bg-gray-50 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center p-4"
            >
              <a
                href={`http://localhost:5173/bms/${
                  product.isHot ? "hot-feed" : "domenii"
                }/${product.id}`}
                className="block w-full"
              >
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              </a>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                <a
                  href={`http://localhost:5173/bms/${
                    product.isHot ? "hot-feed" : "domenii"
                  }/${product.id}`}
                  className="hover:text-blue-600"
                >
                  {product.title}
                </a>
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="w-[95%] flex flex-wrap gap-2 flex-row items-center justify-between">
                <span className="text-xs text-black/50 font-semibold">
                  {product.date}
                </span>
                <span className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
                  {product.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center items-center p-5">
        {/* <a className="text-gray-600 font-normal underline opacity-30" href="#">
          Mai multe articole
        </a> */}
      </div>
    </section>
  );
}
