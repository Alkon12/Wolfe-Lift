import React from "react";

interface FeaturePointProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeaturePoint({ title, description, icon }: FeaturePointProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}