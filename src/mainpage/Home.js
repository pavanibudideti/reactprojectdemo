import React from 'react';
import './style.css'; 


export default function Home() {
  return (
    <div className="home-container">
      <div className="admin-section">
        <h3>Admin</h3>
        <ul>
          <li>Admin Login</li>
          <li>Change Password</li>
          <li>Add Seller</li>
          <li>View Sellers</li>
          <li>View Customers</li>
          <li>Delete Customer</li>
        </ul>
      </div>
      <div className="seller-section">
        <h3>Seller</h3>
        <ul>
          <li>Seller Login</li>
          <li>Post a New Pet</li>
          <li>View Posted Pets</li>
          <li>View Pet Applicants</li>
          <li>Change Pet Status</li>
        </ul>
      </div>
      <div className="customer-section">
        <h3>Customer</h3>
        <ul>
          <li>Registration</li>
          <li>Customer Login</li>
          <li>View Profile</li>
          <li>Update Profile</li>
          <li>Apply for a Pet</li>
          <li>View Applied Pets</li>
          <li>Check Pet Status</li>

          
        </ul>
      </div>
    </div>
  );
}

