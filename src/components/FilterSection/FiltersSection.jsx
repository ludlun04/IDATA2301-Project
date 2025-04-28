import DropdownMenu from "../DropdownMenu/DropdownMenu";
import FromToSection from "../FromToSection/FromToSection";
import React, {useEffect, useState, useContext} from "react";
import DatePicker from "react-datepicker";
import {FiltersContext} from "../../context/FiltersContext";
import "react-datepicker/dist/react-datepicker.css";
import "./FiltersSection.css";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FiltersSection = (props) => {

  const context = useContext(FiltersContext);

  const availableManufacturers = context.possibleManufacturers;
  const availableFuelTypes = context.possibleFuelTypes;
  const availableSellers = context.possibleSellers;
  const availableSeats = context.possibleSeats;

  const oneDayAfter = (date) => {
    const days = 1;
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  const [availableNowChecked, setAvailableNowChecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(oneDayAfter(startDate));

  // datepicker configuration
  const dateFormat = "dd.MM.yyyy"; // displayed date format in datepicker
  const portalId = "root-portal"; // makes the datepicker window not affect positioning of datepicker field
  const calendarStartDay = 1; // monday as first day of week instead of sunday

  const handleAvailableNowCheckedChange = () => {
    const checked = !availableNowChecked;
    setAvailableNowChecked(checked);

  }

  const handleStartDateChange = (date) => {
    setStartDate(date)
    if (date >= endDate) {
      setEndDate(oneDayAfter(date));
    }
  }

  useEffect(() => {
    if (availableNowChecked) {
      context.setChosenFromTime(new Date());
      context.setChosenToTime(null);
    } else {
      context.setChosenFromTime(startDate);
      context.setChosenToTime(endDate);
    }
  }, [availableNowChecked, setStartDate, endDate]);

  const alterChosenSellers = (event) => {
    const seller = event.target.value;
    if (event.target.checked) {
      context.setChosenSellers((prev) => [...prev, seller]);
    } else {
      context.setChosenSellers(chosenSellers => chosenSellers.filter((s) => s !== seller));
    }
  }

  const alterChosenManufacturers = (event) => {
    const manufacturer = event.target.value;
    if (event.target.checked) {
      context.setChosenManufacturers((prev) => [...prev, manufacturer]);
    } else {
      context.setChosenManufacturers(chosenManufacturers => chosenManufacturers.filter((m) => m !== manufacturer));
    }
  }

  const alterChosenFuelTypes = (event) => {
    const fuelType = event.target.value;
    if (event.target.checked) {
      context.setChosenFuelTypes((prev) => [...prev, fuelType]);
    } else {
      context.setChosenFuelTypes(chosenFuelTypes => chosenFuelTypes.filter((f) => f !== fuelType));
    }
  }

  const alterChosenSeats = (event) => {
    const seats = event.target.value;
    if (event.target.checked) {
      context.setChosenSeats((prev) => [...prev, seats]);
    } else {
      context.setChosenSeats(chosenSeats => chosenSeats.filter((s) => s !== seats));
    }
  }

  const getHeader = (title) => (
    <h2>{title}</h2>
  )

  return (
    <div className={props.className} style={props.style} ref={props.ref}>
      <div className={"FiltersSection"}>
        <section>
          <h1>The car</h1>
          <DropdownMenu alwaysShownContent={getHeader("Manufacturer")}>
            <ul>
              {availableManufacturers.map((manufacturer, index) => (
                <li key={index} className="filtersSectionFilterLine"><p>{manufacturer.getName()}</p>
                  <input value={manufacturer.getName()} type="checkbox"
                         onChange={alterChosenManufacturers}></input></li>
              ))}
            </ul>
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Fuel type")}>
            <ul>
              {availableFuelTypes.map((fuelType, index) => (
                <li key={index} className="filtersSectionFilterLine"><p>{fuelType.getName()}</p>
                  <input value={fuelType.getName()} type="checkbox"
                         onChange={alterChosenFuelTypes}></input></li>
              ))}
            </ul>
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Seller")}>
            <ul>
              {availableSellers.map((seller, index) => (
                <li key={index} className="filtersSectionFilterLine"><p>{seller.getName()}</p>
                  <input value={seller.getName()} type="checkbox"
                         onChange={alterChosenSellers}></input></li>
              ))}
            </ul>
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Seats")}>
            <ul>
              {availableSeats.map((seat, index) => (
                <li key={index} className="filtersSectionFilterLine"><p>{seat}</p> <input
                  value={seat} type="checkbox" onChange={alterChosenSeats}></input></li>
              ))}
            </ul>
          </DropdownMenu>
        </section>
        <section>
          <h1>The Time</h1>
          <li className="filtersSectionFilterLine"><p>Available now</p> <input
            type="checkbox" checked={availableNowChecked} onChange={handleAvailableNowCheckedChange}></input></li>
          <section className={"filtersSectionDateLine"}>
            <p>From</p>
            <DatePicker
              className={"filtersSectionDatePicker"}
              selected={startDate}
              minDate={new Date()}
              onChange={(date) => handleStartDateChange(date)}
              dateFormat={dateFormat}
              portalId={portalId}
              calendarStartDay={calendarStartDay}
              disabled={availableNowChecked}
            />
          </section>
          <section className={"filtersSectionDateLine"}>
            <p>To</p>
            <DatePicker
              className={"filtersSectionDatePicker"}
              selected={endDate}
              minDate={oneDayAfter(startDate)}
              onChange={(date) => setEndDate(date)}
              dateFormat={dateFormat} portalId={portalId}
              calendarStartDay={calendarStartDay}
              disabled={availableNowChecked}
            />
          </section>

        </section>
        <section>
          <h1>The Price</h1>
          <FromToSection
            className={"filtersSectionFromToSection"}
            setFromValue={context.setChosenFromPrice}
            setToValue={context.setChosenToPrice}
          />

        </section>

        {/*
          //TODO: implement if needed
         <button className={"FormSubmitButton"} id={"filtersSectionFormSubmitButton"}
                onClick={props.onSave}>Save
        </button>
        */
}
      </div>
    </div>
  )
}

export default FiltersSection;