const Attendance = require("../models/Attendance");

// @desc    Mark attendance
// @route   POST /api/attendance
// @access  Private
const markAttendance = async (req, res) => {
  try {
    const { studentId, status } = req.body;

    const attendance = await Attendance.create({
      student: studentId,
      status,
      teacher: req.teacher._id,
    });

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get class-wise attendance summary
// @route   GET /api/attendance/summary
// @access  Private
const getAttendanceSummary = async (req, res) => {
  try {
    const summary = await Attendance.aggregate([
      {
        $lookup: {
          from: "students",
          localField: "student",
          foreignField: "_id",
          as: "studentInfo"
        }
      },
      { $unwind: "$studentInfo" },
      {
        $group: {
          _id: "$studentInfo.className",
          total: { $sum: 1 },
          present: {
            $sum: { $cond: [{ $eq: ["$status", "Present"] }, 1, 0] }
          }
        }
      }
    ]);

    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { markAttendance, getAttendanceSummary };
