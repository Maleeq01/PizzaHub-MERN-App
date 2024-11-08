const express = require("express");
const {
  getPizzas,
  createPizza,
  getPizzaById,
} = require("../controllers/pizzaController");
const router = express.Router();

// Get all pizzas
router.get("/", getPizzas);

// Create a new pizza
router.post("/", createPizza);

// Get a specific pizza by ID
router.get("/:pizzaId", getPizzaById);

module.exports = router;
