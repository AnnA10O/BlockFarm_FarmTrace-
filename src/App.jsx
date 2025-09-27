import { useState } from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import QRdashboard from "./pages/QRdashboard";

// Farmer
import Farmer from "./pages/Farmer";               // registration
import FarmerLogin from "./pages/login/FarmerLogin";     // login
import ProductEntry from "./pages/Product-details/ProductEntry";   // product entry

// Distributor
import Distributor from "./pages/Distributor";           // registration
import DistributorLogin from "./pages/login/DistributorLogin.jsx"; // login
import DistributorEntry from "./pages/Product-details/DistributorEntry"; // transaction entry

// Retailer
import Retailer from "./pages/Retailer";           // registration
import RetailerLogin from "./pages/login/RetailerLogin"; // login
import RetailerEntry from "./pages/Product-details/RetailerEntry"; // transaction entry

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <main className="main-control">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Farmer Routes */}
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/farmer/login" element={<FarmerLogin />} />
          <Route path="/farmer/product-entry" element={<ProductEntry />} />

          {/* Distributor Routes */}
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/distributor/login" element={<DistributorLogin />} />
          <Route path="/distributor/entry" element={<DistributorEntry />} />

          {/* Retailer Routes */}
          <Route path="/retailer" element={<Retailer />} />
          <Route path="/retailer/login" element={<RetailerLogin />} />
          <Route path="/retailer/entry" element={<RetailerEntry />} />

          {/* QR Scanner */}
          <Route path="/scan" element={<QRdashboard />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
