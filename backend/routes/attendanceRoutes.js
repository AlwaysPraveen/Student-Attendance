const express = require("express");
const router = express.Router();
const {
  markAttendance,
  getAttendanceSummary,
} = require("../controllers/attendanceController");
const { protect } = require("../middleware/authMiddleware");

// Protected Routes
router.post("/", protect, markAttendance);
router.get("/summary", protect, getAttendanceSummary);

module.exports = router;
