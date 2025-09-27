import { useState, useEffect } from "react";
import "../../styles/Farmer.css";
import { getFarmerData, saveDistributorBatch } from "../../utils/Storage";

function DistributorEntry() {
  const [farmerBatch, setFarmerBatch] = useState(null);
  const [splitWeight, setSplitWeight] = useState("");
  const [splits, setSplits] = useState([]);

  useEffect(() => {
    const farmer = getFarmerData();
    if (farmer) {
      setFarmerBatch({ ...farmer, totalWeight: 1000 }); // default 1000kg batch for testing
    }
  }, []);

  const handleSplit = (e) => {
    e.preventDefault();
    if (!farmerBatch) return;
    if (splitWeight <= 0 || splitWeight > farmerBatch.totalWeight) {
      alert("Invalid split weight!");
      return;
    }

    const newSplit = {
      id: Date.now(),
      weight: splitWeight,
      retailer: "",
    };

    const updatedSplits = [...splits, newSplit];
    setSplits(updatedSplits);

    const remainingWeight = farmerBatch.totalWeight - splitWeight;
    setFarmerBatch({ ...farmerBatch, totalWeight: remainingWeight });

    saveDistributorBatch(farmerBatch.farmName, newSplit);
    setSplitWeight("");
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <h2>Distributor Batch Management</h2>

        {farmerBatch ? (
          <>
            <p><strong>Farmer:</strong> {farmerBatch.farmName}</p>
            <p><strong>Remaining Weight:</strong> {farmerBatch.totalWeight} kg</p>

            <form onSubmit={handleSplit}>
              <label>Split Weight (kg)</label>
              <input
                type="number"
                value={splitWeight}
                onChange={(e) => setSplitWeight(Number(e.target.value))}
                required
              />
              <button type="submit">Create Split</button>
            </form>

            {splits.length > 0 && (
              <div className="qr-section">
                <h3>Created Splits</h3>
                <ul>
                  {splits.map((s) => (
                    <li key={s.id}>Split {s.id} → {s.weight} kg</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p>No farmer data found. Please register a farmer first.</p>
        )}
      </div>
    </div>
  );
}

export default DistributorEntry;
