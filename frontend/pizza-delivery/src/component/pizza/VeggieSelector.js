import React from "react";
import { useNavigate } from "react-router-dom";

const VeggieSelector = ({ selected, onSelect, onComplete, onPrev }) => {
  const navigate = useNavigate();
  const veggies = ["Bell Peppers", "Onions", "Mushrooms", "Olives", "Spinach"];

  const handleComplete = () => {
    navigate("/order-summary");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose Your Veggies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {veggies.map((veggie) => (
          <button
            key={veggie}
            onClick={() => {
              onSelect(veggie);
            }}
            className={`border rounded-lg p-4 text-center transition duration-200 
              ${
                selected.includes(veggie)
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800 hover:bg-indigo-100"
              }`}
          >
            {veggie}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={onPrev} className="text-indigo-600 hover:underline">
          Back
        </button>
        <button
          onClick={handleComplete}
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 transition duration-200"
        >
          Complete Pizza
        </button>
      </div>
    </div>
  );
};

export default VeggieSelector;
