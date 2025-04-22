export class PhoneNumber {
  /**
   * Creates a new phone number.
   * @param {string} countryCode - The country code of the phone number.
   * @param {string} number - The actual phone number.
   */
  constructor(countryCode, number) {
    this._countryCode = countryCode;
    this._number = number;
  }

  /**
   * Returns the country code of the phone number.
   * @return {string} The country code of the phone number.
   */
  getCountryCode() {
    return this._countryCode;
  }

  /**
   * Returns the actual phone number.
   * @return {string} The actual phone number.
   */
  getNumber() {
    return this._number;
  }
}