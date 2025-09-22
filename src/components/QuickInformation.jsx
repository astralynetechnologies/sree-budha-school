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
      linkTo: "/admission"
    },
    {
      icon: <Bus className="w-8 h-8 text-primary" />,
      title: "Transport Facility",
      description: "Safe and reliable bus service covering major routes in the city.",
      buttonText: "View Routes",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/bus-information"
    },
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Important Documents",
      description: "Download fee structure, syllabus, and other important documents.",
      buttonText: "Download",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/documents/disclosure"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Contact Support",
      description: "Get help with admissions, fees, or general inquiries.",
      buttonText: "Contact Now",
      buttonStyle: "border border-primary text-primary hover:bg-blue-50",
      linkTo: "/contact-us"
    }
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Header Banner */}
      <div className="bg-primary text-white py-3 sm:py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            <span className="font-semibold">News & Updates:</span> Nurturing young minds with values, knowledge, and skills for over 25 years. Experience excellence in education where every child matters.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Quick Information
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Access important information and services quickly with our convenient quick access cards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="bg-blue-50 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto flex-shrink-0">
                {React.cloneElement(card.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-blue-600" })}
              </div>

              {/* Card Content */}
              <div className="text-center flex flex-col flex-grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed flex-grow">
                  {card.description}
                </p>

                {/* Action Link styled as Button */}
                <a
                  href={card.linkTo}
                  className={`inline-block w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-md font-medium transition-colors duration-200 text-center text-xs sm:text-sm no-underline mt-auto ${card.buttonStyle.replace('text-primary', 'text-blue-600').replace('border-primary', 'border-blue-600').replace('bg-primary', 'bg-primary')}`}
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