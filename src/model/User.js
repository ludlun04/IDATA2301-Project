import { Address } from "./Address"
import { PhoneNumber } from "./PhoneNumber"

export class User {
  /**
   * Creates a new user.
   * @param {number} id - The user's id.
   * @param {string} email - The user's email.
   * @param {string} firstName - The user's first name.
   * @param {string} lastName - The user's last name.
   * @param {PhoneNumber} phoneNumber - The user's phone number.
   * @param {string} dateOfBirth - The user's date of birth.
   * @param {Array<string>} roles - The user's roles.
   * @param {Address} address - The user's address.
   */
  constructor(id, email, firstName, lastName, phoneNumber, dateOfBirth, roles, address) {
    this.id = id
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.dateOfBirth = dateOfBirth
    this.roles = roles
    this.address = address
  }

  /**
   * Returns the user's id.
   * @return {number} The user's id.
   */
  getId() {
    return this.id
  }

  /**
   * Returns the user's email.
   * @return {string} The user's email.
   */
  getEmail() {
    return this.email
  }

  /**
   * Returns the user's first name.
   * @return {string} The user's first name.
   */
  getFirstName() {
    return this.firstName
  }

  /**
   * Returns the user's last name.
   * @return {string} The user's last name.
   */
  getLastName() {
    return this.lastName
  }

  /**
   * Returns the user's phone number.
   * @returns {PhoneNumber} The user's phone number.
   */
  getPhoneNumber() {
    return this.phoneNumber
  }

  /**
   * Returns the user's date of birth.
   * @return {string} The user's date of birth.
   */
  getDateOfBirth() {
    return this.dateOfBirth
  }

  /**
   * Returns the user's roles.
   * @return {Array<string>} The user's roles.
   */
  getRoles() {
    return this.roles
  }

  /**
   * Returns the user's address.
   * @return {Address} The user's address.
   */
  getAddress() {
    return this.address
  }

  static getSampleUsers() {
    return [
      new User(1, "john.doe@example.com", "John", "Doe", new PhoneNumber("47","1234567890"), new Date("1990-05-15"), ["USER"], new Address("Norway", "Ai", "1234")),
      new User(2, "jane.smith@example.com", "Jane", "Smith", new PhoneNumber("47","5274572456"), new Date("1990-05-15"), ["ADMIN"], new Address("Norway", "Generated", "5678")),
      new User(3, "alice.jones@example.com", "Alice", "Jones", new PhoneNumber("47","5754723564"), new Date("1990-05-15"), ["USER"], new Address("Norway", "Content", "9101")),
    ];
  }
}