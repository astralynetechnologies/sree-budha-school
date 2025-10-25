import React, { useState } from 'react';
import { BookOpen, Globe, Languages, Type, Microscope, Monitor, Heart, ChevronRight, Users, BookMarked } from 'lucide-react';

const Departments = () => {
  const [activeDept, setActiveDept] = useState(0);

  const departments = [
    {
      id: 1,
      name: "Mathematics",
      icon: <BookOpen className="w-8 h-8" />,
      teachers: 12,
      description: "Our Mathematics department focuses on building strong analytical and problem-solving skills. We offer comprehensive courses from basic arithmetic to advanced calculus.",
      courses: ["Algebra", "Geometry", "Calculus", "Statistics"],
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      teachersList: [
        { name: "Dr. Sarah Chen", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
        { name: "Prof. Michael Rodriguez", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
        { name: "Dr. Emily Watson", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 2,
      name: "English",
      icon: <Type className="w-8 h-8" />,
      teachers: 10,
      description: "The English department nurtures communication skills, literary appreciation, and creative expression through diverse literary works.",
      courses: ["Literature", "Grammar", "Creative Writing", "Public Speaking"],
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      teachersList: [
        { name: "Dr. James Wilson", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
        { name: "Prof. Lisa Thompson", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 3,
      name: "Malayalam",
      icon: <Languages className="w-8 h-8" />, 
      teachers: 8,
      description: "Our Malayalam department preserves and promotes regional language and culture through classical and contemporary literature.",
      courses: ["Malayalam Literature", "Grammar", "Poetry", "Drama"],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      teachersList: [
        { name: "Dr. Priya Nair", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" },
        { name: "Prof. Rajesh Kumar", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 4,
      name: "Hindi",
      icon: <Languages className="w-8 h-8" />,
      teachers: 7,
      description: "The Hindi department focuses on language proficiency and appreciation of Hindi literature across various genres.",
      courses: ["Hindi Literature", "Grammar", "Composition", "Conversation"],
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
      teachersList: [
        { name: "Dr. Anjali Sharma", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" },
        { name: "Prof. Vikram Singh", photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 5,
      name: "Science",
      icon: <Microscope className="w-8 h-8" />,
      teachers: 15,
      description: "Our Science department sparks curiosity about the natural world through Physics, Chemistry, and Biology with hands-on experiences.",
      courses: ["Physics", "Chemistry", "Biology", "Environmental Science"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      teachersList: [
        { name: "Dr. Robert Kim", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
        { name: "Prof. Maria Garcia", photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face" },
        { name: "Dr. David Park", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 6,
      name: "Social Science",
      icon: <Globe className="w-8 h-8" />,
      teachers: 11,
      description: "The Social Science department explores human society, history, geography, and civics to create informed citizens.",
      courses: ["History", "Geography", "Civics", "Economics"],
      image: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=800&q=80",
      teachersList: [
        { name: "Dr. Amanda Lewis", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" },
        { name: "Prof. Thomas Brown", photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 7,
      name: "Computer Science",
      icon: <Monitor className="w-8 h-8" />,
      teachers: 9,
      description: "Our Computer Science department prepares students for the digital age through programming and computational thinking.",
      courses: ["Programming", "Web Development", "Database Management", "Cyber Security"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      teachersList: [
        { name: "Dr. Alex Johnson", photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" },
        { name: "Prof. Samantha Lee", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face" }
      ]
    },
    {
      id: 8,
      name: "Physical Education",
      icon: <Heart className="w-8 h-8" />,
      teachers: 6,
      description: "The PE department promotes physical fitness, sportsmanship, and healthy lifestyles through diverse sports programs.",
      courses: ["Sports Training", "Yoga", "Athletics", "Health Education"],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      teachersList: [
        { name: "Coach Mark Taylor", photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&crop=face" },
        { name: "Prof. Sarah Martinez", photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0D47A1] to-[#012050] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Excellence in education through specialized departments
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation - Desktop */}
          <div className="hidden lg:block lg:w-80 space-y-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Departments</h2>
            {departments.map((dept, index) => (
              <button
                key={dept.id}
                onClick={() => setActiveDept(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeDept === index
                    ? 'bg-[#0D47A1] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activeDept === index ? 'bg-white/20' : 'bg-[#0D47A1]/10'}`}>
                      {React.cloneElement(dept.icon, {
                        className: `w-6 h-6 ${activeDept === index ? 'text-white' : 'text-[#0D47A1]'}`
                      })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{dept.name}</h3>
                      <p className={`text-sm ${activeDept === index ? 'text-gray-200' : 'text-gray-500'}`}>
                        {dept.teachers} Teachers
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeDept === index ? 'translate-x-1' : ''}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Navigation */}
          <div className="lg:hidden mb-6">
            <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {departments.map((dept, index) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(index)}
                  className={`flex-shrink-0 snap-start p-4 rounded-xl transition-all duration-300 w-48 ${
                    activeDept === index
                      ? 'bg-[#0D47A1] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className={`p-3 rounded-lg ${activeDept === index ? 'bg-white/20' : 'bg-[#0D47A1]/10'}`}>
                      {React.cloneElement(dept.icon, {
                        className: `w-6 h-6 ${activeDept === index ? 'text-white' : 'text-[#0D47A1]'}`
                      })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{dept.name}</h3>
                      <p className={`text-xs mt-1 ${activeDept === index ? 'text-gray-200' : 'text-gray-500'}`}>
                        {dept.teachers} Teachers
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Department Image Header */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={departments[activeDept].image}
                  alt={departments[activeDept].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#FBC02D] rounded-xl">
                      {React.cloneElement(departments[activeDept].icon, {
                        className: 'w-8 h-8 text-[#012050]'
                      })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{departments[activeDept].name}</h2>
                      <p className="text-gray-200 text-lg">Department</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Department</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {departments[activeDept].description}
                  </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-[#0D47A1] to-[#012050] text-white p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-6 h-6" />
                      <span className="text-sm font-medium opacity-90">Faculty Members</span>
                    </div>
                    <p className="text-4xl font-bold">{departments[activeDept].teachers}</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#FBC02D] to-[#F9A825] text-[#012050] p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <BookMarked className="w-6 h-6" />
                      <span className="text-sm font-medium">Courses Offered</span>
                    </div>
                    <p className="text-4xl font-bold">{departments[activeDept].courses.length}</p>
                  </div>
                </div>

                {/* Courses Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Courses Offered</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {departments[activeDept].courses.map((course, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-[#0D47A1]/10 to-[#0D47A1]/5 border-l-4 border-[#0D47A1] p-4 rounded-lg hover:shadow-md transition-all"
                      >
                        <p className="font-semibold text-gray-800">{course}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Teachers Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Faculty</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {departments[activeDept].teachersList.map((teacher, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-[#0D47A1]/10 hover:to-transparent transition-all border border-gray-100"
                      >
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md"
                        />
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">{teacher.name}</h4>
                          <p className="text-gray-500 text-sm">{departments[activeDept].name} Faculty</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;