import "./UserRentals.css"
import { useEffect, useState } from "react";
import { OrderAPI } from "../../../api/OrderAPI";
import RentCard from "../../RentCard/RentCard";

/**
 * UserRentals component
 * Displays a list of rentals for the user, either active or historical.
 *
 * @returns {JSX.Element}
 */
export default function UserRentals() {
  const [section, setSection] = useState("Active");
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    if (section === "Active") {
      OrderAPI.getActiveRentals().then((orders) => {
        setRentals(orders);
      }).catch((error) => {
        console.error("Error fetching active rentals:", error);
      });
    } else if (section === "History") {
      OrderAPI.getHistoricalRentals().then((orders) => {
        setRentals(orders);
      }).catch((error) => {
        console.error("Error fetching history rentals:", error);
      });
    }

  }, [section])
  

  const activePressed = () => {
    setSection("Active");
  }

  const historyPressed = () => {
    setSection("History");
  }

  return (
    <main className={"UserRentals"}>
      <h1 className={"UserRentalsTitle"}>{section === "Active" ? ("Active Rentals") : ("Historical Rentals")}</h1>
      <div className={"UserRentalsButtonContainer"}>
        <button onClick={activePressed}>Active</button>
        <button onClick={historyPressed}>History</button>
      </div>
      <div className={"UserRentalsContainer"}>
        {rentals.length > 0 ? rentals.map((order) => {
          return (
            <RentCard key={order.getId()} orderId={order.getId()} />
          )
        }) : (<p>No rentals found</p>)}
      </div>
    </main>
  )
}