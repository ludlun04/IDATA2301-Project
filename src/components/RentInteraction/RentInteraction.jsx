import "./RentInteraction.css";
import DatePicker from "react-datepicker";
import {useEffect, useState} from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import {useNavigate} from "react-router-dom";
import {OrderAPI} from "../../api/OrderAPI";
import AddonList from "../AddonList/AddonList";

const RentInteraction = ({car, unavailableDates}) => {
  const navigate = useNavigate();

  const carPricePerDay = car.getPricePerDay();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const [rentFailMessageActive, setRentFailMessageActive] = useState(false);

  useEffect(() => {
    if (!startDate || !endDate) {
      setTotalPrice(0);
      setNumberOfDays(0);
      return;
    }

    const amountOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const carTotal = amountOfDays * carPricePerDay;

    const addonsPrice = selectedAddons.reduce((acc, addon) => acc + addon.getPrice(), 0);

    setNumberOfDays(amountOfDays);
    setTotalPrice(carTotal + addonsPrice);
  }, [startDate, endDate, selectedAddons, carPricePerDay]);

  const onChange = (dates) => {
    const [start, end] = dates;
    console.log(dates);

    if (start && end && unavailableDates.some(unavailable => {
      return unavailable.getTime() >= start.getTime() && unavailable.getTime() <= end.getTime();
    })) {
      console.log("Dates are unavailable");
      setStartDate(null);
      setEndDate(null);
    } else {
      console.log("Dates are available");
      setStartDate(start);
      setEndDate(end);
      console.log("start: ", start);
      console.log("end: ", end);
    }
  };

  const handleDayClassName = (date) => {
    const timeNumber = date.getTime();
    const isInRange = startDate && endDate && timeNumber >= startDate.getTime() && timeNumber <= endDate.getTime();

    return isInRange ? "RentSelectedDay" : undefined;
  }

  const onRentPressed = () => {


    OrderAPI.requestRent(car.getId(), startDate, endDate, selectedAddons)
      .then((response) => {
        if (response) {
          console.log("Rent response:", response);
          if (response.status === 201) {
            navigate("/order/" + response.data);
          } else {
            console.error("Error renting car:", response.statusText);
          }
        }

      })
      .catch((error) => {
        console.error("Error renting car:", error);
        setRentFailMessageActive(true);
      });
  }

  const onAddonSelected = (addon, selected) => {
    if (selected) {
      setSelectedAddons((prev) => [...prev, addon]);
    } else {
      setSelectedAddons((prev) => prev.filter((a) => a.getId() !== addon.getId()));
    }
  }


  // datepicker configuration
  const dateFormat = "dd.MM.yyyy"; // displayed date format in datepicker
  const portalId = "root-portal"; // makes the datepicker window not affect positioning of datepicker field
  const calendarStartDay = 1; // monday as first day of week instead of sunday

  return (
    <section className={"RentInteraction"}>
      <CompanyCard car={car}/>

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
        excludeDates={unavailableDates}
      />

      <p>Days: {numberOfDays}</p>

      <AddonList addons={car.getAddons()} onAddonSelected={onAddonSelected}/>

      <div className={"RentDailyPrice"}>
        <p className={"RentTitle"}>kr/day</p>
        <p className={"RentContent"}>{carPricePerDay}</p>
      </div>

      <div className={"RentTotalPrice"}>
        <p className={"RentTitle"}>Total</p>
        <p className={"RentContent"}>{totalPrice} kr</p>
      </div>

      <button className={"RentButton"} type="button" onClick={onRentPressed}>Rent</button>
      {rentFailMessageActive &&
        <p className={"RentFailMessage"}>Failed to rent the car. Please try again.</p>
      }
    </section>
  )
}


export default RentInteraction;