import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import partnersData from "../Posts/partnerData";

// const partnersData = [
//   {
//     name: "Bransha",
//     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfD09kj62wIXzdJ9cu7Zs-nRLG7uHi-sQ4Pw&s",
//     website: "https://bransha.ro",
//     shortDescription: "Lider în soluții tehnologice avansate.",
//     media:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFarQ0TfjlkG_l3VaBoVq9BGAIxEjd5coklg&s",
//     expertise:
//       "Expertiză în dezvoltarea de software personalizat, AI și automatizare industrială.",
//   },
//   {
//     name: "InnovateLabs",
//     logo: "https://via.placeholder.com/150x50.png?text=InnovateLabs",
//     website: "https://innovatelabs.com",
//     shortDescription: "Specialiști în cercetare și inovare tech.",
//     media: "https://via.placeholder.com/300x150.png?text=InnovateLabs+Media",
//     expertise:
//       "Inovare în IoT, machine learning și soluții de cloud computing.",
//   },
//   {
//     name: "SmartSolutions",
//     logo: "https://via.placeholder.com/150x50.png?text=SmartSolutions",
//     website: "https://smartsolutions.com",
//     shortDescription: "Furnizor de soluții smart pentru afaceri.",
//     media: "https://via.placeholder.com/300x150.png?text=SmartSolutions+Media",
//     expertise:
//       "Soluții integrate pentru automatizarea afacerilor și managementul datelor.",
//   },
// ];

export default function Partners() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="bg-blue-800 text-white text-center py-6 px-8 mb-8 rounded-lg">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
            PARTENERI
          </h1>
        </div>

        {/* Partners Cards */}
        <div className="space-y-6">
          {partnersData.map((partner, index) => (
            <div key={index} className="space-y-3">
              {/* Main Partner Card */}
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      {/* Logo */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `<div class="text-white text-sm font-bold">${partner.name.slice(
                              0,
                              2
                            )}</div>`;
                          }}
                        />
                      </div>

                      {/* Company Info */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 uppercase tracking-wide">
                            {partner.name}
                          </h3>
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors self-start sm:self-center"
                          >
                            <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                          </a>
                        </div>
                        <p className="text-gray-600 mt-2 text-base sm:text-lg leading-relaxed">
                          {partner.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expertiză Card - Separate */}
              <div
                className="bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-lg p-4 sm:p-5">
                  <span className="text-base sm:text-lg font-medium text-gray-700">
                    Expertiză
                  </span>
                  {expandedCard === index ? (
                    <ChevronUp size={24} className="text-blue-600" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-600" />
                  )}
                </div>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedCard === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-gray-100">
                    <div className="pt-6">
                      {/* Media Image */}
                      <div className="mb-6">
                        <img
                          src={partner.media}
                          alt={`${partner.name} media`}
                          className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/600x250.png?text=No+Image";
                          }}
                        />
                      </div>

                      {/* Expertise Description */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3 text-lg sm:text-xl">
                          Expertiză Detaliată
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                          {partner.expertise}
                        </p>
                      </div>

                      {/* Website Link */}
                      <div className="pt-4 border-t border-gray-100">
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors text-base sm:text-lg"
                        >
                          <span>Vizitează site-ul</span>
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
