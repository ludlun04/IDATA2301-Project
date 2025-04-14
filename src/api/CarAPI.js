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

export const UsersAPI = {

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
        const model = new CarModel(result.data.model.id, result.data.model.name)
        const brand = new CarBrand(result.data.model.brand.id, result.data.model.brand.name)
        const fuelType = new FuelType(result.data.fuelType.id, result.data.fuelType.name)
        const transmissionType = new TransmissionType(result.data.transmissionType.id, result.data.transmissionType.name)
        const features = result.data.features.map(feature => new Feature(feature.id, feature.name))

        //TODO: Fix favorite/available
        const car = new Car(company, brand, carId, year, numberOfSeats, pricePerDay, model, fuelType, transmissionType, features, true, true)



        console.log(result.data);

        return car;
    }
}