import React, { useState } from "react";
import axios from "axios";

const Login = ({ setAuthToken }) => {
  console.log(setAuthToken, "====setAuthToken");
  const [formData, setFormData] = useState({ email: "", password: "" });

  const API_URL = "http://localhost:4000/api/users/login";

  const handleSubmit = async (e) => {
    console.log(formData, "====formData");
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, formData).then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res.data.accessToken);
        alert("Login Successfully");
        // setAuthToken(res.data.accessToken);
      });
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container">
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
