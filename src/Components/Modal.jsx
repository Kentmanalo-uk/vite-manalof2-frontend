import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ car, onClose }) {
  const [confirming, setConfirming] = useState(false);
  const navigate = useNavigate();
  if (!car) return null;
  const handleProceed = () => setConfirming(true);
  const handleCancelConfirm = () => setConfirming(false);
  const handleFinalProceed = () => {
    navigate("/order", { state: { car } }); // Pass car to order page
  };
  
    return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-xl max-w-lg w-full shadow-2xl relative overflow-y-auto max-h-[90vh]">
        {/* car image */}
        <img
          src={car.image}
          alt={car.name}
          className="rounded-lg mb-4 w-full h-60 object-cover"
        />
        {/* car info */}
        <h2 className="text-2xl font-bold mb-2">{car.name}</h2>
        <p className="text-gray-700 mb-4">{car.description}</p>
        <p className="text-lg font-semibold mb-6 text-sky-600">{car.price}</p>

        {/* performance section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-sky-700 mb-2">Engine & Power</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {car.performance.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>

        {/* design section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-sky-700 mb-2">Exterior & Interior</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {car.design.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
        {/* buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleProceed}
            className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
          >
            Proceed
          </button>
        </div>

       {/* confirmation  */}
        {confirming && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white text-black p-6 rounded-xl max-w-sm w-full shadow-xl text-center animate-fadeIn">
              <h3 className="text-xl font-semibold mb-4">
                Are you sure to buy this car?
              </h3>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleCancelConfirm}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFinalProceed}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

