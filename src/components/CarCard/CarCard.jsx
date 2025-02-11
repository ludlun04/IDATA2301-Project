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
                        <h1 className={"CarCardHeader"}>BMW M3</h1>
                        <h2 className={"CarCardCompany"}>Kacper Rental AS</h2>
                    </div>
                    <div className={"CarCardCarInfoContainer"}>
                        <p>2002</p>
                        <p>4 Seter</p>
                    </div>
                </div>
                <div className={"CarCardInnerRightPane"}>
                    <div className={"CarCardAvailabilityContainer"}>
                        <div className={"CarCardAvailabilityIndicator"}></div>
                        <p className={"CarCardAvailabilityTag"}>Available</p>
                    </div>
                    <div className={"CarCardPriceContainer"}>
                        <p>Price</p>
                    </div>
                </div>
            </div>
        </div>
    )
}