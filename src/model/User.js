export class User {
  constructor(id, email, firstName, lastName, phoneNumber, dateOfBirth, roles) {
    this.id = id
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.dateOfBirth = dateOfBirth
    this.roles = roles
  }

  
  getId() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getFirstName() {
    return this.firstName
  }

  getLastName() {
    return this.lastName
  }

  getPhoneNumber() {
    return this.phoneNumber
  }

  getDateOfBirth() {
    return this.dateOfBirth
  }

  getRoles() {
    return this.roles
  }

  static getSampleUsers() {
    return [
      new User(1, "john.doe@example.com", "John", "Doe", "1234567890", "1990-05-15", ["USER"]),
      new User(2, "jane.smith@example.com", "Jane", "Smith", "0987654321", "1985-08-22", ["ADMIN"]),
      new User(3, "alice.jones@example.com", "Alice", "Jones", "1122334455", "1995-12-10", ["USER"])
    ];
  }
}