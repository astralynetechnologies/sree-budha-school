import React from 'react';

const missionandvission = () => {
  return (
    <section className="pt-6 pb-0 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-2.5xl font-bold text-blue-900 mb-4">
            Mission & Vision
          </h2>
          <p className="text-dark max-w-110 mx-auto">
            Discover our purpose and future goals-learn what drives us and where we're headed.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Image Section */}
          <div className="relative flex-shrink-0">
            
              <img 
                src="/abt 1.png"
                alt="Buddha statue in peaceful garden setting"
                className="w-[380px] h-[453px] object-cover"
              />
            
          </div>

          {/* Text Content */}
          <div className="space-y-2 max-w-[717px] flex-1">
            <div className="prose prose-lg text-dark space-y-8 text-justify">
              <p className="leading-relaxed">
                The cardinal points of the teaching of Lord Buddha viz Kindness, Humanism and Equality,
                is the guiding Philosophy of this institution. Special efforts are made, to inculcate
                these cherished values into the minds of the pupils. The scientific temper of the Buddhist
                teachings and its rationality are in perfect harmony with the scientific spirit of the modern age.
                The purpose of education is not merely training a child for a career to earn his livelihood.
                Education should aim at the all round development of the individual and help him to become
                inheritor of our cultural heritage. Education should inculcate ethical idealism and try to bring out,
                what is within. There should be an integrated growth of the body, mind and emotions, so as to
                become a balanced personality. The school strives to achieve these aims by planning the daily
                routine of the institution. A sense of competitive spirit is essential to excel in this age.
                The school provides ample opportunities for the pupil’s physical, intellectual, moral and spiritual
                growth. Absolute freedom is given to the pupils for the development of the personality.
              </p>

              <p className="leading-relaxed">
              The Sree Buddha Foundation aims at providing quality education at various levels. After the establishment of the Central School in Karunagappally, Sree Buddha College of Engineering, Pattoor came into existence under the sponsorship of the foundation. Later, two more institutions viz.,  Sree  Buddha College of Engineering for women, Elavumthitta and Sree Buddha Central School, Pattoor were also established.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default missionandvission;