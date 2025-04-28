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

  requestRent: async (carId, startDate, endDate) => {
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
      }),
    });
  }
}