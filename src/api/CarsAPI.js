import Constants from "../Constants.jsx";
import axios from 'axios';
import { Authentication } from './Authentication';
import { Car } from '../model/Car';

export const CarsAPI = {

  getAllCars: async () => {

    const token = Authentication.getToken();
    const result = await axios.get(`${Constants.API_URL}/car`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    let cars = [];

    for (let i = 0; i < result.data.length; i++) {
      const car = result.data[i];
      cars.push(new Car(
        car.id,
        car.year,
        car.numberOfSeats,
        car.pricePerDay,
        car.model,
        car.fuelType,
        car.transmissionType,
        car.addons,
        car.features
      ));
    }

    console.log(result.data);

    return cars;


  }
}
