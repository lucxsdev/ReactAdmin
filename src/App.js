import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './routes';
import NavBar from './components/NavBar';

import { Sidebar, Content, Logo, Search, ButtonSearch, Form } from './styles/styles';

function App() {

  return (
    <BrowserRouter>
          <Sidebar>
            <Logo>
              <Link to="/"><h2>REACTADMIN</h2></Link>
            </Logo>
            
            <Form>
              <Search placeholder="Search..." />
              <ButtonSearch>
                <i className="fas fa-search "></i>
              </ButtonSearch>
            </Form>
            
            <Link className="active" to="/">Components</Link>
            
            <Link to="/exemple"><i className="fas fa-tasks"></i>Exemple</Link>
            <Link to="/form"><i className="fas fa-book"></i> Form</Link>
            <Link to="/table"><i className="fas fa-table"></i>Table</Link>
            <Link to="/buttons"><i className="fa fa-toggle-off"></i>Buttons</Link>
            <Link to="/cards"><i className="fas fa-th-large"></i>Cards</Link>

          </Sidebar>

          <Content>
            <NavBar />
            <Routes />          
          </Content>
    </BrowserRouter>
      
  );
}

export default App;
