import React from 'react';
import "./logoHeader.css";
import logo from '../../images/logo.png';

const LogoHeader = () => {
    return (
        <>
        <div className="container">
            <div className="row d-flex">
    <div className="col-6">
    <img src={logo} className="navbar-brand" alt="" />
    <h6>Student Helpline</h6> 
    <h6>One Stop Solution</h6>
    </div>
    <div className="col-6 icon-style">
    <p>Follow Us</p>  
      <a href=""><i className="fa-brands fa-facebook-square"></i></a>
      <a href=""><i className="fa-brands fa-twitter-square"></i></a>
      <a href=""><i className="fa-brands fa-instagram-square"></i></a>
      <a href=""><i className="fa-brands fa-linkedin"></i></a>
      <a href=""><i className="fa-brands fa-pinterest-square"></i></a>
      <a href=""><i className="fa-brands fa-google-plus-square"></i></a>
    </div>
  </div>
        </div>
        
            {/* <hr className="horizontal-line" /> */}
        
        </>
    );
};

export default LogoHeader;