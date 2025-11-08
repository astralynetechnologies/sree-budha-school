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

const EventsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData = {
          title: "School Events",
          subtitle:
            "Celebrating Learning, Culture, Sports, and Community Spirit",
          mainImage: {
            url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
            alt: "School events and celebrations",
          },
          categories: [
            { id: "all", name: "All Events", icon: "🎯" },
            { id: "cultural", name: "Cultural", icon: "🎭" },
            { id: "sports", name: "Sports", icon: "⚽" },
            { id: "celebration", name: "Celebrations", icon: "🎉" },
            { id: "competition", name: "Competitions", icon: "🏆" },
          ],
          upcomingEvents: [
            {
              id: "e1",
              title: "Annual Sports Day",
              category: "sports",
              date: "December 15, 2024",
              time: "9:00 AM - 4:00 PM",
              venue: "School Sports Ground",
              description: "Inter-house athletics competition featuring track and field events, relay races, and team sports. Students compete for house championships with medals and trophies for winners.",
              image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80",
              highlights: [
                "100m, 200m, 400m races",
                "Long jump & High jump",
                "Team relay competitions",
                "Prize distribution ceremony"
              ],
            },
            {
              id: "e2",
              title: "Science Exhibition",
              category: "competition",
              date: "December 20, 2024",
              time: "10:00 AM - 2:00 PM",
              venue: "Main Auditorium",
              description: "Students showcase innovative science projects, working models, and experiments. Expert judges evaluate creativity, scientific approach, and presentation skills.",
              image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80",
              highlights: [
                "Working models display",
                "Live demonstrations",
                "Judging by experts",
                "Awards for best projects"
              ],
            },
            {
              id: "e3",
              title: "Winter Carnival",
              category: "celebration",
              date: "December 28, 2024",
              time: "11:00 AM - 5:00 PM",
              venue: "School Campus",
              description: "End-of-year celebration with games, food stalls, cultural performances, talent shows, and fun activities for students and families.",
              image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
              highlights: [
                "Game stalls & competitions",
                "Food court",
                "Cultural performances",
                "Family fun activities"
              ],
            },
          ],
          recentEvents: [
            {
              id: "r1",
              title: "Independence Day Celebration",
              category: "celebration",
              date: "August 15, 2024",
              description: "Flag hoisting ceremony followed by cultural programs, patriotic songs, and speeches celebrating India's independence.",
              image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=400&q=80",
              gallery: 45,
            },
            {
              id: "r2",
              title: "Inter-School Debate Competition",
              category: "competition",
              date: "October 5, 2024",
              description: "Students from 15 schools participated in intense debates on current affairs. Our team secured second position overall.",
              image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80",
              gallery: 28,
            },
            {
              id: "r3",
              title: "Diwali Celebration",
              category: "cultural",
              date: "November 1, 2024",
              description: "Vibrant celebration featuring traditional performances, rangoli competition, diya decoration, and cultural programs.",
              image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&q=80",
              gallery: 62,
            },
            {
              id: "r4",
              title: "Annual Day 2024",
              category: "cultural",
              date: "November 20, 2024",
              description: "Grand annual function showcasing student talents through dance, drama, music, and cultural performances. Chief Guest delivered inspiring address.",
              image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80",
              gallery: 120,
            },
            {
              id: "r5",
              title: "Football Tournament Finals",
              category: "sports",
              date: "November 28, 2024",
              description: "Thrilling inter-house football tournament concluded with Red House emerging as champions. Excellent sportsmanship displayed by all.",
              image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80",
              gallery: 38,
            },
            {
              id: "r6",
              title: "Children's Day Celebration",
              category: "celebration",
              date: "November 14, 2024",
              description: "Special day dedicated to students with fun games, teacher performances, puppet shows, and treats for all children.",
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
              gallery: 52,
            },
          ],
          eventStats: [
            { label: "Annual Events", value: "50+", icon: "📅" },
            { label: "Cultural Programs", value: "20+", icon: "🎭" },
            { label: "Sports Competitions", value: "15+", icon: "🏅" },
            { label: "Student Participation", value: "100%", icon: "👥" },
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

  const filteredUpcomingEvents = data?.upcomingEvents?.filter(
    event => selectedCategory === "all" || event.category === selectedCategory
  );

  const filteredRecentEvents = data?.recentEvents?.filter(
    event => selectedCategory === "all" || event.category === selectedCategory
  );

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
              <Skeleton height={8} width={120} className="mx-auto mb-6 rounded-full" baseColor="#f3f4f6" highlightColor="#e5e7eb" />
              <Skeleton height={48} width={400} className="mx-auto mb-6" baseColor="#f3f4f6" highlightColor="#e5e7eb" />
              <Skeleton height={24} width={600} className="mx-auto" baseColor="#f3f4f6" highlightColor="#e5e7eb" count={2} />
            </>
          ) : error ? (
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full border border-red-200 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-red-600 font-semibold text-sm tracking-wide">ERROR</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Unable to Load Content</h2>
              <p className="text-lg text-red-600">{error}</p>
            </div>
          ) : (
            <>
              <Reveal>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full border border-blue-300 mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold text-sm tracking-wide">
                    SCHOOL ACTIVITIES
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  School{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                    Events
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

        {/* Event Statistics */}
        {!loading && !error && data?.eventStats && (
          <div className="mb-16">
            <Reveal delay={300}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.eventStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}

        {/* Category Filter */}
        {!loading && !error && data?.categories && (
          <Reveal delay={400}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {data.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Upcoming Events Section */}
        {!loading && !error && filteredUpcomingEvents && filteredUpcomingEvents.length > 0 && (
          <div className="mb-20">
            <Reveal delay={500}>
                <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Upcoming{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Events
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Mark your calendars for these exciting upcoming activities
              </p>
            </Reveal>

            <div className="space-y-8">
              {filteredUpcomingEvents.map((event, index) => (
                <Reveal key={event.id} delay={600 + index * 100}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="relative h-64 lg:h-auto">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </div>
                      </div>
                      <div className="p-6 lg:p-8">
                        <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                          {event.title}
                        </h4>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-gray-600">
                            <span className="text-xl">📅</span>
                            <span className="font-semibold">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <span className="text-xl">⏰</span>
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <span className="text-xl">📍</span>
                            <span>{event.venue}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="space-y-2">
                          <h5 className="font-bold text-gray-900">Highlights:</h5>
                          <ul className="space-y-1">
                            {event.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <span className="text-blue-600 mt-1">▪</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Recent Events Gallery */}
        {!loading && !error && filteredRecentEvents && filteredRecentEvents.length > 0 && (
          <div className="mb-20">
            <Reveal delay={800}>
                <h3 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Recent{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Events
                </span>
              </h3>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Highlights from our recent celebrations and activities
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecentEvents.map((event, index) => (
                <Reveal key={event.id} delay={900 + index * 100}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center justify-between">
                          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                            {event.date}
                          </span>
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            📸 {event.gallery} photos
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <Reveal delay={1100}>
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-8 lg:p-12 shadow-2xl text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Follow our social media channels to stay updated on all upcoming events, celebrations, and student achievements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                View Event Calendar
              </button>
              <button className="bg-purple-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-purple-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 right-32 w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 left-32 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
    </div>
  );
};

export default EventsPage;