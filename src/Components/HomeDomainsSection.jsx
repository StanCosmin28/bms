// import articles from "../Posts/domainsData";
import data from "../Posts/finalData";

export default function HomeDomainsSection() {
  const POSTS = data.filter((post) => !post.isHot).slice(0, 8);
  // console.log(data);

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">
          Ultimele Noutăți
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTS.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer relative"
            >
              <a
                href={`http://localhost:5173/bms/${
                  post.isHot ? "hot-feed" : "domenii"
                }/${post.id}`}
                className="block w-full"
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-row items-center justify-between">
                    <span className="lg:text-[10px] xl:text-xs text-black/50 font-semibold">
                      {post.date}
                    </span>
                    <span className="lg:text-[10px] xl:text-xs font-medium text-blue-600 bg-blue-100 rounded-full px-2 py-1">
                      {post.tag}
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
