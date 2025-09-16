import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import StudentCard from "../components/StudentCard";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axiosInstance.get("/students");
        setStudents(res.data);
      } catch (error) {
        console.error("Error fetching students", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 mt-5">Student List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : students.length > 0 ? (
        students.map((student) => (
          <StudentCard key={student._id} student={student} />
        ))
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default StudentList;
