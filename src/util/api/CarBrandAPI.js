import Constants from "../../Constants";
import axios from "axios";
import {CarBrand} from "../../model/CarBrand";

/**
 * Apis for handling car brands.
 * It provides methods to fetch car brands.
 */
export const CarBrandAPI = {

  /**
   * Fetching all car brands in use.
   *
   * @returns {Promise<CarBrand[]>} A promise that resolves to an array of CarBrand objects.
   * @throws {Error} If there is an error fetching the brands.
   */
  getBrandsUsedInCars: async () => {
    try {
      const result = await axios.get(`${Constants.API_URL}/brand/with_rentals`, {});

      let brands = [];
      result.data.forEach((brandObject) => {
        brands.push(getBrandFromJsonObject(brandObject));
      })
      return brands;
    } catch (error) {
      console.error("Error fetching brands:", error);
      throw error;
    }

  }
}

/**
 * Converts a JSON representation of a brand to a CarBrand object.
 * @param {Object} brandObject - The JSON object representing the brand.
 * @returns {CarBrand} A CarBrand object.
 * @throws {Error} If the brandObject is not valid.
 */
const getBrandFromJsonObject = (brandObject) => {
  try {
    return new CarBrand(brandObject.id, brandObject.name);
  } catch (error) {
    console.error("Error creating brand from JSON object:", error);
    throw error;
  }
}
