import React, { useState } from "react";
import { saveRetailerEntry, getRetailerEntries } from "../../utils/Storage.js";

function RetailerEntry() {
  const [entry, setEntry] = useState({ purchaseDate: "", quantity: "", distributorName: "", pricePaid: "" });
  const [entries, setEntries] = useState(getRetailerEntries());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = saveRetailerEntry(entry);
    setEntries(updated);
    setEntry({ purchaseDate: "", quantity: "", distributorName: "", pricePaid: "" });
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <h2>Retailer Purchase Entry</h2>
        <form onSubmit={handleSubmit}>
          <label>Purchase Date</label>
          <input type="date" name="purchaseDate" value={entry.purchaseDate} onChange={handleChange} required />

          <label>Quantity (kg)</label>
          <input type="number" name="quantity" value={entry.quantity} onChange={handleChange} required />

          <label>Distributor Name</label>
          <input type="text" name="distributorName" value={entry.distributorName} onChange={handleChange} required />

          <label>Price Paid (₹)</label>
          <input type="number" name="pricePaid" value={entry.pricePaid} onChange={handleChange} required />

          <button type="submit">Save</button>
        </form>

        {entries.length > 0 && (
          <div className="qr-section">
            <h3>Saved Purchases</h3>
            <ul>
              {entries.map((e, idx) => (
                <li key={idx}>
                  {e.purchaseDate} – {e.quantity}kg – From: {e.distributorName} – Paid: {e.pricePaid}₹
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default RetailerEntry;
