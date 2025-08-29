import React from 'react';

const LeadersMessages = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Words from Our Leaders
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Hear from the visionary leaders who guide our school's 
            mission and commitment to excellence in education.
          </p>
        </div>

        {/* Messages Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chairman's Message */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header with Banner */}
            <div className="relative">
              <div 
                className="bg-blue-900 text-white py-4 px-6"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)'
                }}
              >
                <h3 className="text-xl font-semibold">Chairman's Message</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Profile Section */}
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full mr-4 overflow-hidden flex-shrink-0">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNFNUU3RUIiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2Qjc3ODUiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Im0yMCAxNi0yLTJMOSA1bC00IDRMMS0xIi8+Cjwvc3ZnPgo8L3N2Zz4K" 
                    alt="Chairman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Prof. K. Sasikumar</h4>
                  <p className="text-stone-600">Founder Chairman</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>
                  It is truly remarkable that Sree Buddha Central School has completed 
                  30 years of dedicated service in the field of education. In the life of an 
                  educational institution, thirty years is but a brief chapter, for such 
                  establishments are meant to endure for centuries, shaping 
                  generations and leaving a lasting legacy. Every great journey begins 
                  with a humble step, guided by the vision and mission of its founders. 
                  Over time, it grows, much like a peepal tree, offering shade and 
                  bearing fruit for countless individuals.
                </p>
                <p>
                  In this relatively short span, Sree Buddha Central School has earned a 
                  distinguished reputation as a centre of excellence. This achievement 
                  is undoubtedly the result of the tireless efforts of everyone connected 
                  to the institution, including the unwavering support of the public. The 
                  growth and longevity of any institution depend on the service it 
                  renders to society, and I am confident that Sree Buddha Central 
                  School will continue to stand the test of time, nurturing young minds 
                  and serving humanity for generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header with Banner */}
            <div className="relative">
              <div 
                className="bg-blue-900 text-white py-4 px-6"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)'
                }}
              >
                <h3 className="text-xl font-semibold">Principal's Message</h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Profile Section */}
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full mr-4 overflow-hidden flex-shrink-0">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNFNUU3RUIiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2Qjc3ODUiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Im0yMCAxNi0yLTJMOSA1bC00IDRMMS0xIi8+Cjwvc3ZnPgo8L3N2Zz4K" 
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Mr. Vijayakumar K</h4>
                  <p className="text-stone-600">The guiding force behind our success</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                <p>
                  As the Principal, I feel privileged to lead an institution where every 
                  stakeholder is a learner and each day brings new opportunities to 
                  grow and discover. At Sree Buddha Central School, learning is a 
                  shared journey for students, teachers, and staff alike. We value the 
                  vital role of parents as partners in shaping the future of their children, 
                  believing that a strong home-school connection greatly benefits a 
                  child's growth.
                </p>
                <p>
                  Our mission goes beyond academic excellence. We aim to inspire 
                  lifelong learners, critical thinkers, and responsible citizens who can 
                  thrive in a rapidly changing world. Guided by the vision of the Sree 
                  Buddha Foundation, the school strives to blend strong values with 
                  academics and extracurricular activities, ensuring holistic 
                  development.
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
    </div>
  );
};

export default LeadersMessages;