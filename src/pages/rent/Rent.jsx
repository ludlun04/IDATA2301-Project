import "./Rent.css"
import bmw from "./../../resources/images/bmw.jpg";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarAPI } from "../../api/CarAPI";
import CarAttributes from "../../components/CarAttribute/CarAttributes";
import Loader from "../../components/loader/Loader";
import RentInteraction from "../../components/RentInteraction/RentInteraction";

export default function Rent(props) {
  let { id } = useParams();

  // fetch car data
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  // car data
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const car = await CarAPI.getCar(id);
        setCar(car)
        setLoading(false);
        setFeatures(car.getFeatures());
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    }
    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <main className={"RentMain"}>
        <Loader />
      </main>
    );
  }
  return (
    <main className={"RentMain"}>
      <div className="RentDynamicSection">

        <div className={"RentUpperSection"}>

          <img alt="" className={"RentCarImage"} src={bmw} />

          <section className={"RentInformation"}>
            <h1>{car.getName()}</h1>
          </section>

          <CarAttributes year={car.getYear()} seats={car.getNumberOfSeats()} transmission={car.getTransmissionType().getName()} fuel={car.getFuelType().getName()} />
        </div>

        <RentInteraction car={car} />
      </div>

      <section className={"RentFeatureSection"}>
        <h2>Features</h2>
        <div className={"RentFeatureList"}>
          {features.map((feature, index) => (
            <p key={feature.getId()} className={"RentFeatureItem"}>- {feature.getName()}</p>
          ))}
        </div>
      </section>

      <section className={"RentCarDescription"}>
        <h2>Description</h2>
        <p>
          {car.getDescription()}
        </p>
      </section>
    </main>
  )
}