import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      {children}
    </div>
  );
};

export default CardWrapper;
