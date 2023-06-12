import React, { Component } from 'react';
import Navbar from '../Nav/navbar';
import vd5 from '../Images/vd5.mp4';
import Footer from '../Footer/footer';
import './home.css';
import Home1 from '../Home1/home1';
import s1 from '../Images/s1.jpg';
import mal from '../Images/mal.jpg';
import india from '../Images/india.jpg';
import { FaSearch } from "react-icons/fa";
export default class home extends Component {
  render() {
    return (
        
      <div className='main'>
    <Navbar/>
    <section className='home' id='home'>
      <h1>Bangkok</h1>
    <div className='searchbox'>
<input type='text' className='searchtext' placeholder='Type to search'/>
<FaSearch size={30} color='blue'/>
</div>
   <div>
   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active slide">
      <img src={india}  class="d-block w-100" alt="china"/>
    </div>
    <div class="carousel-item">
      <img src={mal}  class="d-block w-100" alt="india"/>
    </div>
    <div class="carousel-item">
      <img src={s1}  class="d-block w-100" alt="maldivs"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>
</div>
<div className='searchbox'>
<input type='text' className='searchtext' placeholder='Type to search'/>
<FaSearch size={30} color='blue'/>
</div>

</section>



<div className='hm1'><Home1/></div>
<div>
<Footer/>
</div>
  </div>

    )
  }
}
