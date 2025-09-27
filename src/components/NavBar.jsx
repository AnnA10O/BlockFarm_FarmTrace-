import { Link } from "react-router-dom";
import LogoImage from "../assets/Design/MainPage/MainLogo.png";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBar-FarmTrace">
        

        <Link to="/" className="navBar-logo">
          <img className="Logo" src={LogoImage} alt="Logo" />
          <span className="logo-text">FarmTrace</span>
        </Link>

 
        <div className="navBar-links">
          <Link to="/" className="nav-link button-link">Home</Link>
          <Link to="/farmer" className="nav-link button-link">Farmer Portal</Link>
          <Link to="/distributor" className="nav-link button-link">Distributor Portal</Link>
          <Link to="/retailer" className="nav-link button-link">Retailer</Link>
          <Link to="/scan" className="nav-link button-link">Scan QR</Link>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;