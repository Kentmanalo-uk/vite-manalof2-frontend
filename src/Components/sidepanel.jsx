import React from "react";

function SidePanel({ show, onClose }) {
  return (
    <>
      {show && (
        <div	
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`
          fixed z-50 bg-gray-900 text-white p-6 shadow-2xl
          transition-transform duration-500 ease-in-out
          w-full md:w-96
          ${show ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-x-full"}
          bottom-0 md:bottom-0 md:right-0
          rounded-t-2xl md:rounded-none
          h-[50vh] md:h-full
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-sky-400">My Side Panel</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ✕
          </button>
        </div>
        {/* Content */}
        <div className="overflow-y-auto h-full pr-2">
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            my side panel
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
             Cars
          </p>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
