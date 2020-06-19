import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions } from 'react-redux-form';

function Contact (props){
    return(
        <React.Fragment>
            <div className="container">
                    <div className="row">
                        <div className="col text-center my-5">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>We Want To Hear From You</h2>
                            <p>555 Park Ave New York, NY 01111</p>
                            <p>Phone: 555-555-5555</p>
                            <p>Email: contact@livingroomevents.com</p>
                        </div>
                    </div>
                <div className="row" id="form">
                    <div className="col col-md-10 my-5">
                        <LocalForm>
                            <div className="form-group row">
                                <label className="col-md-2 form-label">First Name</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-2 form-label">Last Name</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>    
                            </div>
                            <div className="form-group row">   
                                <label className="col-md-2 form-label">Phone</label>
                                <div className="col-md-10">
                                    <input type="tel" className="form-control" placeholder="Phone" />
                                </div>
                            </div> 
                            <div className="form-group row">   
                                <label className="col-md-2 form-label">Email</label>
                                <div className="col-md-10">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div> 
                            <div className="form-group row">
                                <label className="col-md-2 form-label">Message</label>
                                <textarea className="col-md-10 form-control">Message</textarea>
                            </div>
                            <button className="btn">Submit</button>
                    </LocalForm>
                </div> 
            </div>

                <div className="row">
                    <div className="mx-auto">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47157.07801972914!2d-71.14792933531038!3d42.378385021304915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5cb30cc5f%3A0xc53a8e6489686c87!2sCambridge%2C%20MA!5e0!3m2!1sen!2sus!4v1588448740067!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;