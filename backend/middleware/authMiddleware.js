const jwt = require("jsonwebtoken");
const Teacher = require("../models/Teacher");

// It is the Middleware to protect routes
const protect = async (req, res, next) => {
  //  Here we,Get token from headers
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  //With this we are Extracting the token
  const token = authHeader.split(" ")[1];
  if (!token) {

      return res.status(401).json({ status: false, message: "No token provided" });
    }
  try {
    //  Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find teacher by ID (without password) by using .select we can include , exclude password
    const teacher = await Teacher.findById(decoded.id).select("-password");

    if (!teacher) {
      return res.status(401).json({ message: "Teacher not found" });
    }

    //  Attach teacher to request object
    req.teacher = teacher;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { protect };
