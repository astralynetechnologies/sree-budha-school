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

const ResultsPage = () => {
  // Static page/header content (kept intentionally static)
  const staticData = {
    title: "Academic Results",
    subtitle: "Celebrating Excellence and Achievement in Education",
    currentYear: "2024-25",
    mainImage: {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      alt: "Students celebrating academic success",
    },
    overallStats: [
      { label: "Pass Percentage", value: "98.5%", icon: "📊" },
      { label: "Distinction Rate", value: "45%", icon: "🌟" },
      { label: "100% Scores", value: "28", icon: "💯" },
      { label: "Above 90%", value: "156", icon: "🏆" },
    ],
    classResults: [
      {
        id: "class10",
        class: "Class X",
        year: "2024",
        passPercentage: "100%",
        distinction: "52%",
        averagePercentage: "87.4%",
        highlights: [
          "12 students scored above 95%",
          "48 students scored above 90%",
          "100% pass rate for 5th consecutive year",
        ],
        toppers: [
          {
            name: "Aditi Sharma",
            percentage: "98.2%",
            subjects: "All Subjects",
          },
          {
            name: "Rohan Verma",
            percentage: "97.8%",
            subjects: "Science Stream",
          },
          { name: "Priya Menon", percentage: "97.4%", subjects: "Mathematics" },
        ],
      },
      {
        id: "class12",
        class: "Class XII",
        year: "2024",
        passPercentage: "99.2%",
        distinction: "48%",
        averagePercentage: "85.6%",
        highlights: [
          "16 students scored above 95%",
          "62 students scored above 90%",
          "Outstanding performance in Science stream",
        ],
        toppers: [
          { name: "Arjun Kumar", percentage: "99.4%", subjects: "PCM Stream" },
          { name: "Sneha Reddy", percentage: "98.6%", subjects: "PCB Stream" },
          { name: "Vikram Singh", percentage: "98.2%", subjects: "Commerce" },
        ],
      },
    ],
    streamWiseResults: [
      {
        stream: "Science",
        passRate: "100%",
        avgPercentage: "86.8%",
        icon: "🔬",
      },
      {
        stream: "Commerce",
        passRate: "98.5%",
        avgPercentage: "84.2%",
        icon: "💼",
      },
      {
        stream: "Humanities",
        passRate: "99.1%",
        avgPercentage: "83.6%",
        icon: "📚",
      },
    ],
    achievements: [
      {
        id: "a1",
        title: "CBSE Merit List",
        description: "8 students featured in CBSE National Merit List",
        icon: "🎖️",
      },
      {
        id: "a2",
        title: "Subject Toppers",
        description: "State rank holders in Mathematics and Science",
        icon: "🥇",
      },
      {
        id: "a3",
        title: "Perfect Scores",
        description: "28 students achieved 100/100 in individual subjects",
        icon: "💯",
      },
      {
        id: "a4",
        title: "Improvement Rate",
        description: "15% increase in distinction rate from previous year",
        icon: "📈",
      },
    ],
    // will be populated from CMS
    resultDocuments: [],
  };

  const [data, setData] = useState(staticData);
  const [loading, setLoading] = useState(false); // static content ready immediately
  const [docsLoading, setDocsLoading] = useState(true); // only documents load dynamically
  const [error, setError] = useState(null);

  // helper: open document in new tab
  const handleDownload = (pdfUrl, fileName) => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    } else {
      alert(`Download not available for: ${fileName}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDocsLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CMS_URL}/api/result`
        );
        if (!res.ok) throw new Error("Failed to fetch results data");
        const result = await res.json();

        const docs = Array.isArray(result.docs)
          ? result.docs
          : result.data || [];

        // helper to format bytes -> human friendly
        const formatBytes = (bytes) => {
          if (!bytes && bytes !== 0) return null;
          const thresh = 1024;
          if (Math.abs(bytes) < thresh) return bytes + " B";
          const units = ["KB", "MB", "GB", "TB"];
          let u = -1;
          do {
            bytes /= thresh;
            ++u;
          } while (Math.abs(bytes) >= thresh && u < units.length - 1);
          return bytes.toFixed(u < 1 ? 0 : 1) + " " + units[u];
        };

        const mappedDocs = docs.map((d) => ({
          id: d.id ?? d._id,
          title: d.title,
          description: d.description,
          icon: "📄",
          fileSize: d.document?.filesize
            ? formatBytes(d.document.filesize)
            : null,
          pages: d.pages || null,
          year: d.createdAt
            ? new Date(d.createdAt).getFullYear().toString()
            : null,
          pdfUrl:
            d.document?.url ||
            d.document?.url_full ||
            d.document?.thumbnailURL ||
            null,
        }));

        setData((prev) => ({ ...prev, resultDocuments: mappedDocs }));
        setDocsLoading(false);
      } catch (err) {
        setError(err.message);
        setDocsLoading(false);
      }
    };

    fetchData();
  }, []);

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
                    Results
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
        <Reveal delay={400}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-20">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
              alt="Students celebrating academic success"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                Outstanding Performance
              </h2>
              <p className="text-lg text-blue-100">
                Our students continue to excel and set new benchmarks
              </p>
            </div>
          </div>
        </Reveal>

        {/* Download Documents Section */}
        {!docsLoading &&
        !error &&
        data?.resultDocuments &&
        data.resultDocuments.length > 0 ? (
          <div className="mb-20">
            <Reveal delay={400}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Download{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Results
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Access detailed board examination results in PDF format
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {data.resultDocuments.map((doc, index) => (
                <Reveal key={doc.id || index} delay={500 + index * 100}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {doc.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {doc.title}
                        </h4>
                        <div className="flex gap-4 text-sm text-gray-500">
                          {doc.pages && <span>📄 {doc.pages}</span>}
                          {doc.fileSize && <span>💾 {doc.fileSize}</span>}
                        </div>
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
        ) : docsLoading ? (
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <Skeleton height={20} width={`60%`} className="mb-4" />
                  <Skeleton height={12} count={3} className="mb-4" />
                  <Skeleton height={44} width={`100%`} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-20 text-center">
            <p className="text-lg text-gray-600 mb-6">
              No results available at the moment.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Contact Us
            </a>
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

export default ResultsPage;
