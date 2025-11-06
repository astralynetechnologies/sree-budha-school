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

const PrimaryPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData = {
          title: "Primary Section",
          subtitle:
            "Building Strong Academic Foundations with Joy and Excellence",
          mainImage: {
            url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
            alt: "Primary school students in classroom",
          },
          galleryImages: [
            {
              id: "g1",
              url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
              alt: "Students learning together",
            },
            {
              id: "g2",
              url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
              alt: "Interactive classroom activities",
            },
            {
              id: "g3",
              url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
              alt: "Engaged primary learners",
            },
          ],
          content: [
            {
              id: "1",
              paragraph:
                "The Primary Section at Sree Buddha Central School marks the beginning of formal academic education, where young minds transition from play-based learning to structured academics. Catering to students from Classes I to V (ages 6-10 years), this crucial phase lays the foundation for all future learning. Our carefully designed curriculum balances academic rigor with creative exploration, ensuring that students not only master fundamental concepts in language, mathematics, science, and social studies but also develop critical thinking, problem-solving abilities, and a genuine love for learning.",
            },
            {
              id: "2",
              paragraph:
                "Our experienced faculty employs innovative teaching methodologies that make learning engaging and meaningful. Through interactive lessons, hands-on activities, visual aids, educational technology, and collaborative projects, we ensure that every child grasps concepts thoroughly. The curriculum follows CBSE guidelines while incorporating experiential learning, value education, and skill development programs. Special attention is given to reading habits, computational skills, scientific temper, and creative expression through various co-curricular activities integrated into the daily schedule.",
            },
            {
              id: "3",
              paragraph:
                "We recognize that primary education shapes not just academic abilities but also character, confidence, and social skills. Our supportive learning environment encourages students to ask questions, express ideas, make mistakes, and learn from them. Regular assessments, personalized attention, and parent-teacher collaboration ensure that each child receives the guidance needed to excel. With well-equipped classrooms, libraries, laboratories, and activity areas, we provide a comprehensive learning ecosystem that prepares students for the challenges of middle school and beyond.",
            },
          ],
          features: [
            {
              id: "f1",
              icon: "📖",
              title: "CBSE Curriculum",
              description:
                "Comprehensive syllabus aligned with national standards and learning outcomes",
            },
            {
              id: "f2",
              icon: "👨‍🏫",
              title: "Experienced Teachers",
              description:
                "Qualified educators trained in child psychology and modern pedagogy",
            },
            {
              id: "f3",
              icon: "🔬",
              title: "Activity-Based Learning",
              description:
                "Hands-on experiments, projects, and practical activities for better understanding",
            },
            {
              id: "f4",
              icon: "🎯",
              title: "Individual Attention",
              description:
                "Small class sizes ensuring personalized guidance for every student",
            },
            {
              id: "f5",
              icon: "📚",
              title: "Library & Resources",
              description: "Well-stocked library with age-appropriate books and learning materials",
            },
            {
              id: "f6",
              icon: "🏆",
              title: "Holistic Development",
              description: "Focus on academics, sports, arts, and character building",
            },
          ],
          useCases: [
            {
              id: "u1",
              title: "Strong Fundamentals",
              description:
                "Building solid foundations in reading, writing, mathematics, and core subjects",
              icon: "📝",
            },
            {
              id: "u2",
              title: "Life Skills",
              description:
                "Developing communication, teamwork, time management, and problem-solving abilities",
              icon: "🎓",
            },
            {
              id: "u3",
              title: "Creative Expression",
              description:
                "Art, music, drama, and craft activities to nurture creativity and self-expression",
              icon: "🎨",
            },
            {
              id: "u4",
              title: "Values & Ethics",
              description:
                "Instilling moral values, discipline, respect, and responsible citizenship",
              icon: "⭐",
            },
          ],
          specifications: [
            { label: "Grade Levels", value: "I to V" },
            { label: "Age Group", value: "6-10 Yrs" },
            { label: "Class Strength", value: "30-35" },
            { label: "Subjects", value: "8+ Core" },
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
                    FOUNDATIONAL EDUCATION
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
                      Primary{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        Section
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
                              I-V
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Grade Levels
                            </p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                              8+
                            </p>
                            <p className="text-xs text-gray-600 font-semibold">
                              Core Subjects
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
        {/* {!loading && !error && data?.features && (
          <div className="mb-20">
            <Reveal delay={600}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Educational{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Features
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Comprehensive programs designed for holistic growth and academic excellence
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, index) => (
                <Reveal key={feature.id} delay={700 + index * 100}>
                  <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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
        )} */}

        {/* Use Cases Section */}
        {/* {!loading && !error && data?.useCases && (
          <div className="mb-20">
            <Reveal delay={900}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Learning{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Outcomes
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Key competencies and skills students develop during primary education
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {data.useCases.map((useCase, index) => (
                <Reveal key={useCase.id} delay={1000 + index * 100}>
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-3xl shadow-lg">
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
        )} */}

        {/* Specifications Card */}
        {/* {!loading && !error && data?.specifications && (
          <Reveal delay={1100}>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 shadow-2xl mb-20">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Quick Overview
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
                    <p className="text-cyan-100 font-medium">{spec.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )} */}
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

export default PrimaryPage;