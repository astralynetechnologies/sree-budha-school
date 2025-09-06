import React from 'react';

const labs = () => {
  const academicSections = [
    {
      title: "Computer Science Lab",
      image: "/computer-lab.png",
      text: "Computer Education initiates our young students into the captivating world of computing, and introduces them to its wide and ever increasing range of applications. Computer training has been introduced since June 1996. We make sure that high end machines are available for each child. We have two computer labs each for primary as well as higher section. Primary section computer lab is having 15 computers and higher section having 40 computers, printer, speakers, LCD projector as well as internet connection. Online programmes in addition to competitions are held here. We aim at budding technologically talented team of students."
    },
    {
      title: "ATAL Tinkering Lab",
      image: "/atal-lab.png",
      text: "The Atal Tinkering Lab, established in our school in 2018 under the Atal Innovation Mission by NITI Aayog, is designed to nurture creativity, innovation, and problem-solving skills among students. The lab is equipped with advanced tools such as 3D printers, robotics kits, microcontrollers, and sensors, enabling hands-on learning and bridging the gap between theory and practice. Guided by experts, students work on real-world projects, develop design-thinking skills, and prepare for future challenges in science, technology, and innovation, shaping them into the innovators and entrepreneurs of tomorrow."
    },
    {
      title: "Physics Lab",
      image: "/physics-lab.png",
      text: "What they see is what they learn well and retain – this is the philosophy behind introducing smart class digital learning for students at Sree Buddha. We started Smart Class Facility in our school since 2011.We see how quickly the world is integrating more technology into everyday life. Part of our IT goal is to bring clarity in perception and guidance to our students so they are able to fully utilize these tools and experience how new software, hardware and infrastructures can enhance the way they think, collaborate and innovate. All our classes are equipped with the facility."
    },
    {
      title: "Mathematics Lab",
      image: "/maths-lab.png",
      text: "Mathematics lab, a fresh concept in the educational field, helps students to understand mathematical principles through exercises, models and teaching aids. The Maths lab provides an opportunity for the students to discover Mathematics through doing. The activities help to visualise, manipulate, reason and creating interest among children. It is a place to enjoy Mathematics through informal exploration. The activities suitable for students of class 6 to 12 are included in the Mathematics laboratory. The activities are done individually by students under the guidance of a teacher. The activities are intended to give children an experience of doing Maths."
    },
    {
      title: "Chemistry Lab",
      image: "/chemistry-lab.png",
      text: "The Chemistry Lab at Sree Buddha Central School is spacious and well-equipped, accommodating 50-60 students at a time. Stocked with all necessary chemicals and reagents as per the NCERT syllabus, it enables teachers and students to carry out a wide range of activities and experiments effectively. Students are trained to follow proper laboratory procedures, familiarize themselves with materials, and review safety data sheets before use. Clear safety rules—such as reporting accidents, keeping pathways clear, tying back hair, and wearing suitable clothing—are strictly followed. This ensures a safe, organized, and engaging environment for exploring the wonders of chemistry through hands-on learning."
    },
    {
      title: "Biology Lab",
      image: "/library.png",
      text: "The Biology Lab at our school is well-equipped with preserved specimens, slides, models, and visual charts, fostering scientific curiosity and hands-on learning. Students from classes IX to XII regularly perform practicals, while other classes occasionally use the lab for general science activities. Equipped with updated instruments and materials each year, the lab provides an engaging environment where observation and experimentation enhance understanding, making science learning more interactive, enjoyable, and effective."
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
            Our Labs
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            We make your child happy day after day
          </p>
        </div>

        {/* Medium of Instruction Section */}
        <div className="mb-8">
          <div className="border-l-4 border-blue-600 pl-4 mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-blue-900 uppercase tracking-wide">
              MEDIUM OF INSTRUCTION
            </h2>
          </div>
          
          {/* Content Blocks */}
          <div className="space-y-8 md:space-y-12">
            {academicSections.map((section, index) => (
              <div 
                key={index}
                className="w-full max-w-full text-dark bg-white rounded-lg overflow-hidden shadow-md md:shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} h-full`}>
                  {/* Image Section */}
                  <div className="w-full md:w-[301px] flex-shrink-0 h-48 md:h-64">
                    <img 
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
                      {section.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 text-justify">
                      {section.text}
                    </p>
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

export default labs;