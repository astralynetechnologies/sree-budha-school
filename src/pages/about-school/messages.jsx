import React from "react";

const messages = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
            Words from Our Leaders
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Hear from the visionary leaders who guide our school's mission and
            commitment to excellence in education.
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 text-justify">
          {/* Chairman's Message */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 overflow-hidden">
            <div className="relative mb-6">
              <div className="flex items-start">
                <div className="relative flex-shrink-0">
                  <img 
                    src="/chairman.png" 
                    alt="" 
                    className="rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-cover object-center z-30 relative"
                  />
                  <span
                    style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
                    className="absolute top-0 left-12 sm:left-16 lg:left-16 bg-primary h-8 sm:h-9 w-56 sm:w-68 lg:w-80 text-white flex items-center justify-center text-center text-sm sm:text-base font-medium z-20"
                  >
                    Chairman's Message
                  </span>
                </div>
                <div className="ml-4 sm:ml-6 lg:ml-8 mt-10 sm:mt-8 md:mt-15 flex flex-col justify-center">
                  <p className="text-base sm:text-lg font-semibold text-blue-900">Prof. K. Sasikumar</p>
                  <p className="text-xs sm:text-sm text-gray-600">Founder Chairman</p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-[15px]">
              <p>
                It is truly remarkable that Sree Buddha Central School has
                completed 30 years of dedicated service in the field of
                education. In the life of an educational institution, thirty years
                is but a brief chapter, for such establishments are meant to
                endure for centuries, shaping generations and leaving a lasting
                legacy. Every great journey begins with a humble step, guided by
                the vision and mission of its founders. Over time, it grows, much
                like a peepal tree, offering shade and bearing fruit for
                countless individuals.
              </p>
              <p>
                In this relatively short span, Sree Buddha Central School has
                earned a distinguished reputation as a centre of excellence. This
                achievement is undoubtedly the result of the tireless efforts of
                everyone connected to the institution, including the unwavering
                support of the public. The growth and longevity of any
                institution depend on the service it renders to society, and I am
                confident that Sree Buddha Central School will continue to stand
                the test of time, nurturing young minds and serving humanity for
                generations to come.
              </p>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 overflow-hidden">
            <div className="relative mb-6">
              <div className="flex items-start">
                <div className="relative flex-shrink-0">
                  <img 
                    src="/principal.png" 
                    alt="" 
                    className="rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-cover object-center z-30 relative"
                  />
                  <span
                    style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
                    className="absolute top-0 left-12 sm:left-16 lg:left-16 bg-primary h-8 sm:h-9 w-56 sm:w-64 lg:w-80 text-white flex items-center justify-center text-center text-sm sm:text-base font-medium z-20"
                  >
                    Principal's Message
                  </span>
                </div>
                <div className="ml-4 sm:ml-6 lg:ml-8 mt-10 sm:mt-8 md:mt-15 flex flex-col justify-center">
                  <p className="text-base sm:text-lg font-semibold text-blue-900">Mr. Vijayakumar K</p>
                  <p className="text-xs sm:text-sm text-gray-600">The guiding force behind our success</p>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-[15px]">
              <p>
                As the Principal, I feel privileged to lead an institution where
                every stakeholder is a learner and each day brings new
                opportunities to grow and discover. At Sree Buddha Central
                School, learning is a shared journey for students, teachers, and
                staff alike. We value the vital role of parents as partners in
                shaping the future of their children, believing that a strong
                home–school connection greatly benefits a child's growth.
              </p>
              <p>
                Our mission goes beyond academic excellence. We aim to inspire
                lifelong learners, critical thinkers, and responsible citizens who
                can thrive in a rapidly changing world. Guided by the vision of
                the Sree Buddha Foundation, the school strives to blend strong
                values with academics and extracurricular activities, ensuring
                holistic development.
              </p>
              <p>
                With child-centric approaches and evolving teaching methods, we
                make learning engaging and effective. The success of our alumni,
                excelling in fields such as engineering, medicine, business, and
                administration, is a testament to the school's commitment to
                excellence and its enduring impact on society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default messages;