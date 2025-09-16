import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Input from "../components/Input";
import Button from "../components/Button";
import CardWrapper from "../components/CardWrapper";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [className, setClassName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/students", { name, rollNumber, className });
      setMessage("Student added successfully!");
      setName("");
      setRollNumber("");
      setClassName("");
    } catch (error) {
      console.error("Error adding student", error);
      setMessage("Failed to add student");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <CardWrapper>
        <h2 className="text-xl font-bold mb-4">Add Student</h2>
        {message && <p className="text-sm mb-2">{message}</p>}
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
          <Input
            placeholder="Class Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <Button type="submit" variant="success">
            Add Student
          </Button>
        </form>
      </CardWrapper>
    </div>
  );
};

export default AddStudent;
