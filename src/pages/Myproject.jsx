import React from 'react';
import Navbar from '../components/Navbar'
import Buscador from '../components/Buscador'
import ListProyectos from '../components/ListProyectos'
import './styles/proyect.css'
import api from '../api';
import PageLoader from '../components/loading';
import { Doughnut } from 'react-chartjs-2';
class Myproject extends React.Component{

    constructor(props){
        super(props)
        
        this.state= {
            loading: true,
            error: null,
           data:undefined,
          dataBuscador:'',  
          usuario: JSON.parse(localStorage.getItem('usuario')),
          cliente: JSON.parse(localStorage.getItem('cliente'))
        }
      }
    state = {
     
     
      };
handler=(param) => {
        this.setState({
          data:param
        })
  }  
componentDidMount(){
        this.fetchData()
       }
       fetchData=async () => {
          this.setState({loading:true,error:null})
     
          try{
           
            const data=await api.badges.read(this.state.usuario.id);
            console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFF");
            console.log(this.state.usuario.id);
           console.log(data);
          
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
                  
                    </div>
                    <div>
                      {<ListProyectos lista={this.state.data}/>}
                    </div>
              </div>
        </div>
       )
   }
}


export default Myproject;