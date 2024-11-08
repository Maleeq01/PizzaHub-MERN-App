import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Pizza-related API calls
export const pizzaService = {
  getOrders: () => api.get("/orders"),
  getOrderStatus: (orderId) => api.get(`/orders/${orderId}`),
  getInventory: () => api.get("/inventory"),
  getUserProfile: () => api.get("/profile"),
  login: (credentials) => api.post("/auth/login", credentials),
  register: (userData) => api.post("/auth/register", userData),
  forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
  resetPassword: (token, password) =>
    api.post(`/auth/reset-password/${token}`, { password }),
};

export default api;
