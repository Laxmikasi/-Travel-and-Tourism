import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pi2 from '../Images/pi2.jpg';
import pi5 from '../Images/pi5.jpg';
import pi4 from '../Images/pi4.jpg';
import pi8 from '../Images/pi8.jpg';
import pi9 from '../Images/pi9.jpg';
import pi6 from '../Images/pi6.jpg';
import Footer from '../Footer/footer';
import './review.css';
import { AiOutlineStar } from "react-icons/ai";
import Navbar from '../Nav/navbar';


export default function review() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Navbar/>
  <h1 className='heading'>
  <span>R</span>
  <span>E</span>
  <span>V</span>
  <span>I</span>
  <span>E</span>
  <span>W</span>
</h1>
<div className="container">

<div className="row">
  <div className="col-12 col-md-12">
    
    
    <Carousel responsive={responsive}>
  
  <div className='box'>
  <img src={pi2} alt=""/>
    <h3>john deo</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>
    <button className='btn btn-primary'>review</button>
    <div className="stars">
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>        
  
</div>
  </div>
  <div className='box'>
  <img src={pi5} alt="pi5"/>
    <h3>devid dell </h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error debitis sint totam neque</p>
    <button className='btn btn-primary'>review</button>
<div className="stars">
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>        
 </div> 
  </div>
  <div className='box'><img src={pi4} alt="pi4"/>
    <h3>rose bush</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error debitis sint totam neque</p>
    <button className='btn btn-primary'>review</button>
<div className="stars">
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>        
  
</div>
</div>
  <div className='box'>
  <img src={pi8} alt="pi8"/>
    <h3>janes gail</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error debitis sint totam neque</p>
    <button className='btn btn-primary'>review</button>
<div className="stars">

<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>        
<AiOutlineStar/> 
</div>

  </div>
  
  <div className='box'>
  <img src={pi9} alt="pi9"/>
    <h3>janes gail</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error debitis sint totam neque</p>
    <button className='btn btn-primary'>review</button>
<div className="stars">

<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>        
<AiOutlineStar/> 
</div>
  </div>
  <div className='box'>
  <img src={pi6} alt="pi6"/>
    <h3>janes gail</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error debitis sint totam neque</p>
    <button className='btn btn-primary'>review</button>
<div className="stars">

<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>
<AiOutlineStar/>        
<AiOutlineStar/> 
</div> 
  </div>
  
  
  
</Carousel>
</div>
</div>
</div>
<Footer/>
    </div>
    
  )
}
