import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

// Icons (replace with your own paths)
import shield from "../assets/Design/MainPage/Shield.png";
import qrIcon from "../assets/Design/MainPage/QR.png";
import groupIcon from "../assets/Design/MainPage/MultiStakeHolder.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header Section with Background */}
      <div className="header-section">
        <h1 className="home-title">Dashboard</h1>
        <h2 className="home-title-2">Track your Produce From Farm to Table</h2>
      </div>

      {/* Portal Buttons */}
      <div className="button-grid">
        <div className="nav-card" onClick={() => navigate("/farmer")}>
          <p>Farmer Dashboard</p>
        </div>

        <div className="nav-card" onClick={() => navigate("/distributor")}>
          <p>Distributor Dashboard</p>
        </div>

        <div className="nav-card" onClick={() => navigate("/retailer")}>
          <p>Retailer Dashboard</p>
        </div>

        <div className="nav-card" onClick={() => navigate("/scan")}>
          <p>Scan QR</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <div className="info-card">
          <img src={shield} alt="Blockchain Security" className="info-img" />
          <h3>Blockchain Security</h3>
          <p>Immutable records ensure data integrity and prevent fraud across the supply chain.</p>
        </div>

        <div className="info-card">
          <img src={qrIcon} alt="QR Code Tracking" className="info-img" />
          <h3>QR Code Tracking</h3>
          <p>Simple scanning reveals the complete history of produce from farm to table.</p>
        </div>

        <div className="info-card">
          <img src={groupIcon} alt="Multi-Stakeholder" className="info-img" />
          <h3>Multi-Stakeholder</h3>
          <p>Farmers, distributors, retailers, and consumers all participate for full transparency.</p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-section">
        <div className="how-overlay">
          <h2>How It Works</h2>
          <div className="how-steps">
            <div className="step-card">
              <h4>1. Farmer Registers</h4>
              <p>Farmer creates a batch record with harvest details.</p>
            </div>
            <div className="step-card">
              <h4>2. Distributor Updates</h4>
              <p>Distributor scans QR and updates delivery status.</p>
            </div>
            <div className="step-card">
              <h4>3. Retailer Receives</h4>
              <p>Retailer confirms receipt and updates inventory.</p>
            </div>
            <div className="step-card">
              <h4>4. Consumer Scans</h4>
              <p>Consumers see complete verified details by scanning the QR code.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
