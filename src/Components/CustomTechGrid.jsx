import images from "../Model/techGridData";
export default function CustomTechGrid() {
  return (
    <div className="p-4 bg-gray-100 md:p-20 lg:p-40">
      {/* Layout pentru mobile și tablet (lg și mai jos) */}
      <div className="block lg:hidden">
        <div className="space-y-4">
          {/* Prima imagine mare pe mobile */}
          <div className="w-full h-64">
            <img
              src={images[0].src}
              alt="Smart home main"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Grid 2x2 pentru imaginile 2-4 pe mobile */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1, 4).map((img, index) => (
              <div key={index} className="relative h-48">
                <img
                  src={img.src}
                  alt={`Smart home ${index + 2}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
            {/* Ultima imagine fără text */}
            <div className="relative h-48">
              <img
                src={images[5].src}
                alt="Smart home 6"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Penultima imagine cu text și full width pe mobile */}
          <div className="relative w-full h-48 mt-4">
            {/* <div className="absolute w-full h-full bg-purple-400 rounded-lg"></div> */}
            <img
              src={images[4].src}
              alt="Smart home 5"
              className="w-full h-full object-cover rounded-lg"
            />
            {images[4].title && images[4].description && (
              <div className="absolute h-full w-full bottom-0 left-0 right-0 bg-purple-400 text-white p-2 rounded-lg flex flex-col justify-center items-center">
                <h3 className="text-sm font-semibold">{images[4].title}</h3>
                <p className="text-xs">{images[4].description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Layout pentru laptop și desktop (lg și mai mare) */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-auto lg:h-screen">
          {/* Elementul mare din stânga */}
          <div className="row-span-2 col-span-1">
            <img
              src={images[0].src}
              alt="Smart home main"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Pozițiile 2–6, cu text pe ultima imagine */}
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
              {/* Textul apare pe ultima imagine (index 4 în slice(1)) */}
              {index === 3 && images[4].title && (
                <div className="absolute h-full w-full bottom-0 left-0 right-0 bg-purple-400 text-white p-4 rounded-lg flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold">{images[4].title}</h3>
                  <p className="text-sm">{images[4].description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
