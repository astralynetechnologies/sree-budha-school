import React, { useEffect, useState, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Scroll-reveal component
function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  from = "up",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenTransform =
    from === "left"
      ? "-translate-x-6"
      : from === "right"
      ? "translate-x-6"
      : from === "down"
      ? "-translate-y-6"
      : "translate-y-6";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${hiddenTransform}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const AcademicCalendarPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData = {
          title: "Academic Calendar",
          subtitle:
            "Stay Informed with Our Comprehensive Academic Year Plan and Schedule",
          currentYear: "2024-25",
          mainImage: {
            url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
            alt: "Academic calendar and planning",
          },
          documents: [
            {
              id: "year-plan",
              title: "Annual Year Plan",
              description: "Comprehensive academic year plan covering all subjects, chapters, and monthly breakdowns for the entire session",
              icon: "📅",
              fileSize: "2.4 MB",
              pages: "45 Pages",
              pdfUrl: "#", // Replace with actual PDF URL
            },
            {
              id: "academic-calendar",
              title: "Academic Calendar 2024-25",
              description: "Complete calendar with term dates, holidays, examinations, parent-teacher meetings, and important events",
              icon: "📆",
              fileSize: "1.8 MB",
              pages: "12 Pages",
              pdfUrl: "#", // Replace with actual PDF URL
            },
            // {
            //   id: "exam-schedule",
            //   title: "Examination Schedule",
            //   description: "Detailed schedule for all unit tests, term examinations, and assessment dates for all classes",
            //   icon: "📝",
            //   fileSize: "980 KB",
            //   pages: "8 Pages",
            //   pdfUrl: "#", // Replace with actual PDF URL
            // },
            // {
            //   id: "holiday-list",
            //   title: "Holiday List",
            //   description: "Complete list of holidays, vacation periods, and non-working days for the academic session",
            //   icon: "🎉",
            //   fileSize: "540 KB",
            //   pages: "4 Pages",
            //   pdfUrl: "#", // Replace with actual PDF URL
            // },
          ],
        };

        setData(mockData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = (pdfUrl, fileName) => {
    // In production, this would trigger actual PDF download
    console.log(`Downloading: ${fileName} from ${pdfUrl}`);
    // window.open(pdfUrl, '_blank');
    alert(`Download initiated for: ${fileName}\n\nNote: Replace '#' with actual PDF URL in production.`);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-sky-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {loading ? (
            <>
              <Skeleton
                height={8}
                width={120}
                className="mx-auto mb-6 rounded-full"
                baseColor="#f3f4f6"
                highlightColor="#e5e7eb"
              />
              <Skeleton
                height={48}
                width={400}
                className="mx-auto mb-6"
                baseColor="#f3f4f6"
                highlightColor="#e5e7eb"
              />
              <Skeleton
                height={24}
                width={600}
                className="mx-auto"
                baseColor="#f3f4f6"
                highlightColor="#e5e7eb"
                count={2}
              />
            </>
          ) : error ? (
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full border border-red-200 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-red-600 font-semibold text-sm tracking-wide">
                  ERROR
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unable to Load Content
              </h2>
              <p className="text-lg text-red-600">{error}</p>
            </div>
          ) : (
            <>
              <Reveal>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-300 mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold text-sm tracking-wide">
                    ACADEMIC YEAR {data?.currentYear}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Academic{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                    Calendar & Year Plan
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {data?.subtitle}
                </p>
              </Reveal>
            </>
          )}
        </div>

        {/* Hero Image */}
        {!loading && !error && data?.mainImage && (
          <Reveal delay={300}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-20">
              <img
                src={data.mainImage.url}
                alt={data.mainImage.alt}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  Plan Your Academic Year
                </h2>
                <p className="text-lg text-blue-100">
                  Download detailed schedules, term plans, and important dates
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* Download Documents Section */}
        {!loading && !error && data?.documents && (
          <div className="mb-20">
            <Reveal delay={400}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Download{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Documents
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Access all academic planning documents in PDF format
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {data.documents.map((doc, index) => (
                <Reveal key={doc.id} delay={500 + index * 100}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {doc.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {doc.title}
                        </h4>
                        {/* <div className="flex gap-4 text-sm text-gray-500">
                          <span>📄 {doc.pages}</span>
                          <span>💾 {doc.fileSize}</span>
                        </div> */}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {doc.description}
                    </p>
                    <button
                      onClick={() => handleDownload(doc.pdfUrl, doc.title)}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
      <div
        className="absolute top-32 right-20 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-4 h-4 bg-sky-400 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-32 w-3 h-3 bg-blue-600 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-32 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default AcademicCalendarPage;