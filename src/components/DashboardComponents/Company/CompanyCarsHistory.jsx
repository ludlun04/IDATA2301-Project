import "./CompanyCars.css"
import CarDetailsTable from "./CarDetailsTable/CarDetailsTable";
import {User} from "../../../model/User";
import {Car} from "../../../model/Car";
import {Rental} from "../../../model/Rental";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CompanyAPI} from "../../../api/CompanyAPI";
import {OrderAPI} from "../../../api/OrderAPI";

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
  }, []);


  return (
    <main className={"CompanyCars"}>
      { encounteredError ?
        <p>Failed to retrieve data. Ensure you have access to this company and try again.</p>
        : <CarDetailsTable orders={orders} cars={cars}/>
      }
    </main>
  )
}