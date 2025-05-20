import "./CarCard.css";
import img from "../../resources/logo/Logo-Dark-Icon.svg";
import CarFavoriteButton from "../CarFavoriteButton/CarFavoriteButton";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Car} from "../../model/Car";
import {ImageAPI} from "../../util/api/ImageAPI";

/* 
 * CarCard component
 * Displays a card with car information, including an image, model, company name, availability status, and price.
 * 
 * @param {Car} car - The car object to be displayed.
 * @returns {JSX.Element}
 */
export default function CarCard(props) {
  const navigate = useNavigate();
  const [carImage, setCarImage] = useState(img);

  let car = null;
  if (props.car instanceof Car) {
    car = props.car;
  } else {
    throw new Error("Car must be defined");
  }

  useEffect(() => {
    async function fetchCarImage() {
      try {
        const imageData = await ImageAPI.getImageData(car.getId(), "jpg", 800);

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


  const onClick = () => {
    navigate(`/rent/${car.getId()}`);
  }
  return (
    <div className="CarCard" onClick={onClick}>
      <section className={"CarCardImageContainer"}>
        <img className={"CarCardImg"} src={carImage} alt={"CarImage"} />
        <CarFavoriteButton className={"carCardFavoriteButton"} car={car}/>
      </section>
      <section className={"CarCardRightPane"}>
        <div className={"CarCardInnerLeftPane"}>
          <div className={"CarCardHeaderContainer"}>
            <h1
              className={"CarCardHeader"}>{car.getModel().getBrand().getName() + " " + car.getModel().getName()}</h1>
            <h2 className={"CarCardCompany"}>{car.getCompanyName()}</h2>
          </div>
          <div className={"CarCardCarInfoContainer"}>
            <p>{car.getYear()}</p>
            <p>{car.getNumberOfSeats() + " Seats"}</p>
          </div>
        </div>
        <div className={"CarCardInnerRightPane"}>
          <div className={`CarCardAvailabilityContainer ${car.getAvailable()}`}>
            <p className={`CarCardAvailabilityTag`}>{car.getAvailable() ? "Available" : "Unavailable"}</p>
          </div>
          <div className={"CarCardPriceContainer"}>
            <p>{car.getPricePerDay() + ",-"}</p>
          </div>
        </div>
      </section>
    </div>
  )
}