import Constants from "../../Constants.jsx";

import axios from "axios";

/**
 * Authentication module to handle user login, logout, and token validation.
 */
export const Authentication = {
  /**
   * Checks if the user is signed in.
   *
   * @returns {boolean} True if the user is signed in, false otherwise.
   */
  hasToken: () => {
    return localStorage.getItem("token") != null;
  },
  
  /**
   * Retrieves the authentication token if user is signed in.
   * @returns {string|null} The authentication token or null if not signed in.
   */
  getToken: () => {
    return localStorage.getItem("token");
  },

  /**
   * Logs in the user with the provided username and password.
   *  
   * @param {string} username 
   * @param {string} password 
   * @returns {Promise<string|null>} The authentication token.
   */
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

  /**
   * Logs out the current user.
   * 
   */
  logout: () => {
    localStorage.removeItem("token");
  },

  /**
   * Checks that the current token is valid.
   * @returns {boolean} True if the token is valid, false otherwise.
   */
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