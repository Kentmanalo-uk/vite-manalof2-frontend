import React from "react";
import Modal from "../Components/Modal";

function Listing() {
    const [selectedCar, setSelectedCar] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const cars = [
    {
      image: "/2022 Corvette Z06.avif",
      name: "Corvette Z06",
      description: "A high-performance sports car with precision engineering.",
      price: "₱8,500,000",
      performance: [
        "5.5L V8 engine, 670 HP",
        "0-100 km/h in 2.6 seconds",
        "Top speed: 305 km/h",
        "Magnetic Ride Control suspension",
        "Carbon ceramic brakes"
      ],
      design: [
        "Aerodynamic wide-body kit",
        "Carbon fiber hood and spoiler",
        "LED headlights with DRL",
        "Racing-inspired cockpit",
        "Available in 12 exterior colors"
      ]
    },
    {
      image: "/Lamborghini Huracán Sterrato..jpg",
      name: "Lamborghini Huracán",
      description: "Luxury meets power in this exotic masterpiece.",
      price: "₱20,000,000",
      performance: [
        "5.2L V10 engine, 610 HP",
        "All-wheel drive system",
        "0-100 km/h in 3.2 seconds",
        "7-speed dual-clutch transmission",
        "Active aerodynamics"
      ],
      design: [
        "Scissor doors with LED lighting",
        "Y-shaped LED daytime running lights",
        "Aluminum and carbon fiber chassis",
        "Customizable interior trims",
        "20-inch forged alloy wheels"
      ]
    },
    {
      image: "/MG One.jpg",
      name: "MG One",
      description: "Compact SUV with cutting-edge technology.",
      price: "₱1,300,000",
      performance: [
        "1.5L turbocharged engine, 170 HP",
        "CVT automatic transmission",
        "Fuel efficiency: 15 km/L",
        "Drive modes: Eco, Normal, Sport",
        "Electronic stability control"
      ],
      design: [
        "Digital cockpit with dual screens",
        "Panoramic sunroof",
        "LED projector headlights",
        "Sleek floating roof design",
        "6 interior color themes"
      ]
    },
    {
      image: "/fourth-generation Maruti Dzire.webp",
      name: "Maruti Dzire",
      description: "Affordable sedan with comfort and reliability.",
      price: "₱800,000",
      performance: [
        "1.2L petrol engine, 90 HP",
        "5-speed manual / AMT",
        "Fuel efficiency: 23 km/L",
        "Lightweight chassis for city driving",
        "Low maintenance cost"
      ],
      design: [
        "Chrome-accented front grille",
        "Projector headlamps",
        "Spacious rear legroom",
        "Fabric upholstery with contrast stitching",
        "Rear AC vents"
      ]
    },
    {
      image: "/JAC JS6 PHEV 1.5.avif",
      name: "JAC JS6 PHEV",
      description: "A plug-in hybrid with smart features and modern styling.",
      price: "₱1,700,000",
      performance: [
        "1.5L PHEV system, 245 HP combined",
        "Electric-only range: 85 km",
        "0-100 km/h in 7.5 seconds",
        "Regenerative braking",
        "Smart energy management"
      ],
      design: [
        "Full LED lighting signature",
        "10.25-inch digital instrument cluster",
        "Leatherette seats with heating",
        "Wireless phone charging",
        "Panoramic glass roof"
      ]
    },
    {
      image: "/JAECOO 7.jpg",
      name: "JAECOO 7",
      description: "Premium crossover SUV with advanced tech and comfort.",
      price: "₱2,200,000",
      performance: [
        "1.6L turbo engine, 197 HP",
        "7-speed dual-clutch transmission",
        "All-wheel drive available",
        "Adaptive cruise control",
        "Hill descent control"
      ],
      design: [
        "Bold diamond-pattern grille",
        "Matrix LED headlights",
        "Premium soft-touch interior",
        "12.3-inch infotainment screen",
        "Ambient lighting with 64 colors"
      ]
    },
    {
      image: "/jaguar.webp",
      name: "Jaguar XE",
      description: "Luxury sedan that blends elegance and performance.",
      price: "₱4,500,000",
      performance: [
        "2.0L turbocharged engine, 250 HP",
        "Rear-wheel drive dynamics",
        "0-100 km/h in 6.4 seconds",
        "Adaptive dynamics suspension",
        "Torque vectoring by braking"
      ],
      design: [
        "Signature LED headlights",
        "Premium leather interior",
        "Aluminum-intensive architecture",
        "10-inch Touch Pro infotainment",
        "Available in British Racing Green"
      ]
    },
    {
      image: "/Radar RD6 EM-P.avif",
      name: "Radar RD6 EM-P",
      description: "Electric pickup that redefines power and efficiency.",
      price: "₱3,600,000",
      performance: [
        "Dual-motor AWD, 400 HP",
        "0-100 km/h in 4.5 seconds",
        "Towing capacity: 3,000 kg",
        "Off-road drive modes",
        "Vehicle-to-load (V2L) power output"
      ],
      design: [
        "Rugged off-road styling",
        "Waterproof cargo bed with power outlet",
        "14.6-inch vertical touchscreen",
        "Reinforced steel frame",
        "LED light bar on front bumper"
      ]
    },
    {
      image: "/vintagecar.jpg",
      name: "Vintage Classic",
      description: "Timeless beauty with a touch of nostalgia.",
      price: "₱5,000,000",
      performance: [
        "Inline 6-cylinder engine, 120 HP",
        "3-speed manual transmission",
        "Top speed: 130 km/h",
        "Hydraulic drum brakes",
        "Manual steering"
      ],
      design: [
        "Hand-polished chrome accents",
        "Whitewall tires with wire wheels",
        "Wooden dashboard with analog gauges",
        "Convertible soft top",
        "Suicide doors with leather pulls"
      ]
    },
  ];
 //paginatiom
 const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-32 px-8 pb-16">
      <h2 className="text-4xl font-extrabold text-center text-sky-400 mb-12 tracking-wide animate-fadeIn">
        Our Company offers
      </h2>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto animate-fadeIn">
        {currentCars.map((car, index) => (
          <div
            key={index}
            className="bg-gray-800/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-sky-500/40 transform transition-all duration-500 hover:-translate-y-2"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-60 object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
              onClick={() => setPreviewImage(car.image)}
            />
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-sky-400">{car.name}</h3>
                <p className="text-gray-300 mb-3">{car.description}</p>
                <p className="text-lg font-bold text-white">{car.price}</p>
              </div>
              <button
                onClick={() => setSelectedCar(car)}
                className="mt-5 bg-sky-500 text-black font-semibold py-2 rounded-full hover:bg-sky-400 transition-all"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-12">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-full border border-sky-400 transition ${
            currentPage === 1
              ? "text-gray-500 border-gray-500 cursor-not-allowed"
              : "hover:bg-sky-400 hover:text-black"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-10 h-10 rounded-full font-semibold transition ${
              currentPage === i + 1
                ? "bg-sky-500 text-black"
                : "border border-sky-400 text-white hover:bg-sky-400 hover:text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-full border border-sky-400 transition ${
            currentPage === totalPages
              ? "text-gray-500 border-gray-500 cursor-not-allowed"
              : "hover:bg-sky-400 hover:text-black"
          }`}
        >
          Next
        </button>
      </div>
      <Modal car={selectedCar} onClose={() => setSelectedCar(null)} />

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
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
    </div>
  );
}

        
export default Listing;
