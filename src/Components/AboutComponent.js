import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About (props){
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col text-center my-5">
                        <h1>About Us</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <p>It is a long established fact that a reader will be distracted 
                    by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution of letters, as opposed to using 'Content 
                    here, content here', making it look like readable English. 
                    Many desktop publishing packages and web page editors now use 
                    Lorem Ipsum as their default model text, and a search for 
                    'lorem ipsum' will uncover many web sites still in their 
                    infancy. Various versions have evolved over the years, 
                    sometimes by accident, sometimes on purpose (injected humour
                     and the like).</p>
                    </div>
                    <div className="col-xs-12 col-lg-5 bbtm">
                        <img className="img-fluid" src="img/flaunter-7qTYBEEEvZc-unsplash.jpg" width="500px" />
                    </div>
                    <div className="col-md-9 bbtm" id="#offer">
                        <h2>What We Offer</h2>
                        <ul>
                            <li>The point of using Lorem Ipsum is that it has a more-or-less 
                                normal distribution of letters</li>
                            <li>The point of using Lorem Ipsum is that it has a more-or-less 
                                normal distribution of letters</li>
                            <li>The point of using Lorem Ipsum is that it has a more-or-less 
                                normal distribution of letters</li>
                        </ul>
                    </div>
                </div>
            <div className="container bbtm" id="accordion">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>FAQs</h2>
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <button className="btn btn-link accordionp" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    The point of using Lorem Ipsum is that it has </button>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    The point of using Lorem Ipsum is that it has a more-or-less 
                                        normal distribution of letters
                                </div>
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    The point of using Lorem Ipsum is that it has</button>
                            </div>

                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                   The point of using Lorem Ipsum is that it has a more-or-less 
                                        normal distribution of letters
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                   The point of using Lorem Ipsum is that it has</button>
                            </div>   

                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    The point of using Lorem Ipsum is that it has a more-or-less 
                                    normal distribution of letters
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="headingFour">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    The point of using Lorem Ipsum is that it has</button>
                            </div>

                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                <div className="card-body">
                                    The point of using Lorem Ipsum is that it has a more-or-less 
                                        normal distribution of letters
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        <div className="row">
            <div className="col-xs-12 mx-auto">
                <button className="btn center my-5 mx-auto">Reserve A Space</button>
            </div>
        </div>
        </div>
            
        </div>
        </React.Fragment>
    );
}

export default About;