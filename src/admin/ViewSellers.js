import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewSellers() {
  const [sellers, setSellers] = useState([]);

  const fetchSellers = async () => {
    try {
      const response = await axios.get(` ${config.url}/viewseller`);
      setSellers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchSellers();
  }, []);

  const deleteSeller = async (username) => {

    if(window.confirm("Are you sure want to delete this recruiter?"))
    {
    try {
      await axios.delete(`http://localhost:2832/deleteseller/${username}`);
      fetchSellers();
    } catch (error) {
      console.error(error.message);
    }
  }
  else
  {
    fetchSellers();
  }

 
}

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sellers</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Pet Type</th>
              <th>Pet Auditorium Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(sellers) && sellers.length > 0 ? (
    sellers.map((seller, index) => (
      <tr key={index}>
        <td>{seller.fullname}</td>
        <td>{seller.pettype}</td>
        <td>{seller.petauditoriumname}</td>
        <td>{seller.username}</td>
        <td>{seller.email}</td>
        <td>{seller.address}</td>
        <td>{seller.contact}</td>
        <td>
          <button onClick={() => deleteSeller(seller.username)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="9">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}
