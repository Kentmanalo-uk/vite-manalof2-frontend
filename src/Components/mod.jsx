import React from "react";

const Mod = ({ show, onClose }) => {
  if (!show) return null; 

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative bg-white text-black rounded-2xl shadow-2xl p-10 w-80 text-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-3xl font-semibold">Hello</h2>
      </div>
    </div>
  );
};

export default Mod;
