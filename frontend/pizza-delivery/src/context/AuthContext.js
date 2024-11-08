import { createContext, useContext, useEffect, useState } from "react";
import { pizzaService } from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await pizzaService.getUserProfile();
          setUser(response.data);
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await pizzaService.login(credentials);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
