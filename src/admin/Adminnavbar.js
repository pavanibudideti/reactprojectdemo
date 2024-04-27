import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './admin.css'



import Adminhome from './Adminhome';
import ViewCustomers from './ViewCustomers';
import AddSeller from './AddSeller';
import ViewSellers from './ViewSellers';
import ChangeAdminPwd from './ChangeAdminPwd';
import ViewCustomerProfile from './ViewCustomerProfile';



export default function AdminnavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/changeadminpwd">Change Password</Link></li>
          <li className="dropdown">
            <Link>Customer</Link>
            <div className="dropdown-content">
              <Link to="/viewcustomers">View Customers</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link>Seller</Link>
            <div className="dropdown-content">
                 <Link to="/addseller">Add Seller</Link>
                 <Link to="/viewsellers">View Sellers</Link>
            </div>
          </li>
          <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<Adminhome />} exact />
        <Route path="/viewcustomers" element={<ViewCustomers />} exact />
        <Route path="/addseller" element={<AddSeller />} exact />
        <Route path="/viewsellers" element={<ViewSellers/>} exact />
        <Route path="/changeadminpwd" element={<ChangeAdminPwd/>} exact />
        <Route path="/viewcustomerprofile/:email" element={<ViewCustomerProfile/>} exact />
      </Routes>
    </div>
  );
}
