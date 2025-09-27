import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRetailerData } from "../../utils/Storage.js";

function RetailerLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ shopName: "", mobileNumber: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = getRetailerData();

    if (saved && saved.shopName === credentials.shopName && saved.mobileNumber === credentials.mobileNumber) {
      alert("Login successful!");
      navigate("/retailer/entry");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <h2>Retailer Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Shop Name</label>
          <input type="text" name="shopName" value={credentials.shopName} onChange={handleChange} required />
          <label>Mobile Number</label>
          <input type="text" name="mobileNumber" value={credentials.mobileNumber} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default RetailerLogin;
