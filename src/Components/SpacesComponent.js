import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function Spaces (props){
    return(
        <React.Fragment>
            <div classNameName="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center my-5">See Our Spaces</h1>
                    </div>
                    <div className="col-md-9 mx-auto">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                            more-or-less normal distribution of letters, as opposed to using 'Content here, 
                            content here', making it look like readable English. Many desktop publishing packages 
                            and web page editors now use Lorem Ipsum as their default model text, and a search for 
                            'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
                            evolved over the years, sometimes by accident, sometimes on purpose (injected humour and 
                            the like).
                        </p>
                    </div>
                </div>    
                <div className="row" id="height">
                        <div className="col-xs-12 col-lg-6 my-5 media">
                            <div className="hover">
                                <img className="img-fluid mx-auto" src="img/flaunter-7qTYBEEEvZc-unsplash.jpg"/>
                                <div className="middle">
                                <p>Orchid Room</p> 
                                </div>
                            </div>
                        </div>    
                            <div className="col-xs-12 col-lg-6 my-5 my-5 media">
                                <div className="hover"> 
                                    <img className="img-fluid mx-auto" src="img/alessandra-onisor-uH9gcWRCN6s-unsplash.jpg"/>
                                    <div className="middle">
                                        <p>Jasmine Room</p>
                                    </div>
                                </div>  
                            </div>  
                    </div>
                    <div className="row">
                        <div className="col-xs-10 my-5 media mx-auto">
                            <div className="hover"> 
                                <img className="img-fluid" src="img/abby-savage-zNsSwsuyP3A-unsplash.PNG"/>
                                <div className="middle">
                                    <p>Aster Room</p>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="row mb-5" id="finalrow">
                        <div className="col-xs-12 media col-md-3 my-5  mx-auto">
                            <div className="hover"> 
                                <img className="img-fluid" src="img/events-2609526_1920-resized.jpg"/>
                                <div className="middle">
                                    <p>Calluna Room</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 media col-md-3 my-5 mx-auto">
                            <div className="hover"> 
                                <img className="img-fluid" src="img/ibrahim-boran-m8YjB0noWiY-unsplash-resized.jpg"/>
                                <div className="middle">
                                    <p>Violet Room</p>
                                </div>
                            </div>  
                        </div> 
                        <div className="col-xs-12 media col-md-3 my-5 mx-auto">
                            <div className="hover"> 
                                <img className="img-fluid" src="img/joakim-jardenberg-Nf-VQnNWLYE-unsplash-resized.jpg"/>
                                <div className="middle">
                                    <p>Poppy Room</p>
                                </div>
                            </div>                                 
                        </div> 
                    </div> 
                </div>        
        </React.Fragment>
    );
}

export default Spaces;