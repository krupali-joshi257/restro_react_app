import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = ({ isAuthenticated }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    console.log(storedCart);
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Set the cart state from localStorage
    }
  }, []);

  const handleCheckout = async () => {
    console.log(cart, "====cart");
    try {
      await axios
        .post("http://localhost:4000/api/order/order", {
          user_id: 1,
          items: JSON.stringify(cart),
        })
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => {
          console.log(error);
        });
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
            {item.name} - ${item.price}
            {/* - ${item.price.toFixed(2)} */}
          </div>
        ))
      )}
      <button onClick={handleCheckout}>Checkout</button>
      {message && <p>{message}</p>}
      {/* <h3>Total: ${totalPrice}</h3> */}
    </div>
  );
};

export default Cart;
