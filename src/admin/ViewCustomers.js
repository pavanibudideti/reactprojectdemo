import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import { useNavigate } from 'react-router-dom';
import './admin.css';

export default function ViewCustomers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);


  const fetchCustomers = async () => {
    try {
      const response = await axios.get(` ${config.url}/viewcustomers`);
      setCustomers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = async (email) => {
    try {
      await axios.delete(`http://localhost:2832/deletecustomer/${email}`);
      fetchCustomers();
    } catch (error) {
      console.error(error.message);
    }
  }

  const viewCustomer = async (email) => {
    try 
    {
      navigate(`/viewcustomerprofile/${email}`)
      window.location.reload()
    } 
    catch (error) 
    {
      console.error(error.message);
    }
  }

  return (
    <div>
      <h1 align="center">Customers</h1>
      <table border={1} align="center" style={{ width: 'auto', height: 'auto'}}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(customers) && customers.length > 0 ? (
    customers.map((customer, index) => (
      <tr key={index}>
        <td>{customer.fullname}</td>
        <td>{customer.gender}</td>
        <td>{customer.email}</td>
        <td>{customer.location}</td>
        <td>{customer.contact}</td>
        <td>
                  <button onClick={() => viewCustomer(customer.email)} className='button'>View</button>
                  <button onClick={() => deleteCustomer(customer.email)} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" align='center'>Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}