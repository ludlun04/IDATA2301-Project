import Constants from "../Constants";
import axios from "axios";
import {FuelType} from "../model/FuelType";

export const FuelTypeAPI = {

  getFuelTypesUsedInCars: async () => {
    const result = await axios.get(`${Constants.API_URL}/fuel/with_rentals`, {});

    let fuelTypes = [];
    result.data.forEach((fuelTypeObject) => {
      fuelTypes.push(getFuelTypeFromJsonObject(fuelTypeObject));
    })
    return fuelTypes;
  }
}

const getFuelTypeFromJsonObject = (fuelTypeObject) => {
  return new FuelType(fuelTypeObject.id, fuelTypeObject.name);
}
