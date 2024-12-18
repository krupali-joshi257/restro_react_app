import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderHistory = ({ isAuthenticated }) => {
  const [orders, setOrders] = useState([]);

  console.log(isAuthenticated);
  useEffect(() => {
    axios.get("http://localhost:4000/api/order/orders").then((response) => {
      console.log(response, "-----");
      setOrders(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {/* {orders.map((order) => (
        <div key={order.id}>
          <h3>Order #{order.id}</h3>
          <p>Total Price: ${order.total_price}</p>
          <p>Date: {new Date(order.order_date).toLocaleDateString()}</p>
        </div>
      ))} */}
      {orders.map((order) => (
        <div key={order.id}>
          <h3>Order #{order.id}</h3>
          <p>Date: {new Date(order.order_date).toLocaleString()}</p>
          <p>Status: {order.status}</p>
          {/* <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul> */}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
