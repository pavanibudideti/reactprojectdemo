import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './customer.css';


import CustomerHome from './CustomerHome';
import CustomerProfile from './CustomerProfile';
import ViewPetsPosted from './ViewPetsPosted';
import ViewAppliedPets from './ViewAppliedPets';
import UpdateJSProfile from './UpdatedJSProfile';

export default function CustomerNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isCustomerLoggedIn');
    localStorage.removeItem('customer');

    navigate('/customerlogin');
    window.location.reload()
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/customerhome">Home</Link></li>
          <li className="dropdown">
            <Link>Profile</Link>
            <div className="dropdown-content">
            <Link to="/customerprofile">View Profile</Link>
            <Link to="/updatecustomerprofile">Update Profile</Link>
            </div>
          </li>
          <li><Link to="/viewpetsposted">View Pets</Link></li>
          <li><Link to="/viewappliedpets">Applied Pets</Link></li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/customerhome" element={<CustomerHome/>} exact />
        <Route path="/customerprofile" element={<CustomerProfile/>} exact />
        <Route path="/updatecustomerprofile" element={<UpdateJSProfile/>} exact />
        <Route path="/viewpetsposted" element={<ViewPetsPosted/>} exact />
        <Route path="/viewappliedpets" element={<ViewAppliedPets/>} exact />
      </Routes>
    </div>
  );
}