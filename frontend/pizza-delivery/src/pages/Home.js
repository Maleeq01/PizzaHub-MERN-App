import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pizza.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center h-full ">
        <h1
          className="text-8xl font-bold bg-gradient-to-r from-red-600 
        to-indigo-600 bg-clip-text text-transparent"
        >
          Welcome to Pizza Hub!
        </h1>
        <br />
        <p className="text-2xl font-bold  text-black mb-8">
          Your favorite pizza delivered to your door.
        </p>

        <Link
          to="/build-pizza"
          className="bg-indigo-600 text-white text-xl rounded-2xl px-6 py-4 hover:bg-gradient-to-r from-fuchsia-600 to-purple-600 transition duration-200"
        >
          Start Building Your Pizza
        </Link>
        {/* <Link to="/login" className="mt-4 text-indigo-600 hover:underline">
          Already have an account? Log in
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
