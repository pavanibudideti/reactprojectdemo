import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './seller.css';
import config from '../config';

export default function ViewPets() {

  const [sellerData, setSellerData] = useState("");

  useEffect(() => {
    const storedSellerData = localStorage.getItem('seller');
    if (storedSellerData) {
      const parsedSellerData = JSON.parse(storedSellerData);
      setSellerData(parsedSellerData)
    }
  }, []);

  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const response = await axios.get(` ${config.url}/viewpets`);
      setPets(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchPets();
  }); 

  return (
    <div className="table-container">
      <h3>Posted Pets</h3>
      <table className="pet-table mx-auto" align='center'>
        <thead>
          <tr>
            <th>PETS ID</th>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Posted Time</th>
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
                <td>{pet.postedtime}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}