import React, { useState,useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddPet() {

    const [sellerData, setSellerData] = useState("");

    useEffect(() => {
        const storedSellerData = localStorage.getItem('seller');
        if (storedSellerData) {
          const parsedSellerData = JSON.parse(storedSellerData);
          setSellerData(parsedSellerData)
        }
      }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    roles: [], 
    location: '',
    pettype: '', 
    requirements: '',
    email: '',
  });

  // message state variable
  const [message, setMessage] = useState('');
  // error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRolesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, roles: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(` ${config.url}/addpet`, { ...formData, seller: sellerData, company:sellerData.company });
      if (response.status === 200) {
        setFormData({
          title: '',
          description: '',
          roles: [],
          location: '',
          pettype: '',
          requirements: '',
          email: '',
          seller: ''
        });
      }
      setMessage(response.data);
      setError("");
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  

  return (
    <div>
      <h3 align="center"><u>Post a New Pet</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" id="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Roles</label>
          <select id="pet breeds" value={formData.roles} onChange={handleRolesChange} multiple required>
            <option value="dog breed">Dog Breed</option>
            <option value="cat breed">Cat Breed</option>
            <option value="bird breed">Bird Breed</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <label>Pet Type</label>
          <select id="pettype" value={formData.pettype} onChange={handleChange} required>
            <option value="">---Select---</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Birds">Birds</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Requirements</label>
          <textarea id="requirements" value={formData.requirements} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
}