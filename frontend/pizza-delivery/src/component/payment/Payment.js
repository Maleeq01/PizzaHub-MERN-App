import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = ({ onPaymentSuccess }) => {
  const navigate = useNavigate();

  const handlePayment = (method) => {
    console.log(`Processing payment with RM{method}`);
    onPaymentSuccess();
    navigate("/order-confirmation");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Select Payment Method</h2>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handlePayment("Credit Card")}
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700"
        >
          Credit Card
        </button>
        <button
          onClick={() => handlePayment("PayPal")}
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700"
        >
          PayPal
        </button>
        <button
          onClick={() => handlePayment("Bank Transfer")}
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700"
        >
          Bank Transfer
        </button>
      </div>
    </div>
  );
};

export default Payment;
