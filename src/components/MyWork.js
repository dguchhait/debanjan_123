import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Something I've Built</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/w1.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            
                        </div>
                            <h5 className="ff-jose my-1">SkyTracker(Weather App)</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/dguchhait/SkyTracker" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>

                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/w12.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="ff-jose my-1">SkillEra</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://skillera.org/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/cut.png" className="d-block w-100" alt="..."/>
                                </div>
                               
                            </div>
                            
                        </div>
                            <h5 className="ff-jose my-1">Cut-Cover-Clash</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/dguchhait/Cut-Cover-Clash" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    <div className="col-md-4 text-center my-2">
                        
                        <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src="../portfolio-images/chat.png" className="d-block w-100" alt="..."/>
                                </div>
                                
                            </div>
                           
                        </div>
                            <h5 className="ff-jose my-1">Chat Snap</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/dguchhait/mern-chat-app" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork