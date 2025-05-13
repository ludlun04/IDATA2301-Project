import "./RentCard.css";
import img from "../../resources/logo/Logo-Dark-Icon.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageAPI } from "../../api/ImageAPI";
import { OrderAPI } from "../../api/OrderAPI";

/**
 * RentCard component
 * Displays a card with information about a rental order, including an image, car model, company name, and rental dates.
 *
 * @param {string} orderId - The order ID to be displayed.
 * @returns {JSX.Element}
 */
export default function RentCard({ orderId }) {
  const navigate = useNavigate();
  const [carImage, setCarImage] = useState(img);
  const [order, setOrder] = useState(null);
  const [car, setCar] = useState(null);


  useEffect(() => {
    OrderAPI.getOrderById(orderId).then((order) => {
      setOrder(order);
    }).catch((error) => {
      console.error("Error fetching order:", error);
    });
  }, [orderId]);

  useEffect(() => {
    if (order) {
      setCar(order.getCar());
    }
  }, [order]);

  useEffect(() => {
    async function fetchCarImage() {
      try {
        const imageData = await ImageAPI.getImageData(order.getCarId(), "jpg", 1600);

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
  }, [order]);

  const onClick = () => {
    navigate(`/order/${orderId}`);
  }
  return (
    <div className="RentCard" onClick={onClick}>
      {carImage ? (
        <div className={"RentCardImageContainer"}>
          <img className={"RentCardImage"} src={carImage} alt="Car"/>
        </div>
      ) : (<p>Loading...</p>)}

      {(car && order) ? (
        <div className={"RentCardRightPane"}>
          <div className={"RentCardInnerLeftPane"}>
            <div className={"RentCardHeaderContainer"}>
              <h1
                className={"RentCardHeader"}>{car.getModel().getBrand().getName() + " " + car.getModel().getName()}</h1>
              <h2 className={"RentCardCompany"}>{car.getCompanyName()}</h2>


            </div>
            <div className={"RentCardCarInfoContainer"}>
              <p>{order.getStartDate().toDateString()} - {order.getEndDate().toDateString()}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}