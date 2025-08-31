import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBoard() {
  const [isExpanded, setIsExpanded] = useState(true);
  const announcements = [
    {
      id: 1,
      title: "Annual Science Exhibition 2024",
      content: "Join us for our grand science exhibition showcasing innovative projects by our students across all grades."
    },
    {
      id: 2,
      title: "New ATAL Tinkering Lab Inauguration",
      content: "State-of-the-art tinkering lab with 3D printers, robotics kits, and IoT devices now open for all students."
    },
    {
      id: 3,
      title: "Inter-House Cultural Competition",
      content: "Four houses compete in dance, music, drama and literary events."
    },
    {
      id: 4,
      title: "Mathematics Olympiad Registration",
      content: "Open registration for the National Mathematics Olympiad. Last date to register is October 15th, 2024."
    },
    {
      id: 5,
      title: "Parent-Teacher Conference",
      content: "Schedule your meeting with teachers to discuss your child's academic progress and development."
    },
    {
      id: 6,
      title: "Sports Day Preparation",
      content: "Athletic meet preparations begin next week. Students interested in participating should register with their PE teachers."
    }
  ];

  return (
    <div 
      className={`bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
        isExpanded ? '' : 'cursor-pointer'
      }`}
      style={{ 
        width: '285px', 
        height: isExpanded ? '373px' : '48px'
      }}
      onClick={!isExpanded ? () => setIsExpanded(true) : undefined}
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-blue-50 border-b border-gray-200 p-3 rounded-t-lg">
        <h2 className="text-blue-700 font-semibold text-xl">Announcement & Events</h2>
        <X 
          className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" 
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        />
      </div>
      
      {/* Scrollable Content */}
      {isExpanded && (
        <div className="overflow-y-auto h-80 p-3">
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div key={announcement.id} className="pb-3">
                <h3 className="text-blue-700 font-medium text-sm mb-2 leading-tight">
                  {announcement.title}
                </h3>
                <p className="text-gray-700 text-xs leading-relaxed">
                  {announcement.content}
                </p>
                
                {/* Dotted separator - don't add after last item */}
                {index < announcements.length - 1 && (
                  <div className="border-b border-dotted border-gray-300 mt-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}