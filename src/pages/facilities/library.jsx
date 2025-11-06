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

const LibraryPage = () => {
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
          title: "School Library",
          subtitle:
            "A Gateway to Knowledge, Imagination, and Lifelong Learning",
          mainImage: {
            url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
            alt: "Modern school library interior",
          },
          galleryImages: [
            {
              id: "g1",
              url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80",
              alt: "Library reading area",
            },
            {
              id: "g2",
              url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80",
              alt: "Book shelves",
            },
            {
              id: "g3",
              url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
              alt: "Study spaces",
            },
          ],
          content: [
            {
              id: "1",
              paragraph:
                "The Library at Sree Buddha Central School is more than just a collection of books—it's a vibrant learning ecosystem that nurtures curiosity, fosters independent thinking, and opens doors to infinite worlds of knowledge. Our thoughtfully curated space serves as the intellectual heart of our institution, where students discover the joy of reading and develop essential research skills.",
            },
            {
              id: "2",
              paragraph:
                "Housing an extensive collection spanning diverse genres, subjects, and formats, our library caters to learners of all ages and interests. From classic literature and contemporary fiction to reference materials, encyclopedias, periodicals, and digital resources, we provide comprehensive access to information that supports both curricular requirements and personal enrichment.",
            },
            {
              id: "3",
              paragraph:
                "Our modern facility features comfortable reading zones, collaborative study areas, individual research carrels, and a dedicated children's section designed to make reading an enjoyable experience. Natural lighting, ergonomic furniture, and a peaceful ambiance create an environment conducive to concentration, creativity, and contemplation.",
            },
            {
              id: "4",
              paragraph:
                "Led by experienced librarians who serve as learning facilitators, our library program emphasizes information literacy, critical thinking, and digital citizenship. Through regular book fairs, author interactions, reading challenges, and literary events, we cultivate a community of passionate readers and lifelong learners who understand that knowledge is the foundation of progress.",
            },
          ],
          features: [
            {
              id: "f1",
              icon: "📚",
              title: "Rich Collection",
              description:
                "Over 10,000 books covering fiction, non-fiction, reference, and academic subjects",
            },
            {
              id: "f2",
              icon: "💻",
              title: "Digital Resources",
              description:
                "E-books, online databases, and educational multimedia content",
            },
            {
              id: "f3",
              icon: "🪑",
              title: "Reading Zones",
              description:
                "Comfortable seating areas designed for focused reading and study",
            },
            {
              id: "f4",
              icon: "🔍",
              title: "Research Support",
              description:
                "Guidance from trained librarians for academic projects and assignments",
            },
            {
              id: "f5",
              icon: "📰",
              title: "Periodicals Section",
              description: "Magazines, newspapers, and journals for current affairs and hobbies",
            },
            {
              id: "f6",
              icon: "🎨",
              title: "Activity Programs",
              description: "Book clubs, storytelling sessions, and literary competitions",
            },
          ],
          useCases: [
            {
              id: "u1",
              title: "Academic Research",
              description:
                "Comprehensive reference materials and resources for project work and assignments",
              icon: "🎓",
            },
            {
              id: "u2",
              title: "Recreational Reading",
              description:
                "Fiction, adventure, mystery, and fantasy books for leisure and enjoyment",
              icon: "📖",
            },
            {
              id: "u3",
              title: "Competitive Exams",
              description:
                "Preparation materials for entrance tests, olympiads, and various competitions",
              icon: "🏆",
            },
            {
              id: "u4",
              title: "Digital Learning",
              description:
                "Access to educational videos, e-learning platforms, and interactive content",
              icon: "💡",
            },
          ],
          specifications: [
            { label: "Collection", value: "10,000+" },
            { label: "Seating", value: "80 Students" },
            { label: "Open Hours", value: "8 AM - 4 PM" },
            { label: "Daily Visitors", value: "200+" },
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
                    KNOWLEDGE HUB
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {data?.title ? (
                    <>
                      {data.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                        {data.title.split(" ").slice(-1)[0]}
                      </span>
                    </>
                  ) : (
                    <>
                      School{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Library
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
                              10K+
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Books
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                              80
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Seats
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

export default LibraryPage;