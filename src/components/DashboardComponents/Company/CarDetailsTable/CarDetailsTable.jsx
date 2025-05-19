import "./CarDetailsTable.css";
import DropdownMenu from "../../../DropdownMenu/DropdownMenu";
import {useEffect, useState} from "react";
import {CarAPI} from "../../../../api/CarAPI";

/**
 * CarDetailsTable component
 * Displays a table of car details with the ability to show/hide cars and view their details.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.orders - The list of orders associated with the cars.
 * @param {Array} props.cars - The list of cars to be displayed.
 * @returns {JSX.Element}
 */
export default function CarDetailsTable(props) {

    const orders = props.orders;
    const [cars, setCars] = useState([]);
    console.log("cars: ", cars);

    useEffect(() => {
        if (props.cars !== undefined) {
            setCars(props.cars);
        }
    }, [props.cars]);

    const getFormattedDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}.${month}.${day}`;
    }

    const onHideShowClick = (e, car) => {
        e.stopPropagation();
        CarAPI.updateCarVisibility(car.getId(), !car.getVisibility())
            .then(() => {
                const updatedCars = cars.map((newCar) => {
                    if (newCar.getId() === car.getId()) {
                        newCar.setVisibility(!newCar.getVisibility());
                    }
                    return newCar;
                });
                setCars(updatedCars);
            })
            .catch(console.error);
    };

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
                <div className={"carVisibilityButton" + " " + (car.getVisibility() ? "visible" : "hidden")} onClick={(event) => {
                    onHideShowClick(event, car)
                }}>{car.getVisibility() ? "Hide" : "Show"}</div>
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
          {cars.length === 0 ?
            <p>No cars to show</p>
            : <div className={"CarDetailsTable"}>
                <div className={"carDetailsTableRowTop carDetailsTableDescriptorRow"}>
                    <h3 className={"carDetailsTableColumn"}>Brand</h3>
                    <h3 className={"carDetailsTableColumn"}>Model</h3>
                    <h3 className={"carDetailsTableColumn"}>Year</h3>
                    <h3 className={"carDetailsTableColumn"}>Visibility</h3>
                    {orders !== undefined ?
                        <h3 className={"carDetailsTableDates"}>Dates</h3>
                        :
                        <h3 className={"carDetailsTableStatus"}>Status</h3>
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
          }
        </div>

    )
}