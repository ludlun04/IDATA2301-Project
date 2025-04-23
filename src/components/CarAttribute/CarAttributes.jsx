import CarAttribute from "./CarAttribute";
import "./CarAttributes.css";
import gasIcon from "./../../resources/icons/gas.svg"
import transmissionIcon from "./../../resources/icons/transmission.svg"
import seatIcon from "./../../resources/icons/seat.svg"
import calendarIcon from "./../../resources/icons/calendar.svg"

export default function CarAttributes(props) {
    return (
        <div className="CarAttributes">
            <CarAttribute name={"Year"} description={props.year} svg={calendarIcon}/>
            <CarAttribute name={"Seats"} description={props.seats} svg={seatIcon}/>
            <CarAttribute name={"Transmission"} description={props.transmission} svg={transmissionIcon}/>
            <CarAttribute name={"Fuel"} description={props.fuel} svg={gasIcon}/>
        </div>
    )
}