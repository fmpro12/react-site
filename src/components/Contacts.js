// Gallery.js
import React from 'react';
import './css/Contacts.css';
const Contacts = () => {
  return (
<div className="contacts">
  <div className="contacts-background">
  <div className="contact-info-inst">
    <a href="https://www.instagram.com/neuro__specialist" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
      Instagram
    </a>
  </div>
  <div className="contact-info-wa">
    <a href="https://wa.me/+972534624777" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i> 
      WhatsApp
    </a>
  </div>
  </div>
</div>
  );
};

export default Contacts;