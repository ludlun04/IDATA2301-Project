export class Car {
  /**
   * Creates a new car.
   * @param {number} id - The ID of the car.
   * @param {number} year - The manufacturing year of the car.
   * @param {number} numberOfSeats - The number of seats in the car.
   * @param {number} pricePerDay - The rental price per day in NOK.
   * @param {Object} model - The model of the car.
   * @param {Object} fuelType - The fuel type of the car.
   * @param {Object} transmissionType - The transmission type of the car.
   * @param {Array} addons - The addons of the car.
   * @param {Array} features - The features of the car.
   */
  constructor(id, year, numberOfSeats, pricePerDay, model, fuelType, transmissionType, addons, features) {
    this._id = id;
    this._year = year;
    this._numberOfSeats = numberOfSeats;
    this._pricePerDay = pricePerDay;
    this._model = model;
    this._fuelType = fuelType;
    this._transmissionType = transmissionType;
    this._addons = addons;
    this._features = features;
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
    return [
      new Car(1, 2015, 5, 900, { name: "Corolla" }, { name: "Petrol" }, { name: "Manual" }, [{ name: "Baby seat" }], [{ name: "Parking camera" }]),
      new Car(2, 2018, 4, 1100, { name: "Civic" }, { name: "Diesel" }, { name: "Automatic" }, [{ name: "GPS" }], [{ name: "Sunroof" }]),
      new Car(3, 2020, 7, 1500, { name: "Highlander" }, { name: "Hybrid" }, { name: "Automatic" }, [{ name: "Heated seats" }], [{ name: "Blind spot monitor" }])
    ];
  }
}