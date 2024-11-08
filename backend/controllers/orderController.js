const Order = require("../models/Order");

// Create a new order
exports.createOrder = async (req, res) => {
  const { userId, pizza, amount } = req.body;

  try {
    const order = new Order({ userId, pizza, amount });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all orders for a user
exports.getOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a specific order by ID
exports.getOrderById = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
