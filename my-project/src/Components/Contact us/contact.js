
import { FaHome } from "react-icons/fa";
import{FaEnvelope} from "react-icons/fa";
import{BsTelephoneXFill} from "react-icons/bs";
import './contact.css';
import Navbar from '../Nav/navbar';
import Footer from '../Footer/footer';
import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name,mobilenumber,email, password, message } = e.target.elements;
    let details = {
      name: name.value,
      mobilenumber:mobilenumber.value,
      email: email.value,
      password:password.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3002/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

    return(
      
<div className='contact' id='contact'>
  <Navbar/>
  
<h1 className='heading'>
  <span>C</span>
  <span>O</span>
  <span>N</span>
  <span>T</span>
  <span>A</span>
  <span>C</span>
  <span>T</span>
</h1>

<div className="container c">
        <div className="row r1">
          <div className="col-12 col-md-12">
<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.77027536353!2d77.51560167382866!3d12.922481215955754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e21c103985b%3A0x7af7b0258b8258fa!2sMatrical%20Technologies!5e0!3m2!1sen!2sin!4v1683559521054!5m2!1sen!2sin" 
width="100%" height="250"  style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<div className='row r2'>
<div className="col-12 col-md-6">
  <div className='contact-info'>
<div className='bx'>
  <h3><FaHome/>Address</h3>
  <p>Rajarajeshwari Nagar,<br/>
  Bengaluru , <br></br>
  Karnataka  560098</p>
</div>
<div className='bx'>
  <h3><FaEnvelope/>email</h3>
  <p>matrical@gmail.com</p>
</div>
<div className='bx'>
  <h3><BsTelephoneXFill/>phone</h3>
  <p>9036686725</p>
</div>
</div>
</div>

        
  <div className="col-12 col-md-6">
  <form className='f2' onSubmit={handleSubmit}>
    <h3>CONTACT FORM</h3>
    
      
      <input type="text"name="name" placeholder="full name" required />
      <input type="mobile number" name="mobilenumber" placeholder='mobile number' required />
      <input type="email" name="email"placeholder="email" required />
      <input type="password" name="password" placeholder='password'required />
    
    
    <textarea className='textarea'id="ta"cols="30"rows="5" name="message" placeholder="message" required></textarea>
    <button type="submit" className="button">{status}</button>
  </form>

</div>
</div>
</div>
</div>


  </div>
  <Footer/>
</div>


    
  )
}
export default Contact