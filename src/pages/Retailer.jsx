import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Farmer.css"; 
import { saveRetailerData } from "../utils/Storage";

function Retailer() {
  const [formData, setFormData] = useState({
    retailerName: "",
    address: "",
    mobileNumber: "",
    email: "",
    qrCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRetailerData(formData);
    alert("Retailer registered successfully!");
    setFormData({ retailerName: "", address: "", mobileNumber: "", email: "", qrCode: "" });
    navigate("/scan"); // redirect to QR scanner
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <h2>Register as Retailer</h2>
        <form onSubmit={handleSubmit}>
          <label>Retailer Name</label>
          <input type="text" name="retailerName" value={formData.retailerName} onChange={handleChange} required />

          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />

          <label>Mobile Number</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />

          <label>Email (Optional)</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Retailer;
