const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");

// Method to Generate JWT 
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//
// POST request to /api/auth/register , to register new Teacher
const registerTeacher = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const teacherExists = await Teacher.findOne({ email });
    if (teacherExists) {
      return res.status(400).json({ message: "Teacher already exists" });
    }

    const teacher = await Teacher.create({ name, email, password });

    if (teacher) {
      res.status(201).json({
        _id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        token: generateToken(teacher.id),
      });
    } else {
      res.status(400).json({ message: "Invalid teacher data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// POST rqst to /api/auth/login , to login teacher
const loginTeacher = async (req, res) => {
  const { email, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ email });

    if (teacher && (await teacher.matchPassword(password))) {
      res.json({
        _id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        token: generateToken(teacher.id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerTeacher, loginTeacher };
