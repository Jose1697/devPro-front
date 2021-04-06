import React from 'react';
import Navbar from './Navbar'
import './styles/PageLoading.css';
import Loader from './Loader';

function loading() {
  return (
     <div>

         <Navbar/>
            <div className="PageLoading">
            
            </div>
     </div> 
    
  );
}

export default loading;
