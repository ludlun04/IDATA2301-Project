import DropdownMenu from "../DropdownMenu/DropdownMenu";
import FromToSection from "../FromToSection/FromToSection";
import React, {useEffect, useState, useContext} from "react";
import DatePicker from "react-datepicker";
import {FiltersContext} from "../../context/FiltersContext";
import "react-datepicker/dist/react-datepicker.css";
import "./FiltersSection.css";
import CarFilterToggle from "../CarFilterToggle/CarFilterToggle";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

/**
 * FiltersSection component
 * Displays a section for filtering cars based on various criteria such as brand, fuel type, seller, seats, and date.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.className - The class name to be applied to the FiltersSection.
 * @param {object} props.style - The style object to be applied to the FiltersSection.
 * @param {React.Ref} props.ref - The ref to be attached to the FiltersSection.
 * @returns {JSX.Element}
 */
const FiltersSection = (props) => {

  const context = useContext(FiltersContext);

  const setChosenFromTime = context.setChosenFromTime;
  const setChosenToTime = context.setChosenToTime;

  const availableBrands = context.possibleBrands;
  const availableFuelTypes = context.possibleFuelTypes;
  const availableSellers = context.possibleSellers;
  const availableSeats = context.possibleSeats;

  const oneDayAfter = (date) => {
    if (date) {
      const days = 1;
      return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }
  }

  const isToday = (date) => {
    const today = new Date();
    return date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDay() === today.getDay();
  }

  //true if to date exists and is today, and from date is null
  const [availableNowChecked, setAvailableNowChecked] = useState(context.chosenFromTime && isToday(context.chosenFromTime) && context.chosenToTime === null);

  const [startDate, setStartDate] = useState(context.chosenFromTime || null);
  const [endDate, setEndDate] = useState(context.chosenToTime || null);

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
      setChosenFromTime(new Date());
      setChosenToTime(null);
    } else {
      setChosenFromTime(startDate);
      setChosenToTime(endDate);
    }
  }, [availableNowChecked, setStartDate, endDate, startDate, setChosenFromTime, setChosenToTime]);

  const alterChosenSellers = (seller, checked) => {

    if (checked) {
      context.setChosenSellers((prev) => [...prev, seller]);
    } else {
      context.setChosenSellers(chosenSellers => chosenSellers.filter((s) => s !== seller));
    }
  }

  const alterChosenBrands = (brand, checked) => {
    if (checked) {
      context.setChosenBrands((prev) => [...prev, brand]);
    } else {
      context.setChosenBrands(chosenBrands => chosenBrands.filter((m) => m !== brand));
    }
  }

  const alterChosenFuelTypes = (fuelType, checked) => {
    if (checked) {
      context.setChosenFuelTypes((prev) => [...prev, fuelType]);
    } else {
      context.setChosenFuelTypes(chosenFuelTypes => chosenFuelTypes.filter((f) => f !== fuelType));
    }
  }

  const alterChosenSeats = (seat, checked) => {
    if (checked) {
      console.log("checked");
      context.setChosenSeats((prev) => [...prev, seat]);
    } else {
      console.log("unchecked");
      context.setChosenSeats(chosenSeats => chosenSeats.filter((s) => s !== seat));
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
          <DropdownMenu alwaysShownContent={getHeader("Brand")}>
            {availableBrands.map((brand, index) => (
              <CarFilterToggle
                className={"filtersSectionCarFilterToggle"}
                value={brand.getName()}
                onClick={alterChosenBrands}
                active={context.chosenBrands.includes(brand.getName())}
                key={index}
              />
            ))}
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Fuel type")}>
            {availableFuelTypes.map((fuelType, index) => (
              <CarFilterToggle
                className={"filtersSectionCarFilterToggle"}
                value={fuelType.getName()}
                onClick={alterChosenFuelTypes}
                active={context.chosenFuelTypes.includes(fuelType.getName())}
                key={index}
              />

            ))}
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Seller")}>
            {availableSellers.map((seller, index) => (
              <CarFilterToggle
                className={"filtersSectionCarFilterToggle"}
                value={seller.getName()}
                onClick={alterChosenSellers}
                active={context.chosenSellers.includes(seller.getName())}
                key={index}
              />
            ))}
          </DropdownMenu>
          <DropdownMenu alwaysShownContent={getHeader("Seats")}>
            {availableSeats.map((seat, index) => (
              <CarFilterToggle
                className={"filtersSectionCarFilterToggle"}
                value={seat}
                onClick={alterChosenSeats}
                active={context.chosenSeats.includes(seat)}
                key={index}
              />
            ))}
          </DropdownMenu>
        </section>
        <section>
          <h1>The Time</h1>
          <CarFilterToggle
            className={"filtersSectionCarFilterToggle"}
            value={"Available now"}
            onClick={handleAvailableNowCheckedChange}
            active={availableNowChecked}
          />


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
            fromValue={context.chosenFromPrice}
            toValue={context.chosenToPrice}
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