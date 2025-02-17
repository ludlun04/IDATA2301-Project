import DropdownMenu from "../DropdownMenu/DropdownMenu";
import "./FilterSection.css";

export default () => {
  return (
    <div className={"FilterSection"}>
      <DropdownMenu title={"Something"}>
      <ul>
        <li className="FilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
        <li className="FilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
      </ul>
      </DropdownMenu>
      <h2>Filters</h2>
      <button>Search</button>
    </div>
  )
}