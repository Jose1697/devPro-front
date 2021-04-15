import React from 'react';
import './styles/PageLoading.css';
import Loader from './Loader';
import Navbar from './Navbar'
function loading() {
   return (
      <>
      <Navbar />
      <div className="PageLoading">       
         <Loader/>
      </div>
     </>
    
   );
}

export default loading;
