import { createContext, useContext, useState } from "react";

const PizzaContext = createContext(null);

export const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState({
    base: "",
    sauce: "",
    cheese: "",
    veggies: [],
  });

  const updatePizza = (field, value) => {
    setPizza((prevPizza) => ({
      ...prevPizza,
      [field]: value,
    }));
  };

  const addVeggie = (veggie) => {
    setPizza((prevPizza) => ({
      ...prevPizza,
      veggies: [...prevPizza.veggies, veggie],
    }));
  };

  const removeVeggie = (veggie) => {
    setPizza((prevPizza) => ({
      ...prevPizza,
      veggies: prevPizza.veggies.filter((v) => v !== veggie),
    }));
  };

  return (
    <PizzaContext.Provider
      value={{ pizza, updatePizza, addVeggie, removeVeggie }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
