import React, { useState } from "react";

interface EquipmentCardProps {
  title: string;
  specs: string;
  rate: string;
  quoteText: string;
  image: string;
}

export function EquipmentCard({ 
  title, 
  specs, 
  rate, 
  quoteText, 
  image 
}: EquipmentCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow border-l-4 border-red-600">
      <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden bg-gray-200">
        {!imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50">
            <div className="text-6xl text-red-600">🏗️</div>
          </div>
        )}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{specs}</p>
      <div className="flex justify-between items-center mb-6">
        <span className="text-3xl font-bold text-red-600">{rate}</span>
      </div>
      <a
        href="#contact"
        className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-center block"
      >
        {quoteText}
      </a>
    </div>
  );
}