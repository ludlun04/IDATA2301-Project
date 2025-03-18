import DropdownMenu from "../DropdownMenu/DropdownMenu";
import FromToSection from "../FromToSection/FromToSection";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./FilterSection.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FilterSection = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className={"FiltersSection"}>
      <section>
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
      </section>
      <section>
        <h1>The Time</h1>
        <li className="filtersSectionFilterLine" ><p>Available now</p> <input type="checkbox"></input></li>
        <section className={"filtersSectionDateLine"}>
          <p>From</p>
          <DatePicker className={"filtersSectionDatePicker"}  selected={startDate} onChange={(date) => setStartDate(date)} />
        </section>
        <section className={"filtersSectionDateLine"}>
          <p>To</p>
          <DatePicker className={"filtersSectionDatePicker"}onChange={(date) => setEndDate(date)} />
        </section>

      </section>
      <section>
        <h1>The Price</h1>
        <FromToSection/>

      </section>

      <button>Save</button>
    </div>
  )
}

export default FilterSection;