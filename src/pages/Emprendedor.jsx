import React from 'react';
import Navbar from '../components/Navbar'
import './styles/expert.css';
import Footer from '../components/Footer';
import EmprendedorList from '../components/EmprendedorList'
import PageLoader from '../components/loading';

class Emprendedor extends React.Component{
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
     const data1=await fetch('https://devpro-back.herokuapp.com/core/cliente/')
     const clientes = await data1.json()
    
     
     this.setState({loading:false,data1:clientes})
    }catch(error){
     this.setState({loading:false,error:error})
    }
  }

  
  
  render(){
    if (this.state.loading === true) {
      return <PageLoader  />;
    }

    return(
      <>
        <div className="container__expert">   
        <Navbar />      
        <div className="container__expert1">
            <img className="Expertos__container"    
                src="https://www.unir.net/wp-content/uploads/2017/12/International_Mentoring_Program-1.jpg"
                alt=""             
              />
              <div class="texto-encima">
                Red de Emprendedores
            </div>
        </div>
        
            
            <div >
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="tituloPrin">Lista de Emprendedores</h1>
                 {<h1 className="titulo2"></h1> }
            </div>
         
        <div className="expert_container">
           <div >
           <EmprendedorList lista={this.state.data1}/>
           </div>
           <Footer/>
        </div>
       
        </div>
         
        </>
    )
  }
}


export default Emprendedor;