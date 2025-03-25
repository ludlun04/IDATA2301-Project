class Addon {
  /**
   * Creates a new addon.
   * @param {number} id - The ID of the addon.
   * @param {string} name - The name of the addon.
   */
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  /**
   * Returns the addon's id.
   * @return {number} The addon's id.
   */
  getId() {
    return this._id;
  }

  /**
   * Returns the addon's name.
   * @return {string} The addon's name.
   */
  getName() {
    return this._name;
  }
}