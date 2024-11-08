import React from "react";

const CheeseSelector = ({ selected, onSelect, onNext, onPrev }) => {
  const cheeses = ["Mozzarella", "Cheddar", "Parmesan", "Feta", "Vegan Cheese"];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose Your Cheese</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cheeses.map((cheese) => (
          <button
            key={cheese}
            onClick={() => {
              onSelect(cheese);
              onNext();
            }}
            className={`border rounded-lg p-4 text-center transition duration-200 
              ${
                selected === cheese
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800 hover:bg-indigo-100"
              }`}
          >
            {cheese}
          </button>
        ))}
      </div>
      <button onClick={onPrev} className="mt-4 text-indigo-600 hover:underline">
        Back
      </button>
    </div>
  );
};

export default CheeseSelector;
