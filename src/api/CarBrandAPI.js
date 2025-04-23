import Constants from "../Constants";
import axios from "axios";
import {CarBrand} from "../model/CarBrand";

export const CarBrandAPI = {

  getBrandsUsedInCars: async () => {
    const result = await axios.get(`${Constants.API_URL}/brand/with_rentals`, {});

    let brands = [];
    result.data.forEach((brandObject) => {
      brands.push(getBrandFromJsonObject(brandObject));
    })
    return brands;
  }
}

const getBrandFromJsonObject = (brandObject) => {
  return new CarBrand(brandObject.id, brandObject.name);
}
