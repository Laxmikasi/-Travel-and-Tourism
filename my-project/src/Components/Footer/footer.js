import React from 'react'
import './footer.css'
import { AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <div className='footer'>
       <div className='top'>
       <div>
        <h1>Travel</h1>
        <h5>choose your favourite destination</h5>
       </div>
        
       </div>

       <div className='bottom'>
       <div>
        <h4>Poject</h4>
        <Link active to='/review'>Review</Link>
        <Link active to='/features1'>Packages</Link>
        <Link active to='/gallery'>Gallery</Link>
        <Link active to='/contact'>Contact Us</Link>
       </div>
       <div>
        <h4>Community</h4>
        <a href='https://www.facebook.com'>Facebook</a>
        <a href='https://www.linkedin.com'>linkedin</a>
        <a href='https://www.instagram.com'>instagram</a>
        <a href='https://www.twitter.com'>Twitter</a>
       </div>
       <div>
        <h4>Help</h4>
        <a href='/'>Support</a>
        <a href='/'>Troubleshooting</a>
        <a href='/'>Contact Us</a>
        </div>
       <div>
        <h4>Others</h4>
        <a href='/'>Terms of Service</a>
        <a href='/'>Privacy Policy</a>
        <a href='/'>License</a>
       </div>
       <div>
       <a href='https://www.facebook.com'>
          <AiFillFacebook size="40px"/>
        </a>
        <a href='https://www.instagram.com'>
        <AiFillInstagram size="40px"/> 
        </a>
        <a href='https://www.linkedin.com'>
          <AiFillLinkedin size="40px"/>
        </a>
        <a href='https://www.twitter.com'>
          <BsTwitter size="40px"/>
        </a>
        </div>
       </div>
       </div>
       
  
  )
}
