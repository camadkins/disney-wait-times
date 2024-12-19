import { useState } from "react";

const TopMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex justify-between items-center p-4 bg-blue-800 text-white shadow-md">
      <div className="text-2xl font-bold">Site Name</div>

      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search documentation or pages..."
        className="p-2 rounded text-black w-1/3"
      />

      {/* Notification and User Menu */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 bg-blue-600 rounded-full hover:bg-blue-500">
          🔔
          <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-1">
            3
          </span>
        </button>
        <div className="relative">
          <button className="p-2 bg-blue-700 rounded">User</button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
