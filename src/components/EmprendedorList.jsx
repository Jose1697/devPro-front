import React from 'react';
import './styles/expertList.css';

class EmprendedorItemList extends React.Component{
   render(){
       return(
          <div className="BadgesListItem">

            <img
              className="BadgesListItem__avatar"
              src={this.props.expert.usuario.photo}
              alt="experto"
            />
    
            <div className="datos">
              <strong>
                {this.props.expert.usuario.first_name} {this.props.expert.usuario.last_name}
              </strong>
              <br />{this.props.expert.usuario.email}
              <br />{this.props.expert.descripcion_experto}
            </div>
          </div>
       )
   }
}

class EmprendedorList extends React.Component{
  
  render(){
      return(
    
       <div >
         <br/>
         {this.props.lista.map(experto => {
           return (
             <div id="caja1" key={experto.usuario}>
               {<EmprendedorItemList expert={experto} />}
             </div>
           );
         })}
      
     </div>
      
      )
  }
}


export default EmprendedorList;