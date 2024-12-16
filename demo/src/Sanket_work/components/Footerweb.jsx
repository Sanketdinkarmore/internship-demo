import React from 'react'
import { Link } from 'react-router-dom';
import  WhatsAppIcon  from "../assets/icons/whatsapp.svg";
import FacebookIcon from '../assets/icons/facebook.svg'
import Youtube from '../assets/icons/youtube.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Twitter from '../assets/icons/Twitter.svg';
import UpwardArrow from '../assets/icons/Upward Arrow.svg';
import Threads from '../assets/icons/Threads.svg';
import './Footer.css'
const Footerweb = () => {

 const scrolltoTop=()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  });

 }



  return (
    <footer className='footer'>
      <div className='footer-links'>
        <div>
        <h3 className='footer-heading'>ABOUT THE COMPANY</h3>
        <li className="footer-link">
        <Link  to='/about-us'> ABOUT US</Link>
        </li>
        <li className="footer-link">
         <Link to='/about-us'>COMPANY POLICY</Link> 
          </li>
        <li className="footer-link">
        <Link to='/privacy-policy'>PRIVACY POLICY</Link>
        </li>
        <li className="footer-link">
        <Link to='/terms-of-service' > TERMS OF SERVICE</Link>
          </li>
        </div>
        <div>
        <h3 className='footer-heading'>
          SERVICES AND OFFERING
          </h3>
        <li className="footer-link">
         <Link to='/services-page'> SERVICES</Link>
          </li>
        <li className="footer-link">
        <Link to='/Industries-page'>INDUSTRIES WE SERVE</Link> 
          </li>
        <li className="footer-link">
        <Link to='/training-page'>TRAINING</Link> 
          </li>
        </div>
        <div>
        <h3 className='footer-heading'>
          SUPPORT AND CONTACT
          </h3>
        <li className="footer-link">
        <Link to='/contact-page'>  CONTACT US</Link>
          </li>
        <li className="footer-link">
        <Link to='/contact-page'>  FEEDBACK</Link>
          </li>
        </div>
        </div>
        {/* this is the link section  */}
  <div className='footer-bottom-container'>
        <div className='social-icons'>
        <a href="#" className='social-icon'>
          <img src={WhatsAppIcon}/>
        </a>
        <a href="#" className='social-icon'>
          <img src={Instagram}/>
        </a>
        <a href="#" className='social-icon'>
          <img src={FacebookIcon}/>
        </a>
        <a href="#" className='social-icon'>
          <img src={Youtube}/>
        </a>
        <a href="#" className='social-icon'>
          <img src={Twitter}/>
        </a>
        <a href="#" className='social-icon'>
          <img src={Threads}/>
        </a>
        <div className='footer-arrow'>
        <button onClick={scrolltoTop} ><img src={UpwardArrow}  className='up-arrow' alt='Upward Arrow'/>
        </button>
      </div>
        </div>
        <div className='footer-bottom'>
      <p>COPYRIGHT © 2024 RATNAMACE IT SOLUTIONS. ALL RIGHTS RESERVED</p>
     
      </div>
        </div>
      <div className='footer-designed-by'>
        <p>DESIGNED BY - REEYA T. PIMPALE</p>
      </div>


    </footer>
  )
}

export default Footerweb