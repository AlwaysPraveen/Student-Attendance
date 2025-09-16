import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";

import Navbar from "./components/Navbar";   

import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentList from "./pages/StudentList"; 
import AttendanceSummary from "./pages/AttendanceSummary"; 
import AddStudent from "./pages/AddStudent";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />   

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route
              path="/students"
              element={
                <ProtectedRoute>
                  <StudentList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/summary"
              element={
                <ProtectedRoute>
                  <AttendanceSummary />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-student"
              element={
                <ProtectedRoute>
                  <AddStudent />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
