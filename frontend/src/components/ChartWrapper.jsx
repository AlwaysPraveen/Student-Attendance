import React from "react";

const ChartWrapper = ({ title, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="w-full h-64">{children}</div>
      {/* <div className="w-full h-64 flex justify-center items-center">{children}</div> */}
    </div>
  );
};

export default ChartWrapper;
