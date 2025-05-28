export default function PostsSection() {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60",
      title: "Termostat Inteligent Nest",
      description:
        "Controlează temperatura casei tale de oriunde, economisind energie și îmbunătățind confortul.",
      link: "#",
      buttonText: "Citeste ",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Bec Smart Philips Hue",
      description:
        "Personalizează iluminatul casei tale cu culori și intensități ajustabile prin aplicație.",
      link: "#",
      buttonText: "Citeste ",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60",
      title: "Cameră de Securitate Arlo",
      description:
        "Monitorizează-ți casa în timp real cu video HD și detectare de mișcare.",
      link: "#",
      buttonText: "Citeste ",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Boxă Inteligentă Amazon Echo",
      description:
        "Controlează dispozitivele smart și ascultă muzică cu comenzi vocale prin Alexa.",
      link: "#",
      buttonText: "Citeste ",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60",
      title: "Încuietoare Smart August",
      description:
        "Blochează și deblochează ușa casei tale direct de pe telefon, cu acces securizat.",
      link: "#",
      buttonText: "Citeste ",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Senzor de Umiditate Smart",
      description:
        "Monitorizează nivelul de umiditate din casă pentru un mediu sănătos.",
      link: "#",
      buttonText: "Citeste ",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60",
      title: "Priza Inteligentă TP-Link",
      description:
        "Controlează dispozitivele electrice de la distanță și setează programe automate.",
      link: "#",
      buttonText: "Citeste ",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=3530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sistem de Irigare Smart",
      description:
        "Uda-ți grădina automat, economisind apă, cu control prin aplicație.",
      link: "#",
      buttonText: "Citeste ",
      buttonLink: "#",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Articole Recomandate
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center p-4"
            >
              <a href={product.link} className="block w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              </a>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                <a href={product.link} className="hover:text-blue-600">
                  {product.title}
                </a>
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <a
                href={product.buttonLink}
                type="button"
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
              >
                {product.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center items-center p-5">
        <a className="text-gray-600 font-normal underline opacity-30" href="#">
          Mai multe articole
        </a>
      </div>
    </section>
  );
}
