import "./Rent.css"
import CarAttribute from "../../components/CarAttribute/CarAttribute";
import bmw from "./../../resources/images/bmw.jpg";
import DatePicker from "react-datepicker";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {CarAPI} from "../../api/CarAPI";

export default function Rent(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  let { id } = useParams();

  // fetch car data
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  // car data
  const [carName, setCarName] = useState("Loading");
  const [carPricePerDay, setCarPricePerDay] = useState(0);
  const [features, setFeatures] = useState([]);
  const [carDescription, setCarDescription] = useState("Loading");

  useEffect( () => {
    const fetchCar = async () => {
      try {
        const car = await CarAPI.getCar(id);
        setCar(car)
        setLoading(false);

        setCarName(car.getName())
        setCarPricePerDay(car.getPricePerDay());
        setFeatures(car.getFeatures());
        setCarDescription(car.getDescription());
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

  return (
    <main className="RentMain">
      <img alt="" className={"RentCarImage"} src={bmw} />
      <div className="RentInformation">
        <h1>{carName}</h1>

        <section className={"RentAttributes"}>
          <h2>Attributes</h2>
          <div className={"RentAttributeList"}>
            {features.map((feature) => (
                <CarAttribute key={feature.getId()} name={feature.getName()} />
                ))}
          </div>
        </section>
      </div>

      <section className={"RentCarDescription"}>
        <h2>Description</h2>
        <p>
          {carDescription}
          </p>
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
            <p className="RentContent">{carPricePerDay}</p>
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