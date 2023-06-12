import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import log1 from '../Images/log1.jpg';
export default function Navbar() {
  return (

  
      
    <div className='ul-nav'>
      <img src={log1} alt="logo" className='logo'/>
      <h5> LOGSS TRAVEL  AND TOURISM </h5> 
      <nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active ank" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ank"  to="/features1">Packages</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ank" to="/book">Book</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ank"  to="/gallery">Gallery</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ank" to ="/review">Review</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link active ank" to ="/contact">Contact us</Link>
        </li> 
        
        
      </ul>
    </div>
  </div>
</nav>



<div className="icons">
  <i className="fas fa-search"id="search-btn"></i>
  <i className="fas fa-user" id="login-btn"></i>
  </div>
  
</div>



  );
}
