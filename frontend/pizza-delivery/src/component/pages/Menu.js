// frontend/pizza-delivery/src/component/pages/Menu.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/payment"); // Navigate to the payment page
  };

  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
        Our Pizza Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl p-4">
        {/* Add your pizza images here */}
        <img
          src="images/pizza3.jpg"
          alt="Pizza 1"
          className="pizza-image rounded-lg shadow-lg cursor-pointer transition ease-in-out duration-300 transform hover:scale-105"
          onClick={handleImageClick}
        />
        <img
          src="images/pizza2.webp"
          alt="Pizza 2"
          className="pizza-image rounded-lg shadow-lg cursor-pointer transition ease-in-out duration-300 transform hover:scale-105"
          onClick={handleImageClick}
        />
        <img
          src="images/pizza4.webp"
          alt="Pizza 3"
          className="pizza-image rounded-lg shadow-lg cursor-pointer transition ease-in-out duration-300 transform hover:scale-105"
          onClick={handleImageClick}
        />
        <img
          src="images/pizza5.jpeg"
          alt="Pizza 4"
          className="pizza-image rounded-lg shadow-lg cursor-pointer transition ease-in-out duration-300 transform hover:scale-105"
          onClick={handleImageClick}
        />
        <img
          src="images/pizza6.jpeg"
          alt="Pizza 5"
          className="pizza-image rounded-lg shadow-lg cursor-pointer transition ease-in-out duration-300 transform hover:scale-105"
          onClick={handleImageClick}
        />
        <img
          src="images/pizza7.jpeg"
          alt="Pizza 6"
          className="pizza-image rounded-lg shadow-lg cursor-pointer transition ease-in-out duration-300 transform hover:scale-105"
          onClick={handleImageClick}
        />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Menu;
