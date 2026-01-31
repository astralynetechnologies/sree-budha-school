// src/pages/BusTablesPage.jsx
import React from "react";

// Data fetching happens here (server-side)
export async function getServerSideProps() {
  try {
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
    
    if (!cmsUrl) {
      console.error("NEXT_PUBLIC_CMS_URL environment variable is not set");
      return { 
        props: { 
          data: { docs: [] },
          error: "CMS URL not configured"
        } 
      };
    }

    const res = await fetch(`${cmsUrl}/api/bus-tables`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch bus tables: ${res.status}`);
    }
    
    const data = await res.json();
    return { 
      props: { 
        data,
        error: null
      } 
    };
  } catch (error) {
    console.error("Error fetching bus tables:", error);
    return { 
      props: { 
        data: { docs: [] },
        error: error.message
      } 
    };
  }
}

// Component is NOT async in Pages Router
export default function BusTablesPage({ data, error }) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Handle case where no data is available
  if (!data.docs || data.docs.length === 0) {
    return (
      <div className="bg-neutral min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            School Bus Timetables {currentYear}
          </h1>
          <p className="text-dark text-lg">
            {error ? `Error: ${error}` : "Bus schedules are currently unavailable. Please try again later."}
          </p>
        </div>
      </div>
    );
  }

  // Sort buses alphabetically by title
  const sortedBuses = [...data.docs].sort((a, b) => {
    // Extract numbers from bus titles for proper numerical sorting
    const getNumberFromTitle = (title) => {
      const match = title.match(/(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    };
    
    const numA = getNumberFromTitle(a.title);
    const numB = getNumberFromTitle(b.title);
    
    // If both have numbers, sort numerically
    if (numA && numB) {
      return numA - numB;
    }
    
    // Otherwise, sort alphabetically
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="bg-neutral min-h-screen p-8">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">
        College Bus Timetables {currentYear}
      </h1>

      <div className="space-y-16">
        {sortedBuses.map((bus) => (
          <div
            key={bus.id}
            className="bg-accent rounded-2xl shadow-md border border-off-white overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-dark text-accent p-4 flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{bus.title}</h2>
              <span className="text-secondary font-bold">🚌</span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-dark">
                <thead>
                  <tr className="bg-primary text-accent text-left">
                    <th className="p-3 border border-off-white">STOP</th>
                    <th className="p-3 border border-off-white">MORNING</th>
                    <th className="p-3 border border-off-white">EVENING</th>
                    <th className="p-3 border border-off-white">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {bus.stops?.map((stop, i) => (
                    <tr
                      key={i}
                      className={
                        i % 2 === 0
                          ? "bg-off-white hover:bg-secondary/20 transition"
                          : "bg-accent hover:bg-secondary/20 transition"
                      }
                    >
                      <td className="p-3 border border-neutral">{stop.stop}</td>
                      <td className="p-3 border border-neutral">{stop.morning || "-"}</td>
                      <td className="p-3 border border-neutral">{stop.evening || "-"}</td>
                      <td className="p-3 border border-neutral font-semibold text-primary-dark">
                        {stop.amount ? `₹${stop.amount}` : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}