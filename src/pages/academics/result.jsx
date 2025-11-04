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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData = {
          title: "Academic Results",
          subtitle:
            "Celebrating Excellence and Achievement in Education",
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
                { name: "Aditi Sharma", percentage: "98.2%", subjects: "All Subjects" },
                { name: "Rohan Verma", percentage: "97.8%", subjects: "Science Stream" },
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

        {/* Overall Statistics */}
        {!loading && !error && data?.overallStats && (
          <div className="mb-20">
            <Reveal delay={300}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.overallStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
                  >
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {/* Hero Image */}
        {!loading && !error && data?.mainImage && (
          <Reveal delay={400}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-20">
              <img
                src={data.mainImage.url}
                alt={data.mainImage.alt}
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
        )}

        {/* Class-wise Results */}
        {!loading && !error && data?.classResults && (
          <div className="mb-20">
            <Reveal delay={500}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Board Exam{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Results
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Detailed performance analysis of CBSE board examinations
              </p>
            </Reveal>

            <div className="space-y-8">
              {data.classResults.map((result, index) => (
                <Reveal key={result.id} delay={600 + index * 100}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h4 className="text-3xl font-bold text-gray-900 mb-2">
                          {result.class} - {result.year}
                        </h4>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-blue-600">
                              {result.passPercentage}
                            </span>
                            <span className="text-sm text-gray-600">Pass Rate</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-cyan-600">
                              {result.distinction}
                            </span>
                            <span className="text-sm text-gray-600">Distinction</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-sky-600">
                              {result.averagePercentage}
                            </span>
                            <span className="text-sm text-gray-600">Average</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h5 className="text-lg font-bold text-gray-900 mb-3">
                        Key Highlights
                      </h5>
                      <div className="grid md:grid-cols-3 gap-4">
                        {result.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200"
                          >
                            <p className="text-sm text-gray-700">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Top Performers */}
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-3">
                        Top Performers
                      </h5>
                      <div className="grid md:grid-cols-3 gap-4">
                        {result.toppers.map((topper, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-4 border border-blue-100 hover:shadow-lg transition-shadow"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="text-2xl">{idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}</div>
                              <span className="text-lg font-bold text-blue-600">
                                {topper.percentage}
                              </span>
                            </div>
                            <h6 className="font-bold text-gray-900 mb-1">
                              {topper.name}
                            </h6>
                            <p className="text-sm text-gray-600">{topper.subjects}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Stream-wise Performance */}
        {!loading && !error && data?.streamWiseResults && (
          <div className="mb-20">
            <Reveal delay={800}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Stream-wise{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Performance
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Analysis across different academic streams
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {data.streamWiseResults.map((stream, index) => (
                <Reveal key={index} delay={900 + index * 100}>
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-lg border border-blue-100 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-5xl mb-4">{stream.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      {stream.stream}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          {stream.passRate}
                        </div>
                        <div className="text-sm text-gray-600">Pass Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-sky-600">
                          {stream.avgPercentage}
                        </div>
                        <div className="text-sm text-gray-600">Average Score</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Notable Achievements */}
        {!loading && !error && data?.achievements && (
          <div className="mb-20">
            <Reveal delay={1000}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Notable{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Recognition and milestones achieved by our students
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {data.achievements.map((achievement, index) => (
                <Reveal key={achievement.id} delay={1100 + index * 100}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <Reveal delay={1200}>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 shadow-2xl text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Join Our Success Story
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of an institution committed to academic excellence and holistic development
            </p>
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
              Learn More About Admissions
            </button>
          </div>
        </Reveal>
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