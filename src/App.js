
import './App.css';
import Header from './Components/HeaderComponent';
import Main from './Components/MainComponent';
import Footer from './Components/FooterComponent';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
 
    render() {
        return (
          
            <BrowserRouter>
              <div className="App">
                <Main />
              </div>
            </BrowserRouter>

        );
    }
  }
  

export default App;

