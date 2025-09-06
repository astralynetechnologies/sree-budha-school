import React from 'react';
import { GraduationCap, Bus, Calendar, FileText, Phone, Download, Clock, User } from 'lucide-react';

export default function QuickInformation() {
  const infoCards = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Admissions Open",
      description: "Apply for Academic Year 2024-25. Limited seats available.",
      buttonText: "Apply Now",
      buttonStyle: "bg-primary text-white hover:bg-blue-700",
      linkTo: "/AdmissionRegistrationForm"
    },
    {
      icon: <Bus className="w-8 h-8 text-primary" />,
      title: "Transport Facility",
      description: "Safe and reliable bus service covering major routes in the city.",
      buttonText: "View Routes",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/transport"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Academic Calendar",
      description: "Check important dates, holidays, and examination schedule.",
      buttonText: "View Calendar",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/calendar"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "TC Certificate",
      description: "Download or apply for Transfer Certificate online.",
      buttonText: "Get TC",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/tc-certificate"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Contact Support",
      description: "Get help with admissions, fees, or general inquiries.",
      buttonText: "Contact Now",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/ContactForm"
    },
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Important Documents",
      description: "Download fee structure, syllabus, and other important documents.",
      buttonText: "Download",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/documents"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "School Timings",
      description: "Morning: 8:00 AM - 2:00 PM | Evening Activities: 3:00 PM - 5:00 PM",
      buttonText: "View Details",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/timings"
    },
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "Parent Portal",
      description: "Access your child's progress, attendance, and fee details.",
      buttonText: "Login",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/parent-portal"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-primary text-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm md:text-base">
            News & Updates Feed: Nurturing young minds with values, knowledge, and skills for over 25 years. Experience excellence in education where every child matters.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access important information and services quickly with our convenient quick access cards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              {/* Icon Container */}
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                {React.cloneElement(card.icon, { className: "w-8 h-8 text-blue-600" })}
              </div>

              {/* Card Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Action Link styled as Button */}
                <a
                  href={card.linkTo}
                  className={`inline-block w-full py-2 px-4 rounded-md font-medium transition-colors duration-200 text-center no-underline ${card.buttonStyle.replace('text-primary', 'text-blue-600').replace('border-primary', 'border-blue-600').replace('bg-primary', 'bg-primary')}`}
                >
                  {card.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}