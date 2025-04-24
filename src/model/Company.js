export class Company {
  constructor(id, name, address, phoneNumber) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }
}