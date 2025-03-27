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
      <div className={"carDetailsTableOpenContent"}>
        <section className={"carDetailsTableColumn"}>
          <p className={"carDetailsTableColumnDescriptor"}>Fuel Type</p>
          <p>{car.getFuelType().getName()}</p>
        </section>
        <section className={"carDetailsTableColumn"}>
          <p className={"carDetailsTableColumnDescriptor"}>Transmission</p>
          <p>{car.getTransmissionType().getName()}</p>
        </section>
        <section className={"carDetailsTableOpenContentRenteeSection"}>
          <p className={"carDetailsTableColumnDescriptor"}>Rentee</p>
          <p>{rental.getUser().getFirstName()}</p>
        </section>
      </div>
    )
  }

  const getTopContent = (rental) => {
    const car = rental.getCar();

    return (
      <div className={"carDetailsTableRowTop"}>
        <p className={"carDetailsTableColumn"}>{car.getModel().getBrand().getName()}</p>
        <p className={"carDetailsTableColumn"}>{car.getModel().getName()}</p>
        <p className={"carDetailsTableColumn"}>{car.getYear()}</p>
        <p
          className={"carDetailsTableDates"}>{getFormattedDate(rental.getFromDate())} - {getFormattedDate(rental.getToDate())}</p>
      </div>
    )

  }

  return (
    <div className={props.className}>
      <div className={"CarDetailsTable"}>
        <div className={"carDetailsTableRowTop carDetailsTableDescriptorRow"}>
          <p className={"carDetailsTableColumn"}>Brand</p>
          <p className={"carDetailsTableColumn"}>Model</p>
          <p className={"carDetailsTableColumn"}>Year</p>
          <p className={"carDetailsTableDates"}>Dates</p>
        </div>
        {
          rentals.map((rental, index) => {
            return (
                <DropdownMenu key={index} className={"carDetailsTableDropdownMenu"} alwaysShownContent={getTopContent(rental)}>
                  {getOpenContent(rental)}
                </DropdownMenu>
            )

          })
        }
      </div>
    </div>

  )
}