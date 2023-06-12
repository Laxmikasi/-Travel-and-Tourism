import React from 'react'
import h2 from '../Images/h2.jpg';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import './home1.css';
export default function home1() {
  return (
    <div className="home1">
    <div className="dv1">
        <h5>Travel & Tourism</h5><hr className='blue'/>
<ul>
    <li>Places</li><hr />
    <li>Modes of Tavel</li><hr />
    <li>Approved Agents</li><hr />
</ul>


    </div>
    <div className="dv2">
    <h3>Travel and Tourism</h3>
<img src={h2} alt="h2.jpg"/>

<p>
Travel and tourism is the largest service industry in India. It provides heritage, cultural, medical, business and sports tourism. The main objective of this sector is to develop and promote tourism, maintain competitiveness of India as tourist destination and improve and expand existing tourism products to ensure employment generation and economic growth. In this section, we provide information about various tourist destinations, modes of travel, accommodation and approved travel agents.

</p>

<button className='btn btn-primary'>services</button>
<button className='btn btn-primary'>schemes</button>
<button className='btn btn-primary'>open Data</button>
<div>

</div>
<div className='arrow'>
<MdKeyboardDoubleArrowRight/><span>Online Booking for Ladakh Hell Servies ladakh</span><br></br>
<MdKeyboardDoubleArrowRight/><span>Apply for Helicopter Yatra To Shri kedarnath Dham</span><br></br>
<MdKeyboardDoubleArrowRight/><span>Upload document/modify documents in punjab</span><br></br>
<MdKeyboardDoubleArrowRight/><span>Apply online Char Dham Yatra and Hemkund Sahib Registation,Uttarakhand</span><br></br>
<MdKeyboardDoubleArrowRight/><span>Apply online Shri badarinath & Kedarnath Dham Yatra,Uttarakhand</span><br></br>
<MdKeyboardDoubleArrowRight/><span>Kailash ManasarovarYarta-How to Reach ,Uttrakhand</span><br></br>
</div>

    </div>
    <div className='dv3'>
        <div className='first'>
     <h5> <AiOutlineEyeInvisible size={35} color='blue'/><span className='icon'>Most Viewed</span></h5><hr className='blue'/>
        <ul>
            <li>Official website of Department of Tourism of Odisha</li><hr/>
            <li>Official website of Rajasthan Tourism Department</li><hr/>
            <li> Send suggestions and feedback to Rajasthan Tourism</li><hr/>
            <li>District maps of Tamil Nadu</li><hr/>
            <li>Website of Tamil Nadu Tourism Development Corporation</li><hr/>
        </ul>

</div>
<div className='second'>
   <h5><TfiAnnouncement  size={35} color='blue'/><span className='icon'>What's New</span></h5><hr className='blue'/>
<ul>
  <li>Jammu and Kashmir lakes informatio</li><hr/> 
  <li>Websites of Nabakalebara Festival of Odisha</li><hr/>
  <li>Kallash Manasarovar Yatra</li><hr/>
  <li>E-Book of Ministry of Tourism </li><hr/>
  <li>Website of Bihar Tourism</li><hr/>
</ul>

</div>
    </div>

</div>




  )
}
