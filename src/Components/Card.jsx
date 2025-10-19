import React from "react";

function Card({ image, title, description }) {
  return (
    <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default Card;
