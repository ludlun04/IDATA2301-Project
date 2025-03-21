import "./CarSearchSortSection.css";
import { ReactComponent as SearchIcon } from "../../resources/icons/search.svg";

import {useState} from "react";

const CarSearchSortSection = ({onChange}) => {

  if (typeof onChange !== "function") {
    throw new TypeError("onChange must be a function");
  }

  const [searchItem, setSearchItem] = useState('');
  const [sortByItem, setSortByItem] = useState('');

  const handleSearchFieldChange = (input) => {
    const searchWord = input.target.value;
    setSearchItem(searchWord);
    onChange(searchWord, sortByItem);
  }

  const handleSortByFieldChange = (input) => {
    const sortByWord = input.target.value;
    setSortByItem(sortByWord);
    onChange(searchItem, sortByWord);
  }

  return (
    <div className={"CarSearchSortSection"}>
      <div className={"carSearchContainer"}>
        <input
          className={"carSearchSortContainerSearch"}
          type="text"
          value={searchItem}
          onChange={handleSearchFieldChange}
          placeholder='Type to search'
        />
        <button className={"FormSubmitButton"} id={"carSearchContainerButton"}>
          <SearchIcon className = "SvgIcon"/>
        </button>
      </div>
      <div className={"carSortContainer"}>
        <select value={sortByItem} onChange={handleSortByFieldChange}>
          <option value="Price">Price</option>
          <option value="Year">Year</option>
          <option value="Seats">Seats</option>
        </select>
      </div>
    </div>
  )
}

export default CarSearchSortSection;