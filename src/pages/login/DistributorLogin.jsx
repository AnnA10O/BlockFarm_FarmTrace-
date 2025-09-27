import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDistributorData } from "../../utils/Storage.js";

function DistributorLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", mobileNumber: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saved = getDistributorData();

    if (saved && saved.name === credentials.name && saved.mobileNumber === credentials.mobileNumber) {
      alert("Login successful!");
      navigate("/distributor/entry");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <h2>Distributor Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
          <label>Mobile Number</label>
          <input type="text" name="mobileNumber" value={credentials.mobileNumber} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default DistributorLogin;
