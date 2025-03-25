class TransmissionType {
  /**
   * Creates a new transmission type.
   * @param {number} id - The ID of the transmission type.
   * @param {string} name - The name of the transmission type.
   */
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  /**
   * Returns the transmission type's id.
   * @return {number} The transmission type's id.
   */
  getId() {
    return this._id;
  }

  /**
   * Returns the transmission type's name.
   * @return {string} The transmission type's name.
   */
  getName() {
    return this._name;
  }
}