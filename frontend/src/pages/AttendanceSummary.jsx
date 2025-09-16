import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import ChartWrapper from "../components/ChartWrapper";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceSummary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axiosInstance.get("/attendance/summary");

        const formatted = res.data.map((item) => {
          const absent = item.total - item.present;
          const presentPercent =
            item.total > 0 ? Math.round((item.present / item.total) * 100) : 0;
          const absentPercent =
            item.total > 0 ? Math.round((absent / item.total) * 100) : 0;

          return {
            className: item._id, // className comes from backend _id
            presentPercent,
            absentPercent,
          };
        });

        setData(formatted);
      } catch (error) {
        console.error("Error fetching attendance summary", error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Attendance Summary</h2>

      {data.length > 0 ? (
        <ChartWrapper title="Class-wise Attendance Summary">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="className" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="presentPercent" fill="#4CAF50" name="Present (%)" />
              <Bar dataKey="absentPercent" fill="#F44336" name="Absent (%)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartWrapper>
      ) : (
        <p>No attendance data available.</p>
      )}
    </div>
  );
};

export default AttendanceSummary;
