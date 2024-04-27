import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './customer.css';
import config from '../config';

export default function ViewAppliedPets() {
    const [customerData, setCustomerData] = useState("");
    const [petApplicants, setPetApplicants] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const storedCustomerData = localStorage.getItem('customer');
        if (storedCustomerData) {
            const parsedCustomerData = JSON.parse(storedCustomerData);
            setCustomerData(parsedCustomerData);
        }
    }, []); // Empty dependency array ensures it runs only once on mount

    useEffect(() => {
        if (customerData) {
            fetchPetApplicants();
        }
    }); 

    const fetchPetApplicants = async () => {
        try {
            const response = await axios.get(` ${config.url}/viewappliedpets`);
            setPetApplicants(response.data);
        } catch (error) {
            setError(error.response.data);
        }
    }

    return (
        <div className="table-container">
            <h3>Pet Application Status</h3>
            {error && <h4 align="center" style={{ color: "red" }}>{error}</h4>}
            <table className="pet-table mx-auto" align='center'>
                <thead>
                    <tr>
                        <th>Applicant ID</th>
                        <th>Pet ID</th>
                        <th>Status</th>
                        <th>Applied Time</th>
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
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No Pets Applications found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
