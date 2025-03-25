class CarModel {
  /**
   * Creates a new car model.
   * @param {number} id - The ID of the car model.
   * @param {string} name - The name of the car model.
   * @param {CarBrand} brand - The brand of the car model.
   */
  constructor(id, name, brand) {
    this._id = id;
    this._name = name;
    this._brand = brand;
  }

  /**
   * Returns the car model's id.
   * @return {number} The car model's id.
   */
  getId() {
    return this._id;
  }

  /**
   * Returns the car model's name.
   * @return {string} The car model's name.
   */
  getName() {
    return this._name;
  }

  /**
   * Returns the car model's brand.
   * @return {CarBrand} The car model's brand.
   */
  getBrand() {
    return this._brand;
  }
}
