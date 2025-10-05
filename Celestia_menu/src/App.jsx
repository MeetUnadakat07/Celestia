import React, { useState } from "react";
import DecorativeBackground from "./components/decorative/DecorativeBackground";
import Header from "./components/layout/Header";
import ButtonGrid from "./components/layout/ButtonGrid";
import Footer from "./components/layout/Footer";

export default function App() {
  const [year, setYear] = useState("first");

  return (
    <div className="relative w-screen min-h-screen overflow-y-auto bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      {/* Decorative glowing background */}
      <DecorativeBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <Header />

        {/* Year Selection Toggle */}
        <div className="flex justify-center mb-10 space-x-4">
          {/* First Year Button */}
          <button
            onClick={() => setYear("first")}
            aria-pressed={year === "first"}
            className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ${
              year === "first"
                ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black scale-105 ring-amber-300 shadow-amber-400/40"
                : "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 hover:from-gray-700 hover:to-gray-600"
            }`}
          >
            First Year
          </button>

          {/* Second Year Button */}
          <button
            onClick={() => setYear("second")}
            aria-pressed={year === "second"}
            className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ${
              year === "second"
                ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-black scale-105 ring-cyan-300 shadow-cyan-400/40"
                : "bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 hover:from-gray-700 hover:to-gray-600"
            }`}
          >
            Second Year
          </button>
        </div>

        {/* Button Grid (Re-renders fully on year change) */}
        <ButtonGrid key={year} year={year} />

        {/* Footer */}
        <Footer />
      </div>

      {/* Subtle glowing corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-br-full" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-yellow-400/10 to-transparent rounded-tl-full" />
    </div>
  );
}
