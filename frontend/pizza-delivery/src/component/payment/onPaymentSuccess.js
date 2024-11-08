import React from "react";
import Payment from "./Payment";

const ParentComponent = () => {
  const handlePaymentSuccess = () => {
    console.log("Payment was successful!");
  };

  return (
    <div>
      <h1>Your Order</h1>
      <Payment onPaymentSuccess={handlePaymentSuccess} />
    </div>
  );
};

export default ParentComponent;
