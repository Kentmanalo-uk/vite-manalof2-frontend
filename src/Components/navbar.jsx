import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
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
  const hoverGlow =
    "hover:text-sky-200 hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.95)]";
  const activeGlow =
    "text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] font-bold";

  return (
    <nav
      className="
        fixed bottom-0 w-full bg-black/70 backdrop-blur-md text-white z-50
        md:top-0 md:bottom-auto md:bg-transparent md:backdrop-blur-md
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
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

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center md:justify-end space-x-6 text-base font-medium items-center">
          {navLinks.map((link) =>
            link.to.startsWith("/") ? (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`${baseClass} ${
                    isActive(link.to) ? activeGlow : hoverGlow
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ) : (
              <li key={link.to}>
                <button
                  onClick={link.action}
                  className={`${baseClass} ${hoverGlow}`}
                >
                  {link.name}
                </button>
              </li>
            )
          )}

          {/* Bill link */}
          <li>
            <Link
              to="/billing"
              className={`${baseClass} underline underline-offset-4 decoration-sky-400 hover:text-sky-300 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]`}
            >
              Bill
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
