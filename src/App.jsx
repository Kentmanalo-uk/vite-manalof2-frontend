import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/navbar";
import LandingPage from "./page/LandingPage";
import Listing from "./page/listing";
import Order from "./page/order";
import Billing from "./page/Billing";

function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHashElement />

      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/order" element={<Order />} />
           <Route path="/billing" element={<Billing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
