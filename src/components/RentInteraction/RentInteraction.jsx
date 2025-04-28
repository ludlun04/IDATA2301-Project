import "./RentInteraction.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import { useNavigate } from "react-router-dom";
import { OrderAPI } from "../../api/OrderAPI";

const RentInteraction = ({ car }) => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(new Date().getTime() + 86400000)); // 1 day later

  const [carPricePerDay, setCarPricePerDay ] = useState(car.getPricePerDay());
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!startDate || !endDate) {
      setTotalPrice(0);
      return;
    }

    const amountOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = amountOfDays * carPricePerDay;

    setTotalPrice(totalPrice);
  }, [startDate, endDate]);

  const onChange = (dates) => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  const handleDayClassName = (date) => {
    const timeNumber = date.getTime();
    const isInRange = startDate && endDate && timeNumber >= startDate.getTime() && timeNumber <= endDate.getTime();

    return isInRange ? "RentSelectedDay" : undefined;
  }

  const onRentPressed = () => {
    OrderAPI.requestRent(car.getId(), startDate, endDate)
      .then((response) => {
        console.log("Rent response:", response);
        if (response.status === 201) {
          navigate("/order/" + response.data);
        } else {
          console.error("Error renting car:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error renting car:", error);
      });
  }

  // datepicker configuration
  const dateFormat = "dd.MM.yyyy"; // displayed date format in datepicker
  const portalId = "root-portal"; // makes the datepicker window not affect positioning of datepicker field
  const calendarStartDay = 1; // monday as first day of week instead of sunday

  return (
    <section className={"RentInteraction"}>
      <CompanyCard car={car} />

      <div className={"RentDuration"}>
        <div className={"RentDurationSelection"}>
          <DatePicker /*monthsShown={3}*/
            className={"filtersSectionDatePicker"}
            minDate={new Date()}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            dateFormat={dateFormat}
            portalId={portalId}
            calendarStartDay={calendarStartDay}
            dayClassName={handleDayClassName}
            selectsRange
            inline
          />

          {/* <DatePicker
            className={"filtersSectionDatePicker"}
            selected={endDate}
            minDate={startDate}
            onChange={(date) => setEndDate(date)}
            dateFormat={dateFormat}
            portalId={portalId}
            calendarStartDay={calendarStartDay}
          /> */}
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

      <button className={"RentButton"} type="button" onClick={onRentPressed}>Rent</button>
    </section>
  )
}


export default RentInteraction;