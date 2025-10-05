// src/components/decorative/DecorativeBackground.jsx
import React from 'react';

const DecorativeBackground = () => (
  <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
    <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
    <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-500"></div>
    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
    <div className="absolute bottom-1/4 right-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
    <div className="absolute top-60 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1200"></div>
  </div>
);

export default DecorativeBackground;
