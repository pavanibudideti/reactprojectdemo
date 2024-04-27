import React from 'react';


export default function Contact() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px' }}>
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please feel free to contact us:</p>
        <ul>
          <li>Email: info@loveablepaws.com</li>
          <li>Phone: +91 22 1234 5678</li>
          <li>Address: 502355 Pet Lover's Lane, Vijayawada, Andhra Pradesh, ZIP</li>
        </ul>
        <p>We are available during business hours and look forward to hearing from you!</p>
      </div>
    </div>
  );
}
