import React, { useEffect, useState } from "react";
import { pizzaService } from "../services/api";
import OrderSummary from "../component/order/OrderSummary";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await pizzaService.getOrders();
        setOrders(response.data);
      } catch (err) {
        setError("Failed to fetch orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {orders.map((order) => (
          <OrderSummary
            key={order._id}
            pizza={order.pizza}
            totalAmount={order.amount}
            onConfirm={() => console.log(`Order ${order._id} confirmed`)} //
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
