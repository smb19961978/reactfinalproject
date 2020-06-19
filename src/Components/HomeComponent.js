import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'; 

function Home (props){
    return(
        <React.Fragment>
            <div>
                    <h1 className="h1">We Have Events For Every Occasion</h1>
                </div>
                <div>
                    <p>It is a long established fact that a reader will be distracted 
                        by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has a more-or-less 
                        normal distribution of letters, as opposed to using 
                        'Content here, content here', making it look like readable English. 
                        Many desktop publishing packages and web page editors now use Lorem 
                        Ipsum as their default model text, and a search for 'lorem ipsum' 
                        will uncover many web sites still in their infancy. Various versions 
                        have evolved over the years, sometimes by accident, 
                        sometimes on purpose (injected humour and the like).</p>
                        <img src="/img/ballroom.png" />
                </div>
                <div className="col-md-10">
                        <LocalForm>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control" 
                                        /> 
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        className="form-control" 
                                        />
                                </Col>                        
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control" 
                                     />
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
        </React.Fragment>
    );
}

export default Home;