import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './styles/projectDetail.css'


class ProjectDetails extends React.Component{
    state = {
        project:''
    }

    constructor(props){
        super(props)
        
        this.fetchData()
    }
    
   

    fetchData = async () => {
       
        try {
            const response = await fetch(`https://devpro-2021.herokuapp.com/core/proyecto/${this.props.match.params.projectId}/`)
            const data = await  response.json()
            await this.setState({
                project:data
            }) 
        } catch (error) {
            console.error(error);
        }
    }


    render(){
       

        return (
            <>
                <Navbar/>
                
                <div className="projectDetail">
                    <div className="card mb-3 detailCard">
                        <div className="row g-0">
                            <div className="col-md-4 imgContenedor">
                                <img className="imgProject"  src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2019/09/banner-siete-pasos-gestion-proyectos.jpg" alt="imagen-project" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{this.state.project.nombre_proyecto}</h1>
                                    <h4>Descripcion del Proyecto</h4>
                                    <p className="card-text">{this.state.project.descripcion_proyecto}</p>
            
                                    <p className="card-text"><small className="text-muted">Costo del Proyecto: {this.state.project.financiamiento_proyecto}</small></p>
                                    <button type="button" class="btn btn-success">Invertir</button>
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