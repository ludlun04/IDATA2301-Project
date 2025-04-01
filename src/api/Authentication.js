import axios from "axios";

export const Authentication = {
  isSignedIn: () => {
    return localStorage.getItem("token") !== null;
  },

  getToken: () => {
    return localStorage.getItem("token");
  },

  login: (username, password) => {
    return axios.post("http://localhost:8080/authenticate", { username, password })
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
}