import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Menu from "./component/menu";
import Cart from "./component/order";
import OrderHistory from "./component/order_history";
import Login from "./component/login";
import Register from "./component/register";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const [cart, setCart] = useState([]);

  // const addToCart = (item) => setCart([...cart, item]);
  // const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  // const placeOrder = async () => {
  //   // Place order implementation
  // };

  // return (
  //   <Router>
  //     <nav>
  //       <a href="/">Menu</a>
  //       <a href="/cart">Cart</a>
  //       <a href="/orders">Orders</a>
  //     </nav>
  //     <Routes>
  //       <Route path="/" element={<Menu addToCart={addToCart} />} />
  //       <Route
  //         path="/cart"
  //         element={
  //           <Cart
  //             cart={cart}
  //             removeFromCart={removeFromCart}
  //             placeOrder={placeOrder}
  //           />
  //         }
  //       />
  //       <Route path="/orders" element={<OrderHistory />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //     </Routes>
  //   </Router>
  // );
  return (
    <Router>
      <div>
        <nav>
          <a href="/login">Login</a> | <a href="/register">Register</a> |
          <a href="/">Home</a> | <a href="/menu">Menu</a> |
          <a href="/cart">Cart</a> | <a href="/orders">Order History</a>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/menu" />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/cart"
            element={<Cart isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/orders"
            element={<OrderHistory isAuthenticated={isAuthenticated} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
