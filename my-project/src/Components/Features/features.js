import React from 'react';
import f1 from '../Images/f1.jpg';
import f2 from '../Images/f2.jpg';
import f3 from '../Images/f3.jpg';
import f4 from '../Images/f4.jpg';
import f6 from '../Images/f6.jpg';
import f7 from '../Images/f7.jpg';
import './features.css';
import Navbar from '../Nav/navbar';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';
export default function features() {
  
  
  return (
   <div>
    <Navbar/>
    <div >
<h1 className='heading'>
  <span>F</span>
  <span>E</span>
  <span>A</span>
  <span>T</span>
  <span>U</span>
  <span>R</span>
  <span>E</span>
  <span>S</span>
</h1>

<div className='container'>
       <div className='container mt-3'>
        <div className='row'>
          <div className=' col-12 col-md-4 '>
            <div className='card '>
              <div className='card-body h-100'>
               <img src={f3} alt='tour place 1.jpg' className='img'></img>
               <h2>Chiang Rai</h2>
               <p>Chiang Rai is a my city city in northern Thailand, in the mountainous province of the same name. They city is near the borders of Laos and Myanmar (formerly Burma). </p>
            <Link to='/chinag'  > <button className='btn btn-primary'>Visit Now</button></Link>
              </div>
            </div>
          </div>
  
  
        </div>
       </div>

       <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <div className='card'>
              <div className='card-body h-100'>
               <img src={f7} alt='tour place 2.jpg' className='img'></img>
               <h2>Punjab</h2>
               <p>Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara </p>
          <Link to='/punjab'  >  <button className='btn btn-primary'>Visit Now</button></Link>
              </div>
            </div>
          </div>
        </div>
       </div>

       <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <div className='card'>
              <div className='card-body h-100'>
               <img src={f1} alt='tour place 3.jpg' className='img'></img>
               <h2>Alleppey</h2>
               <p>Alleppey is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters</p>
          <Link to ='/alleppey'  >  <button className='btn btn-primary'>Visit Now</button></Link>
              </div>
            </div>
          </div>
        </div>
       </div>
       

       

       <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <div className='card'>
              <div className='card-body h-100'>
               <img src={f6} alt='tourist place 3.jpg' className='img'></img>
               <h2>Munnar</h2>
               <p>Munnar rrr is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite,</p>
           <Link to='/munnar'  > <button className='btn btn-primary'>Visit Now</button></Link>
              </div>
            </div>
          </div>
        </div>
       </div>

       <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <div className='card'>
              <div className='card-body h-100'>
               <img src={f2} alt='tourist place 3.jpg' className='img'></img>
               <h2>Bali</h2>
               <p>Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands of the Sunda Shelf.</p>
         <Link to='/bali'>     <button className='btn btn-primary'>Visit Now</button></Link>
              </div>
            </div>
          </div>
        </div>
       </div> 
    

    <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-4 col-12'>
            <div className='card'>
              <div className='card-body h-100'>
               <img src={f4} alt='tourist place kollam.jpg' className='img'></img>
               <h2>Kollam</h2>
               <p>Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub.</p>
          <div className='card-footer'>
          <Link to='/uttarakhand'>  <button className='btn btn-primary'>Visit Now</button></Link>
              
              </div>
              </div>
            </div>
          </div>
        </div>
       </div>

       
       
    </div>
    </div>
<Footer/>
  </div>
  
  );
}
