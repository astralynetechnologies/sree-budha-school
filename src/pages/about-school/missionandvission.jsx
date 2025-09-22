import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MissionAndVision = () => {
  const [missionData, setMissionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/mission`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.docs && data.docs.length > 0) {
          setMissionData(data.docs[0]);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching mission data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMissionData();
  }, []);

  if (error) {
    return (
      <section className="pt-6 pb-0 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center py-10">
          <p className="text-red-500">Error loading content: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-6 pb-0 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          {loading ? (
            <>
              <Skeleton height={40} width={300} className="mx-auto mb-4" />
              <Skeleton height={20} width={500} className="mx-auto" />
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-2.5xl font-bold text-blue-900 mb-4">
                {missionData?.title || 'Mission & Vision'}
              </h2>
              <p className="text-dark max-w-110 mx-auto">
                {missionData?.subtitle || 'Discover our purpose and future goals-learn what drives us and where we\'re headed.'}
              </p>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Image Section */}
          <div className="relative flex-shrink-0">
            {loading ? (
              <Skeleton width={380} height={453} />
            ) : (
              <img 
                src={missionData?.image?.url || "/abt 1.png"}
                alt={missionData?.image?.alt || "Buddha statue in peaceful garden setting"}
                className="w-[380px] h-[453px] object-cover"
              />
            )}
          </div>

          {/* Text Content */}
          <div className="space-y-2 max-w-[717px] flex-1">
            <div className="prose prose-lg text-dark space-y-8 text-justify">
              {loading ? (
                <>
                  <Skeleton count={5} height={20} className="mb-2" />
                  <Skeleton count={4} height={20} className="mb-2" />
                  <Skeleton count={5} height={20} className="mb-2" />
                  <Skeleton count={3} height={20} />
                </>
              ) : (
                missionData?.content?.map((paragraph, index) => (
                  <p key={paragraph.id || index} className="leading-relaxed">
                    {paragraph.paragraph}
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

export default MissionAndVision;