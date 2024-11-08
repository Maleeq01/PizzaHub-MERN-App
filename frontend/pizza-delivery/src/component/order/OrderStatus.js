import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pizzaService } from "../../services/api";

const OrderStatus = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const response = await pizzaService.getOrderStatus(orderId);
        setOrder(response.data);
      } catch (err) {
        setError("Failed to fetch order status. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderStatus();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order Status</h2>
      <div className="border p-4 rounded-lg">
        <h3 className="text-xl font-semibold">Order ID: {order._id}</h3>
        <p className="mt-2">Status: {order.status}</p>
        <p className="mt-2">
          Pizza: {order.pizza.base} with {order.pizza.sauce},{" "}
          {order.pizza.cheese}, and {order.pizza.veggies.join(", ")}
        </p>
        <p className="mt-2">Total Amount: ${order.amount}</p>
        <p className="mt-2">
          Order Placed At: {new Date(order.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default OrderStatus;
