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
                <Link to="/characterselect">Character</Link>
                <Link to="/world">World</Link>
                <Link to="/login">Login</Link>
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