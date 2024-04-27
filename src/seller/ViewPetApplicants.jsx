import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './seller.css';
import config from '../config';

export default function ViewPetApplicants() {

  const [sellerData, setSellerData] = useState("");
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedSellerData = localStorage.getItem('seller');
    if (storedSellerData) {
      const parsedSellerData = JSON.parse(storedSellerData);
      setSellerData(parsedSellerData)
    }
  }, []);

  const [petApplicants, setPetApplicants] = useState([]);

  const fetchPetApplicants = async () => {
    try 
    {
      const response = await axios.get(` ${config.url}/viewpetapplicants`);
      setPetApplicants(response.data);
    } 
    catch (error) 
    {
      setError(error.response.data);
    }
  }

  useEffect(() => {
    fetchPetApplicants();
  }); 

  const handleStatusChange = async (applicantId, status) => {
    try 
    {
      const response = await axios.post(` ${config.url}/viewpetapplicants`, { applicantId, status });
      fetchPetApplicants();
      setMessage(response.data);
      setError(''); // Set error to ""
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); // Set message to ""
    }
  };

  return (
    <div className="table-container">
        <h3>Pet Applicants</h3>
        {
          message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
        }
        <table className="pet-table mx-auto" align='center'>
            <thead>
                <tr>
                    <th>Applicant ID</th>
                    <th>Pet ID</th>
                    <th>Status</th>
                    <th>Applied Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(petApplicants) && petApplicants.length > 0 ? (
                    petApplicants.map((applicant, index) => (
                        <tr key={index}>
                            <td>{applicant.applicantId}</td>
                            <td>{applicant.petid}</td>

                <td>
                  {applicant.petStatus}
                </td>
                           
                            <td>{applicant.appliedTime}</td>
                            <td>
                              <button className='selected' onClick={() => handleStatusChange(applicant.applicantId,"SELECTED")}>SELECTED</button>
                              <button className='rejected' onClick={() => handleStatusChange(applicant.applicantId,"REJECTED")}>REJECTED</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No Pet Applications found</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);
}