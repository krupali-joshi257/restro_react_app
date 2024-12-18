import React, { useState } from "react";
import axios from "axios";

const Cart = ({ isAuthenticated }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  // const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  //   const placeOrder = async () => {
  //     try {
  //       const response = await axios.post("/api/orders", { items: cart });
  //       alert("Order placed successfully!");
  //       setCart([]);
  //     } catch (error) {
  //       alert("Failed to place order.");
  //     }
  //   };
  const handleCheckout = async () => {
    if (!isAuthenticated) {
      setMessage("Please log in to place an order.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/order",
        { items: cart },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setMessage("Order placed successfully!");
      setCart([]);
    } catch (error) {
      setMessage("Failed to place order.");
    }
  };
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </div>
        ))
      )}
      <button onClick={handleCheckout}>Checkout</button>
      {message && <p>{message}</p>}
      {/* <h3>Total: ${totalPrice}</h3> */}
      {/* <button onClick={placeOrder}>Place Order</button> */}
    </div>
  );
};

export default Cart;
