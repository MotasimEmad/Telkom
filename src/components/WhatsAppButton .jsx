// WhatsAppButton.js

import React from 'react';
import '../WhatsAppButton.css';
import whatsappIcon from '../assets/whatsapp.png';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/whatsappphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
        aria-label="WhatsApp Chat"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp Icon"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
