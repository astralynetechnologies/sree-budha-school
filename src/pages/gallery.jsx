import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Sample video data - replace with your actual video sources
  const videos = [
    {
      id: 1,
      thumbnail: "/annual-day.png",
      title: "Annual Day Cultural Performance",
      videoSrc: "/videos/annual-day.mp4" // Replace with your video source
    },
    {
      id: 2,
      thumbnail: "/school-arts.png", 
      title: "Art and Craft Activities",
      videoSrc: "/videos/arts-crafts.mp4"
    },
    {
      id: 3,
      thumbnail: "/teacher.png",
      title: "Interactive Learning Session",
      videoSrc: "/videos/learning.mp4"
    },
    {
      id: 4,
      thumbnail: "/small-girl.png",
      title: "Pottery Workshop",
      videoSrc: "/videos/pottery.mp4"
    },
    {
      id: 5,
      thumbnail: "/girl.png",
      title: "One-on-One Teaching",
      videoSrc: "/videos/teaching.mp4"
    },
    {
      id: 6,
      thumbnail: "/boy.png",
      title: "Happy Moments at School",
      videoSrc: "/videos/happy-moments.mp4"
    }
  ];

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-2xl md:text-3xl font-bold text-[#0D47A1] mb-4">
            Our Gallery
          </h4>
          <p className="text-[#6E6E6E] text-base md:text-lg mb-8">
            We make your child happy day after day
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${
                  activeTab === 'photos'
                    ? 'bg-[#FFB800] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#0D47A1]'
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-2 rounded-md transition-all duration-300 font-medium ${
                  activeTab === 'videos'
                    ? 'bg-[#FFB800] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#0D47A1]'
                }`}
              >
                Videos
              </button>
            </div>
          </div>
        </div>

        {/* Photos Grid */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* First Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="w-full h-64 sm:h-80 md:h-[364px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/teacher.png"
                  alt="Teacher helping student with schoolwork"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full h-48 sm:h-60 md:h-[300px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/boy.png"
                  alt="Happy child with backpack ready for school"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="w-full h-40 sm:h-44 md:h-[195px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/small-girl.png"
                  alt="Child engaged in pottery activity"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full h-72 sm:h-96 md:h-[469px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/girl.png"
                  alt="Teacher and student working together at desk"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Third Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="w-full h-80 sm:h-96 lg:h-[413px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/annual-day.png"
                  alt="Children in traditional costumes performing cultural dance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full h-56 sm:h-64 lg:h-[251px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/school-arts.png"
                  alt="Child focused on pottery craft work"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* Videos Layout */}
        {activeTab === 'videos' && (
          <div className="flex flex-col items-center gap-6">
            {/* Main Featured Video */}
            <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300" 
                 style={{ width: '930px', maxWidth: '100%' }}>
              <div style={{ height: '487px' }}>
                <img 
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300"
                     onClick={() => openVideoModal(videos[0])}>
                  <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-12 h-12 text-[#0D47A1] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Video Thumbnails */}
            <div className="flex flex-wrap justify-center gap-4 max-w-full">
              {videos.slice(1).map((video) => (
                <div 
                  key={video.id}
                  className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ width: '360px', height: '250px' }}
                  onClick={() => openVideoModal(video)}
                >
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-[#0D47A1] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video">
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#0D47A1]">{selectedVideo.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default gallery;