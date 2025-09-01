import React from 'react';

const management = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Our Team Section */}
      <div className="text-center mb-12">
        <h4 className="text-3xl font-bold mb-4 text-primary">
          Our Team
        </h4>
       <div className='max-w-120 mx-auto'>
       <p className="text-lg mb-12 text-dark">
          Meet the passionate minds driving our vision forward and making it all happen.
        </p>
       </div>
        
        {/* Top Management Cards */}
        <div className="flex justify-center gap-6 flex-wrap">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="w-[265px] h-[273px] rounded-lg border-2 border-blue-200 bg-accent py-6 transition-colors duration-300 overflow-hidden hover:border-secondary">
                <div className="w-full h-full flex flex-col">
                  {/* Image area */}
                  <div className="flex-1 flex items-center justify-center p-4">
                    <img 
                      src="/chairman.png" 
                      alt="Team Member"
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  {/* Name and designation area */}
                  <div className="h-16 flex flex-col items-center justify-center text-center px-4 bg-secondary">
                    <div className="font-bold text-sm text-dark mb-1">Name Here</div>
                    <div className="text-xs font-medium text-primary uppercase tracking-wide">DESIGNATION</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Members of Executive Committee Section */}
      <div className="text-center">
        <h4 className="text-3xl font-bold mb-12 text-primary">
          Members of Executive Committee
        </h4>
        
        {/* Executive Committee Grid */}
        <div className="space-y-6">
          {/* First Row */}
          <div className="flex justify-center gap-6 flex-wrap">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={`row1-${index}`}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="w-[203px] h-[209px] rounded-lg border-2 py-6 border-blue-200 bg-accent transition-colors duration-300 hover:border-secondary">
                  <div className="w-full h-full flex flex-col">
                    {/* Image area */}
                    <div className="flex-1 flex items-center justify-center p-3">
                      <img 
                        src="/teacher.png" 
                        alt="Executive Committee Member"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    {/* Name and designation area */}
                    <div className="h-12 flex flex-col items-center justify-center text-center px-2 bg-secondary">
                      <div className="font-bold text-xs text-dark mb-0.5">Name Here</div>
                      <div className="text-xs font-medium text-primary uppercase tracking-wide">TITLE</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row */}
          <div className="flex justify-center gap-6 flex-wrap">
            {[6, 7, 8, 9, 10].map((index) => (
              <div
                key={`row2-${index}`}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="w-[203px] h-[209px] rounded-lg border-2 py-6 border-blue-200 bg-accent transition-colors duration-300 hover:border-secondary">
                  <div className="w-full h-full flex flex-col">
                    {/* Image area */}
                    <div className="flex-1 flex items-center justify-center p-3">
                      <img 
                        src="/principal.png" 
                        alt="Executive Committee Member"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    {/* Name and designation area */}
                    <div className="h-12 flex flex-col items-center justify-center text-center px-2 bg-secondary">
                      <div className="font-bold text-xs text-dark mb-0.5">Name Here</div>
                      <div className="text-xs font-medium text-primary uppercase tracking-wide">TITLE</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default management;