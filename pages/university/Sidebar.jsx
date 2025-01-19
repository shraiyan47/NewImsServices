import React, { useState } from "react";

const Sidebar = ({ universities, onSelectUniversity }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUniversities = universities.filter((uni) =>
    uni.university_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="w-64 bg-white border-r shadow-md p-4" style={{overflowY: 'auto'}}>
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none"
          placeholder="Search universities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* University List */}
      <ul className="overflow-y-auto h-[calc(100vh-6rem)] space-y-2">
        {filteredUniversities.map((uni) => (
          <li key={uni._id}>
            <button
              className="w-full text-left p-2 rounded-md hover:bg-gray-100"
              onClick={() => onSelectUniversity(uni)}
            >
              {uni.university_name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
