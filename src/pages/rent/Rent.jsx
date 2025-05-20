import "./Rent.css"
import img from "../../resources/logo/Logo-Dark-Vertical.svg"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarAPI } from "../../util/api/CarAPI";
import CarAttributes from "../../components/CarAttribute/CarAttributes";
import Loader from "../../components/loader/Loader";
import ErrorFetchingDataMessage
  from "../../components/ErrorFetchingDataMessage/ErrorFetchingDataMessage";
import RentInteraction from "../../components/RentInteraction/RentInteraction";
import {ImageAPI} from "../../util/api/ImageAPI";
import CarFavoriteButton from "../../components/CarFavoriteButton/CarFavoriteButton";
import {OrderAPI} from "../../util/api/OrderAPI";

export default function Rent(props) {
  let { id } = useParams();

  // fetch car data
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [noBackendMessage, setNoBackendMessage] = useState(false);

  // car data
  const [features, setFeatures] = useState([]);

  const [carImage, setCarImage] = useState(img);

  const [unavailableDates, setUnavailableDates] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const car = await CarAPI.getCar(id);
        setCar(car)
        setLoading(false);
        setFeatures(car.getFeatures());
      } catch (error) {
        console.error("Error fetching car data:", error);
        setLoading(false);
        setNoBackendMessage(true);

        if (error.response && error.response.status === 404) {
          setCar(null);
          setNoBackendMessage(false);
        }
      }
    }

    const fetchUnavailableDatesForCar = async () => {
      try {
        const orders = await OrderAPI.getOrdersByCarId(id);


        const datePairs = orders.map(order => {
          return {
            from: order.getStartDate(),
            to: order.getEndDate()
          }
        });
        const newUnavailableDates = [];
        datePairs.forEach(pair => {
          const startDate = pair.from;
          const endDate = pair.to;
          const currentDate = startDate;

          while (currentDate <= endDate) {
            console.log(currentDate);
            newUnavailableDates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
          }
        });
        setUnavailableDates(newUnavailableDates);
      } catch (error) {
        console.error("Error fetching orders of car:", error);
      }
    }

    fetchCar();
    fetchUnavailableDatesForCar();
  }, [id]);

  useEffect(() => {
    async function fetchCarImage() {
      if (!car) {
        return; //do nothing until car is set
      }
      try {
        const imageData = await ImageAPI.getImageData(car.getId(), "jpg", 1600);

        if (imageData && imageData.data) {
          const imageUrl = `data:image/jpeg;base64,${imageData.data}`;
          setCarImage(imageUrl);
        } else {
          console.warn("Invalid image data format:", imageData);
        }
      } catch (error) {
        console.error("Error fetching car image:", error);
      }
    }

    fetchCarImage();
  }, [car]);


  if (loading) {
    return (
      <main className={"RentMain"}>
        <Loader />
      </main>
    );
  }
  if (noBackendMessage) {
    return (
      <main className={"RentMain"}>
        <ErrorFetchingDataMessage />
      </main>
    );
  }
  if (car === null) {
    return (
      <main className={"RentMain"}>
        <p>Car not found</p>
      </main>
    );
  }



  return (
    <main className={"RentMain"}>
      <section className="RentGrid">
        <div className="RentMainTop">
          <img alt="CarImage" className={"RentCarImage"} src={carImage} />
          <CarFavoriteButton className={"RentCarFavoriteButton"} car={car} />

          <section className={"RentInformation"}>
            <h1>{car.getName()}</h1>
          </section>

          <CarAttributes year={car.getYear()} seats={car.getNumberOfSeats()} transmission={car.getTransmissionType().getName()} fuel={car.getFuelType().getName()} />
        </div>

        <RentInteraction car={car} unavailableDates={unavailableDates} />

        <div className={"RentMainBottom"}>
          <section className={"RentFeatureSection"}>
            <h2>Features</h2>
            <div className={"RentFeatureList"}>
              {features.map((feature) => (
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
        </div>
      </section>
    </main>
  )
}