import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Combat from './pages/combat/index.js';
import Menu from './pages/menu/index.js';
import Login from './pages/menu/login.js';
import Signup from './pages/menu/signup.js';

const Main = () => (
    <Switch>
        <Route path="/combat" component={Combat} />
        <Route path="/menu" component={Menu} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Switch>
)

export default Main;
