import axios from 'axios';
import {Car} from "../model/Car";
import {CarBrand} from "../model/CarBrand";
import {CarModel} from "../model/CarModel";
import {FuelType} from "../model/FuelType";
import {TransmissionType} from "../model/TransmissionType";
import {Company} from "../model/Company";
import {Feature} from "../model/Feature";
import {Addon} from "../model/Addon";
import {CarUrlBuilder} from "./CarUrlBuilder";

export const CarAPI = {

  getCar: async (id) => {

    const result = await axios.get(`${_getBaseUrl()}/${id}`, {});

    const carObject = result.data;
    console.log(carObject);

    return CarAPI.getCarFromJsonObject(carObject);
  },

  getAllCars: async (filters) => {
    let urlBuilder = new CarUrlBuilder();

    if (filters) {
      urlBuilder = urlBuilder
        .withSellers(filters.sellers)
        .withSeats(filters.seats)
        .withManufacturers(filters.manufacturers)
        .withFuelTypes(filters.fuelTypes)
        .withKeyword(filters.keyword)
    }
    const url = urlBuilder.build();
    console.log("Requesting cars from: " + url);

    const result = await axios.get(url, {});
    let cars = [];
    result.data.forEach((carObject) => {
      cars.push(CarAPI.getCarFromJsonObject(carObject));
    })

    console.log(cars);
    return cars;
  },

  getAllAmountOfSeatsInCars: async () => {
    const result = await axios.get(`${_getBaseUrl()}/seats`, {});
    console.log(result);
    let seats = [];
    result.data.forEach((seat) => {
      seats.push(seat);
    })
    return seats;
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
    );
  }
}

const _getBaseUrl = () => {
  return new CarUrlBuilder().build();
}