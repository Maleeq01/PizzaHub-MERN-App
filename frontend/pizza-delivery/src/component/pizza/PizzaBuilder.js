import { useState } from "react";
import BaseSelector from "./BaseSelector";
import SauceSelector from "./SauceSelector";
import CheeseSelector from "./CheeseSelector";
import VeggieSelector from "./VeggieSelector";

const PizzaBuilder = () => {
  const [pizza, setPizza] = useState({
    base: "",
    sauce: "",
    cheese: "",
    veggies: [],
  });
  const [step, setStep] = useState(1);

  const handleComplete = () => {
    console.log("Pizza completed:", pizza);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const updatePizza = (field, value) => {
    if (field === "veggies") {
      setPizza((prevPizza) => ({
        ...prevPizza,
        veggies: prevPizza.veggies.includes(value)
          ? prevPizza.veggies.filter((v) => v !== value)
          : [...prevPizza.veggies, value],
      }));
    } else {
      setPizza({ ...pizza, [field]: value });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full ${
                step >= i ? "bg-indigo-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {step === 1 && (
        <BaseSelector
          selected={pizza.base}
          onSelect={(base) => updatePizza("base", base)}
          onNext={nextStep}
        />
      )}

      {step === 2 && (
        <SauceSelector
          selected={pizza.sauce}
          onSelect={(sauce) => updatePizza("sauce", sauce)}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}

      {step === 3 && (
        <CheeseSelector
          selected={pizza.cheese}
          onSelect={(cheese) => updatePizza("cheese", cheese)}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}

      {step === 4 && (
        <VeggieSelector
          selected={pizza.veggies}
          onSelect={updatePizza}
          onComplete={handleComplete}
          onPrev={prevStep}
        />
      )}
    </div>
  );
};

export default PizzaBuilder;
