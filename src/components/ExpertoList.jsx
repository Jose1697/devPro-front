import React from 'react';
import './styles/expertList.css';

class ListItaDocente extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <img
            className="marco_imagen"
            src={this.props.badge.avatarUrl}
            alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          />
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }
class ExpertoList extends React.Component{
  
   render(){
       return(
     
        <div >
       
          {this.props.lista.map(badge => {
            return (
              <div id="caja1" key={badge.id}>
                <ListItaDocente badge={badge} />
              </div>
            );
          })}
       
      </div>
       
       )
   }
}


export default ExpertoList;