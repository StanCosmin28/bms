export default function Banner() {
  return (
    <section className="relative bg-white">
      {/* Imagine de fundal */}
      <div
        className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{
          //   backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3540&auto=format&fit=crop')`,
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1729436833449-225649403fc0?q=80&w=3667&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* Overlay semi-transparent pentru lizibilitate */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Conținut suprapus */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-4 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Descoperă Tehnologia BMS cu BMS România
          </h1>
          <div className="w-full max-w-[480px]">
            <div className="bg-blue-200 w-full mb-1 h-4"></div>
            <div className="bg-blue-200 w-3/4 mb-1 h-4"></div>
            <div className="bg-blue-200 w-2/4 mb-1 h-4"></div>
            <div className="bg-blue-200 w-1/4 mb-4 h-4"></div>
          </div>
          {/* <p className="text-lg md:text-xl text-gray-200 mb-1 max-w-2xl">
            Simplificăm tehnologia pentru tine. Află cum sistemele BMS pot
            transforma spațiul tău într-un mediu inteligent și sustenabil.
          </p> */}
          <a
            href="#"
            className="bg-blue-100 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors text-base md:text-lg font-semibold"
          >
            Află Mai Mult
          </a>
        </div>
      </div>
    </section>
  );
}
