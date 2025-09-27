import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Farmer.css";
import { saveFarmerData } from "../utils/Storage.js";

function Farmer() {
  const [formData, setFormData] = useState({
    farmName: "",
    farmAddress: "",
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

    // save farmer data locally with fake QR for now
    const farmerData = saveFarmerData(formData);

    alert("Farmer registered successfully & QR code generated!");
    setFormData({ farmName: "", farmAddress: "", mobileNumber: "", email: "", qrCode: "" });

    // redirect to product entry page
    navigate("/farmer/product-entry");
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <div className="farmer-icon">Farmer</div>
        <h2>Register as Farmer</h2>
        <p>Join the FarmTrace network to start tracking your produce on the blockchain</p>

        <form onSubmit={handleSubmit}>
          <label>Farm Name</label>
          <input type="text" name="farmName" value={formData.farmName} onChange={handleChange} required />

          <label>Farm Address</label>
          <input type="text" name="farmAddress" value={formData.farmAddress} onChange={handleChange} required />

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

export default Farmer;
