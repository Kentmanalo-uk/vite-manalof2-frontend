import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar(){
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Cars", to: "/listing" },
    { name: "Order", to: "/order" },
    { name: "About", to: "#about", action: () => scrollToSection("about") },
    { name: "Customer Care", to: "#care", action: () => scrollToSection("customer-care") },
    { name: "Location", to: "#location", action: () => scrollToSection("location") },
  ];

  const isActive = (path) => location.pathname === path;
  const baseClass = "transition-all duration-300 ease-in-out";
  const hoverGlow = "hover:text-sky-200 hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.95)]";
  const activeGlow = "text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] font-bold";

  return (
    <nav className="fixed w-full top-0 left-0 z-50 text-white bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/charis.jpg"
            alt="Car-ris Logo"
            className="w-10 h-10 rounded-full border border-sky-400 object-cover shadow-md"
          />
          <h1
  className="text-2xl font-bold text-sky-400 tracking-wide drop-shadow-[0_0_10px_rgba(56,189,248,0.9)]"
  style={{
    textShadow: "0 0 10px #38bdf8, 0 0 20px #0ea5e9",
    filter: "brightness(1.2)",
  }}
>
  Car-ris
</h1>

        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          {navLinks.map((link) =>
            link.to.startsWith("/") ? (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`${baseClass} ${isActive(link.to) ? activeGlow : hoverGlow}`}
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li key={link.to}>
                <button onClick={link.action} className={`${baseClass} ${hoverGlow}`}>
                  {link.name}
                </button>
              </li>
            )
          )}

          {/* 🔹 Underlined Bill link */}
          <li>
            <Link
              to="/billing"
              className={`${baseClass} underline underline-offset-4 decoration-sky-400 hover:text-sky-300 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]`}
            >
              Bill
            </Link>
          </li>
        </ul>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <img
              src="/menu.png"
              alt="Menu Icon"
              className="w-8 h-8 invert hover:opacity-80 transition"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/90 backdrop-blur-lg flex flex-col items-center pt-8 pb-12 space-y-8 z-40 animate-fadeIn">
          {navLinks.map((link) => (
            <div key={link.to} className="w-full text-center">
              {link.to.startsWith("/") ? (
                <Link
                  to={link.to}
                  className={`${baseClass} text-xl ${isActive(link.to) ? activeGlow : hoverGlow}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={link.action}
                  className={`${baseClass} text-xl ${hoverGlow}`}
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}

          {/* 🔹 Bill link for mobile */}
          <div className="w-full text-center">
            <Link
              to="/billing"
              className="text-xl underline underline-offset-4 decoration-sky-400 hover:text-sky-300 transition-all duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Bill
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
