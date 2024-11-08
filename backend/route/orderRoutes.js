const express = require("express");
const {
  createOrder,
  getOrders,
  getOrderById,
} = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware"); // Import the authentication middleware
const router = express.Router();

// Create a new order
router.post("/", authMiddleware, createOrder); // Protect this route

// Get all orders for a user
router.get("/:userId", authMiddleware, getOrders); // Protect this route

// Get a specific order by ID
router.get("/order/:orderId", authMiddleware, getOrderById); // Protect this route

module.exports = router;
