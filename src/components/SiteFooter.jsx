import React from 'react';
import { Mail, Phone } from 'lucide-react';

function SiteFooter({ onShowDisclaimer }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h3>Adv. Shivam Dundappa Mali</h3>
        <p>Committed to providing high-caliber legal counsel with transparency and precision.</p>
        <div className="footer-icons">
          <a href="tel:+917620348058" aria-label="Call office"><Phone size={18} /></a>
          <a href="mailto:advmalishivam@gmail.com" aria-label="Email office"><Mail size={18} /></a>
        </div>
      </div>
      <div>
        <h4>Office Locations</h4>
        <a className="footer-location" href="https://www.google.com/maps/search/?api=1&query=103%20Clover%20Center%20A%20Wing%20Moledina%20Road%20Near%20J.J%20Garden%20Camp%20Pune%20Maharashtra%20411001" target="_blank" rel="noreferrer">Pune, Maharashtra</a>
        <a className="footer-location" href="https://www.google.com/maps/search/?api=1&query=Rajgir%20Chambers%20Office%2067%208th%20Floor%20Shahid%20Bhagat%20Singh%20Road%20Opp%20Old%20Custom%20House%20Mumbai%20400001" target="_blank" rel="noreferrer">Mumbai, Maharashtra</a>
        <button onClick={onShowDisclaimer}>Disclaimer</button>
      </div>
      <div>
        <h4>Contact</h4>
        <a className="footer-highlight" href="tel:+917620348058">+91 7620348058</a>
        <a className="footer-highlight" href="mailto:advmalishivam@gmail.com">advmalishivam@gmail.com</a>
      </div>
      <div className="footer-bottom">(c) 2026 Adv. Shivam Dundappa Mali. All rights reserved.</div>
    </footer>
    
  );
}

export default SiteFooter;
