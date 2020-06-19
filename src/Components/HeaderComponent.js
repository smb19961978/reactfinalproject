import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            isNavOpen: false, 
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render () {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">< img src="/img/logo.png" height="30" width="30" alt=" Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} /> 
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-list fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/seethespaces">
                                        <i className="fa fa-info fa-lg" /> See the Spaces
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Button>Reserve A Space</Button>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
        );
    }
}

export default Header;