import "./CompanyCars.css"
import CarDetailsTable from "./CarDetailsTable/CarDetailsTable";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {OrderAPI} from "../../../util/api/OrderAPI";

/**
 * CompanyCarsHistory component
 * Displays a list of cars belonging to a specific company along with their rental history.
 * The company ID is obtained from the URL parameters.
 *
 * @returns {JSX.Element}
 */
export default function CompanyCarsHistory() {

  const idParam = useParams();

  const [orders, setOrders] = useState([]);
  const [cars, setCars] = useState([]);
  const [encounteredError, setEncounteredError] = useState(false);

  useEffect(() => {
    const getOrdersFromApi = async () => {
      try {
        const orders = await OrderAPI.getOrdersByCompanyId(idParam.id);
        setOrders(orders);
        const cars = new Set();
        orders.forEach(rental => {
          cars.add(rental.getCar())
        });
        setCars(Array.from(cars));
      } catch (error) {
        setEncounteredError(true);
      }

    }
    getOrdersFromApi();
  }, [idParam.id]);


  return (
    <main className={"CompanyCars"}>
      { encounteredError ?
        <p>Failed to retrieve data. Ensure you have access to this company and try again.</p>
        : <CarDetailsTable orders={orders} cars={cars}/>
      }
    </main>
  )
}