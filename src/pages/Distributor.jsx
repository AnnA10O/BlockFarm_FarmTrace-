import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Farmer.css"; 
import { saveDistributorData } from "../utils/Storage";

function Distributor() {
  const [formData, setFormData] = useState({
    distributorName: "",
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
    saveDistributorData(formData);
    alert("Distributor registered successfully & QR code generated!");
    setFormData({ distributorName: "", address: "", mobileNumber: "", email: "", qrCode: "" });
    navigate("/distributor/entry"); // redirect to entry page
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <h2>Register as Distributor</h2>
        <form onSubmit={handleSubmit}>
          <label>Distributor Name</label>
          <input type="text" name="distributorName" value={formData.distributorName} onChange={handleChange} required />

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

export default Distributor;
