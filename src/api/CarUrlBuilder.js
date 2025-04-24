import Constants from "../Constants";

export class CarUrlBuilder {

  CAR_URL = Constants.API_URL + "/car";

  BRAND_FILTER = "brand";
  FUEL_TYPE_FILTER = "fuel_type";
  SELLER_FILTER = "seller";
  SEATS_FILTER = "seats";
  KEYWORD_FILTER = "keyword";

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

  _addQuestionMarkIfNeeded() {
    if (!this._url.includes("?")) {
      this._url += "?";
    }
  }

  build() {
    return this._url;
  }
}