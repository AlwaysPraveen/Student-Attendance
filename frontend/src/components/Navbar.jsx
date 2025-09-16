import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";   

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-grey shadow-md z-50 bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-lg font-bold ">Student Attendance</h1>

      <div className="flex gap-4">
        {!user ? (
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        ) : (
          <>
            <Link to="/students" className="hover:text-gray-300">Students</Link>
            <Link to="/add-student" className="hover:text-gray-300">Add Student</Link>
            <Link to="/summary" className="hover:text-gray-300">Summary</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
