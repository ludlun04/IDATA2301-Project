export class Company {
  constructor(id, name, address, email) {
    this.id = id
    this.name = name
    this.address = address
    this.email = email
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getAddress() {
    return this.address
  }

  getEmail() {
    return this.email
  }
}