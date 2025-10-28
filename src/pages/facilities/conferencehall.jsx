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

const ConferenceHallPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data - replace with actual API call
        const mockData = {
          title: "Conference Hall",
          subtitle:
            "A Professional Space for Meetings, Seminars, and Collaborative Learning",
          mainImage: {
            url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
            alt: "Modern conference hall setup",
          },
          galleryImages: [
            {
              id: "g1",
              url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
              alt: "Conference room seating",
            },
            {
              id: "g2",
              url: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=400&q=80",
              alt: "Presentation setup",
            },
            {
              id: "g3",
              url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80",
              alt: "Meeting in progress",
            },
          ],
          content: [
            {
              id: "1",
              paragraph:
                "The Conference Hall at Sree Buddha Central School is a sophisticated venue designed to facilitate productive meetings, engaging seminars, and collaborative learning sessions. This multipurpose space reflects our commitment to providing world-class infrastructure that supports both academic and professional development.",
            },
            {
              id: "2",
              paragraph:
                "Equipped with modern amenities and flexible seating arrangements, our conference hall accommodates various event formats—from intimate board meetings and parent-teacher conferences to large-scale educational workshops and guest lectures. The space is designed to foster meaningful dialogue and knowledge exchange.",
            },
            {
              id: "3",
              paragraph:
                "The hall features advanced presentation technology including high-definition projectors, smart boards, wireless connectivity, and professional audio systems. Climate-controlled interiors ensure comfort throughout extended sessions, while elegant furnishings create an atmosphere conducive to focused discussion and learning.",
            },
            {
              id: "4",
              paragraph:
                "Our facility serves as a hub for academic discourse, hosting faculty development programs, student symposiums, educational conferences, and community outreach initiatives. It embodies our vision of creating spaces that bridge traditional education with contemporary professional standards.",
            },
          ],
          features: [
            {
              id: "f1",
              icon: "👥",
              title: "Flexible Seating",
              description:
                "Modular furniture for theater, classroom, or boardroom style setups",
            },
            {
              id: "f2",
              icon: "📊",
              title: "Smart Technology",
              description:
                "HD projectors, smart boards, and wireless presentation systems",
            },
            {
              id: "f3",
              icon: "🎤",
              title: "Audio System",
              description:
                "Professional sound system with microphones and speakers",
            },
            {
              id: "f4",
              icon: "💻",
              title: "Connectivity",
              description:
                "High-speed WiFi and multiple power outlets throughout",
            },
            {
              id: "f5",
              icon: "☕",
              title: "Refreshment Area",
              description: "Dedicated space for coffee breaks and networking",
            },
            {
              id: "f6",
              icon: "🌡️",
              title: "Climate Control",
              description: "Central AC with adjustable temperature settings",
            },
          ],
          useCases: [
            {
              id: "u1",
              title: "Academic Seminars",
              description:
                "Educational workshops, guest lectures, and faculty training sessions",
              icon: "📚",
            },
            {
              id: "u2",
              title: "Parent Meetings",
              description:
                "PTM sessions, orientation programs, and parent workshops",
              icon: "👨‍👩‍👧",
            },
            {
              id: "u3",
              title: "Student Events",
              description:
                "Debates, symposiums, model UN, and academic competitions",
              icon: "🎓",
            },
            {
              id: "u4",
              title: "Professional Training",
              description:
                "Staff development, skill enhancement, and certification programs",
              icon: "💼",
            },
          ],
          specifications: [
            { label: "Capacity", value: "100-150 people" },
            { label: "Area", value: "2,500 sq. ft." },
            { label: "Setup Time", value: "30 minutes" },
            { label: "Booking", value: "Available on request" },
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
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-400 rounded-full"></div>
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
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border border-emerald-300 mb-6">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold text-sm tracking-wide">
                    PROFESSIONAL SPACE
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {data?.title ? (
                    <>
                      {data.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                        {data.title.split(" ").slice(-1)[0]}
                      </span>
                    </>
                  ) : (
                    <>
                      Conference{" "}
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Hall
                      </span>
                    </>
                  )}
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

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Image Section */}
          <div className="relative">
            <Reveal delay={300}>
              <div className="relative">
                {loading ? (
                  <div className="aspect-[16/10] w-full">
                    <Skeleton
                      height="100%"
                      width="100%"
                      className="rounded-2xl"
                      baseColor="#f3f4f6"
                      highlightColor="#e5e7eb"
                    />
                  </div>
                ) : (
                  data?.mainImage && (
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                      <img
                        src={data.mainImage.url}
                        alt={data.mainImage.alt}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent"></div>

                      {/* Floating Specs */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                              150
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Capacity
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                              2.5K
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Sq. Ft.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Reveal>

            {/* Gallery Images */}
            {!loading && !error && data?.galleryImages && (
              <div className="grid grid-cols-3 gap-4 mt-6">
                {data.galleryImages.map((img, index) => (
                  <Reveal key={img.id} delay={400 + index * 100}>
                    <div className="aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <Reveal delay={400} from="right">
              <div className="prose prose-lg max-w-none">
                {loading ? (
                  <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="space-y-3">
                        <Skeleton
                          height={20}
                          baseColor="#f3f4f6"
                          highlightColor="#e5e7eb"
                          count={4}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {data?.content?.map((item, index) => (
                      <Reveal
                        key={item.id}
                        delay={500 + index * 100}
                        from="right"
                      >
                        <p className="text-lg text-gray-700 leading-relaxed">
                          {item.paragraph}
                        </p>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Features Grid Section */}
        {!loading && !error && data?.features && (
          <div className="mb-20">
            <Reveal delay={600}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Premium{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Amenities
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Everything you need for successful meetings and productive
                sessions
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, index) => (
                <Reveal key={feature.id} delay={700 + index * 100}>
                  <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Use Cases Section */}
        {!loading && !error && data?.useCases && (
          <div className="mb-20">
            <Reveal delay={900}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Versatile{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Applications
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                A multi-purpose venue for diverse educational and professional
                needs
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {data.useCases.map((useCase, index) => (
                <Reveal key={useCase.id} delay={1000 + index * 100}>
                  <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                        {useCase.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {useCase.title}
                        </h4>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Specifications Card */}
        {!loading && !error && data?.specifications && (
          <Reveal delay={1100}>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 lg:p-12 shadow-2xl mb-20">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Quick Specifications
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {data.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <p className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {spec.value}
                    </p>
                    <p className="text-emerald-100 font-medium">{spec.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
      <div
        className="absolute top-32 right-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-32 w-3 h-3 bg-red-600 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-32 w-2 h-2 bg-orange-500 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default ConferenceHallPage;
