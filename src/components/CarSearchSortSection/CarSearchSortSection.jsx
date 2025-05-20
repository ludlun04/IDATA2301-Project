import "./CarSearchSortSection.css";
import { ReactComponent as SearchIcon } from "../../resources/icons/search.svg";

import {useEffect, useState} from "react";
import {CarSortUtil} from "../../util/CarSortUtil";
import { PRICE_ASC_VALUE, PRICE_DESC_VALUE, YEAR_ASC_VALUE, YEAR_DESC_VALUE, SEATS_ASC_VALUE, SEATS_DESC_VALUE } from "../../util/CarSortUtil";
import SelectMenu from "../SelectMenu/SelectMenu";

/**
 * CarSearchSortSection component
 * Displays a search field and a sort by field.
 *
 * @returns {JSX.Element}
 * @param props
 */
const CarSearchSortSection = (props) => {

  const setChosenKeyword = props.setChosenKeyword;
  const chosenKeyword = props.chosenKeyword;
  const cars = props.cars;
  const handleSetCars = props.handleSetCars;

  const options = [
    { value: PRICE_ASC_VALUE, label: 'Price ↑' },
    { value: PRICE_DESC_VALUE, label: 'Price ↓' },
    { value: YEAR_ASC_VALUE, label: 'Year ↑' },
    { value: YEAR_DESC_VALUE, label: 'Year ↓' },
    { value: SEATS_ASC_VALUE, label: 'Seats ↑' },
    { value: SEATS_DESC_VALUE, label: 'Seats ↓' }
  ]

  const [searchItem, setSearchItem] = useState(props.chosenKeyword || "");
  const [shownSortByItem, setShownSortByItem] = useState(props.sortByItem);
  const setSortByItem = props.setSortByItem;



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

    if (CarSortUtil.isValidSortByChoice(choice)) {
      setSortByItem(choice);
      setShownSortByItem(input);
      handleSetCars(cars, choice);
    }
  }

  return (
    <div className={"CarSearchSortSection"}>
      <section className={"carSearchContainer"}>
        <input
          className={"carSearchSortContainerSearch"}
          type="text"
          value={searchItem}
          onChange={handleSearchFieldChange}
          onKeyDown={handleSearchFieldKeyDown}
          placeholder='Type to search'
        />
        <button className={"FormSubmitButton"} id={"carSearchContainerButton"} aria-label="Search Button" onClick={handleSearchButtonClick}>
          <SearchIcon className="SvgIcon" />
        </button>
      </section>
      <SelectMenu id={"carSearchSortSectionSelectMenu"} options={options} value={shownSortByItem} onChange={handleSortByFieldChange} />
    </div>
  )
}

export default CarSearchSortSection;
