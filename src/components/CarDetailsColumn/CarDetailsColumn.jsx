import "./CarDetailsColumn.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function CarDetailsColumn(props) {

  const rental = props.rental;
  const car = rental.getCar();

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  }

  const getOpenContent = () => {

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

  const getTopContent = () => (
    <div className={"CarDetailsColumn"}>
      <p className={"carDetailsColumnTopSection"}>{car.getModel().getBrand().getName()}</p>
      <p className={"carDetailsColumnTopSection"}>{car.getModel().getName()}</p>
      <p className={"carDetailsColumnTopSection"}>{car.getYear()}</p>
      <p className={"carDetailsColumnDates"}>{getFormattedDate(rental.getFromDate())} - {getFormattedDate(rental.getToDate())}</p>
    </div>
  )

  return (
    <DropdownMenu title={getTopContent()} children={getOpenContent()}></DropdownMenu>
  )
}