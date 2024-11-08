import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ pizza, totalAmount, onConfirm, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/payment");
    }
  };

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent flex flex-col items-center mb-4">
        Order Summary
      </h2>
      <div className="border p-4 rounded-lg flex flex-col items-center">
        <h3 className="text-xl font-semibold">Your Pizza</h3>
        <p className="mt-2">Base: {pizza.base}</p>
        <p className="mt-2">Sauce: {pizza.sauce}</p>
        <p className="mt-2">Cheese: {pizza.cheese}</p>
        <p className="mt-2">
          Veggies:{" "}
          {pizza.veggies.length > 0 ? pizza.veggies.join(", ") : "None"}
        </p>
        <h3 className="text-xl font-semibold mt-4">
          Total Amount: RM{totalAmount}
        </h3>
      </div>{" "}
      <div className="flex justify-center">
        {" "}
        <button
          onClick={handleConfirm}
          className="mt-4 bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 transition duration-200"
        >
          Confirm Order
        </button>
      </div>{" "}
    </div>
  );
};

export default OrderSummary;
