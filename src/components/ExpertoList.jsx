import React from 'react';
import './styles/expertList.css';

class ListItaDocente extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">

          <img
            className="BadgesListItem__avatar"
            src={this.props.expert.usuario.photo}
            
          />
  
          <div className="datos">
            <strong>
              {this.props.expert.usuario.first_name} {this.props.expert.usuario.last_name}
            </strong>
            <br />{this.props.expert.usuario.email}
            
          </div>
        </div>
      );
    }
  }
class ExpertoList extends React.Component{
  
   render(){
       return(
     
        <div >
          <br/>
          {this.props.lista.map(experto => {
            return (
              <div id="caja1" key={experto.usuario}>
                {<ListItaDocente expert={experto} />}
              </div>
            );
          })}
       
      </div>
       
       )
   }
}


export default ExpertoList;