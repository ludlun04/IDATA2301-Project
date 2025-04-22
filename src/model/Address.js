export class Address {
  /**
   * Creates a new address.
   * @param {string} country - The country of the address.
   * @param {string} street_address - The street address of the address.
   * @param {string} zip_code - The postal code of the address.
   */
  constructor(country, street_address, zip_code) {
    this._country = country;
    this._street_address = street_address;
    this._zip_code = zip_code;
  }

  /**
   * Returns the country of the address.
   * @return {string} The country of the address.
   */
  getCountry() {
    return this._country;
  }

  /**
   * Returns the street address of the address.
   * @return {string} The street address of the address.
   */
  getStreetAddress() {
    return this._street_address;
  }

  /**
   * Returns the postal code of the address.
   * @return {string} The postal code of the address.
   */
  getZipCode() {
    return this._zip_code;
  }
}