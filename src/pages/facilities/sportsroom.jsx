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

const SportsRoomPage = () => {
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
          title: "Sports Room",
          subtitle:
            "Indoor Training Hub for Fitness, Games, and Athletic Development",
          mainImage: {
            url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
            alt: "Indoor sports training facility",
          },
          galleryImages: [
            {
              id: "g1",
              url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80",
              alt: "Fitness equipment area",
            },
            {
              id: "g2",
              url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&q=80",
              alt: "Indoor games setup",
            },
            {
              id: "g3",
              url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
              alt: "Training session",
            },
          ],
          content: [
            {
              id: "1",
              paragraph:
                "The Sports Room at Sree Buddha Central School is a dedicated indoor facility designed to support year-round athletic training, physical fitness, and indoor sports activities. This climate-controlled space ensures that students can pursue their passion for sports regardless of weather conditions, providing a safe and structured environment for skill development, strength training, and competitive preparation.",
            },
            {
              id: "2",
              paragraph:
                "Equipped with modern fitness apparatus, training equipment, and space for indoor games like table tennis, chess, carrom, and yoga, our sports room serves as a versatile hub for both physical conditioning and strategic sports. Students have access to dumbbells, resistance bands, yoga mats, and other fitness tools that help build strength, flexibility, and endurance under proper supervision.",
            },
            {
              id: "3",
              paragraph:
                "The facility includes dedicated zones for different activities—a fitness corner for strength and cardio workouts, a games area for table tennis and board games, a meditation and yoga space for mental wellness, and storage for sports equipment and gear. Professional mirrors, proper flooring, and adequate ventilation create an optimal training environment that prioritizes both performance and safety.",
            },
            {
              id: "4",
              paragraph:
                "Our qualified physical education instructors and sports coaches utilize this space for specialized training sessions, warm-up exercises before outdoor practice, injury rehabilitation programs, and sports theory classes. The sports room represents our holistic approach to athletics—recognizing that champions are built through a combination of physical training, mental preparation, strategic thinking, and consistent practice in all conditions.",
            },
          ],
          features: [
            {
              id: "f1",
              icon: "🏋️",
              title: "Fitness Equipment",
              description:
                "Weights, resistance bands, and cardio equipment for strength training",
            },
            {
              id: "f2",
              icon: "🏓",
              title: "Indoor Games",
              description:
                "Table tennis, carrom, chess, and other strategic board games",
            },
            {
              id: "f3",
              icon: "🧘",
              title: "Yoga & Meditation",
              description:
                "Dedicated space for flexibility training and mindfulness practice",
            },
            {
              id: "f4",
              icon: "📦",
              title: "Equipment Storage",
              description:
                "Organized storage for sports gear, uniforms, and training accessories",
            },
            {
              id: "f5",
              icon: "🌡️",
              title: "Climate Control",
              description: "Air-conditioned facility for comfortable year-round training",
            },
            {
              id: "f6",
              icon: "🎯",
              title: "Training Programs",
              description: "Structured fitness routines and sports-specific skill development",
            },
          ],
          useCases: [
            {
              id: "u1",
              title: "Strength Training",
              description:
                "Muscle building, conditioning exercises, and athletic performance enhancement",
              icon: "💪",
            },
            {
              id: "u2",
              title: "Indoor Sports",
              description:
                "Table tennis tournaments, chess competitions, and strategic games",
              icon: "🎲",
            },
            {
              id: "u3",
              title: "Fitness Classes",
              description:
                "Aerobics, yoga sessions, meditation, and flexibility training programs",
              icon: "🤸",
            },
            {
              id: "u4",
              title: "Recovery & Rehab",
              description:
                "Injury prevention exercises and rehabilitation under expert guidance",
              icon: "🩹",
            },
          ],
          specifications: [
            { label: "Area", value: "1,200 Sq Ft" },
            { label: "Capacity", value: "30 Students" },
            { label: "Games", value: "8+ Indoor" },
            { label: "Equipment", value: "Premium" },
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
                    INDOOR TRAINING
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {data?.title ? (
                    <>
                      {data.title.split(" ").slice(0, -1).join(" ")} {" "}
                      <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                        {data.title.split(" ").slice(-1)[0]}
                      </span>
                    </>
                  ) : (
                    <>
                      Sports{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Room
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
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent"></div>

                      {/* Floating Specs */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                              1.2K
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Sq. Ft.
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                              8+
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Indoor Games
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

export default SportsRoomPage;