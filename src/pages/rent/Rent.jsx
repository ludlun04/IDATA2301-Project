import "./Rent.css"
import img from "../../resources/images/bmw.jpg"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarAPI } from "../../api/CarAPI";
import CarAttributes from "../../components/CarAttribute/CarAttributes";
import Loader from "../../components/loader/Loader";
import RentInteraction from "../../components/RentInteraction/RentInteraction";
import {ImageAPI} from "../../api/ImageAPI";
import CarFavoriteButton from "../../components/CarFavoriteButton/CarFavoriteButton";

export default function Rent(props) {
  let { id } = useParams();

  // fetch car data
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  // car data
  const [features, setFeatures] = useState([]);

  const [carImage, setCarImage] = useState(img);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const car = await CarAPI.getCar(id);
        setCar(car)
        console.log("car favorite: ", car.getFavorite());
        setLoading(false);
        setFeatures(car.getFeatures());
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    }
    fetchCar();
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
  return (
    <main className={"RentMain"}>
      <div className="RentGrid">
        <div className="RentMainTop">
          <img alt="" className={"RentCarImage"} src={carImage} />
          <CarFavoriteButton className={"RentCarFavoriteButton"} car={car} />

          <section className={"RentInformation"}>
            <h1>{car.getName()}</h1>
          </section>

          <CarAttributes year={car.getYear()} seats={car.getNumberOfSeats()} transmission={car.getTransmissionType().getName()} fuel={car.getFuelType().getName()} />
        </div>

        <RentInteraction car={car} />

        <div className={"RentMainBottom"}>
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
        </div>
      </div>
    </main>
  )
}