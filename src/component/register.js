import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const API_URL = "http://localhost:4000/api/users/register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Create user
      await axios.post(API_URL, formData).then((res) => {
        console.log(res);
        setFormData({ name: "", email: "", password: "" });
      });
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <div className="container">
      <h3>REGISTER</h3>

      {/* User Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
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
        <button type="submit"> Register User</button>
      </form>
    </div>
  );
};

export default Register;
