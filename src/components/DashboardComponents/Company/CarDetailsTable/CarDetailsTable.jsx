import "./CarDetailsTable.css";
import DropdownMenu from "../../../DropdownMenu/DropdownMenu";
import order from "../../../../pages/order/Order";

export default function CarDetailsTable(props) {

  const orders = props.orders;
  const cars = props.cars;
  console.log("cars: ", cars);

  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  }

  const getOpenContent = (order, car) => {
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
        {order !== null &&
          <section className={"carDetailsTableOpenContentRenteeSection"}>
            <p className={"carDetailsTableColumnDescriptor"}>Rentee</p>
            <p>{order.getUser().getFirstName()}</p>
          </section>
        }

      </div>
    )
  }

  const getTopContent = (order, car) => {

    return (
      <div className={"carDetailsTableRowTop"}>
        <p className={"carDetailsTableColumn"}>{car.getModel().getBrand().getName()}</p>
        <p className={"carDetailsTableColumn"}>{car.getModel().getName()}</p>
        <p className={"carDetailsTableColumn"}>{car.getYear()}</p>
        {order !== null ?
          <p
            className={"carDetailsTableDates"}>{getFormattedDate(order.getStartDate())} - {getFormattedDate(order.getEndDate())}</p>
        :
          <p className={"carDetailsTableStatus"}>{car.getAvailable() ? "Rented" : "Available"}</p>
        }

      </div>
    )

  }

  return (
    <div>
      <div className={"CarDetailsTable"}>
        <div className={"carDetailsTableRowTop carDetailsTableDescriptorRow"}>
          <p className={"carDetailsTableColumn"}>Brand</p>
          <p className={"carDetailsTableColumn"}>Model</p>
          <p className={"carDetailsTableColumn"}>Year</p>
          {orders !== undefined ?
            <p className={"carDetailsTableDates"}>Dates</p>
            :
            <p className={"carDetailsTableStatus"}>Status</p>
          }
        </div>
        {orders !== undefined ?
          orders.map((order, index) => {
            return (
              <DropdownMenu key={index} className={"carDetailsTableDropdownMenu"}
                            alwaysShownContent={getTopContent(order, order.getCar())}>
                {getOpenContent(order, order.getCar())}
              </DropdownMenu>
            )

          })
          : cars.map((car, index) => {
            return (
              <DropdownMenu key={index} className={"carDetailsTableDropdownMenu"}
                            alwaysShownContent={getTopContent(null, car)}>
                {getOpenContent(null, car)}
              </DropdownMenu>
            )
          })}
      </div>
    </div>

  )
}