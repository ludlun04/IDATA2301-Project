class FuelType {
  /**
   * Creates a new fuel type.
   * @param {number} id - The ID of the fuel type.
   * @param {string} name - The name of the fuel type.
   */
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  /**
   * Returns the fuel type's id.
   * @return {number} The fuel type's id.
   */
  getId() {
    return this._id;
  }

  /**
   * Returns the fuel type's name.
   * @return {string} The fuel type's name.
   */
  getName() {
    return this._name;
  }
}