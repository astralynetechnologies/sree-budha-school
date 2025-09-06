import React from 'react';

const Gallery = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-2xl md:text-3xl font-bold text-[#0D47A1] mb-4">
            Our Gallery
          </h4>
          <p className="text-[#6E6E6E] text-base md:text-lg">
            We make your child happy day after day
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* First Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="w-full h-64 sm:h-80 md:h-[364px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/teacher.png"
                alt="Teacher helping student with schoolwork"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-48 sm:h-60 md:h-[300px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/boy.png"
                alt="Happy child with backpack ready for school"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="w-full h-40 sm:h-44 md:h-[195px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/small-girl.png"
                alt="Child engaged in pottery activity"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-72 sm:h-96 md:h-[469px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/girl.png"
                alt="Teacher and student working together at desk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="w-full h-80 sm:h-96 lg:h-[413px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/annual-day.png"
                alt="Children in traditional costumes performing cultural dance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-56 sm:h-64 lg:h-[251px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/school-arts.png"
                alt="Child focused on pottery craft work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;