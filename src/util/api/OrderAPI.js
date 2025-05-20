import axios from "axios";
import Constants from "../../Constants";
import { Authentication } from "./Authentication";
import { Order } from "../../model/Order";
import { CarAPI } from "./CarAPI";
import { UsersAPI } from "./UsersAPI";

/**
 * API module for handling orders.
 * It provides methods to fetch, create, and managing orders.
 */
export const OrderAPI = {
  /**
   * Fetches an order by its ID.
   *
   * @param {number} orderId - The ID of the order to fetch.
   * @returns {Promise<Order>} A promise that resolves to an Order object.
   * @throws {Error} If there is an error fetching the order.
   */
  getOrderById: async (orderId) => {
    try {
      return await axios(`${Constants.API_URL}/order/${orderId}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${Authentication.getToken()}`,
        },
      }).then(async (response) => {
        const data = response.data;

        return _getOrderFromJsonObject(data);
      });
    } catch (error) {
      console.error("Error fetching order:", error);
      throw error;
    }
  },

  /**
   * Requests a rental for a car.
   *
   * @param {number} carId - The ID of the car to rent.
   * @param {Date} startDate - The start date of the rental.
   * @param {Date} endDate - The end date of the rental.
   * @param {Array} addons - An array of addon objects.
   * @returns {Promise<Order>} A promise that resolves to an Order object.
   * @throws {Error} If there is an error requesting the rental.
   */
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

  /**
   * Fetches all active rentals for the current user.
   *
   * @returns {Promise<Order[]>} A promise that resolves to an array of Order objects.
   * @throws {Error} If there is an error fetching the active rentals.
   */
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
          orders.push(_getOrderFromJsonObject(orderData)
          );
        }

        return orders;
      });
    } catch (error) {
      console.error("Could not get active rentals: ", error);
      throw error;
    }
  },

  /**
   * Fetches all historical rentals for the current user.
   * 
   * @returns {Promise<Order[]>} A promise that resolves to an array of Order objects.
   * @throws {Error} If there is an error fetching the historical rentals.
  */
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
          orders.push(_getOrderFromJsonObject(orderData));
        }

        return orders;
      });
    } catch (error) {
      console.error("Could not get historical rentals: ", error);
      throw error;
    }
  },

  /**
   * Fetches all orders for a specific car by its ID.
   * 
   * @param {number} carId - The ID of the car.
   * @returns {Promise<Order[]>} A promise that resolves to an array of Order objects.
   * @throws {Error} If there is an error fetching the orders.
   */
  getOrdersByCarId: async (carId) => {
    try {
      const response = await axios.get(`${Constants.API_URL}/order/car/${carId}`, {});

      const orderObjects = response.data;
      const orders = [];
      for (const orderObject of orderObjects) {
        orders.push(_getOrderFromJsonObject(orderObject));
      }
      return orders;
    } catch (error) {
      console.error("Could not get orders by car id: ", error);
      throw error;
    }
  },

  /**
   * Fetches all orders for a specific company by its ID.
   * 
   * @param {number} companyId - The ID of the company.
   * @returns {Promise<Order[]>} A promise that resolves to an array of Order objects.
   * @throws {Error} If there is an error fetching the orders.
  */
  getOrdersByCompanyId: async (companyId) => {
    try {
      const response = await axios.get(
        `${Constants.API_URL}/order/company/${companyId}`,
        {
          headers: {
            "Authorization": `Bearer ${Authentication.getToken()}`,
          }
        }
      );
      const orders = [];
      response.data.forEach(orderObject => {
        orders.push(_getOrderFromJsonObject(orderObject));
      });
      return orders;
    } catch (error) {
      console.log("Could not get orders by company id: ", error)
    }
  }


}

const _getOrderFromJsonObject = (orderObject) => {
  try {
    const car = CarAPI.getCarFromJsonObject(orderObject.car);
    const user = UsersAPI.getUserFromJsonObject(orderObject.user)
    const startDate = new Date(orderObject.startDate);
    const endDate = new Date(orderObject.endDate);

    return new Order(orderObject.orderId, car, user, startDate, endDate, orderObject.price);
  } catch (error) {
    console.error("Could not get order from json object: ", error);
    throw error;
  }
}