import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddSeller() 
{
  //formData state variable
  const [formData, setFormData] = useState({
    fullname: '',
    pettype: '',
    petauditoriumname: '',
    username: '',
    email: '',
    address: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValue = id === 'fullname' ? value.toUpperCase() : value;
    setFormData({ ...formData, [id]: newValue });
  };

  const changetext = (e) => {
              const txt =  e.target.value.toUpperCase()
              e.target.value = txt
  }


  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(` ${config.url}/addseller`, formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          pettype: '',
          petauditoriumname: '',
          username: '',
          password:'',
          email: '',
          address: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Add Seller</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} onKeyUp={changetext} required />
        </div>
        <div>
          <label>PET TYPE</label>
          <select id="pettype" value={formData.pettype} onChange={handleChange} required>
            <option value="">Select Pet</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="birds">Birds</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label>Pet Auditorium Name</label>
          <input type="text" id="petauditoriumname" value={formData.company} onChange={handleChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="text" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <textarea type="text" id="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label>
          <input type="number" id="contact"  value={formData.contact} pattern="[6789][0-9]{9}"  onChange={handleChange} placeholder="MUST BE 10 DIGITS" required />
          
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}


