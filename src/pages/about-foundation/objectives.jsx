import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Objectives = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/objectives`);
        if (!response.ok) {
          throw new Error('Failed to fetch objectives data');
        }
        const result = await response.json();
        setData(result.docs[0]); // Get the first document
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="pt-6 pb-0 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          {loading ? (
            <>
              <Skeleton 
                height={40} 
                width={300} 
                className="mx-auto mb-4" 
                baseColor="#f3f4f6" 
                highlightColor="#e5e7eb"
              />
              <Skeleton 
                height={20} 
                width={500} 
                className="mx-auto" 
                baseColor="#f3f4f6" 
                highlightColor="#e5e7eb"
                count={2}
              />
            </>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <>
              <h2 className="text-3xl md:text-2.5xl font-bold text-blue-900 mb-4">
                {data?.title || 'Aims & Objectives'}
              </h2>
              <p className="text-dark max-w-110 mx-auto">
                {data?.subtitle || 'Discover our vision and mission, clearly outlining our goals and the steps we take to achieve them.'}
              </p>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Image Section */}
          <div className="relative flex-shrink-0">
            {loading ? (
              <Skeleton 
                width={360} 
                height={402} 
                baseColor="#f3f4f6" 
                highlightColor="#e5e7eb"
              />
            ) : error ? (
              <div className="w-[360px] h-[402px] bg-gray-200 flex items-center justify-center">
                <p className="text-red-500">Error loading image</p>
              </div>
            ) : (
              data?.image && (
                <img 
                  src={data.image.url}
                  alt={data.image.alt || 'Buddha statue in peaceful garden setting'}
                  className="w-[360px] h-[402px] object-cover"
                />
              )
            )}
          </div>

          {/* Text Content */}
          <div className="space-y-2 max-w-[717px] flex-1">
            <div className="prose prose-lg text-dark space-y-8 text-justify">
              {loading ? (
                <>
                  <Skeleton 
                    height={20} 
                    baseColor="#f3f4f6" 
                    highlightColor="#e5e7eb" 
                    count={5} 
                    className="mb-4"
                  />
                  <Skeleton 
                    height={20} 
                    baseColor="#f3f4f6" 
                    highlightColor="#e5e7eb" 
                    count={4} 
                    className="mb-4"
                  />
                  <Skeleton 
                    height={20} 
                    baseColor="#f3f4f6" 
                    highlightColor="#e5e7eb" 
                    count={6} 
                    className="mb-4"
                  />
                </>
              ) : error ? (
                <p className="text-red-500">Error loading content</p>
              ) : (
                data?.content?.map((item) => (
                  <p key={item.id} className="leading-relaxed">
                    {item.paragraph}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;