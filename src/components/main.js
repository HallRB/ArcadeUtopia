import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Combat from './pages/combat/index.js';
import World from './pages/menu/index.js';
import Login from './pages/menu/login.js';
import Character from "./pages/menu/character";
// import MainNav from "../nav-bar";

const Main = () => (
    
    <Switch>
        {/* <MainNav></MainNav> */}
        <Route path="/combat" component={Combat} />
        <Route path="/characterselect" component={Character} />        
        <Route path="/world" component={World} />
        <Route path="/login" component={Login} />
    </Switch>
)

export default Main;
