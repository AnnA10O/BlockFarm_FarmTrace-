// FARMER
export function saveFarmerData(farmer) {
  const fakeQR = "FT-FARMER-QR-" + Date.now();
  const farmerWithQR = { ...farmer, qrCode: fakeQR };
  localStorage.setItem("farmerData", JSON.stringify(farmerWithQR));
  return farmerWithQR;
}
export function getFarmerData() {
  const data = localStorage.getItem("farmerData");
  return data ? JSON.parse(data) : null;
}
export function saveFarmerProduct(product) {
  const existing = JSON.parse(localStorage.getItem("farmerProducts")) || [];
  existing.push(product);
  localStorage.setItem("farmerProducts", JSON.stringify(existing));
  return existing;
}

export function getFarmerProducts() {
  return JSON.parse(localStorage.getItem("farmerProducts")) || [];
}
// DISTRIBUTOR
export function saveDistributorData(distributor) {
  const fakeQR = "FT-DISTRIBUTOR-QR-" + Date.now();
  const distributorWithQR = { ...distributor, qrCode: fakeQR };
  localStorage.setItem("distributorData", JSON.stringify(distributorWithQR));
  return distributorWithQR;
}
export function getDistributorData() {
  const data = localStorage.getItem("distributorData");
  return data ? JSON.parse(data) : null;
}

// Batches created by distributor
export function saveDistributorBatch(farmerName, split) {
  const key = "distributorBatches";
  const batches = JSON.parse(localStorage.getItem(key)) || [];
  batches.push({ farmerName, ...split });
  localStorage.setItem(key, JSON.stringify(batches));
}
export function getDistributorBatches() {
  return JSON.parse(localStorage.getItem("distributorBatches")) || [];
}

// RETAILER
export function saveRetailerData(retailer) {
  const fakeQR = "FT-RETAILER-QR-" + Date.now();
  const retailerWithQR = { ...retailer, qrCode: fakeQR };
  localStorage.setItem("retailerData", JSON.stringify(retailerWithQR));
  return retailerWithQR;
}
export function getRetailerData() {
  const data = localStorage.getItem("retailerData");
  return data ? JSON.parse(data) : null;
}
export function saveRetailerEntry(entry) {
  const existing = JSON.parse(localStorage.getItem("retailerEntries")) || [];
  existing.push(entry);
  localStorage.setItem("retailerEntries", JSON.stringify(existing));
  return existing;
}

export function getRetailerEntries() {
  return JSON.parse(localStorage.getItem("retailerEntries")) || [];
}