import "./CarSearchSortSection.css";
import { ReactComponent as SearchIcon } from "../../resources/icons/search.svg";

import { useState } from "react";
import Select from "react-select";
import SelectMenu from "../SelectMenu/SelectMenu";

const CarSearchSortSection = ({ onChange }) => {

  if (typeof onChange !== "function") {
    throw new TypeError("onChange must be a function");
  }

  const options = [
    { value: 'price', label: 'Price' },
    { value: 'year', label: 'Year' },
    { value: 'seats', label: 'Seats' },

  ]
  const [searchItem, setSearchItem] = useState('');
  const [sortByItem, setSortByItem] = useState(options[0]);



  const handleSearchFieldChange = (input) => {
    const searchWord = input.target.value;
    setSearchItem(searchWord);
    onChange(searchWord, sortByItem);
  }

  const handleSortByFieldChange = (input) => {
    setSortByItem(input.value);
    onChange(searchItem, sortByItem);
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
          <SearchIcon className="SvgIcon" />
        </button>
      </div>
      <SelectMenu id={"carSearchSortSectionSelectMenu"} options={options} value={sortByItem} onChange={setSortByItem} />
    </div>
  )
}

export default CarSearchSortSection;
