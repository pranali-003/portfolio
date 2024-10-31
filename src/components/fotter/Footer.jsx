import React from 'react'
import './footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Pranali Nage &bull;  {currentYear}</p>
    </div>
  )
}

export default Footer
