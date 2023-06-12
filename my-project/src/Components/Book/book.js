//import React, { Component } from 'react';
import './book1.css';
import ipi1 from '../Images/ipi1.jpg';
import Navbar from '../Nav/navbar';
import Footer from '../Footer/footer';
import axios from 'axios';
import React, { useState } from 'react';

export default function Book ()  {
  const [formData, setFormData] = useState({
    place: '',
    howmany: '',
    arrival: '',
    leaving: '',
  
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBooking();
  }
  const createBooking = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:3001/booking', formData);
      console.log(response);
      alert('Your Booking is Successful');
      setError('');
    } catch (error) {
      console.error(error);
      alert('Error submitting booking');
      setError('Internal Server Error');
    } finally {
      setSubmitting(false);
    }
  };
   return (
    <div>
      <div>
        <Navbar/>
      <section className='book' id='book'>
        <h1 className='heading'>
        <span>B</span>
        <span>O</span>
        <span>O</span>
        <span>K</span>
        <span className='space'></span>
        <span>N</span>
        <span>O</span>
        <span>W</span>
        </h1>
        <div className='row'>
          <div className='col-sm-12 col-md-6 imagebox'>
          <div className='image'>
            <img src={ipi1} alt="pi1" className='bookimage'/>
         </div>
         </div>
        
         <div className='col-sm-12 col-md-6'>
         <form className='f1'  onSubmit={handleSubmit}>
          <div className='formgroup'>
            <h4>where to</h4>
            <input 
            type="text" 
            name="place" 
            id="place"
            value={formData.place}
             placeholder='Place Name' 
             required 
             onChange={handleChange}
             data-aos="fade-right"/>
            </div>
            <div className='formgroup'>
            <h4>how many</h4>
            <input 
            type="number" 
            name="howmany" 
            id="number"
            value={formData.howmany} 
            placeholder='Number of Guests' 
            required 
            onChange={handleChange}
            data-aos="fade-right"
            data-aos-delay="200"/>
            </div>
            <div className='formgroup' >
            <h4>arrivals</h4>
            <input 
            type="date"
             name="arrival" 
             id="date1"
             value={formData.arrival} 
             
             required 
             onChange={handleChange}
             data-aos="fade-right"
            data-aos-delay="400"/>
            </div>
            <div className='formgroup'>
            <h4>leaving</h4>
            <input 
            type="date" 
            name="leaving" 
            id="date2" 
            value={formData.leaving} 
            required 
            


            onChange={handleChange}
            data-aos="fade-right"
            data-aos-delay="500"
            />
            </div>
            <div className='formgroup'>
            <button type="submit"  disabled={submitting} data-aos="fade-up" className='bb'>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p>{error}</p>}
            </div>
            </form>
            </div>
            </div>
            
            
        
</section>
    </div>
    <Footer/>
    </div>
  )
}
