import React from 'react';

const academics = () => {
  const academicSections = [
    {
      title: "ATAL Tinkering Lab",
      image: "/atal-lab.png",
      text: "Atal Tinkering Lab (ATL) is an outcome of the Atal innovation mission of the Central Government of India. Atal innovation mission is committed towards creating a holistic environment of innovation in schools across India via the Atal Tinkering Lab(ATL). The ATL helps to create an interest among students in experimenting and innovating and provides a platform for the students to develop their scientific skills. Through the ATL, the students of our school get opportunity to tinker on new projects which are beneficial to the school and the society."
    },
    {
      title: "Computer Lab",
      image: "/computer-lab.png",
      text: "Computer Education initiates our young students into the captivating world of computing, and introduces them to its wide and ever increasing range of applications. Computer training has been introduced since June 1996. We make sure that high end machines are available for each child. We have two computer labs each for primary as well as higher section. Primary section computer lab is having 15 computers and higher section having 38 computers, one printer as well as internet connection. So that online programmes as well as competitions are held here."
    },
    {
      title: "Digital Class Rooms",
      image: "/digital-class-room.png",
      text: "What they see is what they learn well and retain – this is the philosophy behind introducing smart class digital learning for students at Sree Buddha. We started Smart Class Facility in our school since 2011.We see how quickly the world is integrating more technology into everyday life. Part of our IT goal is to bring clarity in perception and guidance to our students so they are able to fully utilize these tools and experience how new software, hardware and infrastructures can enhance the way they think, collaborate and innovate. All our classes are equipped with the facility."
    },
    {
      title: "Junior Science Lab",
      image: "/junior-science-lab.png",
      text: "Our school has a well equipped Junior science lab for classes VI to VIII, and we focus mainly on hands-on practical work so that students may get a better insight into scientific theories. In our Junior Lab, the students are made to conduct simple experiments related to the subject so that the learning process becomes interesting. This enhances the inherent inquisitiveness of the student and energizes him to examine uncharted paths."
    },
    {
      title: "Mathematics Lab",
      image: "/mathematics-lab.png",
      text: "Mathematics lab, a fresh concept in the educational field, helps students to understand mathematical principles through exercises, models and teaching aids. The Maths lab provides an opportunity for the students to discover Mathematics through doing. The activities help to visualise, manipulate, reason and creating interest among children. It is a place to enjoy Mathematics through informal exploration. The activities suitable for students of class 6 to 12 are included in the Mathematics laboratory. The activities are done individually by students under the guidance of a teacher. The activities are intended to give children an experience of doing Maths."
    },
    {
      title: "Library",
      image: "/library.png",
      text: "School library has a collection of more than 15000 books. The Library is spacious with, large collection of books for wide range of subjects and has a full-fledged reference section and reading room for convenience of students and teachers. Books are issued to students at regular intervals with definite rules governing issuance and return of books. Our school promotes reading, and encourages students to cultivate a reading habit which in turn can help them to augment their knowledge and language skills. Primary section also having a separate library. Periodicals as well as story books are provided for the children. Weekly one period allotted for each class."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">
            Academics
          </h1>
          <p className="text-lg text-gray-600">
            We make your child happy day after day
          </p>
        </div>

        {/* Medium of Instruction Section */}
        <div className="mb-8">
          <div className="border-l-4 border-blue-600 pl-4 mb-8">
            <h2 className="text-xl font-bold text-blue-900 uppercase tracking-wide">
              MEDIUM OF INSTRUCTION
            </h2>
          </div>
          
          {/* Content Blocks */}
          <div className="space-y-8">
            {academicSections.map((section, index) => (
              <div 
                key={index}
                className="mx-auto w-[1120px] h-[264px] max-w-full"
              >
                <div className={`flex h-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Image Section */}
                  <div 
                    className="flex-shrink-0 w-[301px] h-[264px]"
                  >
                    <img 
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div 
                    className={`flex flex-col justify-start ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                      {section.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 text-justify">
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

export default academics;