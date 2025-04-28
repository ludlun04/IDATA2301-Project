import Constants from "../Constants";

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

  constructor() {
    this._url = this.CAR_URL;
  }
  withManufacturers(manufacturers) {
    if (manufacturers.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.BRAND_FILTER + "=" + manufacturers.join(",") + "&";
    return this;
  }

  withFuelTypes(fuelTypes) {
    if (fuelTypes.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.FUEL_TYPE_FILTER + "=" + fuelTypes.join(",") + "&";
    return this;
  }

  withSellers(sellers) {
    if (sellers.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.SELLER_FILTER + "=" + sellers.join(",") + "&";
    return this;
  }

  withSeats(seats) {
    if (seats.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.SEATS_FILTER + "=" + seats.join(",") + "&";
    return this;
  }

  withKeyword(keyword) {
    if (keyword.length === 0) {
      return this;
    }
    this._addQuestionMarkIfNeeded();
    this._url += this.KEYWORD_FILTER + "=" + keyword + "&";
    return this;
  }

  withBetweenTimes(fromTime, toTime) {
    if (fromTime && toTime) {
      const fromTimeString = this._getDateString(fromTime);
      const toTimeString = this._getDateString(toTime);
      this._addQuestionMarkIfNeeded();
      this._url += this.BETWEEN_TIMES_FILTER + "=" + fromTimeString + "," + toTimeString + "&";
    }
    return this;
  }

  withFromTime(fromTime) {
    if (fromTime) {
      const fromTimeString = this._getDateString(fromTime);
      this._addQuestionMarkIfNeeded();
      this._url += this.FROM_TIME_FILTER + "=" + fromTimeString + "&";
    }
    return this;
  }

  withFromPrice(price) {
    if (price) {
      this._addQuestionMarkIfNeeded();
      this._url += this.FROM_PRICE_FILTER + "=" + price + "&";
    }
    return this;
  }

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



}