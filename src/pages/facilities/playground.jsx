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

const PlaygroundPage = () => {
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
          title: "Sports Playground",
          subtitle:
            "Where Champions Are Made Through Play, Sports, and Physical Excellence",
          mainImage: {
            url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&q=80",
            alt: "School sports playground and field",
          },
          galleryImages: [
            {
              id: "g1",
              url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&q=80",
              alt: "Basketball court",
            },
            {
              id: "g2",
              url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80",
              alt: "Running track",
            },
            {
              id: "g3",
              url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80",
              alt: "Students playing sports",
            },
          ],
          content: [
            {
              id: "1",
              paragraph:
                "The Sports Playground at Sree Buddha Central School is a sprawling arena of energy, enthusiasm, and athletic excellence. Designed to nurture physical fitness, teamwork, and competitive spirit, our expansive outdoor facility provides students with the perfect environment to engage in various sports, develop motor skills, and embrace an active lifestyle that complements their academic pursuits.",
            },
            {
              id: "2",
              paragraph:
                "Our multi-sport facility features professionally maintained grounds including a full-sized football field, cricket pitch, basketball courts, volleyball courts, and a dedicated athletics track. With quality sporting equipment, proper markings, and safety measures in place, students have access to infrastructure that meets competitive standards while ensuring their wellbeing during practice and play.",
            },
            {
              id: "3",
              paragraph:
                "Beyond structured sports, the playground serves as a vital space for physical education classes, inter-house competitions, annual sports day celebrations, and recreational activities. Children learn valuable life lessons through play—discipline, perseverance, leadership, and sportsmanship—while building physical strength, stamina, and coordination that contribute to overall development.",
            },
            {
              id: "4",
              paragraph:
                "Under the guidance of qualified physical education instructors and sports coaches, students receive professional training in their chosen sports. Whether preparing for district-level competitions or simply enjoying a game with friends during break time, our playground embodies our belief that a healthy body nurtures a healthy mind, and that sports are integral to creating well-rounded, confident individuals.",
            },
          ],
          features: [
            {
              id: "f1",
              icon: "⚽",
              title: "Multi-Sport Fields",
              description:
                "Football, cricket, and athletics grounds with professional markings",
            },
            {
              id: "f2",
              icon: "🏀",
              title: "Court Facilities",
              description:
                "Basketball, volleyball, and badminton courts with proper equipment",
            },
            {
              id: "f3",
              icon: "🏃",
              title: "Athletic Track",
              description:
                "Standard running track for sprints, relays, and endurance training",
            },
            {
              id: "f4",
              icon: "🥇",
              title: "Sports Equipment",
              description:
                "Quality gear for all major sports and regular maintenance",
            },
            {
              id: "f5",
              icon: "👨‍🏫",
              title: "Professional Coaching",
              description: "Trained PE teachers and sports coaches for skill development",
            },
            {
              id: "f6",
              icon: "🛡️",
              title: "Safety Measures",
              description: "First aid facilities, supervision, and safety protocols in place",
            },
          ],
          useCases: [
            {
              id: "u1",
              title: "Physical Education",
              description:
                "Regular PE classes focusing on fitness, games, and sports fundamentals",
              icon: "💪",
            },
            {
              id: "u2",
              title: "Competitive Sports",
              description:
                "Training and practice for inter-school tournaments and championships",
              icon: "🏆",
            },
            {
              id: "u3",
              title: "Annual Sports Day",
              description:
                "Grand celebrations featuring track events, team games, and cultural activities",
              icon: "🎉",
            },
            {
              id: "u4",
              title: "Recreational Play",
              description:
                "Free play time for stress relief, social bonding, and pure enjoyment",
              icon: "😊",
            },
          ],
          specifications: [
            { label: "Total Area", value: "3 Acres" },
            { label: "Sports", value: "10+ Games" },
            { label: "Courts", value: "6 Courts" },
            { label: "Track Length", value: "200M" },
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
    <div className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-400 rounded-full"></div>
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
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border border-orange-300 mb-6">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-semibold text-sm tracking-wide">
                    SPORTS & FITNESS
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {data?.title ? (
                    <>
                      {data.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                        {data.title.split(" ").slice(-1)[0]}
                      </span>
                    </>
                  ) : (
                    <>
                      Sports{" "}
                      <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Playground
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
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent"></div>

                      {/* Floating Specs */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                              3
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Acres
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                              10+
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Sports
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
                World-Class{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Facilities
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Professional infrastructure for every sport and athletic pursuit
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, index) => (
                <Reveal key={feature.id} delay={700 + index * 100}>
                  <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
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
                Play &{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                From casual play to championship glory, we support every athletic journey
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {data.useCases.map((useCase, index) => (
                <Reveal key={useCase.id} delay={1000 + index * 100}>
                  <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center text-3xl shadow-lg">
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
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 lg:p-12 shadow-2xl mb-20">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Playground Stats
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
                    <p className="text-orange-100 font-medium">{spec.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
      <div
        className="absolute top-32 right-20 w-2 h-2 bg-amber-500 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-32 w-3 h-3 bg-orange-600 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-32 w-2 h-2 bg-amber-500 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default PlaygroundPage;