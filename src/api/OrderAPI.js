import axios from "axios";
import Constants from "../Constants";
import { Authentication } from "./Authentication";
import { Order } from "../model/Order";

export const OrderAPI = {
  getOrderById: async (orderId) => {
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
  },

  requestRent: async (carId, startDate, endDate, addons) => {
    return await axios(`${Constants.API_URL}/order/`, {
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
  },

  getActiveRentals: async () => {
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
  },

  getHistoricalRentals: async () => {
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
  },


}