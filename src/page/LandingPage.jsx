import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../Components/PrimaryButton";
import useOnScreen from "../hooks/useOnScreen";

function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loading
    return () => clearTimeout(timer);
  }, []);

  // Handlers
  const handleExplore = () => navigate("/listing");
  const handleOrder = () => navigate("/order");

  // Refs for animations
  const [aboutTextRef, aboutTextVisible] = useOnScreen({ threshold: 0.1 });
  const [aboutImageRef, aboutImageVisible] = useOnScreen({ threshold: 0.1 });
  const aboutVisible = aboutTextVisible || aboutImageVisible;

  const [careTextRef, careTextVisible] = useOnScreen({ threshold: 0.1 });
  const [careImageRef, careImageVisible] = useOnScreen({ threshold: 0.1 });
  const careVisible = careTextVisible || careImageVisible;

if (loading) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative">
      
      <div className="absolute w-56 h-56 bg-white/30 rounded-full blur-3xl"></div>

      {/* Gear GIF */}
      <img
        src="/wheel-unscreen.gif"
        alt="Loading gear"
        className="w-28 h-28 mb-10 animate-pulse relative z-10 -mt-12"
      />

      {/* White loading bar */}
      <div className="w-64 h-2 bg-white/80 rounded-full mb-6"></div>

      <p className="text-gray-300 text-sm italic animate-pulse">
        Loading... Please wait
      </p>
    </div>
  );
}

  // ✅ Main Page after loading
  return (
   <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Title */}
      <h1
    className="text-5xl md:text-6xl font-extrabold text-sky-400 mb-3 tracking-wide 
               drop-shadow-[0_0_25px_rgba(56,189,248,1)] 
               animate-fadeInSlow 
               transition-all duration-500"
    style={{
      textShadow:
        "0 0 20px #38bdf8, 0 0 40px #38bdf8, 0 0 60px #38bdf8, 0 0 80px #0ea5e9",
      filter: "brightness(1.4)",
    }}
  >
    Car-ris
  </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-12 italic animate-fastPulse">
        Buying a car just got a whole lot easier.
      </p>

      {/* Navigation */}
      <nav className="mb-14 animate-fadeIn">
        <ul className="flex items-center space-x-2 text-lg font-sans">
          <li>
            <Link
              to="/"
              className="font-semibold tracking-wide text-white hover:text-sky-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-500">|</li>
          <li>
            <Link
              to="/listing"
              className="font-semibold tracking-wide text-white hover:text-sky-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            >
              Cars
            </Link>
          </li>
          <li className="text-gray-500">|</li>
          <li>
            <Link
              to="/order"
              className="font-semibold tracking-wide text-white hover:text-sky-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
            >
              Order
            </Link>
          </li>
        </ul>
      </nav>

      {/* Car Cards */}
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mb-12 w-full">
        <div
          onClick={() => setSelectedImage("/furisticcar.jpg")}
          className="relative overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-sky-500/40 cursor-pointer group w-full md:w-1/2 animate-slideInLeft"
        >
          <img
            src="/furisticcar.jpg"
            alt="Futuristic Car"
            className="w-full h-72 object-cover transition duration-500 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
            <p className="text-gray-100 text-sm md:text-lg leading-relaxed">
              Meet the 2030 NovaDrive X1 — a sleek, all-electric hypercar with AI-assisted navigation, self-healing body panels, and zero-emission performance. Designed for speed, safety, and sustainability.
            </p>
          </div>
        </div>

        <div
          onClick={() => setSelectedImage("/vintagecar.jpg")}
          className="relative overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-sky-500/40 cursor-pointer group w-full md:w-1/2 animate-slideInRight"
        >
          <img
            src="/vintagecar.jpg"
            alt="Vintage Car"
            className="w-full h-72 object-cover transition duration-500 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
            <p className="text-gray-100 text-sm md:text-lg leading-relaxed">
              A timeless 1930s luxury sedan — handcrafted elegance, chrome details, and whitewall tires. A rolling masterpiece of classic engineering and old-world charm.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 animate-fadeIn">
        <PrimaryButton
          label="Explore Cars"
          onClick={handleExplore}
          className="animate-shake border border-sky-400 text-sky-300 hover:bg-sky-400/20"
        />
        <PrimaryButton
          label="Learn More"
          onClick={() => setShowModal(true)}
          className="animate-pulseRed border border-red-400 text-red-400 hover:bg-red-400/20"
        />
      </div>

      {/* Notice Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black p-6 rounded-xl max-w-lg w-full shadow-2xl text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Notice</h2>
            <p className="text-gray-800 mb-6 leading-relaxed"> This website is for <b>activity purposes only</b>. If you happen to find this page, any information and content you see are <b>not real</b>. </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-3xl w-full rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105"
          />
          <button
            className="absolute top-8 right-8 text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full font-semibold transition-all"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="max-w-6xl mt-32">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div
            ref={aboutTextRef}
            className={`md:w-1/2 transition-opacity duration-700 ${
              aboutVisible ? "opacity-100 animate-slideFromLeft" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-sky-400 mb-6">
              About Car-ris Corporation
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg"> Car-ris Corporation is a forward-thinking company dedicated to delivering innovative, reliable, and customer-focused solutions in the automotive industry. With a commitment to excellence, integrity, and sustainability, we strive to redefine mobility and enhance the driving experience for individuals and businesses alike. <br /><br /> Driven by passion and powered by expertise, Car-ris Corporation is your trusted partner on the road ahead. </p>
          </div>
          <div
            ref={aboutImageRef}
            className={`md:w-1/2 flex justify-center transition-opacity duration-700 ${
              aboutVisible ? "opacity-100 animate-slideFromRight" : "opacity-0"
            }`}
          >
            <img
              src="/aboutus.jpg"
              alt="About Car-ris"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Customer Care */}
      <section id="customer-care" className="max-w-6xl mt-32">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div
            ref={careTextRef}
            className={`md:w-1/2 transition-opacity duration-700 ${
              careVisible ? "opacity-100 animate-slideFromLeft" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-sky-400 mb-6">Customer Care</h2>
            <p className="text-gray-300 leading-relaxed text-lg"> At Car-ris Corporation, our customers come first — always. Our dedicated Customer Care team is here to support you every step of the way, whether you have questions about your vehicle, need assistance with a service request, or simply want to share feedback. <br /><br /> We believe great service doesn’t end at the sale — it begins the moment you choose us. Reach out anytime. We’re ready to help, listen, and go the extra mile for you. </p>
          </div>
          <div
            ref={careImageRef}
            className={`md:w-1/2 flex justify-center transition-opacity duration-700 ${
              careVisible ? "opacity-100 animate-slideFromRight" : "opacity-0"
            }`}
          >
            <img
              src="/customer.jpg"
              alt="Customer Care"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="max-w-6xl mt-32 flex justify-center">
        <img
          src="/loc.png"
          alt="Our Location"
          className="rounded-2xl shadow-lg w-full max-w-3xl"
        />
      </section>
    </div>
  );
}

export default LandingPage;
