
/**
 * Order class representing a car rental order.
 */
export class Order {

  /**
   * Constructor for the Order class.
   * 
   * @param {string} id - The id of the order.
   * @param {Car} car - The car of the order.
   * @param {User} user - The user of the order.
   * @param {Date} startDate - The start date of the order.
   * @param {Date} endDate - The end date of the order.
   * @param {number} price - The price of the order.
   */
  constructor(id, car, user, startDate, endDate, price) {
    this._id = id;
    this._car = car;
    this._user = user;
    this._startDate = startDate;
    this._endDate = endDate;
    this._price = price;
    this._addons = [];
  }

  /**
   * Sets the addons of the order.
   * 
   * @param {Array} addons - The addons of the order.
   */
  setAddons(addons) {
    this._addons = addons;
  }

  /**
   * Retruns the id of the order.
   * @returns {string} The id of the order.
   */
  getId() {
    return this._id;
  }

  /**
   * Returns the car of the order.
   * @returns {Car} The car of the order.
   */
  getCar() {
    return this._car;
  }

  /**
   * Returns the user of the order.
   * @returns {User} The user of the order.
   */
  getUser() {
    return this._user;
  }

  /**
   * Returns the start date of the order.
   * @returns {Date} The start date of the order.
   */
  getStartDate() {
    return this._startDate;
  }

  /**
   * Returns the end date of the order.
   * @returns {Date} The end date of the order.
   */
  getEndDate() {
    return this._endDate;
  }

  /**
   * Returns the price of the order.
   * @returns {number} The price of the order.
   */
  getPrice() {
    return this._price;
  }
}