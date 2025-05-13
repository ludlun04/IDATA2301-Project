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
import Constants from "../Constants";

/**
 * CarAPI module to handle car-related endpoints.
 * It provides methods to fetch car details, all cars, and user favorites.
 */
export const CarAPI = {
  /**
   * Gets a cary by its ID.
   * 
   * @param {number} id a number larger than 0
   * @returns {Promise<Car>} A promise that resolves to a Car object.
   */
  getCar: async (id) => {
    try {
      const result = await axios.get(`${_getBaseUrl()}/${id}`, {});

      const carObject = result.data;
      console.log(carObject);

      let car = CarAPI.getCarFromJsonObject(carObject);
      if (Authentication.isSignedIn()) {
        car = await _setFavorite(car);
      }

      return car;
    } catch (error) {
      console.error("Error fetching car:", error);
      throw error;
    }

  },

  /**
   * Returns all cars that fit the specified filters.
   *
   * @param {*} filters 
   * @returns {Promise<Car[]>} A promise that resolves to an array of Car objects.
   */
  getAllCars: async (filters) => {
    try {
      let urlBuilder = new CarUrlBuilder();

      if (filters) {
        urlBuilder = urlBuilder
          .withSellers(filters.sellers)
          .withSeats(filters.seats)
          .withManufacturers(filters.brands)
          .withFuelTypes(filters.fuelTypes)
          .withFromPrice(filters.fromPrice)
          .withToPrice(filters.toPrice)
          .withKeyword(filters.keyword)
        if (filters.fromTime) {
          if (filters.toTime) {
            urlBuilder = urlBuilder.withBetweenTimes(filters.fromTime, filters.toTime);
          } else {
            urlBuilder = urlBuilder.withFromTime(filters.fromTime);
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

      return {
        cars: cars,
        url: urlBuilder.getFilterPart()
      }
    } catch (error) {
      console.error("Error fetching cars:", error);
      throw error;
    }

  },

  /**
   * Returns the current user's favorite cars.
   *
   * @returns {Promise<Car[]>} A promise that resolves to an array of Car objects.
   */
  getCurrentUserFavorites: async () => {
    try {
      if (!Authentication.isSignedIn()) {
        throw new Error("User is not signed in")
      }

      const token = Authentication.getToken();
      const result = await axios.get(`${Constants.API_URL}/users/favorites`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const cars = [];

      // eslint-disable-next-line array-callback-return
      result.data.map(car =>  {
        cars.push(CarAPI.getCarFromJsonObject(car))
      })

      cars.forEach((car) => {
        car.setFavorite(true)
        car.setAvailable(true)
      })

      return cars;
    } catch (error) {
      console.error("Error fetching favorites:", error);
      throw error;
    }

  },

  /**
   * Returns all combinations of seat numbers in cars.
   *
   * @returns {Promise<number[]>} A promise that resolves to an array of seat amounts.
   */
  getAllAmountOfSeatsInCars: async () => {
    try {
      const result = await axios.get(`${_getBaseUrl()}/seats`, {});
      let seats = [];
      result.data.forEach((seat) => {
        seats.push(seat);
      })
      return seats;
    } catch (error) {
      console.error("Error fetching seats:", error);
      throw error;
    }
  },

  /**
   * Converts a JSON represaentation of a car to a Car object.
   * @param {string} carObject 
   * @returns {Car} A Car object.
   * @throws {Error} If the carObject is not valid.
   */
  getCarFromJsonObject(carObject) {
    try {
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
        return new Addon(addon.id, addon.name, addon.price);
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
        carObject.description,
        carObject.visible
      );
    } catch (error) {
      console.error("Error parsing car object:", error);
      throw error;
    }
  },

  /**
   * Turns a Car object into a JSON object.
   *
   * @param {Car} car
   * @returns {Object} A JSON object representing the car.
   * @throws {Error} If the car object is not valid.
   */
  getJsonObjectFromCar(car) {
    try {
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
            name: addon.getName(),
            price: addon.getPrice()
          }
        }),
        features: car.getFeatures().map(feature => {
          return {
            id: feature.getId(),
            name: feature.getName()
          }
        }),
        description: car.getDescription(),
        visibility: car.getVisibility()
      };
    } catch (error) {
      console.error("Error converting car to JSON object:", error);
      throw error;
    }

  },

  /**
   * Updates the visibility of a car.
   * 
   * @param {number} carId the id of the car to alter
   * @param {boolean} visibility the new visibility of the car
   * @returns {Promise<Car>} A promise that resolves to the updated Car object.
   * @throws {Error} If the carId or visibility is not valid.
   */
  updateCarVisibility: async (carId, visibility) => {
    try {
      if (carId !== undefined && visibility !== undefined) {
        const token = Authentication.getToken();
        const response = await axios.put(
            `${Constants.API_URL}/car/${carId}/visibility`,
            visibility,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              method: 'put',
            }
        );
        return response.data;
      }
    } catch (error) {
      console.error("Error updating car visibility:", error);
      throw error;
    }
  }
}

const _setFavorite = async (car) => {
  const result = await _setFavorites([car]);
  return result[0];
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
  const urlBuilder = new CarUrlBuilder().withFromTime(new Date());
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