export class Rental {
  constructor(user, fromDate, toDate, car) {
    this._user = user;
    this._fromDate = fromDate;
    this._toDate = toDate;
    this._car = car;
  }

  getUser() {
    return this._user;
  }

  getFromDate() {
    return this._fromDate;
  }

  getToDate() {
    return this._toDate;
  }

  getCar() {
    return this._car;
  }
}