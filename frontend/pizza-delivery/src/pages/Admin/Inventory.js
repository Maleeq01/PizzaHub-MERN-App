import React, { useEffect, useState } from "react";
import { pizzaService } from "../../services/api";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await pizzaService.getInventory(); // Assuming you have an endpoint to fetch inventory
        setInventory(response.data);
      } catch (err) {
        setError("Failed to fetch inventory. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Item Type</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Quantity</th>
            <th className="border border-gray-300 p-2">Threshold</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td className="border border-gray-300 p-2">{item.itemType}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">{item.quantity}</td>
              <td className="border border-gray-300 p-2">{item.threshold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
