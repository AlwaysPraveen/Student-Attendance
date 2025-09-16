const Student = require("../models/Student");

//The below are the Protected Routes

//   GET  request to /api/students, to get Students data

const getStudents = async (req, res) => {
  try {
    const { className } = req.query;
    const students = await Student.find(className ? { className } : {});
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


//  POST reuest to  /api/students , to add a new Student

const addStudent = async (req, res) => {
  try {
    const { name, rollNumber, className } = req.body;
    const studentExists = await Student.findOne({ rollNumber });
    if (studentExists) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const student = await Student.create({ name, rollNumber, className });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getStudents, addStudent };
