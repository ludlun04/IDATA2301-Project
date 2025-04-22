import "./Rent.css"
import CarAttribute from "../../components/CarAttribute/CarAttribute";
import bmw from "./../../resources/images/bmw.jpg";
import DatePicker from "react-datepicker";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarAPI } from "../../api/CarAPI";
import CarAttributes from "../../components/CarAttribute/CarAttributes";
import Loader from "../../components/loader/Loader";

export default function Rent(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let { id } = useParams();

  // fetch car data
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  // car data
  const [carPricePerDay, setCarPricePerDay] = useState(0);
  const [features, setFeatures] = useState([]);

  const amountOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  const totalPrice = amountOfDays * carPricePerDay;

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const car = await CarAPI.getCar(id);
        setCar(car)
        setLoading(false);

        setCarPricePerDay(car.getPricePerDay());
        setFeatures(car.getFeatures());
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    }
    fetchCar();
  }, [id]);

  // datepicker configuration
  const dateFormat = "dd.MM.yyyy"; // displayed date format in datepicker
  const portalId = "root-portal"; // makes the datepicker window not affect positioning of datepicker field
  const calendarStartDay = 1; // monday as first day of week instead of sunday

  if (loading) {
    return (
      <main className={"RentMain"}>
        <Loader />
      </main>
    );
  }
  return (
    <main className={"RentMain"}>
      <div>
        <img alt="" className={"RentCarImage"} src={bmw} />

        <section className={"RentInformation"}>
          <h1>{car.getName()}</h1>
        </section>

        <section className={"RentAttributes"}>
          <div className={"RentAttributeList"}>
            <CarAttributes year={car.getYear()} seats={car.getNumberOfSeats()} transmission={car.getTransmissionType().getName()} fuel={car.getFuelType().getName()} />
          </div>
        </section>

        <section className={"RentFeatureSection"}>
          <h2>Features</h2>
          <div className={"RentFeatureList"}>
            {features.map((feature, index) => (
              <p className={"RentFeatureItem"}>- {feature.getName()}</p>
            ))}
          </div>
        </section>

        <section className={"RentInteraction"}>
          <div className={"RentCompanyCard"}>
            <img className={"RentCompanyImage"} src={bmw} />
            <h2>{car.getCompanyName()}</h2>
          </div>

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


        <section className={"RentCarDescription"}>
          <h2>Description</h2>
          <p>
            {car.getDescription()}
          </p>
        </section>
      </div>
    </main>
  )
}