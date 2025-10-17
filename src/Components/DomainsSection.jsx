import { useState, useRef, useEffect } from "react";
// import articles from "../Posts/domainsData";
import data from "../Posts/finalData";

export default function DomainsSection() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
    setIsDropdownOpen(false); // Close dropdown when selection is made
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredArticles = selectedTag
    ? data.filter((post) => post.tag === selectedTag)
    : data;

  const tags = [
    { label: "Toate", value: null },
    { label: "Eficiența Energetică", value: "energy_efficiency" },
    { label: "Inovații BMS", value: "inovatii_bms" },
    { label: "Sustenabilitate", value: "sustainability" },
    { label: "Date & Statistici", value: "data_and_statistics" },
    { label: "Ghiduri & Tutoriale", value: "guides_and_tutorials" },
    { label: "Proiecte & Aplicații", value: "projects_and_applications" },
  ];

  const getSelectedTagLabel = () => {
    const selected = tags.find((tag) => tag.value === selectedTag);
    return selected ? selected.label : "all";
  };

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="bg-blue-800 text-white text-center py-6 px-8 mb-8 rounded-lg">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
              DOMENII
            </h1>
          </div>
        </div>

        {/* Filter Buttons - Responsive Layout */}
        <div className="w-full mb-8 flex flex-col items-center">
          {/* Mobile & Tablet: Dropdown */}
          <div className="block lg:hidden w-full max-w-4xl" ref={dropdownRef}>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left text-gray-700 font-medium flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              >
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
                    />
                  </svg>
                  {getSelectedTagLabel()}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {tags.map((tag) => (
                    <button
                      key={tag.value || "all"}
                      onClick={() => handleTagClick(tag.value)}
                      className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 ${
                        selectedTag === tag.value
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700"
                      } ${
                        tag.value || "all" === "all"
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        {selectedTag === tag.value && (
                          <svg
                            className="w-4 h-4 mr-2 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {tag.label}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop: Horizontal buttons */}
          <div className="hidden lg:flex flex-wrap justify-center items-center gap-4 max-w-full">
            {tags.map((tag) => (
              <button
                key={tag.value || "all"}
                className={`py-2 px-6 border border-gray-400 rounded-full cursor-pointer text-base font-medium transition-all duration-200 hover:shadow-md whitespace-nowrap ${
                  selectedTag === tag.value
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => handleTagClick(tag.value)}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer relative"
            >
              <a
                href={`/${product.isHot ? "hot-feed" : "domenii"}/${
                  product.id
                }`}
                className="block w-full"
              >
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-row items-center justify-between">
                    <span className="lg:text-[10px] xl:text-xs text-black/50 font-semibold">
                      {product.date}
                    </span>
                    <span className="lg:text-[10px] xl:text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
                      {product.tag}
                    </span>
                  </div>
                </div>
              </a>
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
