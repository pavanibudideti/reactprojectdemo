import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './seller.css'
import SellerHome from './SellerHome';
import SellerProfile from './SellerProfile';
import AddPet from './AddPet';
import ViewPets from './ViewPets';
import ViewPetApplicants from './ViewPetApplicants';


export default function SellerNavBar() {
const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isSellerLoggedIn');
    localStorage.removeItem('seller');

    navigate('/sellerlogin');
    window.location.reload()
  };

  return (
    <div>

    <nav>
     <ul>
     <Link to="/sellerhome">Home</Link>
     <Link to="/sellerprofile">Seller Profile</Link>
     <li className="dropdown">
            <Link>Pets</Link>
            <div className="dropdown-content">
            <Link to="/addpet">Post a Pet</Link>
            <Link to="/viewpets">View Pets</Link>
            </div>
    </li>
    <Link to="/viewpetapplicants">Pet Applicants</Link>
     <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
     </ul>
     </nav>

         <Routes>
         <Route path="/sellerhome" element={<SellerHome/>} exact/>
         <Route path="/sellerprofile" element={<SellerProfile/>} exact/>
         <Route path="/addpet" element={<AddPet/>} exact/>
         <Route path="/viewpets" element={<ViewPets/>} exact/>
         <Route path="/viewpetapplicants" element={<ViewPetApplicants/>} exact/>
        </Routes>

    </div>
  )
}