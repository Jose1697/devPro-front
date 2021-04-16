import React from 'react';
import Navbar from '../components/Navbar'
import Buscador from '../components/Buscador'
import ListProyectos from '../components/ListProyectos'
import './styles/proyect.css'
import api from '../api';
import PageLoader from '../components/loading';
import { Doughnut } from 'react-chartjs-2';
class Proyecto extends React.Component{
    state = {
      loading: true,
      error: null,
      data:undefined,
      dataBuscador:'',
     
       dat : {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
          
        }]
      },
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
           
           const data=await api.badges.listProyectos();
           console.log("HOLAAAAAAAAAAAs");
           const dataB=await api.badges.listProyectos();
           console.log("HOLAAAAAAAAAAAs");
           
          
          
           this.setState({loading:false,data:data})
           this.setState({loading:false,dataBuscador:dataB})
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
               
                      < Buscador 
                      lista={this.state.dataBuscador}
                   
                      handler={this.handler} 
                      />
                  
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