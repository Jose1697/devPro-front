import React from 'react';
import { Link } from 'react-router-dom';
import './styles/proyectList.css'
import { Doughnut } from 'react-chartjs-2';
class ListItaProyecto extends React.Component {
  state = {
    opciones:{responsive:true},
    data : {
    labels: [
        
        'Acumulado',
        'Financiamiento',
      ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 25000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
     
    }]
  },
  };

  componentDidMount(){
    this.fetchData()
   }
   fetchData=async () => {
      this.setState({loading:true,error:null})
 
      try{
       
        this.state.data.datasets[0].data[0]=this.props.badge.acumulado
         this.state.data.datasets[0].data[1]=this.props.badge.financiamiento_proyecto
      
      }catch(error){
       this.setState({loading:false,error:error})
      }
   }  


    render() {
      
      return (
        <div >
          <img
            className="BadgesListItem__avatar1"
            src={this.props.badge.photo}
            alt=""
          />
  
          <div className="datos">
            <strong>
              {this.props.badge.id_cliente.usuario.first_name} {this.props.badge.id_cliente.usuario.last_name}
            </strong>
            <div>Proyecto: {this.props.badge.nombre_proyecto}</div>
            
            Financiamiento actual : {((this.props.badge.acumulado)/( this.state.data.datasets[0].data[1]=this.props.badge.financiamiento_proyecto)).toFixed(2)*100}%
            <Doughnut data={this.state.data} />
          </div>
        </div>
      );
    }
  }
class ListProyectos extends React.Component{
          
   render(){
   
       return(
        <>
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <br/>
        <h1 className="titulo"> Proyectos</h1> 
        <h1 className="titulo2"></h1> 
      
        </div>
        <section className="carrusel" >
        
         <div className="carrusel__container">
        
          {this.props.lista.map(badge => {
            return (
              <div id="carousel-item" key={badge.id}>
                

                <Link to={`/Proyectos/${badge.id}`}>  {/* Cambiar el 8 por el id del proyecto */}


                  <ListItaProyecto badge={badge} />
                 
                </Link>
                
              </div>
            );
          })}
         </div>
      </section>
      </>
       )
   }
}


export default ListProyectos;