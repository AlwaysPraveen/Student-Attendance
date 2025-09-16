Student Attendance Management System

A MERN stack application for managing students and their attendance with JWT authentication and class-wise attendance visualization.

Features:

Teacher Register & Login (JWT secured)

Add & manage students

Mark students as Present/Absent

Class-wise attendance summary with charts (Recharts)

Responsive UI with React + Tailwind

Reusable components (Input, Button, CardWrapper, Navbar)

Tech Stack:

Frontend: React, TailwindCSS, Axios, Recharts

Backend: Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt

Setup:
# Clone repo
git clone https://github.com/your-username/student-attendance.git
cd student-attendance

# Backend
cd backend
npm install
npm run dev   # runs at http://localhost:8080

# Frontend
cd frontend
npm install
npm run dev   # runs at http://localhost:5173

API Endpoints:

POST /auth/register → Register teacher

POST /auth/login → Login teacher

POST /students → Add student

GET /students → Get all students

POST /attendance → Mark attendance

GET /attendance/summary → Class-wise summary

Author:

Developed by Thatikonda Praveen Kumar
