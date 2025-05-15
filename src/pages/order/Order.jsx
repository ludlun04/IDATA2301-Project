import "./Order.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OrderAPI } from "../../api/OrderAPI";
import CarCard from "../../components/CarCard/CarCard";


const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [status, setStatus] = useState("Loading order data...");
  const [car, setCar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    OrderAPI.getOrderById(id)
      .then((order) => {
        setOrder(order);
        setCar(order.getCar())
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          setStatus("Order not found.");
        } else {
          setStatus("Error fetching order data, please try again later.");
        }
      });
  }, [id]);

  console.log(car)


  return (
    <main className={"OrderMain"}>
      <div className={"OrderContainer"}>
        <h1>Thank you for renting with us!</h1>

        {order ? (
          <>
            <ul className={"OrderInformation"}>
              <li><p>OrderId:</p><p>{order.getId()}</p></li>
              <li><p>CarId:</p><p>{car.getId()}</p></li>
              <li><p>UserId:</p><p>{order.getUser().getId()}</p></li>
              <li><p>StartDate:</p><p>{order.getStartDate().toDateString()}</p></li>
              <li><p>EndDate:</p><p>{order.getEndDate().toDateString()}</p></li>
              <li><p>Price:</p><p>{order.getPrice()}</p></li>
            </ul>
            <div style={{maxWidth:"20rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
              {car && <CarCard car={car} />}
            </div>
          </>

        ) : (
          <p>{status}</p>
        )}

        <button className={"OrderNavButton"} type="button" onClick={() => navigate("/dashboard/user/details")}>Go to profile page</button>
      </div>
    </main>
  );
}

export default Order;
