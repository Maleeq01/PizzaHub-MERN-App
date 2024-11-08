import React from "react";

const BaseSelector = ({ selected, onSelect, onNext }) => {
  const bases = [
    "Thin Crust",
    "Thick Crust",
    "Stuffed Crust",
    "Gluten-Free",
    "Cauliflower Crust",
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose Your Pizza Base</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bases.map((base) => (
          <button
            key={base}
            onClick={() => {
              onSelect(base);
              onNext();
            }}
            className={`border rounded-lg p-4 text-center transition duration-200 
              ${
                selected === base
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800 hover:bg-indigo-100"
              }`}
          >
            {base}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BaseSelector;
