import React from 'react'
import './footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Pranali Nage &bull;  {currentYear}</p>
    </footer>
  )
}

export default Footer
