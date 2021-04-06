import React from 'react';
import Navbar from '../components/Navbar'
import EmprendedorList from '../components/EmprendedorList'
import './styles/expert.css';
class Emprendedor extends React.Component{
   render(){
       return(
         <div>
            
                <Navbar />
               <div>
               <EmprendedorList />
               </div>
						
         </div>
       )
   }
}


export default Emprendedor;