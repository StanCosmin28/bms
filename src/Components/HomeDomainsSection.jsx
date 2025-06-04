import articles from "../Posts/domainsData";

export default function HomeDomainsSection() {
  const data = articles.slice(0, 8);

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">
          Ultimele Noutăți
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer relative"
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
      <div className="flex w-full justify-center items-center p-5"></div>
    </section>
  );
}
