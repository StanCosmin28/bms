import { useState } from "react";
import { Bell, Check } from "lucide-react";

export default function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedName, setSubmittedName] = useState(""); // State for the submitted name

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (formData.name.trim() && formData.email.trim()) {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Te rog să introduci o adresă de email validă.");
        return;
      }

      setIsSubmitting(true);

      setSubmittedName(formData.name);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      setShowToast(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "" });

      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes smooth-pop {
            0% {
              transform: translateX(100%);
              opacity: 0;
              scale: 0.95;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
              scale: 1;
            }
          }
          .animate-smooth-pop {
            animation: smooth-pop 0.5s ease-in-out forwards;
          }
        `}
      </style>

      <section className="w-full bg-gradient-to-br from-[#2436D0] to-blue-200 py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/30 rounded-2xl mr-4">
                    <Bell className="w-8 h-8 text-cyan-300" />
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                      DESCOPERĂ <span className="text-cyan-300">BMS</span>
                    </h2>
                  </div>
                </div>

                <p className="text-blue-100 text-lg lg:text-xl mb-8 font-medium">
                  Fără jargon. Doar Esențialul.
                </p>

                <div className="space-y-4">
                  {[
                    "Soluții inteligente pentru clădiri eficiente",
                    "Tehnologii de ultimă generație",
                    "Proiecte de referință și studii de caz",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:scale-105 transition-all duration-150 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-300 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-blue-100 font-medium">
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 -translate-x-20"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4">
                    Primești doar informații utile.
                  </h3>
                  <p className="text-orange-100 text-lg font-medium">
                    Fără spam.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nume"
                        required
                        className="w-full p-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl text-white placeholder-orange-100 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-300"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Adresa de email"
                        required
                        className="w-full p-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl text-white placeholder-orange-100 focus:outline-none focus:border-white focus:bg-white/30 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !formData.name.trim() ||
                      !formData.email.trim()
                    }
                    className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-700/50 cursor-pointer text-white font-semibold p-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:transform-none shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Se procesează...
                      </div>
                    ) : (
                      "Abonează-te"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-smooth-pop">
          <div className="bg-white border border-green-200 rounded-2xl shadow-2xl p-6 max-w-sm">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  Bun venit, {submittedName || "Utilizator"}!
                </h4>
                <p className="text-sm text-gray-600">
                  Te-ai alăturat cu succes newsletter-ului nostru.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
