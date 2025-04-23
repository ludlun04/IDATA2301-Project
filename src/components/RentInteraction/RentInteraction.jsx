import "./RentInteraction.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import CompanyCard from "../CompanyCard/CompanyCard";

const RentInteraction = ({ car }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(new Date().getTime() + 86400000)); // 1 day later

  const [carPricePerDay, setCarPricePerDay] = useState(car.getPricePerDay());
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (startDate.getTime() > endDate.getTime()) {
      setStartDate(endDate);
      setEndDate(startDate);

      return;
    } else if (startDate.getTime() === endDate.getTime()) {
      setEndDate(new Date(endDate.getTime() + 86400000)); // 1 day later
    }

    const amountOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = amountOfDays * carPricePerDay;

    setCarPricePerDay(car.getPricePerDay());
    setTotalPrice(totalPrice);
  }, [startDate, endDate]);

  

  // datepicker configuration
  const dateFormat = "dd.MM.yyyy"; // displayed date format in datepicker
  const portalId = "root-portal"; // makes the datepicker window not affect positioning of datepicker field
  const calendarStartDay = 1; // monday as first day of week instead of sunday

  return (
    <section className={"RentInteraction"}>
      <CompanyCard car={car}/>

      <div className={"RentDuration"}>
        <div className={"RentDurationSelection"}>
          <DatePicker /*monthsShown={3}*/ className={"filtersSectionDatePicker"} selected={startDate} onChange={(date) => setStartDate(date)} dateFormat={dateFormat} portalId={portalId} calendarStartDay={calendarStartDay} />
          <DatePicker className={"filtersSectionDatePicker"} selected={endDate} onChange={(date) => setEndDate(date)} dateFormat={dateFormat} portalId={portalId} calendarStartDay={calendarStartDay} />
        </div>
      </div>

      <div className={"RentDailyPrice"}>
        <p className={"RentTitle"}>kr/day</p>
        <p className={"RentContent"}>{carPricePerDay}</p>
      </div>

      <div className={"RentTotalPrice"}>
        <p className={"RentTitle"}>Total</p>
        <p className={"RentContent"}>{totalPrice} kr</p>
      </div>

      <button className={"RentButton"} type="button">Rent</button>
    </section>
  )
}


export default RentInteraction;