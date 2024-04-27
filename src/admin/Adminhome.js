import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function Adminhome() {
  const [adminData, setAdminData] = useState("");
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`${config.url}/adminhome`);
      setCounts(response.data);
    } catch (error) {
      setError('Failed to fetch counts');
    }
  };

  return (
    <div>
      {adminData && (
        <div style={{alignContent:"center"}}> 
          <h4>Welcome {adminData.username}</h4>
          {counts ? (
            <div className="row">

             <div className="column">
                <div className="card">
                  <h3>Customers</h3>
                  <p>{counts.customerCount}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Sellers</h3>
                  <p>{counts.sellerCount}</p>
                </div>
              </div>


              <div className="column">
                <div className="card">
                  <h3>Pets</h3>
                  <p>{counts.petCount}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Pet Applicants</h3>
                  <p>{counts.petApplicantCount}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Selected Applicants</h3>
                  <p>{counts.selectedCount}</p>
                </div>
              </div>


              <div className="column">
                <div className="card">
                  <h3>Rejected Applicants</h3>
                  <p>{counts.rejectedCount}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading counts...</p>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}