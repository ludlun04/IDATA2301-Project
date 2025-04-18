import Constants from "../Constants.jsx";
import axios from 'axios';
import { Authentication } from './Authentication';
import {Car} from "../model/Car";
import {CarBrand} from "../model/CarBrand";
import {CarModel} from "../model/CarModel";
import {FuelType} from "../model/FuelType";
import {TransmissionType} from "../model/TransmissionType";
import {Company} from "../model/Company";
import {Feature} from "../model/Feature";

export const CarAPI = {
    getCar: async (id) => {
        if (!Authentication.isSignedIn()) {
            throw new Error("User is not signed in");
        }

        const token = Authentication.getToken();
        const result = await axios.get(`${Constants.API_URL}/car/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const company = new Company(result.data.company.id, result.data.company.name, result.data.company.address, result.data.company.email)
        const carId = result.data.id
        const year = result.data.year
        const numberOfSeats = result.data.numberOfSeats
        const pricePerDay = result.data.pricePerDay
        const model = new CarModel(result.data.model.id, result.data.model.name, result.data.model.brand)
        const brand = new CarBrand(result.data.model.brand.id, result.data.model.brand.name)
        const fuelType = new FuelType(result.data.fuelType.id, result.data.fuelType.name)
        const transmissionType = new TransmissionType(result.data.transmissionType.id, result.data.transmissionType.name)
        const features = result.data.features.map(feature => new Feature(feature.id, feature.name))
        const description = result.data.description

        //TODO: Fix favorite/available
        const car = new Car(company, brand, carId, year, numberOfSeats, pricePerDay, model, fuelType, transmissionType, features, true, true, description)



        console.log(result.data);

        return car;
    },
    getAllCars: async (filters) => {
        //TODO: Implement filters
        if (!Authentication.isSignedIn()) {
            throw new Error("User is not signed in");
        }
        const token = Authentication.getToken();
        const result = await axios.get(`${Constants.API_URL}/car`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        let cars = [];
        result.data.forEach((car) => {
            const company = new Company(car.company.id, car.company.name, car.company.address, car.company.email)
            const carId = car.id
            const year = car.year
            const numberOfSeats = car.numberOfSeats
            const pricePerDay = car.pricePerDay
            const model = new CarModel(car.model.id, car.model.name, car.model.brand)
            const brand = new CarBrand(car.model.brand.id, car.model.brand.name)
            const fuelType = new FuelType(car.fuelType.id, car.fuelType.name)
            const transmissionType = new TransmissionType(car.transmissionType.id, car.transmissionType.name)
            const features = car.features.map(feature => new Feature(feature.id, feature.name))
            const description = car.description

            //TODO: Fix favorite/available
            const c = new Car(company, brand, carId, year, numberOfSeats, pricePerDay, model, fuelType, transmissionType, features, true, true, description)
            cars.push(c);
        })

        console.log(cars);
        return cars;
    }
}