export default function CustomTechGrid() {
  //   const cards = [
  //     {
  //       image:
  //         "https://images.unsplash.com/photo-1516321318423-9b5e339d5e35?w=500&auto=format&fit=crop&q=60",
  //       title: "Explorarea Lumii Tech",
  //       description:
  //         "Descoperă cele mai recente inovații din domeniul tehnologiei și impactul lor asupra vieții tale.",
  //       tags: ["Info fresh", "Ștrop de FUN"],
  //     },
  //     {
  //       image:
  //         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60",
  //       title: "Microcipuri Avansate",
  //       description:
  //         "Află cum microcipurile moderne revoluționează industria tech și ce înseamnă asta pentru viitor.",
  //       tags: ["Vibe pro", "Info fresh"],
  //     },
  //     {
  //       image:
  //         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60",
  //       title: "Viitorul Tehnologiei",
  //       description:
  //         "Cum va arăta viitorul cu noile inovații în hardware și software? Află acum!",
  //       tags: ["Info fresh"],
  //     },
  //     {
  //       image:
  //         "https://images.unsplash.com/photo-1611162618071-b5a7d48b92ec?w=500&auto=format&fit=crop&q=60",
  //       title: "Smartphone-uri de Top",
  //       description:
  //         "Top 5 smartphone-uri care domină piața în 2025 – specificații, performanțe și design.",
  //       tags: ["Info fresh", "Vibe pro"],
  //     },
  //     {
  //       image:
  //         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60",
  //       title: "Hardware de Ultimă Generație",
  //       description:
  //         "Cele mai noi componente hardware care schimbă jocul în industria tech.",
  //       tags: ["Vibe pro"],
  //     },
  //     {
  //       image: null,
  //       title: "Entuziaști Tech",
  //       description:
  //         "Suntem o gașcă de entuziaști tech, gata să-ți aducem cele mai tari noutăți din lumea BMS.",
  //       tags: ["Info fresh", "Vibe pro", "Ștrop de FUN"],
  //     },
  //   ];

  //   return (
  //     <section className="py-10 px-4 bg-gray-100">
  //       <div className="max-w-7xl mx-auto">
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  //           {/* Card 1: Top-left, spans 2 rows on desktop */}
  //           <div className="lg:row-span-2 bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
  //             <img
  //               src={cards[0].image}
  //               alt={cards[0].title}
  //               className="w-full h-48 lg:h-96 object-cover"
  //             />
  //             <div className="p-4">
  //               <h3 className="text-lg font-semibold text-gray-800 mb-2">
  //                 {cards[0].title}
  //               </h3>
  //               <p className="text-gray-600 text-sm mb-4">
  //                 {cards[0].description}
  //               </p>
  //               <div className="flex flex-wrap gap-2">
  //                 {cards[0].tags.map((tag, tagIndex) => (
  //                   <span
  //                     key={tagIndex}
  //                     className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1"
  //                   >
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>
  //           </div>

  //           {/* Card 2: Top-middle, smaller on desktop */}
  //           <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 w-2/5">
  //             <img
  //               src={cards[1].image}
  //               alt={cards[1].title}
  //               className="w-full h-48 object-cover"
  //             />
  //             <div className="p-4">
  //               <h3 className="text-lg font-semibold text-gray-800 mb-2">
  //                 {cards[1].title}
  //               </h3>
  //               <p className="text-gray-600 text-sm mb-4">
  //                 {cards[1].description}
  //               </p>
  //               <div className="flex flex-wrap gap-2">
  //                 {cards[1].tags.map((tag, tagIndex) => (
  //                   <span
  //                     key={tagIndex}
  //                     className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1"
  //                   >
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>
  //           </div>

  //           {/* Card 3: Middle-middle, smaller on desktop */}
  //           <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
  //             <img
  //               src={cards[2].image}
  //               alt={cards[2].title}
  //               className="w-full h-48 object-cover"
  //             />
  //             <div className="p-4">
  //               <h3 className="text-lg font-semibold text-gray-800 mb-2">
  //                 {cards[2].title}
  //               </h3>
  //               <p className="text-gray-600 text-sm mb-4">
  //                 {cards[2].description}
  //               </p>
  //               <div className="flex flex-wrap gap-2">
  //                 {cards[2].tags.map((tag, tagIndex) => (
  //                   <span
  //                     key={tagIndex}
  //                     className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1"
  //                   >
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>
  //           </div>

  //           {/* Card 4: Top-right, spans 2 rows on desktop */}
  //           <div className="lg:row-span-2 bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
  //             <img
  //               src={cards[3].image}
  //               alt={cards[3].title}
  //               className="w-full h-48 lg:h-96 object-cover"
  //             />
  //             <div className="p-4">
  //               <h3 className="text-lg font-semibold text-gray-800 mb-2">
  //                 {cards[3].title}
  //               </h3>
  //               <p className="text-gray-600 text-sm mb-4">
  //                 {cards[3].description}
  //               </p>
  //               <div className="flex flex-wrap gap-2">
  //                 {cards[3].tags.map((tag, tagIndex) => (
  //                   <span
  //                     key={tagIndex}
  //                     className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1"
  //                   >
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>
  //           </div>

  //           {/* Card 5: Bottom-middle, smaller on desktop */}
  //           <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 w-full">
  //             <img
  //               src={cards[4].image}
  //               alt={cards[4].title}
  //               className="w-full h-48 object-cover"
  //             />
  //             <div className="p-4">
  //               <h3 className="text-lg font-semibold text-gray-800 mb-2">
  //                 {cards[4].title}
  //               </h3>
  //               <p className="text-gray-600 text-sm mb-4">
  //                 {cards[4].description}
  //               </p>
  //               <div className="flex flex-wrap gap-2">
  //                 {cards[4].tags.map((tag, tagIndex) => (
  //                   <span
  //                     key={tagIndex}
  //                     className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1"
  //                   >
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>
  //           </div>

  //           {/* Card 6: Bottom-right, blue background with no image */}
  //           {/* <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center transform transition hover:scale-105">
  //             <div className="flex justify-center mb-4">
  //               <svg
  //                 className="w-12 h-12 text-white"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  //                 />
  //               </svg>
  //             </div>
  //             <h3 className="text-lg font-semibold mb-2 text-center">
  //               {cards[5].title}
  //             </h3>
  //             <p className="text-sm mb-4 text-center">{cards[5].description}</p>
  //             <div className="flex flex-wrap gap-2 justify-center">
  //               {cards[5].tags.map((tag, tagIndex) => (
  //                 <span
  //                   key={tagIndex}
  //                   className="text-xs font-medium text-blue-100 bg-blue-200 rounded-full px-2 py-1"
  //                 >
  //                   {tag}
  //                 </span>
  //               ))}
  //             </div>
  //           </div> */}
  //         </div>
  //       </div>
  //     </section>
  //   );
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
          <div className="w-full h-64">
            <img
              src={images[0].src}
              alt="Smart home main"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Restul imaginilor în grid 2x2 pe mobile */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((img, index) => (
              <div key={index} className="relative h-48">
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
          <div className="row-span-2 col-span-1">
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
              className={`relative ${
                index === 3 ? "col-span-2" : "col-span-1"
              } h-64 lg:h-auto`}
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
