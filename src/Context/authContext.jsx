import { createContext, useContext, useState } from "react";
import api from "../Services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (email, password) => {
    try {
      const response = await api.login({ email, password });

      if (response.success) {
        const { admin, token } = response.data;
        setUser(admin);
        setToken(token);
        localStorage.setItem("user", JSON.stringify(admin));
        localStorage.setItem("token", token);
        return { success: true };
      } else {
        return {
          success: false,
          message: response.message || "Invalid credentials",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error?.response?.data?.message || error.message || "An error occurred during login",
      };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
