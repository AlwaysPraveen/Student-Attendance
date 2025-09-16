import React from "react";

const AttendanceToggle = ({ status, onToggle }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onToggle("Present")}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          status === "Present"
            ? "bg-green-500 text-purple shadow-md"
            : "bg-gray-200 text-gray-800 hover:bg-green-100"
        }`}
      >
        Present
      </button>
      <button
        onClick={() => onToggle("Absent")}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          status === "Absent"
            ? "bg-red-500 text-white shadow-md"
            : "bg-gray-200 text-gray-800 hover:bg-red-100"
        }`}
      >
        Absent
      </button>
      
    </div>
    

  );
};

export default AttendanceToggle;
