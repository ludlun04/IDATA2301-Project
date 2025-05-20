
export const PRICE_ASC_VALUE = 'price asc';
export const PRICE_DESC_VALUE = 'price desc';
export const YEAR_ASC_VALUE = 'year asc';
export const YEAR_DESC_VALUE = 'year desc';
export const SEATS_ASC_VALUE = 'seats asc';
export const SEATS_DESC_VALUE = 'seats desc';

export const CarSortUtil = {
  getCarsOrderedFromSortByItem: (cars, choice) => {
    console.log("Sorting cars by choice:", choice);
    switch (choice) {
      case PRICE_ASC_VALUE:
        return getSortByPriceAsc(cars);
      case PRICE_DESC_VALUE:
        return getSortByPriceDesc(cars);
      case YEAR_ASC_VALUE:
        return getSortByYearAsc(cars);
      case YEAR_DESC_VALUE:
        return getSortByYearDesc(cars);
      case SEATS_ASC_VALUE:
        return getSortBySeatsAsc(cars);
      case SEATS_DESC_VALUE:
        return getSortBySeatsDesc(cars);
      default:
        console.error("Invalid car sort choice:", choice);
        return cars;
    }
  },

  isValidSortByChoice: (choice) => {
    return [
      PRICE_ASC_VALUE,
      PRICE_DESC_VALUE,
      YEAR_ASC_VALUE,
      YEAR_DESC_VALUE,
      SEATS_ASC_VALUE,
      SEATS_DESC_VALUE
    ].includes(choice);
  }
}

const getSortByPriceAsc = (cars) => {
  return [...cars].sort((a, b) => a.getPricePerDay() - b.getPricePerDay());
}

const getSortByPriceDesc = (cars) => {
  return [...cars].sort((a, b) => b.getPricePerDay() - a.getPricePerDay());
}

const getSortByYearAsc = (cars) => {
  return [...cars].sort((a, b) => a.getYear() - b.getYear());
}

const getSortByYearDesc = (cars) => {
  return [...cars].sort((a, b) => b.getYear() - a.getYear());
}

const getSortBySeatsAsc = (cars) => {
  return [...cars].sort((a, b) => a.getNumberOfSeats() - b.getNumberOfSeats());
}

const getSortBySeatsDesc = (cars) => {
  return [...cars].sort((a, b) => b.getNumberOfSeats() - a.getNumberOfSeats());
}