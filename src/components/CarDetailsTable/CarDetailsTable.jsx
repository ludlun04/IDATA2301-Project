import "./CarDetailsTable.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function CarDetailsTable(props) {

  const rentals = props.rentals;

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  }

  const getOpenContent = (rental) => {
    const car = rental.getCar();
    return (
      <div className={"carDetailsColumnOpenContent"}>
        <section>
          <p>Fuel Type</p>
          <p>{car.getFuelType().getName()}</p>
        </section>
        <section>
          <p>Transmission</p>
          <p>{car.getTransmissionType().getName()}</p>
        </section>
        <section>
          <p>Feature(s)</p>
        </section>
        <section className={"carDetailsColumnOpenContentRenteeSection"}>
          <p>Rentee</p>
          <p>{rental.getUser().getFirstName()}</p>
        </section>
      </div>
    )
  }

  const getTopContent = (rental) => {
    const car = rental.getCar();

    return (
      <div className={"carDetailsTableRowTop"}>
        <p className={"carDetailsTableRowTopSection"}>{car.getModel().getBrand().getName()}</p>
        <p className={"carDetailsTableRowTopSection"}>{car.getModel().getName()}</p>
        <p className={"carDetailsTableRowTopSection"}>{car.getYear()}</p>
        <p
          className={"carDetailsTableRowDates"}>{getFormattedDate(rental.getFromDate())} - {getFormattedDate(rental.getToDate())}</p>
      </div>
    )

  }

  return (
    <div className={props.className}>
      <div className={"CarDetailsTable"}>
        <div className={"carDetailsTableRowTop carDetailsTableDescriptorRow"}>
          <p className={"carDetailsTableRowTopSection"}>Brand</p>
          <p className={"carDetailsTableRowTopSection"}>Model</p>
          <p className={"carDetailsTableRowTopSection"}>Year</p>
          <p className={"carDetailsTableRowDates"}>Dates</p>
        </div>
        {
          rentals.map((rental, index) => {
            return (
                <DropdownMenu key={index} className={"carDetailsTableDropdownMenu"} title={getTopContent(rental)} children={getOpenContent(rental)}></DropdownMenu>
            )

          })
        }
      </div>
    </div>

  )
}