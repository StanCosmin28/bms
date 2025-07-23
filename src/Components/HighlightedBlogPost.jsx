export default function HighlightedBlogPost({
  buttonText = "Explorează Acum",
  id,
  coverImage,
  title,
  description,
  date,
  author,
  tag,
  isHot,
}) {
  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-4 mb-20 mt-20">
      <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Imaginea - Stânga */}
        <div className="w-full lg:w-1/2">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-auto max-h-96 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Textul - Dreapta */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-2">
          <div className="w-full h-5 flex items-center flex-row mb-2 md:mb-4">
            <img
              className="w-10 h-10"
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
              alt=""
            />
            <h3 className="font-bold text-xl ml-1">{author}</h3>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-gray-600 text-lg mb-4">{description}</p>
          <hr className="border-gray-400 w-full mb-6 md:mb-4 mx-auto md:mx-0"></hr>
          <div className="w-full h-5 flex justify-between items-center flex-row mb-6 md:mb-4">
            <p className="font-normal text-gray-400">{date}</p>
            <a className="text-blue-500" href="#">
              {tag}
            </a>
          </div>
          {buttonText && (
            <a
              href={`http://localhost:5173/bms/${
                isHot ? "hot-feed" : "domenii"
              }/${id}`}
              className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors text-center"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
