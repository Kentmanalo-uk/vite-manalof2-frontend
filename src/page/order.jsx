import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Order() {
    const location = useLocation();
    const navigate = useNavigate();

    const [car, setCar] = useState(() => {
    const savedCar = localStorage.getItem("purchasedCar");
    return location.state?.car || (savedCar ? JSON.parse(savedCar) : null);
  });
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    telephone: "",
  });
  const [success, setSuccess] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (car) {
      localStorage.setItem("purchasedCar", JSON.stringify(car));
    }
  }, [car]);
   const handleCancel = () => {
    localStorage.removeItem("purchasedCar");
    setCar(null);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  const handleSuccessClose = () => {
    localStorage.removeItem("purchasedCar");
    setCar(null);
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-32 px-8 text-center pb-16 animate-smoothFadeInUp">
      <h2 className="text-4xl font-bold mb-6 text-sky-400">Place Your Order</h2>

      {!car && (
        <div className="text-gray-400 text-lg italic mt-20 animate-smoothFadeInUp">
          ❌ No purchase yet.
        </div>
      )}

      {car && (
        <>
          <p className="text-lg mb-10 text-gray-300 animate-smoothFadeInUp">
            Fill out your details to confirm your car purchase.
          </p>

      <div className="max-w-md mx-auto mb-8 bg-gray-800/50 rounded-2xl p-6 shadow-lg border border-sky-500 animate-smoothFadeInUp">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-56 object-cover rounded-lg mb-4 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setPreviewImage(car.image)}
            />
            <h3 className="text-2xl font-bold text-sky-400">{car.name}</h3>
            <p className="text-gray-300 mb-2">{car.description}</p>
            <p className="font-semibold text-white mb-4">{car.price}</p>
        <p className="font-semibold text-white mb-4">$0.00</p>

        {car.performance && (
              <div className="text-left mt-6 animate-smoothFadeInUp">
                <h4 className="text-xl font-semibold text-sky-400 mb-2">
                  ⚙️ Engine & Power
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {car.performance.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {car.design && (
              <div className="text-left mt-6 animate-smoothFadeInUp">
                <h4 className="text-xl font-semibold text-sky-400 mb-2">
                   Exterior & Interior
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {car.design.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

           <button
              onClick={handleCancel}
              className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all"
            >
              Cancel Purchase
            </button>
          </div>

      <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white text-black rounded-2xl shadow-lg p-8 animate-smoothFadeInUp"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300"
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300"
              required
            />
            <input
              type="text"
              name="telephone"
              placeholder="Telephone Number (optional)"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full mb-6 px-4 py-2 rounded-lg border border-gray-300"
            />

            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-400 transition-all"
            >
              Proceed
            </button>
          </form>
        </>
      )}
      {previewImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-smoothPop">
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-sky-400"
            onClick={() => setPreviewImage(null)}
          >
            ×
          </button>
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-3xl w-[90%] rounded-2xl shadow-2xl border border-sky-400"
          />
        </div>
      )}
      {success && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate-smoothPop">
          <div className="bg-white text-black rounded-xl p-8 shadow-xl max-w-sm text-center animate-smoothPop">
            <h3 className="text-2xl font-bold mb-4 text-green-600">
              ✅ Successfully Ordered!
            </h3>
            <p className="text-gray-700 mb-4">
              Check your email for other info. We will reach you out.
            </p>
            <p className="font-semibold">
              Thank you for trusting{" "}
              <span className="text-sky-600">Car-ris Car Corporation</span>.
            </p>
            <button
              onClick={handleSuccessClose}
              className="mt-6 bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default Order;
