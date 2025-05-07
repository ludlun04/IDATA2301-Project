import axios from "axios";
import Constants from "../Constants";
import { Authentication } from "./Authentication";
import { Order } from "../model/Order";

export const OrderAPI = {
  getOrderById: async (orderId) => {
    try {
      return await axios(`${Constants.API_URL}/order/${orderId}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${Authentication.getToken()}`,
        },
      }).then(async (response) => {
        const data = response.data;

        return new Order(
          data.orderId,
          data.carId,
          data.userId,
          new Date(data.startDate),
          new Date(data.endDate),
          data.price,
        )
      });
    } catch (error) {
      console.error("Error fetching order:", error);
      throw error;
    }
  },

  requestRent: async (carId, startDate, endDate, addons) => {
    try {
      return axios(`${Constants.API_URL}/order`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${Authentication.getToken()}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          carId: carId,
          startDate: startDate,
          endDate: endDate,
          addonIds: addons.map(addon => addon.getId()),
        }),
      });
    } catch (error) {
      console.error("Could not request rent: ", error);
      throw error;
    }

  },

  getActiveRentals: async () => {
    try {
      return await axios(`${Constants.API_URL}/order/active`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${Authentication.getToken()}`,
        },
      }).then(async (response) => {
        const data = response.data;
        const orders = [];

        for (const orderData of data) {
          const order = new Order(
            orderData.orderId,
            orderData.carId,
            orderData.userId,
            new Date(orderData.startDate),
            new Date(orderData.endDate),
            orderData.price,
          );
          orders.push(order);
        }

        return orders;
      });
    } catch (error) {
      console.error("Could not get active rentals: ", error);
      throw error;
    }
  },

  getHistoricalRentals: async () => {
    try {
      return await axios(`${Constants.API_URL}/order/history`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${Authentication.getToken()}`,
        },
      }).then(async (response) => {
        const data = response.data;
        const orders = [];

        for (const orderData of data) {
          const order = new Order(
            orderData.orderId,
            orderData.carId,
            orderData.userId,
            new Date(orderData.startDate),
            new Date(orderData.endDate),
            orderData.price,
          );
          orders.push(order);
        }

        return orders;
      });
    } catch (error) {
      console.error("Could not get historical rentals: ", error);
      throw error;
    }
  },


}