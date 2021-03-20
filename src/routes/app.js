import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Expert from '../pages/Expertos'
import Login from '../pages/Login'
import Nosotros from '../pages/Nosotros'
import Proyecto from '../pages/Proyecto'
import Register from '../pages/Register'
import Emprendedor from '../pages/Emprendedor'
const App = () => (
    <BrowserRouter>
        
        <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/Expertos" component={Expert}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/Proyectos" component={Proyecto}/>
            <Route exact path="/Nosotros" component={Nosotros}/>
            <Route exact path="/Emprendedor" component={Emprendedor}/>
         </Switch>
        
        
        
    </BrowserRouter>

)

export default App;