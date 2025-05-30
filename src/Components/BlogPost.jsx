import { useEffect, useState } from "react";
import articleData from "../Model/dummyData";

export default function BlogPost() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    let scrollTimeout;

    // Intersection Observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        // Update active section only if not scrolling
        if (!isScrolling) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.3,
      }
    );

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Observe all sections
      articleData.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.observe(element);
        }
      });

      // Set initial active section
      if (articleData.sections.length > 0) {
        setActiveSection(articleData.sections[0].id);
      }
    }, 100);

    // Listen for scroll end to re-enable intersection observer
    const handleScroll = () => {
      if (isScrolling) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }); // Increased to 1200ms to cover smooth scroll duration
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [isScrolling]);

  const scrollToSection = (sectionId) => {
    // Set active section immediately on click
    setIsScrolling(true);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Adjust for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight mb-6">
            {articleData.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center text-sm text-gray-600 mb-8">
            <span className="font-medium">{articleData.author}</span>
            <span className="mx-2">|</span>
            <span>{articleData.date}</span>
            <span className="mx-2">|</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {articleData.tag}
            </span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src={articleData.coverImage || "/placeholder.svg"}
          alt="Article cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar - Only visible on desktop */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-18">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {articleData.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                        activeSection === section.id
                          ? "bg-blue-100 text-blue-800 font-medium"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <main className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              {articleData.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`mb-12 ${index === 0 ? "pt-0" : "pt-8"}`}
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {section.content}
                  </p>
                </section>
              ))}
            </article>

            {/* Navigation for mobile - Table of Contents at bottom */}
            <div className="lg:hidden mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Jump to Section
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {articleData.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
