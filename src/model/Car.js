import { CarBrand } from "./CarBrand";
import { CarModel } from "./CarModel";
import { FuelType } from "./FuelType";
import { Feature } from "./Feature";
import { TransmissionType } from "./TransmissionType";
import { Addon } from "./Addon";

export class Car {
  /**
   * Creates a new car.
   * @param company - The company that owns the car.
   * @param brand - The brand of the car.
   * @param {number} id - The ID of the car.
   * @param {number} year - The manufacturing year of the car.
   * @param {number} numberOfSeats - The number of seats in the car.
   * @param {number} pricePerDay - The rental price per day in NOK.
   * @param {Object} model - The model of the car.
   * @param {Object} fuelType - The fuel type of the car.
   * @param {Object} transmissionType - The transmission type of the car.
   * @param {Array} addons - The addons of the car.
   * @param {Array} features - The features of the car.
   * @param favorite
   * @param available
   */
  constructor(company, brand, id, year, numberOfSeats, pricePerDay, model, fuelType, transmissionType, addons, features, favorite, available) {
    this._id = id;
    this._brand = brand
    this._company = company
    this._year = year;
    this._numberOfSeats = numberOfSeats;
    this._pricePerDay = pricePerDay;
    this._model = model;
    this._fuelType = fuelType;
    this._transmissionType = transmissionType;
    this._addons = addons;
    this._features = features;
    this._favorite = favorite;
    this._available = available;
  }

  getCompany() {
    return this._company.getName();
  }

  setCompany(company) {
    this._company = company;
  }

  getName() {
    return this.getBrand().getName() + " " + this.getModel().getName();
  }

  getBrand() {
    return this._brand;
  }

  getFavorite() {
    return this._favorite;
  }

  setFavorite(favorite) {
    this._favorite = favorite;
  }

  getAvailable() {
    return this._available;
  }

  setAvailable(available) {
    this._available = available;
  }

  getId() {
    return this._id;
  }

  getYear() {
    return this._year;
  }

  getNumberOfSeats() {
    return this._numberOfSeats;
  }

  setNumberOfSeats(numberOfSeats) {
    this._numberOfSeats = numberOfSeats;
  }

  getPricePerDay() {
    return this._pricePerDay;
  }

  setPricePerDay(pricePerDay) {
    this._pricePerDay = pricePerDay;
  }

  getModel() {
    return this._model;
  }

  getFuelType() {
    return this._fuelType;
  }

  getTransmissionType() {
    return this._transmissionType;
  }

  getAddons() {
    return this._addons;
  }

  setAddons(addons) {
    this._addons = addons;
  }

  getFeatures() {
    return this._features;
  }

  setFeatures(features) {
    this._features = features;
  }

  static getSampleCars() {
    const toyota = new CarBrand(1, "Toyota");
    const volkswagen = new CarBrand(2, "Volkswagen");
    const volvo = new CarBrand(3, "Volvo");

    const corolla = new CarModel(1, "Corolla", toyota);
    const passat = new CarModel(2, "Passat", volkswagen);
    const v60 = new CarModel(3, "V60", volvo);

    const kacperRentals = new CarBrand(1, "Kacper Rentals");

    const petrol = new FuelType(1, "Petrol");
    const diesel = new FuelType(2, "Diesel");

    const manual = new TransmissionType(1, "manual");
    const automatic = new TransmissionType(2, "automatic");

    const addons = [
      new Addon(1, "Baby seat"),
      new Addon(2, "GPS")
    ];

    const features = [
      new Feature(1, "Heated seats"),
      new Feature(2, "Sun roof")
    ];

    return [
      new Car(kacperRentals, toyota,1, 2015, 5, 900, corolla, petrol, manual, addons, features, true, true),
      new Car(kacperRentals, volkswagen,2, 2018, 4, 1100, passat, diesel, automatic, addons, features, false, true),
      new Car(kacperRentals, volvo,3, 2020, 7, 1500, v60, petrol, manual, addons, features, true, false),
    ];
  }
}