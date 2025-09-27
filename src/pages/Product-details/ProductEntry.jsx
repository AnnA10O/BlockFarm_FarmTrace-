import React, { useState } from "react";
import { saveFarmerProduct, getFarmerProducts } from "../../utils/Storage.js";

function ProductEntry() {
  const [product, setProduct] = useState({
    cropHarvestDate: "",
    weightSold: "",
    soldDate: "",
    price: "",
    qualityGrade: "",
  });

  const [products, setProducts] = useState(getFarmerProducts());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = saveFarmerProduct(product);
    setProducts(updated);
    alert("Product saved!");
    setProduct({ cropHarvestDate: "", weightSold: "", soldDate: "", price: "", qualityGrade: "" });
  };

  return (
    <div className="farmer-container">
      <div className="farmer-card">
        <h2>Enter Product Details</h2>
        <form onSubmit={handleSubmit}>
          <label>Harvest Date</label>
          <input type="date" name="cropHarvestDate" value={product.cropHarvestDate} onChange={handleChange} required />

          <label>Weight Sold (kg)</label>
          <input type="number" name="weightSold" value={product.weightSold} onChange={handleChange} required />

          <label>Date Sold</label>
          <input type="date" name="soldDate" value={product.soldDate} onChange={handleChange} required />

          <label>Price (₹)</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} required />

          <label>Quality Grade</label>
          <select name="qualityGrade" value={product.qualityGrade} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="A">A (Excellent)</option>
            <option value="B">B (Good)</option>
            <option value="C">C (Average)</option>
            <option value="D">D (Poor)</option>
          </select>

          <button type="submit">Save</button>
        </form>

        {products.length > 0 && (
          <div className="qr-section">
            <h3>Saved Products</h3>
            <ul>
              {products.map((p, idx) => (
                <li key={idx}>
                  {p.cropHarvestDate} – {p.weightSold}kg – {p.price}₹ – Grade {p.qualityGrade}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductEntry;
