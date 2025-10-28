import React, { useEffect, useState, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Scroll-reveal component
function Reveal({ children, className = "", delay = 0, threshold = 0.15, from = "up" }) {
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
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const AuditoriumPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - replace with actual API call
        const mockData = {
          title: "School Auditorium",
          subtitle: "A Premier Venue for Cultural Excellence, Performances, and Community Gatherings",
          mainImage: {
            url: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
            alt: "Modern school auditorium interior"
          },
          galleryImages: [
            {
              id: "g1",
              url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
              alt: "Auditorium stage view"
            },
            {
              id: "g2",
              url: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=400&q=80",
              alt: "Seating arrangement"
            },
            {
              id: "g3",
              url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=400&q=80",
              alt: "Audio visual setup"
            }
          ],
          content: [
            {
              id: "1",
              paragraph: "The Sree Buddha Central School Auditorium stands as a testament to our commitment to holistic education. This state-of-the-art facility serves as the cultural heart of our institution, hosting a diverse array of events from academic seminars and cultural performances to inter-school competitions and community gatherings."
            },
            {
              id: "2",
              paragraph: "With a seating capacity of over 500 people, our auditorium is equipped with modern acoustic engineering, ensuring crystal-clear sound quality for every performance. The spacious stage, complete with professional lighting systems and audio-visual equipment, provides an ideal platform for students to showcase their talents and build confidence."
            },
            {
              id: "3",
              paragraph: "Our facility features comfortable seating with excellent sightlines from every angle, advanced climate control for year-round comfort, and full accessibility provisions. The auditorium includes dedicated green rooms, storage facilities for props and equipment, and a professional-grade sound mixing console."
            },
            {
              id: "4",
              paragraph: "From annual day celebrations and graduation ceremonies to music concerts, drama productions, and motivational talks by distinguished guests, our auditorium has witnessed countless memorable moments. It serves as a bridge between education and expression, where academic learning meets artistic exploration."
            }
          ],
          features: [
            {
              id: "f1",
              icon: "🎭",
              title: "Professional Stage",
              description: "Spacious stage with theatrical lighting and backdrop systems"
            },
            {
              id: "f2",
              icon: "🔊",
              title: "Premium Audio",
              description: "State-of-the-art sound system with acoustic optimization"
            },
            {
              id: "f3",
              icon: "💺",
              title: "Comfortable Seating",
              description: "500+ ergonomic seats with excellent viewing angles"
            },
            {
              id: "f4",
              icon: "🎬",
              title: "AV Equipment",
              description: "HD projectors, screens, and multimedia capabilities"
            },
            {
              id: "f5",
              icon: "❄️",
              title: "Climate Control",
              description: "Central air conditioning for optimal comfort"
            },
            {
              id: "f6",
              icon: "♿",
              title: "Accessibility",
              description: "Wheelchair accessible with dedicated seating areas"
            }
          ],
          events: [
            {
              id: "e1",
              title: "Annual Day Celebrations",
              description: "Showcase of student talents and achievements"
            },
            {
              id: "e2",
              title: "Cultural Programs",
              description: "Dance, music, and drama performances"
            },
            {
              id: "e3",
              title: "Academic Seminars",
              description: "Guest lectures and educational workshops"
            },
            {
              id: "e4",
              title: "Inter-School Events",
              description: "Competitions and collaborative programs"
            }
          ]
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
    <div className="relative bg-gradient-to-br from-red-50 via-white to-orange-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600 rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-400 rounded-full"></div>
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
                <span className="text-red-600 font-semibold text-sm tracking-wide">ERROR</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Unable to Load Content
              </h2>
              <p className="text-lg text-red-600">{error}</p>
            </div>
          ) : (
            <>
              <Reveal>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full border border-red-300 mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent font-semibold text-sm tracking-wide">CULTURAL CENTER</span>
                </div>
              </Reveal>
              
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {data?.title ? (
                    <>
                      {data.title.split(' ').slice(0, -1).join(' ')}{' '}
                      <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                        {data.title.split(' ').slice(-1)[0]}
                      </span>
                    </>
                  ) : (
                    <>
                      School <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Auditorium</span>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-transparent"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                        <p className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">500+</p>
                        <p className="text-xs text-gray-600 font-semibold">Seating Capacity</p>
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
                      <Reveal key={item.id} delay={500 + index * 100} from="right">
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
                World-Class <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Facilities</span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Experience excellence with our modern amenities and infrastructure
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.features.map((feature, index) => (
                <Reveal key={feature.id} delay={700 + index * 100}>
                  <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
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

        {/* Events Section */}
        {!loading && !error && data?.events && (
          <div className="mb-20">
            <Reveal delay={900}>
              <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Hosted <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Events</span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                A versatile space for diverse programs and celebrations
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {data.events.map((event, index) => (
                <Reveal key={event.id} delay={1000 + index * 100}>
                  <div className="bg-gradient-to-br from-white to-red-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-red-100">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h4>
                        <p className="text-gray-600">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial Section */}
        {!loading && !error && (
          <Reveal delay={1100}>
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 lg:p-12 shadow-2xl mb-20">
              <div className="text-center text-white max-w-3xl mx-auto">
                <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
                  "The auditorium at Sree Buddha Central School has been the venue for some of our most cherished memories. From our first stage performance to the graduation ceremony, this space has witnessed our growth and achievements."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Alumni Testimonial</p>
                    <p className="text-sm text-red-100">Class of 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Call to Action Section */}
        {/* {!loading && !error && (
          <Reveal delay={1200}>
            <div className="text-center pt-12 border-t border-gray-200">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Book Our Auditorium
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Interested in hosting an event at our state-of-the-art facility? Get in touch with us for bookings and inquiries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="/gallery/auditorium" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </Reveal>
        )} */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-32 w-3 h-3 bg-red-600 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-32 w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
};

export default AuditoriumPage;