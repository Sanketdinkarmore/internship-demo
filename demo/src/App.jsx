import React from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
import Footerweb from './components/Footerweb';
 import PrivacyPolicy from './pages/PrivacyPolicy';
 import TermsOfService from './pages/TermsOfService';
function App() {

   //this is used to get current location object
  const location=useLocation();
  
  // here you can define routes where the footer should not be displayed because the footer component  is already  added into the pages like about us home page and other so add the routes like privay policy and terms of service pages routes
 const noFooterRoutes=['/privacy-policy','/terms-of-service'];

  return (
    <>
    <Routes>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/terms-of-service' element={<TermsOfService/>}/>

    </Routes>
     
     
    {!noFooterRoutes.includes(location.pathname) && <Footerweb/>}

    </>
  );

}
export default App;
