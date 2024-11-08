import React from "react";

const SauceSelector = ({ selected, onSelect, onNext, onPrev }) => {
  const sauces = [
    "Tomato Sauce",
    "BBQ Sauce",
    "Alfredo Sauce",
    "Pesto Sauce",
    "Buffalo Sauce",
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose Your Sauce</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sauces.map((sauce) => (
          <button
            key={sauce}
            onClick={() => {
              onSelect(sauce);
              onNext();
            }}
            className={`border rounded-lg p-4 text-center transition duration-200 
              ${
                selected === sauce
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800 hover:bg-indigo-100"
              }`}
          >
            {sauce}
          </button>
        ))}
      </div>
      <button onClick={onPrev} className="mt-4 text-indigo-600 hover:underline">
        Back
      </button>
    </div>
  );
};

export default SauceSelector;
