export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-5 md:py-12 px-4 border-t border-gray-200">
      <div className="max-w-[1550px] mx-auto flex flex-col md:flex-row justify-between md:px-10 px-2">
        {/* Secțiunea Superioară: Logo și Descriere */}
        <div className="flex flex-col items-left mb-10 lg:items-start lg:text-left">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">BMS România</h2>
          <p className="text-gray-600 max-w-md">
            Simplificăm tehnologia. Explicăm BMS.
          </p>
          <p className="text-gray-600 mt-4">Ai întrebări?</p>
          <p className="text-gray-600">Lasă-ne un email la adresa</p>
          <a
            href="mailto:bmsromania@gmail.com"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            bmsromania@gmail.com
          </a>
        </div>

        {/* Secțiunea Mijloc: Linkuri */}
        <div className="flex flex-col-reverse sm:flex-row gap-8 mb-10">
          {/* Coloana 1: Domenii */}
          <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              DOMENII
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Inovati BMS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Sustenabilitate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Date & Statistici
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Ghiduri & Tutoriale
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Proiecte & Aplicații
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Eficiență Energetică
                </a>
              </li>
            </ul>
          </div>

          {/* Coloana 2: Parteneri */}
          <div className="flex flex-col">
            <a
              href="#"
              className="text-lg font-semibold text-blue-700 mb-4 cursor-pointer"
            >
              PARTENERI
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-blue-700 mb-4 cursor-pointer"
            >
              HOT TECH
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-blue-700 mb-4 cursor-pointer"
            >
              RECOMANDĂRI
            </a>
          </div>

          {/* Coloana 3: Hot Tech */}
          {/* <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              HOT TECH
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Hot Tech
                </a>
              </li>
            </ul>
          </div> */}

          {/* Coloana 4: Recomandări */}
          {/* <div>
            <h3 className="text-lg font-semibold text-blue-700 mb-4">
              RECOMANDĂRI
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Recomandări
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* Secțiunea Inferioară: Drepturi de Autor */}
      <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} BMSROMANIA. Toate drepturile rezervate.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Termeni și condiții
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Politică de confidențialitate
          </a>
        </div>
      </div>
    </footer>
  );
}
