const Pizza = require("../models/Pizza");

// Get all pizzas
exports.getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new pizza
exports.createPizza = async (req, res) => {
  const { name, ingredients, price } = req.body;

  try {
    const pizza = new Pizza({ name, ingredients, price });
    await pizza.save();
    res.status(201).json(pizza);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a specific pizza by ID
exports.getPizzaById = async (req, res) => {
  const { pizzaId } = req.params;

  try {
    const pizza = await Pizza.findById(pizzaId);
    if (!pizza) {
      return res.status(404).json({ message: "Pizza not found" });
    }
    res.json(pizza);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
