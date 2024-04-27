import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './customer.css';
import config from '../config';

export default function ViewPetsPosted() 
{
  const [customerData, setCustomerData] = useState("");

  useEffect(() => {
    const storedCustomerData = localStorage.getItem('customer');
    if (storedCustomerData) {
      const parsedCustomerData = JSON.parse(storedCustomerData);
      setCustomerData(parsedCustomerData)
    }
  }, []);

  const [pets, setPets] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  

  const fetchPets = async () => {
    try {
      const response = await axios.get(` ${config.url}/viewpetsposted`);
      setPets(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchPets();
  }); // Remove the dependency array

  const applyPet = async (petid, customeremail) => {
    try 
    {
      const response = await axios.post(` ${config.url}/viewpetsposted`, { petid, customeremail });
      fetchPets();
      setMessage(response.data);
      setError('');
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  }
  

  return (
    <div className="table-container">
      <h3>Posted Pets</h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <table className="pet-table mx-auto" align='center'>
        <thead>
          <tr>
            <th>PETS ID</th>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Deadline</th>
            <th>Posted By</th>
            <th>Posted Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(pets) && pets.length > 0 ? (
            pets.map((pet, index) => (
              <tr key={index}>
                <td>{pet.petid}</td>
                <td>{pet.title}</td>
                <td>{pet.company}</td>
                <td>{pet.location}</td>
                <td>{pet.deadline}</td>
                <td>{pet.seller.fullname}</td>
                <td>{pet.postedtime}</td>
                <td><button className='button' onClick={() => applyPet(pet.petid,customerData.email)}>Apply</button></td>
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