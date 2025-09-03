import React from "react";

const messages = () => {
  return (<>
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Words from Our Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the visionary leaders who guide our school's mission and
            commitment to excellence in education.
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Chairman's Message */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">

          <div className="flex">
            <img src="/chairman.png" alt="" className="rounded-full w-36 h-36 object-cover z-30"/>
            <span
              style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
              className="absolute bg-primary h-9 w-102 ml-16 text-white flex items-center justify-center text-center"
            >
              Chairman's Message
            </span>

            <div className="ml-8 mt-8 flex flex-col justify-center z-40 relative">
              <p className="text-lg font-semibold text-blue-900">Prof. K. Sasikumar</p>
              <p className="text-sm text-gray-600">Founder Chairman</p>
            </div>

          </div>

            {/* Message */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
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
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
            {/* Header */}
            <div className="flex">
            <img src="/principal.png" alt="" className="rounded-full w-36 h-36 object-cover z-30"/>
            <span
              style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
              className="absolute bg-primary h-9 w-102 ml-16 text-white flex items-center justify-center text-center"
            >
              Principal's Message
            </span>

            <div className="ml-8 mt-8 flex flex-col justify-center z-40 relative">
              <p className="text-lg font-semibold text-blue-900">Mr. Vijayakumar K</p>
              <p className="text-sm text-gray-600">The guiding force behind our success</p>
            </div>

          </div>
          

            {/* Message */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
              <p>
                As the Principal, I feel privileged to lead an institution where
                every stakeholder is a learner and each day brings new
                opportunities to grow and discover. At Sree Buddha Central
                School, learning is a shared journey for students, teachers, and
                staff alike. We value the vital role of parents as partners in
                shaping the future of their children, believing that a strong
                home–school connection greatly benefits a child’s growth.
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
                administration, is a testament to the school’s commitment to
                excellence and its enduring impact on society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    
  </>);
};

export default messages;
