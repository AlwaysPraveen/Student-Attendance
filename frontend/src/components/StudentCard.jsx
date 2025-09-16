import React, { useState } from "react";
import AttendanceToggle from "./AttendanceToggle";
import axiosInstance from "../api/axiosInstance";

const StudentCard = ({ student }) => {
  // If backend has a current status field, you can use student.status
  const [status, setStatus] = useState(student.status || "Absent");
  const [loading, setLoading] = useState(false);

  const handleMarkAttendance = async (newStatus) => {
    setStatus(newStatus);
    setLoading(true);

    try {
      await axiosInstance.post("/attendance", {
        studentId: student._id,
        status: newStatus,
      });
    } catch (error) {
      console.error("Error marking attendance", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-between items-center bg-pink shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <div>
        <p className="font-semibold text-lg">{student.name}</p>
        <p className="text-sm text-gray-600">
          Roll: {student.rollNumber} | Class: {student.className}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <AttendanceToggle status={status} onToggle={handleMarkAttendance} />
        {loading && <p className="text-xs text-gray-400">Saving...</p>}
      </div>
    </div>

  );
};

export default StudentCard;
