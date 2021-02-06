import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
  return (
    <div className="bodycard">
<div className="demo-big-content">
    <Layout>
      <div class="headercss">
        <Header>
            <Navigation>
                <Link to="/combat">Fight!</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </Navigation>
        </Header>
        </div>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
</div>
  )
  }  
}
export default App;