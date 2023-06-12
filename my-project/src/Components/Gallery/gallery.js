import React from 'react';
import './gallery.css'
import g1 from '../Images/g1.jpg';
import g2 from '../Images/g2.jpg';
import g3 from '../Images/g3.jpg';
import g4 from '../Images/g4.jpg';
import g5 from '../Images/g5.jpg';
import g6 from '../Images/g6.jpg';
import g7 from '../Images/g7.jpg';
import g8 from '../Images/g8.jpg';
import g9 from '../Images/g9.jpg';
import g10 from '../Images/g10.jpg';
import g11 from '../Images/g11.jpg';
import g12 from '../Images/g12.jpg';
import Navbar from '../Nav/navbar';
import Footer from '../Footer/footer';
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
 
import LightGallery from "lightgallery/react/Lightgallery.es5";
 


export default function gallery() {
  return (
    <div>
      <Navbar/>
  <h1 className='heading'>
  <span>G</span>
  <span>A</span>
  <span>L</span>
  <span>L</span>
  <span>E</span>
  <span>R</span>
  <span>Y</span>
</h1>
    <div className='gallery' >
      
<div>
<img src={g1} alt="g1.jpg" />
    <p>Golden Temple</p>
   
    </div> 
    <div>
    
      
    <img src={g2} alt="g2.jpg" />
    <p>Munnar</p>
    
    </div>
    <div>
    <img src={g3} alt="g3.jpg" />
    <p>Kashmir</p>
    </div>
    <div>
    <img src={g4} alt="g4.jpg" />
    <p>Kerala</p>
    </div>
    <div>
    <img src={g5} alt="g5.jpg" />
    <p>Munnar</p>
    </div>
    <div>
      
    <img src={g6} alt="g6.jpg" />
    <p>AA</p>
    </div>
    <div>
    <img src={g7} alt="g7.jpg" />
    <p>Kodaikanal</p>
    </div>
    <div>
    <img src={g8} alt="g8.jpg" />
    <p>Mysore</p></div>
    <div>
    <img src={g9} alt="g9.jpg" />
    <p>Shimla</p></div>
    <div>
    <img src={g10} alt="g10.jpg" />
    <p>GGG1</p></div>
    <div>
    <img src={g11} alt="g11.jpg" />
    <p>Madurai</p>
    </div>
    <div>
    <img src={g12} alt="g12.jpg" />
    <p>Waterfall</p>
    </div>
    <LightGallery/>
    </div>

    <Footer/>
    </div>
  )
}
