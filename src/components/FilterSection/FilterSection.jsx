import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./FilterSection.css";

const FilterSection = () => {
  return (
    <div className={"FiltersSection"}>
      <div className={"filtersSectionFilter"}>
        <h1>The car</h1>
        <DropdownMenu title={"Manufacturer"}>
          <ul>
            <li className="filtersSectionFilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
            <li className="filtersSectionFilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
          </ul>
        </DropdownMenu>
        <DropdownMenu title={"Fuel type"}>
          <ul>
            <li className="filtersSectionFilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
            <li className="filtersSectionFilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
          </ul>
        </DropdownMenu>
        <DropdownMenu title={"Seller"}>
          <ul>
            <li className="filtersSectionFilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
            <li className="filtersSectionFilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
          </ul>
        </DropdownMenu>
        <DropdownMenu title={"Seats"}>
          <ul>
            <li className="filtersSectionFilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
            <li className="filtersSectionFilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
          </ul>
        </DropdownMenu>
      </div>
      <div className={"filtersSectionFilter"}>
        <h1>The Time</h1>
        <p>...</p>
      </div>
      <div className={"filtersSectionFilter"}>
        <h1>The Price</h1>
        <p>...</p>
      </div>

      <button>Save</button>
    </div>
  )
}

export default FilterSection;