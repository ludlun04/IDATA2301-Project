import Constants from "../Constants";
import axios from "axios";
import {CarBrand} from "../model/CarBrand";

export const CarBrandAPI = {

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

const getBrandFromJsonObject = (brandObject) => {
  try {
    return new CarBrand(brandObject.id, brandObject.name);
  } catch (error) {
    console.error("Error creating brand from JSON object:", error);
    throw error;
  }
}
