import React from "react";
const Card = ({ car, onClick }) => {
  return (
 <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2" >
      <div className="overflow-hidden"></div>
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
/>
</div>
      
    