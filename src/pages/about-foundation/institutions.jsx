import React from 'react';

const institutions = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
          Our Institutions
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Your gateway to important institutional information,<br />
          services, and updates — all in one place.
        </p>
      </div>

      {/* Institutions Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Engineering College Card */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-96">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzSvkbhl6EX2etnMBsYb06rM7AvzqL6Z9Vg&s"
                alt="Sree Bhudha College Of Engineering"
                className="w-full h-full object-fill"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-opacity-50"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Sree Bhudha College Of Engineering
                </h3>
                <p className="text-lg text-white mb-6 opacity-90">
                  Approved by AICTE and Affiliated by APJ Abdul Kalam University
                </p>
                <button className="w-full py-4 rounded-lg font-semibold text-lg bg-secondary text-primary hover:bg-yellow-300 transition-colors duration-200">
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Central School Card */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-96">
              <img 
                src="/school_sample.png"
                alt="Sree Bhudha Central School"
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-opacity-50"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Sree Bhudha Central School
                </h3>
                <p className="text-lg text-white mb-6 opacity-90">
                  We make your child happy day after day
                </p>
                <button className="w-full py-4 rounded-lg font-semibold text-lg bg-secondary text-primary hover:bg-yellow-300 transition-colors duration-200">
                  Contact
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default institutions;