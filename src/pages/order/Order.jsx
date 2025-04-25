import { useEffect, useState } from "react";
import "./Order.css";
import { useParams } from "react-router-dom";
import { OrderAPI } from "../../api/OrderAPI";


const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    OrderAPI.getOrderById(id)
      .then((order) => {
        setOrder(order);
        console.log("Order data:", order);
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
      });
  }, [id]);

  return (
    <div>
      <h1>Order: {id}</h1>

      {order ? (
        <>
          <p>Orderid: {order.getId()}</p>
          <p>CarId: {order.getCarId()}</p>
          <p>UserId: {order.getUserId()}</p>
          <p>StartDate: {order.getStartDate().toDateString()}</p>
          <p>EndDate: {order.getEndDate().toDateString()}</p>
          <p>Price: {order.getPrice()}</p>
        </>
      ) : (
        <p>Loading order data...</p>
      )}

    </div>
  );
}

export default Order;