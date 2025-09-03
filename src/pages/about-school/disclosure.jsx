import React from 'react';

const disclosure = () => {
  const disclosureItems = [
    {
      id: 1,
      fileName: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY"
    },
    {
      id: 2,
      fileName: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION"
    },
    {
      id: 3,
      fileName: "FEE STRUCTURE OF THE SCHOOL"
    },
    {
      id: 4,
      fileName: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE"
    },
    {
      id: 5,
      fileName: "ANNUAL ACADEMIC CALENDER"
    },
    {
      id: 6,
      fileName: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED"
    },
    {
      id: 7,
      fileName: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)"
    },
    {
      id: 8,
      fileName: "SCHOOL INFORMATION"
    },
    {
      id: 9,
      fileName: "FORMAT OF TRANSFER CERTIFICATE"
    },
    {
      id: 10,
      fileName: "COPIES OF SOCIETIES/ TRUST/ COMPANY REGISTRATION /RENEWAL CERTIFICATE"
    },
    {
      id: 11,
      fileName: "TEACHERS DETAILS"
    },
    {
      id: 12,
      fileName: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES"
    },
    {
      id: 13,
      fileName: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS"
    },
    {
      id: 14,
      fileName: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION"
    },
    {
      id: 15,
      fileName: "MANDATORY PUBLIC DISCLOSURE"
    }
  ];

  const handleViewDocument = (fileName) => {
    // This would typically open a document viewer or download the file
    console.log(`Viewing document: ${fileName}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-accent stroke-2 stroke-primary">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          Mandatory Disclosure
        </h1>
        <p className="text-gray-600 text-sm max-w-[400px] mx-auto">
          Access all essential compliance and regulatory information in one place with our easy-to-view mandatory disclosure section.
        </p>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="bg-blue-900 text-white">
          <div className="grid grid-cols-2 gap-0">
            <div className="px-6 py-4 font-semibold text-sm uppercase tracking-wide">
              FILE NAME
            </div>
            <div className="px-6 py-4 font-semibold text-sm uppercase tracking-wide text-right">
              DOCUMENT
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {disclosureItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`grid grid-cols-2 gap-0 hover:bg-blue-50 transition-colors duration-200 ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
              }`}
            >
              <div className="px-6 py-4">
                <p className="text-sm font-medium text-gray-900 leading-relaxed">
                  {item.fileName}
                </p>
              </div>
              <div className="px-6 py-4 text-right">
                <button
                  onClick={() => handleViewDocument(item.fileName)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-dark rounded-md hover:bg-blue-50 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
                >
                  View Document
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          All documents are regularly updated to ensure compliance with current regulations.
        </p>
      </div>
    </div>
  );
};

export default disclosure;