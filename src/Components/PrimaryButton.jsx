import React from "react";
const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const base = "px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105";
  const colors = {
    primary: "bg-gradient-to-r from-violet-700 to-blue-600 text-white hover:from-violet-800 hover:to-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
  };

  return (
    <button className={`${base} ${colors[type]}`} onClick={onClick}>
      {label}
    </button>
  );
};
export default PrimaryButton;
