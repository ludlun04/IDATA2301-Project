import "./CarSearchSortSection.css";
import { ReactComponent as SearchIcon } from "../../resources/icons/search.svg";

import { useState } from "react";
import Select from "react-select";
import SelectMenu from "../SelectMenu/SelectMenu";

const CarSearchSortSection = (props) => {

  const setChosenKeyword = props.setChosenKeyword;
  const chosenKeyword = props.chosenKeyword;
  const cars = props.cars;
  const setCars = props.setCars;

  const PRICE_ASC_VALUE = 'price asc';
  const PRICE_DESC_VALUE = 'price desc';
  const YEAR_ASC_VALUE = 'year asc';
  const YEAR_DESC_VALUE = 'year desc';
  const SEATS_ASC_VALUE = 'seats asc';
  const SEATS_DESC_VALUE = 'seats desc';

  const options = [
    { value: PRICE_ASC_VALUE, label: 'Price ↑' },
    { value: PRICE_DESC_VALUE, label: 'Price ↓' },
    { value: YEAR_ASC_VALUE, label: 'Year ↑' },
    { value: YEAR_DESC_VALUE, label: 'Year ↓' },
    { value: SEATS_ASC_VALUE, label: 'Seats ↑' },
    { value: SEATS_DESC_VALUE, label: 'Seats ↓' }
  ]

  const [searchItem, setSearchItem] = useState(props.chosenKeyword || "");
  const [sortByItem, setSortByItem] = useState(null);

  const setSortByPriceAsc = () => {
    const sortedCars = [...cars].sort((a, b) => a.getPricePerDay() - b.getPricePerDay());
    setCars(sortedCars);
  }

  const setSortByPriceDesc = () => {
    const sortedCars = [...cars].sort((a, b) => b.getPricePerDay() - a.getPricePerDay());
    setCars(sortedCars);
  }

  const setSortByYearAsc = () => {
    const sortedCars = [...cars].sort((a, b) => a.getYear() - b.getYear());
    setCars(sortedCars);
  }

  const setSortByYearDesc = () => {
    const sortedCars = [...cars].sort((a, b) => b.getYear() - a.getYear());
    setCars(sortedCars);
  }

  const setSortBySeatsAsc = () => {
    const sortedCars = [...cars].sort((a, b) => a.getNumberOfSeats() - b.getNumberOfSeats());
    setCars(sortedCars);
  }

  const setSortBySeatsDesc = () => {
    const sortedCars = [...cars].sort((a, b) => b.getNumberOfSeats() - a.getNumberOfSeats());
    setCars(sortedCars);
  }

  const handleSearchFieldChange = (input) => {
    const searchWord = input.target.value;
    setSearchItem(searchWord);
    if (searchWord === "") {
      setChosenKeyword("");
    }
  }

  const handleSearchFieldKeyDown = (input) => {
    if (input.key === "Enter") {
      setChosenKeyword(searchItem);
    }
  }

  const handleSearchButtonClick = () => {
    setChosenKeyword(searchItem);
  }

  const handleSortByFieldChange = (input) => {
    const choice = input.value;
    let isValid = true;

    switch (choice) {
      case PRICE_ASC_VALUE:
        setSortByPriceAsc();
        break;
      case PRICE_DESC_VALUE:
        setSortByPriceDesc();
        break;
      case YEAR_ASC_VALUE:
        setSortByYearAsc();
        break;
      case YEAR_DESC_VALUE:
        setSortByYearDesc();
        break;
      case SEATS_ASC_VALUE:
        setSortBySeatsAsc();
        break;
      case SEATS_DESC_VALUE:
        setSortBySeatsDesc();
        break;
      default:
        console.error("Unknown 'Sort by' value " + choice);
        isValid = false;
    }
    if (isValid) {
      setSortByItem(input);
    }
  }

  return (
    <div className={"CarSearchSortSection"}>
      <div className={"carSearchContainer"}>
        <input
          className={"carSearchSortContainerSearch"}
          type="text"
          value={searchItem}
          onChange={handleSearchFieldChange}
          onKeyDown={handleSearchFieldKeyDown}
          placeholder='Type to search'
        />
        <button className={"FormSubmitButton"} id={"carSearchContainerButton"} onClick={handleSearchButtonClick}>
          <SearchIcon className="SvgIcon" />
        </button>
      </div>
      <SelectMenu id={"carSearchSortSectionSelectMenu"} options={options} value={sortByItem} onChange={handleSortByFieldChange} />
    </div>
  )
}

export default CarSearchSortSection;
