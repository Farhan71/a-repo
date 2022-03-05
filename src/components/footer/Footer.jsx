import React from 'react';
import "./footer.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

// import { facebook } from '@fortawesome/free-solid-svg-icons'

// import { fa-brands } from '@fortawesome/'
const footer = () => {
  // const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className="footer-body">
        
  {/* <div className="row ">
    <div className="col-sm">
      <p>SOCIAL LINK</p>  
      <a href="">FACEBOOK</a>
      <a href="">TWITTER</a>
      <a href="">INSTAGRAM</a>
      <a href="">LINKDIN</a>
      <a href="">GOOGLE</a>
    </div>
    <div className="col-sm">
      <p>USEFUL LINKS</p>
      <a href="">LINK HERE</a>
      <a href="">LINK HERE</a>
      <a href="">LINK HERE</a>
      <a href="">LINK HERE</a>
    </div>
    <div className="col-sm">
      <p>ABOUT US</p>
      <p>ABOUT STUDENT SOLUTION</p>
      <p>TERMS AND CONDITION</p>
      <p>PRIVACY POLICY</p>
      <p>FEEDBACK</p>
    </div>
    <div className="col-sm">
      <p>PHONE: +88-0321-72720</p>
      <p>EMAIL: farhanitnstu@gmail.com</p> 
    </div>
  </div> */}
  {/* <section>Footer Example 4</section> */}
<footer className="footer-distributed">

			<div className="footer-left">

				
        <img className="navbar-brand"  src="static/media/logo.9d49eb21.png" alt="" />

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Student Helpline © 2015</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>


		</footer>
    
    <div className="last-footer" >
<h6 >Copyright © 2022 | Noakhali Science and Technology University | All Rights Reserved</h6>

    </div>
    
  </div>

    );
};

export default footer;