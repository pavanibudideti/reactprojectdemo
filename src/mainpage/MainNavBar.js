import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import './style.css'
import CustomerLogin from './../customer/CustomerLogin';
import Registration from './../customer/Registration';
import Contact from './Contact';
import AdminLogin from '../admin/AdminLogin';
import SellerLogin from '../seller/SellerLogin';
import PageNotFound from './PageNotFound';



export default function MainNavBar({ onAdminLogin,onCustomerLogin,onSellerLogin }) 
{
  return (
    <div>
       
       <nav>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/registration">Registration</Link>
            <li className="dropdown">
            <Link>Login</Link>
            <div className="dropdown-content">
              <Link to="/customerlogin">Customer Login</Link>
              <Link to="/sellerlogin">Seller Login</Link>
              <Link to="/adminlogin">Admin Login</Link>
            </div>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>


     <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/customerlogin" element={<CustomerLogin onCustomerLogin={onCustomerLogin}/>} exact />
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} exact />
        <Route path="/sellerlogin" element={<SellerLogin onSellerLogin={onSellerLogin}/>} exact />
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="*" element={<PageNotFound/>} exact />
       
     </Routes>

    </div>
  );
}