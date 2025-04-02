export class CarBrand {
  /**
   * Creates a new car brand.
   * @param {number} id - The ID of the car brand.
   * @param {string} name - The name of the car brand.
   */
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  /**
   * Returns the car brand's id.
   * @return {number} The car brand's id.
   */
  getId() {
    return this._id;
  }

  /**
   * Returns the car brand's name.
   * @return {string} The car brand's name.
   */
  getName() {
    return this._name;
  }
}