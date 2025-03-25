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
}