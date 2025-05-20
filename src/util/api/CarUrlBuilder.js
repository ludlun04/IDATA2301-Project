import Constants from "../../Constants";

/**
 * Class to build URLs for car-related API requests.
 * It provides methods to add various filters to the URL.
 */
export class CarUrlBuilder {

  CAR_URL = Constants.API_URL + "/car";

  BRAND_FILTER = "brand";
  FUEL_TYPE_FILTER = "fuel_type";
  SELLER_FILTER = "seller";
  SEATS_FILTER = "seats";
  KEYWORD_FILTER = "keyword";
  BETWEEN_TIMES_FILTER = "between_times";
  FROM_TIME_FILTER = "from_time";
  FROM_PRICE_FILTER = "from_price";
  TO_PRICE_FILTER = "to_price";

  /** Constructor for builder */
  constructor() {
    this._url = this.CAR_URL;
  }

  /**
   * Sets manufacturers to be used in the URL.
   * @param {string[]} manufacturers list of manufacturers
   * @returns {CarUrlBuilder} the builder instance
   */
  withManufacturers(manufacturers) {
    if (manufacturers.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.BRAND_FILTER + "=" + manufacturers.join(",") + "&";
    return this;
  }

  /**
   * Sets fuel types to be used in the URL.
   * @param {string[]} fuelTypes list of fuel types
   * @returns {CarUrlBuilder} the builder instance
   */
  withFuelTypes(fuelTypes) {
    if (fuelTypes.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.FUEL_TYPE_FILTER + "=" + fuelTypes.join(",") + "&";
    return this;
  }

  /**
   * Sets sellers to be used in the URL.
   * @param {string[]} sellers list of sellers
   * @returns {CarUrlBuilder} the builder instance
   */
  withSellers(sellers) {
    if (sellers.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.SELLER_FILTER + "=" + sellers.join(",") + "&";
    return this;
  }

  /**
   * Sets seats to be used in the URL.
   * @param {number[]} seats list of seats
   * @returns {CarUrlBuilder} the builder instance
   */
  withSeats(seats) {
    if (seats.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.SEATS_FILTER + "=" + seats.join(",") + "&";
    return this;
  }

  /**
   * Sets keyword to be used in the URL.
   * @param {string} keyword the keyword
   * @returns {CarUrlBuilder} the builder instance
   */
  withKeyword(keyword) {
    if (keyword.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.KEYWORD_FILTER + "=" + keyword + "&";
    return this;
  }

  /**
   * Sets the time range to be used in the URL.
   * @param {Date} fromTime the start time
   * @param {Date} toTime the end time
   * @returns {CarUrlBuilder} the builder instance
   */
  withBetweenTimes(fromTime, toTime) {
    if (fromTime && toTime) {
      const fromTimeString = this._getDateString(fromTime);
      const toTimeString = this._getDateString(toTime);
      this._addQuestionMarkIfNeeded();
      this._url += this.BETWEEN_TIMES_FILTER + "=" + fromTimeString + "," + toTimeString + "&";
    }
    return this;
  }

  /**
   * Sets the start time to be used in the URL.
   * @param {Date} fromTime the start time
   * @returns {CarUrlBuilder} the builder instance
   */
  withFromTime(fromTime) {
    if (fromTime) {
      const fromTimeString = this._getDateString(fromTime);
      this._addQuestionMarkIfNeeded();
      this._url += this.FROM_TIME_FILTER + "=" + fromTimeString + "&";
    }
    return this;
  }

  /**
   * Sets the minimum price to be used in the URL.
   * @param {number} price the minimum price
   * @returns {CarUrlBuilder} the builder instance
   */
  withFromPrice(price) {
    if (price) {
      this._addQuestionMarkIfNeeded();
      this._url += this.FROM_PRICE_FILTER + "=" + price + "&";
    }
    return this;
  }

  /**
   * Sets the maximum price to be used in the URL.
   * @param {number} price the maximum price
   * @returns {CarUrlBuilder} the builder instance
   */
  withToPrice(price) {
    if (price) {
      this._addQuestionMarkIfNeeded();
      this._url += this.TO_PRICE_FILTER + "=" + price + "&";
    }
    return this;
  }

  _getDateString(date) {
    return date.getFullYear() + "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") + "-" + // month + 1 because javascript be like that
      date.getDate().toString().padStart(2, "0");
  }

  _addQuestionMarkIfNeeded() {
    if (!this._url.includes("?")) {
      this._url += "?";
    }
  }

  build() {
    return this._url;
  }

  getFilterPart() {
    return this._url.split("?")[1];
  }



}