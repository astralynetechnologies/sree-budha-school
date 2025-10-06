import { useEffect, useState, useRef } from "react";
import QuickInformation from "@/components/QuickInformation";
import SchoolEvents from "@/components/SchoolEvents";
import LeadersMessages from "@/components/LeadersMessages";
import Gallery from "@/components/Gallery";
import AnnouncementBoard from "@/components/AnnouncementBoard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Scroll-reveal component using IntersectionObserver
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
      : "translate-y-6"; // default up

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

export default function Home() {
  // State for CMS images
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch images from Payload CMS
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/image`);
        const data = await response.json();
        
        if (data.docs?.length > 0) {
          const imageUrls = data.docs
            .map(doc => doc.photo?.url)
            .filter(Boolean); // Remove any null/undefined URLs
          
          setImages(imageUrls.length > 0 ? imageUrls : ["/school-front.png", "/biology-lab.png", "/digital-class-room.png"]);
        } else {
          setImages(["/school-front.png", "/biology-lab.png", "/digital-class-room.png"]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setImages(["/school-front.png", "/biology-lab.png", "/digital-class-room.png"]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  // Image carousel effect
  useEffect(() => {
    if (images.length <= 1 || isLoading) return; // Skip rotation if only one image or still loading
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length, isLoading]);

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Shimmer/Skeleton component for hero section
  const HeroSkeleton = () => (
    <div className="relative h-[55vh] md:h-[60vh] lg:h-[70vh] overflow-hidden rounded-lg animate-pulse">
      {/* Shimmer background */}
      <div className="absolute inset-0">
        <Skeleton 
          height="100%" 
          width="100%" 
          containerClassName="h-full"
          className="rounded-lg"
          style={{ 
            background: 'linear-gradient(90deg,#f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite'
          }}
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* Content overlay with skeleton */}
      <div className="relative z-10 h-full flex items-end justify-start p-4 md:p-6 lg:p-8">
        {/* AnnouncementBoard - will handle its own loading */}
        <div className="relative z-30">
          <AnnouncementBoard />
        </div>
        
        {/* Skeleton for potential hero content */}
        <div className="flex-1 flex items-end justify-end pr-4">
          <div className="space-y-4">
            <Skeleton height={32} width={300} />
            <Skeleton height={24} width={200} />
          </div>
        </div>
      </div>

      {/* Navigation buttons skeleton */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
        <Skeleton height={48} width={48} circle />
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
        <Skeleton height={48} width={48} circle />
      </div>

      {/* Indicators skeleton */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        <Skeleton height={12} width={12} circle />
        <Skeleton height={12} width={12} circle />
        <Skeleton height={12} width={12} circle />
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in">
      {/* Hero Section with Background Carousel */}
      <div className="relative animate-slide-up">
        {isLoading ? (
          <HeroSkeleton />
        ) : (
          <>
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-[background-image] duration-700 animate-zoom-in animation-delay-100"
              style={{ 
                backgroundImage: images.length === 0
                  ? `url('/school-front.png')`
                  : `url('${images[currentIndex]}')`
              }}
            />
            {/* Subtle overlay for contrast */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none animate-fade-in animation-delay-200" />

            {/* Content overlay */}
            <div className="relative z-10 h-[55vh] md:h-[60vh] lg:h-[70vh] flex items-end justify-start p-4 md:p-6 lg:p-8 animate-slide-up animation-delay-300">
              {/* Dropdown Button */}
              <div className="animate-bounce-in animation-delay-400">
                <AnnouncementBoard />
              </div>
            </div>

            {/* Navigation Buttons - only show if we have multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#0D47A1] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 opacity-40 animate-slide-right animation-delay-500"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#0D47A1] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 opacity-40 animate-slide-left animation-delay-600"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 animate-fade-in-up animation-delay-700">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 animate-pop-in animation-delay-${700 + index * 100} ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <Reveal>
        <QuickInformation />
      </Reveal>

      <div className="min-h-screen bg-white">
        {/* Hero Section with School Image */}
        <Reveal>
        <div 
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/school_sample.png')`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              Welcome to Sree Buddha Central School
            </h1>
          </div>
        </div>
        </Reveal>

        {/* About Us Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Reveal>
            <h2 className="text-2xl font-bold text-primary mb-6">About Us</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <Reveal delay={100}>
              <p className="mb-4">
                Sree Buddha Central School, Karunagappally, was established in 1993 under the management of the Sree Buddha Foundation, Kollam. The Foundation is a registered voluntary social and cultural organization dedicated to promoting the noble teachings of Sree Buddha.
              </p>
              
              <p className="mb-4">
                The school was inaugurated on 7 June 1993 at its temporary campus in Karunagappally and moved to its permanent location at Edakulangara on 1 June 1994. What began with just 83 students and 5 teachers has now grown into a thriving institution with more than 3,500 students, 140 teachers, and 60 non-teaching staff.
              </p>
            </Reveal>
            
            <Reveal delay={200} from="right">
              <p className="mb-4">
                This growth has been possible thanks to the strong support of parents, the local community, and the dedicated efforts of our management and staff. Today, Sree Buddha Central School stands as a place where academic excellence and values go hand in hand, nurturing confident and responsible citizens.
              </p>
              
              <p>
                With a focus on holistic development, the school offers a balanced blend of academics, extracurricular activities, and life skills training, ensuring every child is prepared to face the challenges of the future with confidence and compassion.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Foundation Section */}
        <Reveal>
        <div className="bg-primary text-white py-10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-3xl font-bold mb-2">Sree Buddha Foundation</h2>
            </Reveal>
            <Reveal delay={100}>
              <span className="text-base mb-4 block">We make your child happy day after day</span>
            </Reveal>
            <Reveal delay={200}>
              <div className="p-0.5 bg-secondary rounded-2xl max-w-64 m-auto my-2"></div>
            </Reveal>
            
            <Reveal delay={300}>
            <p className="text-l leading-relaxed">
              The Sree Buddha Foundation has many programmes on the anvil. The first project is the Central School in Karunagappally. Sree Buddha College of Engineering, Pattoor is another venture sponsored by the Foundation. The cardinal points of the teaching of the Buddha viz kindness, humanism and equality, will be the guiding philosophy of this institution. Special efforts will be made, to inculcate these cherished values into the minds of the pupils. The scientific temper of the Buddhist teachings and its rationality are in perfect harmony with the scientific spirit of the modern age.
            </p>
            </Reveal>
          </div>
        </div>
        </Reveal>

        <Reveal>
          <SchoolEvents />
        </Reveal>

        <Reveal delay={100}>
          <LeadersMessages />
        </Reveal>

        <Reveal>
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-md mx-auto">
            <figure className="text-center">
              {/* Quote Icon */}
              <svg 
                className="w-10 h-10 mx-auto mb-3 text-blue-900" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>

              {/* Quote Text */}
              <blockquote>
                <p className="text-2xl italic font-medium text-gray-900">
                  "Together, we are building a foundation for excellence that will last generations"
                </p>
              </blockquote>

              {/* Attribution */}
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <cite className="pe-3 font-medium text-gray-900">Our Shared Vision</cite>
                  <cite className="ps-3 text-sm text-gray-500">for Sree Buddha Central School</cite>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        </Reveal>

        <Reveal>
          <Gallery />
        </Reveal>
      </div>
    </div>
  );
}