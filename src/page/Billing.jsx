import React, { useState } from "react";

function Billing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-sky-400 mb-8">
        Pa-check po ng Billing
      </h1>
      <div
        className="relative bg-gray-800/60 p-4 rounded-2xl shadow-2xl hover:shadow-sky-400/40 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/billing.png"
          alt="Billing"
          className="w-80 h-60 object-cover rounded-xl transition-transform duration-500 hover:scale-105"
        />
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-gray-900 p-4 rounded-2xl shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl hover:text-sky-400 transition"
            >
              ✕
            </button>
            <img
              src="/billing.png"
              alt="Billing Details"
              className="max-w-[90vw] max-h-[80vh] rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Billing;
