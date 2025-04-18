import Constants from "../Constants.jsx";
import axios from 'axios';
import { Authentication } from './Authentication';
import { Car } from '../model/Car';
import {CarModel} from "../model/CarModel";
import {CarBrand} from "../model/CarBrand";
import {TransmissionType} from "../model/TransmissionType";
import {FuelType} from "../model/FuelType";
import {Feature} from "../model/Feature";
import {Addon} from "../model/Addon";

export const CarsAPIIII = {

  getAllCars: async () => {

    const result = await axios.get(`${Constants.API_URL}/car`, {});

    let cars = [];

    for (let i = 0; i < result.data.length; i++) {
      const carObject = result.data[i];
      const car = CarsAPIIII.getCarFromJsonObject(carObject);
      cars.push(car);
    }

    console.log(result.data);

    return cars;


  },

  getCarFromJsonObject(carObject) {
    const modelObject = carObject.model;

    const brandObject = modelObject.brand;
    const brand = new CarBrand(brandObject.id, brandObject.name);

    const model = new CarModel(modelObject.id, modelObject.name, brand);

    const transmissionTypeObject = carObject.transmissionType;
    const transmissionType = new TransmissionType(transmissionTypeObject.id, transmissionTypeObject.name);

    const fuelTypeObject = carObject.fuelType;
    const fuelType = new FuelType(fuelTypeObject.id, fuelTypeObject.name);

    const features = carObject.features.map(feature => {
      return new Feature(feature.id, feature.name);
    });

    const addons = carObject.addons.map(addon => {
      return new Addon(addon.id, addon.name);
    });
    return new Car(
      carObject.id,
      carObject.year,
      carObject.numberOfSeats,
      carObject.pricePerDay,
      model,
      fuelType,
      transmissionType,
      addons,
      features
    );
  }
};
