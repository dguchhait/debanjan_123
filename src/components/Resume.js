import React, { Fragment } from 'react'
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Debanjan Guchhait</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            
                            <li>
                                <h4 className="ff-jose my-1 text-red">Live Project</h4>
                                <h6 className="blue-label px-2 py-1">June 2024 - July 2024</h6>
                                <p className="m-0">Skillera</p>
                                <p>Online(Remote)</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BTECH - Computer Science</h4>
                                <h6 className="blue-label px-2 py-1">2021 - 2025</h6>
                                <p className="m-0">Lovely Professional University</p>
                                <p>CGPA: 7.11</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2020</h6>
                                <p className="m-0">Vikash Residential School</p>
                                <p>Grade: 91.6 %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://leetcode.com/u/dguchait93/" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiLeetcode className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.hackerrank.com/profile/dguchait93" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume