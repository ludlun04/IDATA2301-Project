import DropdownMenu from "../DropdownMenu/DropdownMenu";
import FromToSection from "../FromToSection/FromToSection";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./FiltersSection.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FiltersSection = (props) => {


  const availableManufacturers = props.manufacturers;
  const availableFuelTypes = props.fuelTypes;
  const availableSellers = props.sellers;
  const availableSeats = props.seats;


  const chosenManufacturers = [];
  const chosenFuelTypes = [];
  const chosenSellers = [];


  const alterChosenSellers = (event) => {
    const seller = event.target.value;
    if (event.target.checked) {
      props.setChosenSellers((prev) => [...prev, seller]);
    } else {
      props.setChosenSellers(chosenSellers => chosenSellers.filter((s) => s !== seller));
    }
  }

  const alterChosenManufacturers = (event) => {
    const manufacturer = event.target.value;
    if (event.target.checked) {
      props.setChosenManufacturers((prev) => [...prev, manufacturer]);
    } else {
      props.setChosenManufacturers(chosenManufacturers => chosenManufacturers.filter((m) => m !== manufacturer));
    }
  }

  const alterChosenFuelTypes = (event) => {
    const fuelType = event.target.value;
    if (event.target.checked) {
      props.setChosenFuelTypes((prev) => [...prev, fuelType]);
    } else {
      props.setChosenFuelTypes(chosenFuelTypes => chosenFuelTypes.filter((f) => f !== fuelType));
    }
  }

  const alterChosenSeats = (event) => {
    const seats = event.target.value;
    if (event.target.checked) {
      props.setChosenSeats((prev) => [...prev, seats]);
    } else {
      props.setChosenSeats(chosenSeats => chosenSeats.filter((s) => s !== seats));
    }
  }


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // datepicker configuration
  const dateFormat = "dd.MM.yyyy"; // displayed date format in datepicker
  const portalId = "root-portal"; // makes the datepicker window not affect positioning of datepicker field
  const calendarStartDay = 1; // monday as first day of week instead of sunday



  const getHeader = (title) => (
    <h2>{title}</h2>
  )

  return (
    <div className={props.className} style={props.style} ref={props.ref} >
      <div className={"FiltersSection"}>
        <section>
          <h1>The car</h1>
          <DropdownMenu alwaysShownContent={getHeader("Manufacturer")}>
            <ul>
              {availableManufacturers.map((manufacturer, index) => (
                <li key={index} className="filtersSectionFilterLine" ><p>{manufacturer.getName()}</p> <input value={manufacturer.getName()} type="checkbox" onChange={alterChosenManufacturers}></input></li>
              ))}
            </ul>
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Fuel type")}>
            <ul>
              <li className="filtersSectionFilterLine" ><p>First filter</p> <input type="checkbox"></input></li>
              <li className="filtersSectionFilterLine" ><p>This is a filter that is very very very long</p> <input type="checkbox"></input></li>
            </ul>
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Seller")}>
            <ul>
              {availableSellers.map((seller, index) => (
                <li key={index} className="filtersSectionFilterLine" ><p>{seller.getName()}</p> <input value={seller.getName()} type="checkbox" onChange={alterChosenSellers}></input></li>
              ))}
            </ul>
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Seats")}>
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
            <DatePicker /*monthsShown={3}*/ className={"filtersSectionDatePicker"} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat={dateFormat} portalId={portalId} calendarStartDay={calendarStartDay}/>
          </section>
          <section className={"filtersSectionDateLine"}>
            <p>To</p>
            <DatePicker className={"filtersSectionDatePicker"} selected={endDate} onChange={(date) => setEndDate(date)} dateFormat={dateFormat} portalId={portalId} calendarStartDay={calendarStartDay}/>
          </section>

        </section>
        <section>
          <h1>The Price</h1>
          <FromToSection className={"filtersSectionFromToSection"}/>

        </section>

        <button className={"FormSubmitButton"} id={"filtersSectionFormSubmitButton"} onClick={props.onSave}>Save</button>
      </div>
    </div>
  )
}

export default FiltersSection;