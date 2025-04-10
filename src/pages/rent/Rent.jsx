import "./Rent.css"
import DatePickerField from "../../components/DatePickerField/DatePickerField"
import CarAttribute from "../../components/CarAttribute/CarAttribute";
import bmw from "./../../resources/images/bmw.jpg";
import DatePicker from "react-datepicker";
import React, {useState} from "react";
import { useParams } from "react-router-dom";

export default function Rent(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let { id } = useParams();
  console.log(id);

  // datepicker configuration
  const dateFormat = "dd.MM.yyyy"; // displayed date format in datepicker
  const portalId = "root-portal"; // makes the datepicker window not affect positioning of datepicker field
  const calendarStartDay = 1; // monday as first day of week instead of sunday


  return (
    <main className="RentMain">
      <img alt="" className={"RentCarImage"} src={bmw} />
      <div className="RentInformation">
        <h1>Fast cool car</h1>

        <section className={"RentAttributes"}>
          <h2>Attributes</h2>
          <div className={"RentAttributeList"}>
            <CarAttribute />
            <CarAttribute />
            <CarAttribute />
            <CarAttribute />
            <CarAttribute />
          </div>
        </section>
      </div>

      <section className={"RentCarDescription"}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>

      <div className={"RentInteraction"}>
        <div className={"RentInteractionInner"}>
          <div className={"RentCompanyCard"}>
            <div alt="Image of company renting out the car" className={"RentCompanyImage"}></div>
            <h2>VERY VERY VERY LONG COMPANY NAMe</h2>
          </div>

          <div className={"RentDuration"}>
            <div className="RentDurationSelection">
              <DatePicker /*monthsShown={3}*/ className={"filtersSectionDatePicker"} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat={dateFormat} portalId={portalId} calendarStartDay={calendarStartDay}/>
              <DatePicker className={"filtersSectionDatePicker"} selected={endDate} onChange={(date) => setEndDate(date)} dateFormat={dateFormat} portalId={portalId} calendarStartDay={calendarStartDay}/>
            </div>
          </div>

          <div className="RentDailyPrice">
            <p className="RentTitle">kr/day</p>
            <p className="RentContent">1000 kr</p>
          </div>

          <div className="RentTotalPrice">
            <p className="RentTitle">Total</p>
            <p className="RentContent">10000 kr</p>
          </div>

          <button className="RentButton" type="button">Rent</button>
        </div>
      </div>
    </main>
  )
}