const express = require("express");
const router = express.Router();
const { registerTeacher, loginTeacher } = require("../controllers/authController");

// Register teacher
router.post("/register", registerTeacher);

// Login teacher
router.post("/login", loginTeacher);

module.exports = router;
