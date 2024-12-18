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
      {orders.map((order) => {
        // Parse `order.items` if it is a string
        const items =
          typeof order.items === "string"
            ? JSON.parse(order.items)
            : order.items;

        return (
          <div key={order.id}>
            <h3>Order #{order.id}</h3>
            <p>Date: {new Date(order.order_date).toLocaleString()}</p>
            <p>Status: {order.status}</p>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default OrderHistory;
