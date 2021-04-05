import React from 'react';
import Navbar from '../components/Navbar'
import './styles/expert.css';
import api from '../api';
import ExpertoList from '../components/ExpertoList';
import PageLoader from '../components/loading';
class Expertos extends React.Component{
    state = {
     
        loading: true,
        error: null,
        data1:undefined,
      };

  componentDidMount(){
        this.fetchData()
       }
       fetchData=async () => {
          this.setState({loading:true,error:null})
     
          try{
           const data1=await api.badges.list();
           console.log(data1);
           console.log(data1.usuario);
           
           this.setState({loading:false,data1:data1})
          }catch(error){
           this.setState({loading:false,error:error})
          }
       }

   render(){
        if (this.state.loading === true) {
          return <PageLoader  />;
        }

       return(
        <div className="container__expert">   
        <Navbar />      
        <div className="container__expert1">
            <img className="Expertos__container"    
                src="https://www.unir.net/wp-content/uploads/2017/12/International_Mentoring_Program-1.jpg"
                alt=""             
              />
              <div class="texto-encima">
                Red de Mentores
            </div>
        </div>
        
            
            <div >
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="tituloPrin">Lista de Expertos</h1>
                 {<h1 className="titulo2"></h1> }
            </div>
         
        <div className="expert_container">
           <div >
           <ExpertoList lista={this.state.data1}/>
           </div>
        </div>
        
        </div>
       )
   }
}


export default Expertos;