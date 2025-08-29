import React from 'react';

const SchoolEvents = () => {
  const events = [
    {
      id: 1,
      title: "Annual School Sports",
      description: "Annual school sports is scheduled for August 12th & 13th, 2025",
      image: "/school-sports.png",
      bgColor: "bg-orange-100"
    },
    {
      id: 2,
      title: "School Arts Day",
      description: "School Arts Day is scheduled for September 4th & 5th, 2025",
      image: "/school-arts.png",
      bgColor: "bg-green-100"
    },
    {
      id: 3,
      title: "Annual Day Celebration",
      description: "Annual day celebration is scheduled for February 12th & 13th, 2026",
      image: "/annual-day.png",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Upcoming Events & Activities
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-dark">
            Stay updated with our exciting school events, academic
            activities, and special programs throughout the year.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Event Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Event Content */}
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#0D47A1' }}
                >
                  {event.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#6E6E6E' }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="text-center">
          <p className="mb-6 text-lg" style={{ color: '#6E6E6E' }}>
            View more upcoming events and activities
          </p>
          <button
            className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-md"
            style={{ backgroundColor: '#0D47A1' }}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchoolEvents;