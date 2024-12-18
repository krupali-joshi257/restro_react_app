import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = () => {
  //   console.log(addToCart, "====addToCart");
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  const API_URL = "http://localhost:4000/api/menu";

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const response = await axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        setMenuItems(res.data);
      })
      .catch((error) => console.error("Error fetching menu items:", error));
  };
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div>
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div
          style={{
            border: "1px solid #000",
            padding: "10px",
            maxWidth: "300px",
          }}
        >
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
