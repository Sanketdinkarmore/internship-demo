import React from 'react'
import './PrivacyPolicy.css'
import Footerweb from '../components/Footerweb'

const PrivacyPolicy = () => {
  return (
    <>
    <div className='privacy-policy-page'>
    <div className='privacy-header'>
    <h1>Privacy Policy</h1>
    <p>
    Welcome to our Privacy Policy page. Your  privacy is important to us. This policy outlines how we collect, use, and protect your information.
  </p>
    </div>
  
  <div className='privacy-section'>
    <div className='privacy-card'>
    <h2>Information We Collect</h2>
      <p>  We collect personal data to provide better services. This includes information you share
      with us when you interact with our platform.  </p>
    </div>
    <div className='privacy-card'>
    <h2> How We Use Your Information</h2>
      <p>  Your information is used to enhance your experience, deliver personalized content, and
      improve our services. We ensure your data is secure.</p>
    </div>
    <div className='privacy-card'>
    <h2>Cookies and Tracking Technologies</h2>
      <p>
        We use cookies to track your interaction with our website. You can disable cookies in
        your browser, but some features may not work as intended.
      </p>

    </div>
    <div className='privacy-card'>
    <h2>Your Rights</h2>
      <ul>
        <li>Access your data</li>
        <li>Request data deletion</li>
        <li>Opt-out of targeted advertising</li>
      </ul>  
    </div>
    <div className='privacy-card'>
    <h2> Contact Us</h2>
      <p>If you have any questions, contact us at {' '}
      <a href="mailto:theratnamaceitsolutions@gmail.com"> theratnamaceitsolutions@gmail.com</a>. 
      </p>
    </div>
    </div>
   
  <Footerweb/>
  </div>
    
    </>
  )
}

export default PrivacyPolicy