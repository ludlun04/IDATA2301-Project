import Constants from "../Constants.jsx";

import axios from "axios";
import {resolvePath} from "react-router-dom";

export const Authentication = {
  isSignedIn: () => {
    return localStorage.getItem("token") != null;
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  login: (username, password) => {
    return axios.post(`${Constants.API_URL}/authenticate`, { username, password })
      .then(response => {
        const token = response.data;
        localStorage.setItem("token", token);
        return token;
      })
      .catch(error => {
        console.error("Login failed:", error);
        throw error;
      });
  },

  logout: () => {
    localStorage.removeItem("token");
  },

  tokenIsValid: async () => {
    const token = Authentication.getToken();
    if (!token) {
      return false;
    }


    try {
      const response = await axios.get(`${Constants.API_URL}/authenticate/validate`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.status);
      return response.status === 200;
    } catch (error) {
      console.log("Token expired or invalid")
      return false;
    }
  }
}