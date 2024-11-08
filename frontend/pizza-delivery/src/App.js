import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import PizzaBuilder from "./component/pizza/PizzaBuilder";
import OrderStatus from "./component/order/OrderStatus";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Inventory from "./pages/Admin/Inventory";
import Menu from "./component/pages/Menu";
import TrackOrder from "./component/pages/TrackOrder";
import VeggieSelector from "./component/pizza/VeggieSelector";
import OrderSummary from "./component/order/OrderSummary";
import Payment from "./component/payment/Payment";

const App = () => {
  const [pizzaDetails, setPizzaDetails] = useState({
    base: "Thin Crust",
    sauce: "Tomato",
    cheese: "Mozzarella",
    veggies: ["Olives"],
  });

  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/build-pizza" element={<PizzaBuilder />} />
              <Route path="/order-status/:orderId" element={<OrderStatus />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/inventory" element={<Inventory />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route
                path="/veggie-selector"
                element={
                  <VeggieSelector
                    selected={pizzaDetails.veggies}
                    onSelect={(veggie) => {
                      setPizzaDetails((prev) => {
                        const isSelected = prev.veggies.includes(veggie);
                        return {
                          ...prev,
                          veggies: isSelected
                            ? prev.veggies.filter((v) => v !== veggie)
                            : [...prev.veggies, veggie],
                        };
                      });
                    }}
                    onPrev={() => {}}
                  />
                }
              />
              <Route
                path="/order-summary"
                element={
                  <OrderSummary
                    pizza={pizzaDetails}
                    totalAmount={20}
                    onConfirm={() => {}}
                  />
                }
              />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
