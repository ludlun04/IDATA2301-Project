import Constants from "../Constants";
import axios from "axios";
import {FuelType} from "../model/FuelType";

/**
 * API module for handling fuel types.
 * It provides methods to fetch fuel types used in cars.
 */
export const FuelTypeAPI = {

  /**
   * Fetches all fuel types that are currently in use.
   *
   * @returns {Promise<FuelType[]>} A promise that resolves to an array of FuelType objects.
   * @throws {Error} If there is an error fetching the fuel types.
   */
  getFuelTypesUsedInCars: async () => {
    try {
      const result = await axios.get(`${Constants.API_URL}/fuel/with_rentals`, {});

      let fuelTypes = [];
      result.data.forEach((fuelTypeObject) => {
        fuelTypes.push(getFuelTypeFromJsonObject(fuelTypeObject));
      })
      return fuelTypes;
    } catch (error) {
      console.error("Error fetching fuel types:", error);
      throw error;
    }
  }
}

const getFuelTypeFromJsonObject = (fuelTypeObject) => {
  try {
    return new FuelType(fuelTypeObject.id, fuelTypeObject.name);
  } catch (error) {
    console.error("Error creating fuel type from JSON object:", error);
    throw error;
  }
}
