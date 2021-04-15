import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import  Modal  from '../components/Modal';
import './styles/projectDetail.css';
import Loading from '../components/loading';


class ProjectDetails extends React.Component{
    state = {
        project:'',
        autor:{
            first_name:"",
            last_name:""
        },
        isOpenModal:false,
        loading: true
    }

    constructor(props){
        super(props)
        this.valor = 0
        this.flag = false
    }

    componentDidMount(){
        this.fetchData()
    }
    
   

    fetchData = async () => {
       
        try {
            const projectResponse = await fetch(`https://devpro-2021.herokuapp.com/core/proyecto/${this.props.match.params.projectId}/`)
            const projectData = await  projectResponse.json()
            if(projectData.acumulado===null){
                projectData.acumulado=0
            }
            await this.setState({
                project:projectData
            }) 
            await this.setState({
                ...this.state,
                autor:{
                    first_name:projectData.id_cliente.usuario.first_name,
                    last_name:projectData.id_cliente.usuario.last_name
                },
                loading:false
            })
            
            
        } catch (error) {
            console.error(error);
        }
    }

    handleOpenModal = e => {
        this.setState({
            ...this.state,
            isOpenModal:true
        })
    }

    handleCloseModal = e => {
        this.setState({
            ...this.state,
            isOpenModal:false
        })
    }


    render(){
        if(this.state.loading === true){
            return <Loading />
        }

        this.valor = (this.state.project.acumulado/this.state.project.financiamiento_proyecto)*100
        console.log(parseInt(this.valor));
        
        return (
            <>
                <Navbar/>
                
                <div className="projectDetail">
                    <div className="card mb-3 detailCard">
                        <div className="row g-0">
                            <div className="col-md-4 imgContenedor">
                                <img className="imgProject"  src={this.state.project.photo} alt="imagen-project" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{this.state.project.nombre_proyecto}</h1>
                                    <h3>Autor: {this.state.autor.first_name} {this.state.autor.last_name}</h3> 
                                    <h4>Descripcion del Proyecto</h4>
                                    <p className="card-text">{this.state.project.descripcion_proyecto}</p>
            
                                    <p className="card-text"><small className="text-muted">Costo del Proyecto: S/.{this.state.project.financiamiento_proyecto}</small></p>
                                    <p>Financiamiento hasta el momento:</p>
                                    <div className="progress mb-3">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.valor}%`}}>{this.state.project.acumulado}</div> 
                                    </div>

                                    <div className="button">
                                        <button onClick={() => {this.handleOpenModal()}} type="button" className="btn btn-success">Invertir</button>
                                        <Modal project={this.state.project} isOpen={this.state.isOpenModal} onClose={this.handleCloseModal}>     
                                            ¿Cuanto desea aportar al Proyecto?   
                                        </Modal>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                
                <Footer/>

            </>
        )
    }
}

export default ProjectDetails;