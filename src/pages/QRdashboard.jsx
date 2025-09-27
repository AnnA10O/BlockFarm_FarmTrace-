import { useState } from 'react'

function QRdashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>QR Dashboard</h1>
      <p>This is a temporary static QR code image.</p>
      <img 
        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=example" 
        alt="Temporary QR Code" 
        style={{ marginTop: '20px' }} 
      />
    </div>
  )
}

export default QRdashboard