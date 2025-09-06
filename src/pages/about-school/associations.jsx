import React from 'react';

const associations = () => {
  const executiveCommittee = [
    { name: "Dr. Manu S Sankar", role: "President, PTA", phone: "Ph:7907642582" },
    { name: "Prof K Sasikumar", role: "Chairman,Sree Buddha Foundation", phone: "" },
    { name: "Sri.G.Yatheesh", role: "Secretary,Sree Buddha Foundation", phone: "" }
  ];

  const members = [
    { id: 1, name: "Smt. Agaja A", role: "Member" },
    { id: 2, name: "Smt.Prathibha U", role: "" },
    { id: 3, name: "Sri.Rajesh S", role: "" },
    { id: 4, name: "Sri Rajesh B", role: "" },
    { id: 5, name: "Sri. Rino", role: "" },
    { id: 6, name: "Smt.Hazna Hameed", role: "" },
    { id: 7, name: "Smt.Najisha Hansar", role: "" },
    { id: 8, name: "Smt.Sheeba Biju", role: "" },
    { id: 9, name: "Smt. Aswathy", role: "" },
    { id: 10, name: "Sri.Troni Singh", role: "" },
    { id: 11, name: "Sri Unnikrishnan", role: "" },
    { id: 12, name: "Sri Vijyayakumar K", role: "Principal" },
    { id: 13, name: "Smt Nair Jayashree Ramachandran", role: "Vice Principal" },
    { id: 14, name: "Smt Girija S", role: "Vice Principal" },
    { id: 15, name: "Smt Ushakumari S", role: "Headmistress" },
    { id: 16, name: "Smt Bindumol", role: "Secretary, PTA" },
    { id: 17, name: "Smt Ushadevi D", role: "Teacher" },
    { id: 18, name: "Smt. Bindhu K", role: "Teacher" },
    { id: 19, name: "Smt Sandhya Sahadevan", role: "Teacher" },
    { id: 20, name: "Smt Apsara J", role: "Teacher" },
    { id: 21, name: "Smt Priya L", role: "Teacher" },
    { id: 22, name: "Smt Letha C", role: "Teacher" },
    { id: 23, name: "Smt Pratibha T", role: "Teacher" },
    { id: 24, name: "Smt Manju U S", role: "Teacher" },
    { id: 25, name: "Sri Anil K P", role: "Teacher" }
  ];

  // Column-major distribution: first 10 in col1, next 10 in col2, rest in col3
  const col1 = members.slice(0, 10);
  const col2 = members.slice(10, 20);
  const col3 = members.slice(20);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-accent">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-primary">
          Associations
        </h1>
        <p className="max-w-[486px] mx-auto text-dark">
          Connect with and explore various associations to expand your network, share ideas, and collaborate effectively.
        </p>
      </div>

      {/* Group Photo */}
      <div className="mb-8">
        <div className="w-full rounded-lg flex items-center justify-center shadow-lg bg-off-white">
          <img
            src="/pta.png"
            alt="PTA Executive Committee Group Photo"
            className="w-full max-w-[1120px] h-auto max-h-[453px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* PTA Section */}
      <div className="rounded-lg p-6 shadow-lg bg-accent">
        <h2 className="text-2xl font-bold mb-6 text-primary">
          PARENT TEACHER ASSOCIATION
        </h2>
        
        {/* Description */}
        <div className="mb-6">
          <p className="mb-4 text-dark">
            There is a Parent- Teacher association in the school. The PTA is expected to bring to the notice of the management any short comings and put forward practical suggestions for the better functioning of the school.
          </p>
          <p className="mb-6 text-dark">
            Our PTA vision is to build relationship with parents and teachers, help support the school, our children's education and all round development. PTA is holding general meetings once a year and when the need arises. PTA supports the school to enhance the cultural and educational life of the school, benefits the children.
          </p>
        </div>

        {/* Executive Committee */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-dark">
            PTA EXECUTIVE COMMITTEE 2024-25
          </h3>
          <div className="space-y-2 mb-6">
            {executiveCommittee.map((member, index) => (
              <div key={index} className="text-dark flex flex-wrap">
                <span className="font-medium">{member.name}</span>
                {member.role && <span className="text-light-dark"> ({member.role})</span>}
                {member.phone && <span className="ml-2 text-secondary break-all">{member.phone}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Members List - Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-0">
          <div className="flex flex-col space-y-3">
            {col1.map((member) => (
              <div key={member.id} className="flex text-sm text-dark">
                <span className="w-6 text-light-dark flex-shrink-0">{member.id}.</span>
                <div className="flex-1 min-w-0">
                  <span className="font-medium break-words">{member.name}</span>
                  {member.role && (
                    <span className="text-light-dark"> ({member.role})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            {col2.map((member) => (
              <div key={member.id} className="flex text-sm text-dark">
                <span className="w-6 text-light-dark flex-shrink-0">{member.id}.</span>
                <div className="flex-1 min-w-0">
                  <span className="font-medium break-words">{member.name}</span>
                  {member.role && (
                    <span className="text-light-dark"> ({member.role})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-3">
            {col3.map((member) => (
              <div key={member.id} className="flex text-sm text-dark">
                <span className="w-6 text-light-dark flex-shrink-0">{member.id}.</span>
                <div className="flex-1 min-w-0">
                  <span className="font-medium break-words">{member.name}</span>
                  {member.role && (
                    <span className="text-light-dark"> ({member.role})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default associations;