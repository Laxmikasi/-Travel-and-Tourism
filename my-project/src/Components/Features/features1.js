import React from 'react'
import f1 from '../Images/f1.jpg';
import f2 from '../Images/f2.jpg';
import f3 from '../Images/f3.jpg';
import f5 from '../Images/f5.jpg';
import Navbar from '../Nav/navbar';
import f4 from '../Images/f4.jpg';
import f6 from '../Images/f6.jpg';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from "react-icons/ai";
import {BsStarFill} from "react-icons/bs"
import './features1.css';
export default function Features1() {
  return (
    <div>
<Navbar/>
    <div >
<h1 className='heading'>
  <span>P</span>
  <span>A</span>
  <span>C</span>
  <span>K</span>
  <span>A</span>
  <span>G</span>
  <span>E</span>
  <span>S</span>
</h1>




<div class="row row-cols-1 row-cols-md-3 g-4  ">
  <div class="col">
    <div class="card h-100 package">
      <img src={f1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Chinag</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="stars">
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
 <AiOutlineStar size={30} color='orange'/>
</div>
        <div className='price'>$90.00<span>$120.00</span></div>
        </div>
        <div class="card-footer">
   <Link to='/chinag'    > <button class="btn btn-warning"> VISIT & BOOK NOW</button></Link>
      </div>
      </div>
    
  </div>

  <div class="col">
    <div class="card h-100">
      <img src={f3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Punjab</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <div className="stars">
  <  BsStarFill size={25} color='orange' />
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <AiOutlineStar size={30} color='orange'/>
</div>
        <div className='price'>$90.00<span>$120.00</span></div>
      </div>
      <div class="card-footer">
   <Link to='/punjab'    > <button class="btn btn-warning">VISIT & BOOK NOW</button></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 package1">
      <img src={f5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Bali</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className="stars">
  <  BsStarFill size={25} color='orange' />
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <AiOutlineStar size={30} color='orange'/>
</div>
        <div className='price'>$90.00<span>$120.00</span></div>
      </div>
      <div class="card-footer">
   <Link to='/bali'    ><button class="btn btn-warning"> VISIT & BOOK NOW</button></Link>
      </div>
    </div>
  </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
  <div class="col">
    <div class="card h-100 package">
      <img src={f2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Alleppey</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className="stars">
  <  BsStarFill size={25} color='orange' />
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <AiOutlineStar size={30} color='orange'/>
</div>
        <div className='price'>$90.00<span>$120.00</span></div>
        </div>
        <div class="card-footer">
   <Link to='/alleppey'    ><button class="btn btn-warning">VISIT & BOOK NOW</button></Link>
      </div>
      
      
      
      
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={f4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Munnar</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <div className="stars">
  <  BsStarFill size={25} color='orange' />
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <AiOutlineStar size={30} color='orange'/>
</div>
        <div className='price'>$90.00<span>$120.00</span></div>
      </div>
      <div class="card-footer">
  <Link to='/munnar'      ><button class="btn btn-warning">VISIT & BOOK NOW</button></Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 package1">
      <img src={f6} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Uttarakhand</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className="stars">
  <  BsStarFill size={25} color='orange' />
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <  BsStarFill size={25} color='orange'/>
  <AiOutlineStar size={30} color='orange'/>
</div>
        <div className='price'>$90.00<span>$120.00</span></div>
      </div>
      <div class="card-footer">
   <Link to='uttarakhand'     ><button class="btn btn-warning">VISIT & BOOK NOW</button></Link>
      </div>
    </div>
  </div>
</div>



</div>
    </div>
  )
}
