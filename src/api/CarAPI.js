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
import {UsersAPI} from "./UsersAPI";
import {Authentication} from "./Authentication";

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
        .withFromPrice(filters.from_price)
        .withToPrice(filters.to_price)
        .withKeyword(filters.keyword)
      if (filters.from_time) {
        if (filters.to_time) {
          urlBuilder = urlBuilder.withBetweenTimes(filters.from_time, filters.to_time);
        } else {
          urlBuilder = urlBuilder.withFromTime(filters.from_time);
        }
      }
    }
    const url = urlBuilder.build();
    console.log("Requesting cars from: " + url);

    const result = await axios.get(url, {});
    let cars = [];
    result.data.forEach((carObject) => {
      cars.push(CarAPI.getCarFromJsonObject(carObject));
    })

    cars = await _setAvailable(cars);

    if (Authentication.isSignedIn()) {
      cars = await _setFavorites(cars);
    }

    return cars;
  },

  getAllAmountOfSeatsInCars: async () => {
    const result = await axios.get(`${_getBaseUrl()}/seats`, {});
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
      false,
      false,
      carObject.description
    );
  },

  getJsonObjectFromCar(car) {
    return {
      id: car.getId(),
      year: car.getYear(),
      numberOfSeats: car.getNumberOfSeats(),
      pricePerDay: car.getPricePerDay(),
      model: {
        id: car.getModel().getId(),
        name: car.getModel().getName(),
        brand: {
          id: car.getModel().getBrand().getId(),
          name: car.getModel().getBrand().getName()
        }
      },
      fuelType: {
        id: car.getFuelType().getId(),
        name: car.getFuelType().getName()
      },
      transmissionType: {
        id: car.getTransmissionType().getId(),
        name: car.getTransmissionType().getName()
      },
      addons: car.getAddons().map(addon => {
        return {
          id: addon.getId(),
          name: addon.getName()
        }
      }),
      features: car.getFeatures().map(feature => {
        return {
          id: feature.getId(),
          name: feature.getName()
        }
      }),
      description: car.getDescription()
    };
  }
}
const _setFavorites = async (cars) => {
  const favorites = await UsersAPI.getFavoritesAmongCars(cars);
  favorites.forEach(favorite => {
    for (let car in cars) {
      if (cars[car].getId() === favorite.getId()) {
        cars[car].setFavorite(true);
        break;
      }
    }
  });
  return cars;
}

const _setAvailable = async (cars) => {
  const urlBuilder = new CarUrlBuilder().withFromTime(new Date);
  const url = urlBuilder.build();
  const response = await axios.get(url, {});

  const available = [];
  response.data.forEach(carObject => {
    available.push(CarAPI.getCarFromJsonObject(carObject));
  });

  cars.forEach(car => {
    available.forEach(availableCar => {
      if (car.getId() === availableCar.getId()) {
        car.setAvailable(true);
      }
    });
  });
  return cars;
}

const _getBaseUrl = () => {
  return new CarUrlBuilder().build();
}