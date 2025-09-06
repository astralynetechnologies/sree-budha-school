import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const nonacademics = () => {
  const [expandedSections, setExpandedSections] = useState({
    music: true // Music section starts expanded as shown in the image
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    { id: 'sports', title: 'Sports & Games' },
    { id: 'redcross', title: 'Junior Red Cross' },
    { id: 'counseling', title: 'Counseling' },
    { id: 'dance', title: 'Dance' },
    { 
      id: 'music', 
      title: 'Music',
      content: 'There are several co-curricular activities in the school, which enable the children to acquire mastery over their inherent potentials and equip them to face the life with ease and confidence. Music is one among it. They have one period allotted Music as well as Violin.'
    },
    { id: 'yoga', title: 'Yoga' },
    { id: 'houses', title: 'Houses' },
    { id: 'club', title: 'Club Activities' }
  ];

  return (
    <div className="max-w-6xl mx-auto py-6 bg-accent">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Non-Academics</h1>
        <p className="text-gray-600">We make your child happy day after day</p>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-2">
        {sections.map((section) => (
          <div key={section.id} className="bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full bg-blue-800 hover:bg-blue-900 text-white px-6 py-4 flex justify-between items-center transition-colors duration-200"
            >
              <span className="text-lg font-medium">{section.title}</span>
              {expandedSections[section.id] ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            
            {expandedSections[section.id] && section.content && (
              <div className="bg-gray-100 px-6 py-4">
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default nonacademics;