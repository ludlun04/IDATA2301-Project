import "./CarSearchSortSection.css";
import {useState} from "react";

export default function CarSearchSortSection() {
    const [searchItem, setSearchItem] = useState('')

    const handleSearchFieldChange = (input) => {
        const searchWord = input.target.value;
        setSearchItem(searchWord);
    }

    return (
        <div className={"CarSearchSortSection"}>
            <div className={"carSearchContainer"}>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleSearchFieldChange}
                    placeholder='Type to search'
                />
            </div>
            <div className={"carSortContainer"}>
                <select value={"Price"}>
                    <option value="Price">Price</option>
                    <option value="Year">Year</option>
                    <option value="Seats">Seats</option>
                </select>
            </div>
        </div>
    )
}