import Constants from "../Constants.jsx";
import axios from 'axios';
import {Car} from "../model/Car";
import {CarBrand} from "../model/CarBrand";
import {CarModel} from "../model/CarModel";
import {FuelType} from "../model/FuelType";
import {TransmissionType} from "../model/TransmissionType";
import {Company} from "../model/Company";
import {Feature} from "../model/Feature";
import {Addon} from "../model/Addon";

export const CarAPI = {
  getCar: async (id) => {
    const result = await axios.get(`${Constants.API_URL}/car/${id}`, {});

    const carObject = result.data;
    console.log(carObject);

    return getCarFromJsonObject(carObject);
  },

  getAllCars: async (filters) => {
    //TODO: Implement filters
    const result = await axios.get(`${Constants.API_URL}/car`, {});
    let cars = [];
    result.data.forEach((carObject) => {
      cars.push(getCarFromJsonObject(carObject))
    })

    console.log(cars);
    return cars;
  },
}

function getCarFromJsonObject(carObject)
{
  const modelObject = carObject.model;

  const brandObject = modelObject.brand;
  const brand = new CarBrand(brandObject.id, brandObject.name);

  const model = new CarModel(modelObject.id, modelObject.name, brand);

  const transmissionTypeObject = carObject.transmissionType;
  const transmissionType = new TransmissionType(transmissionTypeObject.id, transmissionTypeObject.name);

  const fuelTypeObject = carObject.fuelType;
  const fuelType = new FuelType(fuelTypeObject.id, fuelTypeObject.name);

  const companyObject = carObject.company;
  const company = new Company(companyObject.id, companyObject.name, companyObject.address, companyObject.email);

  const features = carObject.features.map(feature => {
    return new Feature(feature.id, feature.name);
  });

  const addons = carObject.addons.map(addon => {
    return new Addon(addon.id, addon.name);
  });
  return new Car(
      company,
      carObject.id,
      carObject.year,
      carObject.numberOfSeats,
      carObject.pricePerDay,
      model,
      fuelType,
      transmissionType,
      addons,
      features,
      true,
      true,
      carObject.description
  )
}