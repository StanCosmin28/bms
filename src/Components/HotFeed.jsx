import cards from "../Posts/hotFeedData";
export default function HomeHotFeed() {
  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-blue-800 text-white text-center py-6 px-8 mb-8 rounded-lg">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
            🔥 HOT FEED
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer"
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

                <div className="p-4 ">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2 flex-row items-center justify-between">
                    <span className="text-xs text-black/50 font-semibold">
                      {card.date}
                    </span>
                    {/* {card.tags.map((tag, tagIndex) => ( */}
                    <span
                      // key={tagIndex}
                      className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1"
                    >
                      {card.tag}
                    </span>
                    {/* // ))} */}
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

// export default function TechSection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const cards = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=3520&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Explorarea Lumii Tech",
//       description:
//         "Descoperă cele mai recente inovații din domeniul tehnologiei și impactul lor asupra vieții tale.",
//       tags: ["Info fresh", "Ștrop de FUN"],
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Microcipuri Avansate",
//       description:
//         "Află cum microcipurile moderne revoluționează industria tech și ce înseamnă asta pentru viitor.",
//       tags: ["Vibe pro", "Info fresh"],
//     },
//     {
//       image:
//         "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Smartphone-uri de Top",
//       description:
//         "Top 5 smartphone-uri care domină piața în 2025 – specificații, performanțe și design.",
//       tags: ["Info fresh", "Vibe pro"],
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60 Hannah Watson, CC BY-SA 2.0, https://creativecommons.org/licenses/by-sa/2.0/",
//       title: "Entuziaști Tech",
//       description:
//         "Suntem o gașcă de entuziaști tech, gata să-ți aducem cele mai tari noutăți din lumea BMS.",
//       tags: ["Info fresh", "Vibe pro", "Ștrop de FUN"],
//     },
//   ];

//   return (
//     <section className="py-10 px-4 bg-gray-100">
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
//         Ultimele Noutăți
//       </h1>
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer ${
//                 hoveredIndex !== null && hoveredIndex !== index ? "blur-xs" : ""
//               }`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">{card.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {card.tags.map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
