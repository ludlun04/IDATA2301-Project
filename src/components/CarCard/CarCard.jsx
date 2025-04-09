import "./CarCard.css"
import img from "../../resources/images/cars/bmw_m3/bmw_m3-1600.webp"
import starFilled from "../../resources/icons/starFilled.svg"
import starUnfilled from "../../resources/icons/starUnfilled.svg"

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Car} from "../../model/Car";

export default function CarCard(props) {
    const navigate = useNavigate();
    let car = null;
    if (props.car instanceof Car) {
            car = props.car;
    } else {
        throw new Error("Car must be defined");
    }

    const onClick = () => {
        navigate("/rent");
    }
    return (
        <div className="CarCard" onClick={onClick}>
            <div className={"CarCardImageContainer"}>
                <img className={"CarCardImg"} src={img} alt={"Car"}/>
                <button className={"favoriteButton"}>
                    <img className={"favoritedStarIcon"} src={car.getFavorite() ? starFilled : starUnfilled} alt={starUnfilled} />
                </button>
            </div>
            <div className={"CarCardRightPane"}>
                <div className={"CarCardInnerLeftPane"}>
                    <div className={"CarCardHeaderContainer"}>
                        <h1 className={"CarCardHeader"}>{car.getName()}</h1>
                        <h2 className={"CarCardCompany"}>{car.getCompany()}</h2>
                    </div>
                    <div className={"CarCardCarInfoContainer"}>
                        <p>{car.getYear()}</p>
                        <p>{car.getNumberOfSeats() + " Seter"}</p>
                    </div>
                </div>
                <div className={"CarCardInnerRightPane"}>
                    <div className={"CarCardAvailabilityContainer"}>
                        <div className={`CarCardAvailabilityIndicator ${car.getAvailable()}`}></div>
                        <p className={`CarCardAvailabilityTag ${car.getAvailable()}`}>Available</p>
                    </div>
                    <div className={"CarCardPriceContainer"}>
                        <p>{car.getPricePerDay() + ",-"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}