class Feature {
  /**
   * Creates a new feature.
   * @param {number} id - The ID of the feature.
   * @param {string} name - The name of the feature.
   */
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  /**
   * Returns the feature's id.
   * @return {number} The feature's id.
   */
  getId() {
    return this._id;
  }

  /**
   * Returns the feature's name.
   * @return {string} The feature's name.
   */
  getName() {
    return this._name;
  }
}