import React from 'react';
import Register from '../register/Register';
import "./landingPage.css"
import { useState } from 'react';
import Login from '../login/Login';

const LandingPage = () => {
    const [registerPopup, setRegisterPopup] = useState(false)
    const [loginPopup, setLoginPopup] = useState(false)
    return (
        <div>
           <main>
               <h1>A Dedidacated Place for University Students</h1> <br /> <br />
               <button onClick={()=> setRegisterPopup(true)}>Register Here</button> <br /> <br />
               <button onClick={()=> setLoginPopup(true)}>Login Here</button>

               
            </main>    
            <Register trigger={registerPopup} setTrigger={setRegisterPopup}>
               </Register>    
            <Login trigger={loginPopup} setTrigger={setLoginPopup}></Login>
        </div>
    );
};

export default LandingPage;