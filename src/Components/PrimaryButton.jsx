// src/components/primarybutton.jsx
import React from "react";

function PrimaryButton({ label, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${className}`}
    >
      {label}
    </button>
  );
}

export default PrimaryButton;