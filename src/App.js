import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './mainpage/MainNavBar';
import AdminnavBar from './admin/Adminnavbar';
import CustomerNavBar from './customer/CustomerNavBar';
import SellerNavBar from './seller/SellerNavBar';

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false); //initially the value is false
  const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    const customerLoggedIn = localStorage.getItem('isCustomerLoggedIn') === 'true';
    const sellerLoggedIn = localStorage.getItem('isSellerLoggedIn') === 'true';
    
    setIsAdminLoggedIn(adminLoggedIn);
    setIsCustomerLoggedIn(customerLoggedIn);
    setIsSellerLoggedIn(sellerLoggedIn);
  }, []);

  const onAdminLogin = () => {
    localStorage.setItem('isAdminLoggedIn', 'true');
    setIsAdminLoggedIn(true);
  };

  const onCustomerLogin = () => {
    localStorage.setItem('isCustomerLoggedIn', 'true');
    setIsCustomerLoggedIn(true);
  };

  const onSellerLogin = () => {
    localStorage.setItem('isSellerLoggedIn', 'true');
    setIsSellerLoggedIn(true);
  };

  return (
    <div className="App">
      <h3 align="center">PET ADAPTION AND ACCESSORIES MANAGEMENT SYSTEM </h3>
      <Router>
        {isAdminLoggedIn ? (
         <AdminnavBar/>
        ) : isCustomerLoggedIn ? (
          <CustomerNavBar />
        ) : isSellerLoggedIn ? (
          <SellerNavBar />
        ) : (
          <MainNavBar
            onAdminLogin={onAdminLogin} //the above three are props 
            onCustomerLogin={onCustomerLogin}
            onSellerLogin={onSellerLogin}
          />
        )}
      </Router>
    </div>
  );
}
