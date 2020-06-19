import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent'; 
import Home from './HomeComponent';
import Spaces from './SpacesComponent';
import Contact from './ContactComponent';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'; 
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component{
    render(){
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={ Home } />  
                    <Route exact path='/about' component={ About } />   
                    <Route exact path='/seethespaces' component={ Spaces } />  
                    <Route exact path='/contact' component={ Contact } />                 
                </Switch>
                
                <Footer />
            </div>
        );
    }
}

export default Main; 