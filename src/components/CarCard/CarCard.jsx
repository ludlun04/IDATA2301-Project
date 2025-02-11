import "./CarCard.css"
import img from "../../resources/images/bmw_m3/bmw_m3-1600.webp"

export default function CarCard(props) {
    return (
        <div className="CarCard">
            <div className={"CarCardImageContainer"}>
                <img className={"CarCardImg"} src={img} alt={"Image"}/>
            </div>
            <div className={"CarCardRightPane"}>
                <div className={"CarCardInnerLeftPane"}>
                    <div className={"CarCardHeaderContainer"}>
                        <h1 className={"CarCardHeader"}>{props.name}</h1>
                        <h2 className={"CarCardCompany"}>{props.company}</h2>
                    </div>
                    <div className={"CarCardCarInfoContainer"}>
                        <p>{props.year}</p>
                        <p>{props.seats + " Seter"}</p>
                    </div>
                </div>
                <div className={"CarCardInnerRightPane"}>
                    <div className={"CarCardAvailabilityContainer"}>
                        <div className={`CarCardAvailabilityIndicator ${props.availability}`}></div>
                        <p className={`CarCardAvailabilityTag ${props.availability}`}>Available</p>
                    </div>
                    <div className={"CarCardPriceContainer"}>
                        <p>{props.price + ",-"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}