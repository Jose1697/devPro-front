import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Expert from '../pages/Expertos'
import Login from '../pages/Login'
import Nosotros from '../pages/Nosotros'
import Proyecto from '../pages/Proyecto'
import Register from '../pages/Register'
import Emprendedor from '../pages/Emprendedor'
import Contacto from '../pages/Constacto'
import EditProfile from '../pages/EditProfile'
import NewProyecto from '../pages/NewProyecto'
import FormProyecto from '../components/FormProyecto'
import ProjectDetails from '../pages/ProjectDetails'
import Services from '../pages/Services'
import Suscripcion from '../pages/Suscripcion'
import Myproject from '../pages/Myproject'
import misProyectos from '../pages/misProyectos'
import Map from '../pages/Map'

const App = () => (
    <BrowserRouter>
        
        <Switch >
            <Route exact path="/" component={Home} />
            <Route asd={true} exact path="/login" component={Login}/>
            <Route exact path="/Expertos" component={Expert}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/Proyectos" component={Proyecto}/>
            <Route exact path="/Proyectos/:projectId" component={ProjectDetails}/>
            <Route exact path="/Nosotros" component={Nosotros}/>
            <Route exact path="/Emprendedor" component={Emprendedor}/>
            <Route exact path="/Contacto" component={Contacto}/>
            <Route exact path="/Profile" component={EditProfile}/>
            <Route exact path="/NewProyecto" component={NewProyecto}/>
            <Route exact path="/newPro" component={FormProyecto}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/suscripcion" component={Suscripcion}/>
            <Route exact path="/Myproject" component={Myproject}/>
            <Route exact path="/miscursos" component={misProyectos}/>
            <Route exact path="/map" component={Map}/>
        </Switch>
        
            
        
       
        
        
    </BrowserRouter>

)

export default App;