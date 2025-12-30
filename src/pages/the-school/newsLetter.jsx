import React, { useEffect, useState, useRef } from 'react';

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

const AnnualNewsletter = () => {
  const newsletters = [
    {
      year: "2024-25",
      title: "Building Tomorrow Together",
      description: "Highlights of academic achievements, cultural events, sports victories, and student success stories from the academic year 2024-25.",
      coverImage: "📰",
      pdfUrl: "/documents/newsletter-2024-25.pdf",
      featured: true
    },
    {
      year: "2023-24",
      title: "Excellence in Education",
      description: "A comprehensive look at our school's achievements, new initiatives, and memorable moments from the year 2023-24.",
      coverImage: "📑",
      pdfUrl: "/documents/newsletter-2023-24.pdf",
      featured: false
    },
    {
      year: "2022-23",
      title: "Journey of Growth",
      description: "Celebrating three decades of excellence with special features on alumni achievements and school milestones.",
      coverImage: "📄",
      pdfUrl: "/documents/newsletter-2022-23.pdf",
      featured: false
    }
  ];

  const highlightCards = [
    {
      icon: "🏆",
      title: "Achievements",
      description: "Academic excellence, sports victories, and competition wins"
    },
    {
      icon: "🎭",
      title: "Events & Activities",
      description: "Cultural programs, celebrations, and special occasions"
    },
    {
      icon: "👨‍🎓",
      title: "Student Stories",
      description: "Inspiring tales of student success and leadership"
    },
    {
      icon: "🌟",
      title: "Faculty Features",
      description: "Dedicated teachers and their innovative approaches"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D47A1] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 bg-[#0D47A1]/10 rounded-full border border-[#0D47A1]/20 mb-6">
              <div className="w-2 h-2 bg-[#0D47A1] rounded-full mr-2 animate-pulse"></div>
              <span className="text-[#0D47A1] font-semibold text-sm tracking-wide">PUBLICATIONS</span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Annual <span className="bg-gradient-to-r from-[#0D47A1] to-[#1565C0] bg-clip-text text-transparent">Newsletter</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating our journey, achievements, and memories from each academic year
            </p>
          </Reveal>
        </div>

        {/* What's Inside Cards */}
        <div className="mb-16">
          <Reveal delay={300}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What's Inside Our Newsletter
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightCards.map((card, index) => (
              <Reveal key={index} delay={400 + index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border-t-4 border-[#0D47A1]">
                  <div className="text-5xl mb-3">{card.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Featured Newsletter */}
        <Reveal delay={500}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Latest Edition
            </h2>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2">
                {/* Left side - Cover */}
                <div className="bg-gradient-to-br from-[#0D47A1] to-[#1565C0] p-12 flex flex-col items-center justify-center text-white">
                  <div className="text-8xl mb-6">{newsletters[0].coverImage}</div>
                  <div className="text-center">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <span className="font-bold text-lg">Academic Year {newsletters[0].year}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{newsletters[0].title}</h3>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="p-12">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      New Release
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {newsletters[0].description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-[#0D47A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Full color digital magazine</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-[#0D47A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>50+ pages of content</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-[#0D47A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Photo gallery & memories</span>
                    </div>
                  </div>

                  <a 
                    href={newsletters[0].pdfUrl}
                    download
                    className="group inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-[#0D47A1] to-[#1565C0] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Newsletter
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Previous Editions */}
        <div>
          <Reveal delay={600}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Previous Editions
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {newsletters.slice(1).map((newsletter, index) => (
              <Reveal key={index} delay={700 + index * 100}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-8 text-center">
                    <div className="text-6xl mb-4">{newsletter.coverImage}</div>
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                      <span className="font-bold text-white text-sm">Year {newsletter.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{newsletter.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {newsletter.description}
                    </p>
                    
                    <a 
                      href={newsletter.pdfUrl}
                      download
                      className="group inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 hover:bg-[#0D47A1] text-gray-700 hover:text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Reveal delay={900}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-400 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Want to Contribute?
              </h3>
              <p className="text-gray-700 mb-6">
                We welcome contributions from students, parents, and faculty for our annual newsletter. Share your stories, achievements, and memories with the SBCS community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:sbcskarunagappally@gmail.com?subject=Newsletter Contribution"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0D47A1] text-white font-semibold rounded-lg hover:bg-[#1565C0] transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Submit Your Story
                </a>
                <a 
                  href="tel:04762662489"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0D47A1] font-semibold rounded-lg border-2 border-[#0D47A1] hover:bg-[#0D47A1] hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-[#0D47A1] rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-[#0D47A1] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
};

export default AnnualNewsletter;