export default function TechSection() {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-9b5e339d5e35?w=500&auto=format&fit=crop&q=60",
      title: "Explorarea Lumii Tech",
      description:
        "Descoperă cele mai recente inovații din domeniul tehnologiei și impactul lor asupra vieții tale.",
      tags: ["Info fresh", "Ștrop de FUN"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60 Hannah Watson, CC BY-SA 2.0, https://creativecommons.org/licenses/by-sa/2.0/",
      title: "Microcipuri Avansate",
      description:
        "Află cum microcipurile moderne revoluționează industria tech și ce înseamnă asta pentru viitor.",
      tags: ["Vibe pro", "Info fresh"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1611162618071-b5a7d48b92ec?w=500&auto=format&fit=crop&q=60",
      title: "Smartphone-uri de Top",
      description:
        "Top 5 smartphone-uri care domină piața în 2025 – specificații, performanțe și design.",
      tags: ["Info fresh", "Vibe pro"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1600857062240-3e5a96e9b3e9?w=500&auto=format&fit=crop&q=60",
      title: "Entuziaști Tech",
      description:
        "Suntem o gașcă de entuziaști tech, gata să-ți aducem cele mai tari noutăți din lumea BMS.",
      tags: ["Info fresh", "Vibe pro", "Ștrop de FUN"],
    },
  ];

  return (
    <section className="py-10 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
