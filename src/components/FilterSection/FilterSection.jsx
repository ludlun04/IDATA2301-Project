import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./FilterSection.css";

const FilterSection = () => {
  return (
    <div className={"FilterSection"}>
      <h2>Filters</h2>
      <DropdownMenu title={"First"}>
      <ul>
        <li className="FilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
        <li className="FilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
      </ul>
      </DropdownMenu>
      <DropdownMenu title={"Second"}>
      <ul>
        <li className="FilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
        <li className="FilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
      </ul>
      </DropdownMenu>
      <DropdownMenu title={"Third"}>
      <ul>
        <li className="FilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
        <li className="FilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
      </ul>
      </DropdownMenu>
      <DropdownMenu title={"Fourth"}>
      <ul>
        <li className="FilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
        <li className="FilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
      </ul>
      </DropdownMenu>
      <button>Search</button>
    </div>
  )
}

export default FilterSection;