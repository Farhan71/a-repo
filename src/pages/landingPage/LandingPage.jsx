import React from 'react';
// import Register from '../register/Register';
import "./landingPage.css"
// import { useState } from 'react';
// import Login from '../login/Login';
import { Link } from "react-router-dom";

const LandingPage = () => {
    // const [registerPopup, setRegisterPopup] = useState(false)
    // const [loginPopup, setLoginPopup] = useState(false)
    // const [otpVerifyPopup, setOtpVerifyPopup] = useState(false)
    return (
        <div>
           <main className="landing-page">
               
               <div className="banner d-flex align-items-center justify-content-center  ">
                   <div className="banner-text text-center ">
                       <h4>WElCOME TO</h4> 
                   <h1>STUDENT HELPLINE</h1>  
                   <h6>A ONE STOP SOLUTION TO FULLFILL YOUR NEEDS </h6> 
                   </div>
               
               </div>

               <div className="container landing-middle">
                   <div className="row">
                       <div className="col-md-4">       
                        <div className="card" style={{width: "250px"}}>
                                <div className="card-body text-center">
                                         <div className="icon">
                                         <i className="fa-solid fa-user-plus"></i>
                                         </div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>                    
                        </div>


                       <div className="col-md-4">
                       <div className="card" style={{width: "250px"}}>
                                <div className="card-body text-center">
                                <div className="icon">
                                <i class="fa-solid fa-list"></i>
                                         </div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>              
                        </div>


                       <div className="col-md-4">
                       <div className="card" style={{width: "250px"}}>
                                <div className="card-body text-center">
                                <div className="icon">
                                <i class="fa-solid fa-circle-question"></i>
                                         </div>
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>    
                        </div>
                    </div>
               </div>
               {/* <button onClick={()=> setRegisterPopup(true)}>Register Here</button> <br /> <br />
               <button onClick={()=> setLoginPopup(true)}>Login Here</button> */}
               {/* <Link to="/register">Register Here</Link> <br />
               <Link to="/login">Login Here</Link> */}
                <div className="landing-last">
                    <div className="container text-center">

                    
                        <h1>How It Works</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum omnis quas deserunt, rerum molestias incidunt quis sequi. Quia, recusandae, sit optio, natus voluptate dolore commodi ipsam possimus non aspernatur blanditiis ab illo. Adipisci quod doloremque reprehenderit blanditiis eaque corrupti at ducimus, dicta temporibus, tempore praesentium commodi repellat? Quisquam sit totam velit impedit, eveniet quam ullam, repudiandae eius corporis dignissimos sunt, beatae accusamus non fuga a tenetur veritatis dolore. Nulla fuga aliquam aperiam nostrum illum distinctio hic saepe dolorum eum laborum reprehenderit sed necessitatibus neque consequuntur assumenda nam, dolor ut quaerat quidem cumque vel? Cum voluptatibus sit exercitationem? Voluptatibus dolorem distinctio maxime ipsam quia suscipit earum at dignissimos laboriosam eum? Accusamus ab placeat explicabo non modi doloribus, tempore ex alias. Inventore modi, quas voluptates natus doloremque temporibus nam necessitatibus saepe labore, cum dolores culpa accusamus quis impedit optio. Explicabo accusantium iste nobis incidunt? Quasi labore ipsam dicta facilis corporis provident?</p>
                    </div>
                </div>
               
            </main>    
            {/* <Register trigger={registerPopup} setTrigger={setRegisterPopup}>
               </Register>    
            <Login trigger={loginPopup} setTrigger={setLoginPopup}></Login> */}
        </div>
    );
};

export default LandingPage;