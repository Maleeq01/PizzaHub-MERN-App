import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <p className="mb-4">Manage your pizza inventory and orders from here.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/admin/inventory"
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition duration-200"
        >
          Manage Inventory
        </Link>
        <Link
          to="/admin/orders"
          className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition duration-200"
        >
          View Orders
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
