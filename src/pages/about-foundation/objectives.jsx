import React from 'react';

const objectives = () => {
  return (
    <section className="pt-6 pb-0 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-2.5xl font-bold text-blue-900 mb-4">
            Aims & Objectives
          </h2>
          <p className="text-dark w-110 mx-auto">
            Discover our vision and mission, clearly outlining our goals
            and the steps we take to achieve them.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Image Section */}
          <div className="relative flex-shrink-0">
            
              <img 
                src="/abt 1.png"
                alt="Buddha statue in peaceful garden setting"
                className="w-[360px] h-[402px] object-cover"
              />
            
          </div>

          {/* Text Content */}
          <div className="space-y-2 max-w-[717px] flex-1">
            <div className="prose prose-lg text-dark space-y-8 text-justify">
              <p className="leading-relaxed">
                The Sree Buddha Foundation envisions fostering education rooted in the timeless values
                of kindness, Humanism, and Equality, inspired by the teachings of the Buddha. These
                guiding principles will shape every aspect of our institutions, from the Central School in
                Karunagappally to the Sree Buddha College of Engineering, Pattoor. Our mission is to
                blend these cherished ideals with the scientific spirit of the modern age, encouraging
                rational thinking and a compassionate outlook.
              </p>

              <p className="leading-relaxed">
                We believe education is far more than a path to a career – it is a journey towards the
                holistic development of an individual. It should nurture ethical idealism, preserve our rich
                cultural heritage, and foster the integrated growth of body, mind, and emotions to create
                balanced, well-rounded personalities.
              </p>

              <p className="leading-relaxed">
                Through a carefully planned daily routine, we aim to cultivate not only knowledge but
                also moral strength, spiritual depth, and intellectual curiosity. By offering ample
                opportunities in academics, arts, sports, and co-curricular activities, the school
                encourages healthy competition while granting pupils the freedom to explore, express,
                and evolve into confident, responsible individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default objectives;