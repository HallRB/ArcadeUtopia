import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Content } from 'react-mdl';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
  return (
    
        <div className="canvas">
          <div className="navlinks">
                <Link to="/combat">Fight!</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                </div>

        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        </div>
  )
  }  
}
export default App;