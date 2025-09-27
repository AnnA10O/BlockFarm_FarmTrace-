import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFarmerData } from "../../utils/Storage.js";

function FarmerLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ farmName: "", mobileNumber: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedFarmer = getFarmerData();

    if (
      savedFarmer &&
      savedFarmer.farmName === credentials.farmName &&
      savedFarmer.mobileNumber === credentials.mobileNumber
    ) {
      alert("Login successful!");
      navigate("/farmer/product-entry");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <h2>Farmer Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Farm Name</label>
          <input type="text" name="farmName" value={credentials.farmName} onChange={handleChange} required />
          <label>Mobile Number</label>
          <input type="text" name="mobileNumber" value={credentials.mobileNumber} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default FarmerLogin;
