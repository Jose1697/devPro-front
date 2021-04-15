import React from 'react';
import Navbar from '../components/Navbar'
import Buscador from '../components/Buscador'
import ListProyectos from '../components/ListProyectos'
import './styles/proyect.css'
import api from '../api';
import PageLoader from '../components/loading';
class Proyecto extends React.Component{
    state = {
      loading: true,
      error: null,
      data:undefined,
       
      };
componentDidMount(){
        this.fetchData()
       }
       fetchData=async () => {
          this.setState({loading:true,error:null})
     
          try{
           const data=await api.badges.listProyectos();
           console.log("HOLAAAAAAAAAAAs");
           
           
           this.setState({loading:false,data:data})
          }catch(error){
           this.setState({loading:false,error:error})
          }
       }  
       
   render(){
    if (this.state.loading === true) {
      return <PageLoader  />;
    }
       return(
        <div className="Fondo1">
           <Navbar />
              <div >
                    <div className="container-buscador">
                      < Buscador/>
                    </div>
                    <div>
                      {<ListProyectos lista={this.state.data}/>}
                    </div>
              </div>
        </div>
       )
   }
}


export default Proyecto;