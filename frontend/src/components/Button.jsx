import React from "react";

const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  const baseStyle = "w-full py-2 rounded text-white ";
  const styles = {
    primary: baseStyle + "bg-blue-600 hover:bg-blue-700",
    danger: baseStyle + "bg-red-600 hover:bg-red-700",
    success: baseStyle + "bg-green-600 hover:bg-green-700",
  };

  return (
    <button type={type} onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
};

export default Button;
