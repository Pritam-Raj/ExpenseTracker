import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text-muted">Trusted by</p>
        <div className="logos">
          <img src="citibank-logo.svg" alt="Citibank" />
          <img src="dbs-logo.svg" alt="DBS" />
          <img src="bank-of-america-logo.svg" alt="Bank of America" />
          <img src="hsbc-logo.svg" alt="HSBC" />
          <img src="axion-logo.svg" alt="Axion" />
          <img src="chase-logo.svg" alt="Chase" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
