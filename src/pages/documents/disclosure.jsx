import React, { useState, useEffect } from 'react';

const Disclosure = () => {
  const [disclosureItems, setDisclosureItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDisclosureItems();
  }, []);

  const fetchDisclosureItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/disclosure`);
      if (!response.ok) {
        throw new Error('Failed to fetch disclosure documents');
      }
      
      const data = await response.json();
      
      if (data.docs) {
        // Filter only active documents and sort by order
        const activeItems = data.docs
          .filter(item => item.isActive !== false)
          .sort((a, b) => a.order - b.order);
        
        setDisclosureItems(activeItems);
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching disclosure items:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDocument = (document) => {
    if (document && document.url) {
      // Open document in new tab
      window.open(document.url, '_blank', 'noopener,noreferrer');
    } else {
      console.error('Document URL not available');
    }
  };


  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-accent stroke-2 stroke-primary">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading documents...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-accent stroke-2 stroke-primary">
        <div className="text-center text-red-600">
          <p>Error loading documents: {error}</p>
          <button
            onClick={fetchDisclosureItems}
            className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-8 px-6 py-4 font-semibold text-sm uppercase tracking-wide">
              FILE NAME
            </div>
            <div className="col-span-4 px-6 py-4 font-semibold text-sm uppercase tracking-wide text-right">
              DOCUMENT
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {disclosureItems.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-500">No documents available at the moment.</p>
            </div>
          ) : (
            disclosureItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`grid grid-cols-12 gap-0 hover:bg-blue-50 transition-colors duration-200 ${
                  index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'
                }`}
              >
                <div className="col-span-8 px-6 py-4">
                  <p className="text-sm font-medium text-gray-900 leading-relaxed">
                    {item.fileName}
                  </p>
                  {item.description && (
                    <p className="text-xs text-gray-600 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="col-span-4 px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => handleViewDocument(item.document)}
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-900 border border-blue-900 rounded-md hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  >
                    View
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          All documents are regularly updated to ensure compliance with current regulations.
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Disclosure;