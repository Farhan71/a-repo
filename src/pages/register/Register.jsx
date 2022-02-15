import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./register.css";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [studentId, setStudentId] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [isDonor, setIsDonor] = useState("");
  const [isEntrepreneur, setIsEntrepreneur] = useState("");
  const [isReporter, setIsReporter] = useState("");
  const [error, setError] = useState(false);


  useEffect (() => {
    const getValidUsers = async () => {
      
      const res = await axios.get(`/validUsers/?email=${email}`);
      console.log(res.data)
      setValidEmail(res.data)
    };
    getValidUsers();
  },[email])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validEmail) {
        setError(false);
        
        const res = await axios.post("/auth/register", {
          username,
          email,
          password,
          contact,
          studentId,
          bloodGroup,
          isDonor, isEntrepreneur, isReporter
        });
        
        window.location.reload();
      }
      else {
        setError(true);
      }
      
    } catch (err) {
      setError(true);
    }
  };

  return (props.trigger) ? (
     <div className="popup">
       <div className="register popup-inner" >
         <button className="close-btn" onClick={()=>props.setTrigger(false) } >close</button>

<span>Register</span>
<form  onSubmit={handleSubmit}>
  
    {/* <label>Username</label> &nbsp; */}
  <input
    type="text"
    className="registerInput"
    placeholder="Enter your username..."
    onChange={(e) => setUsername(e.target.value)}
  /> 
     <br /> <br />

    {/* <label>Email</label> &nbsp; */}
  <input
    type="text"
    placeholder="Enter your email..."
    onChange={(e) => setEmail(e.target.value)}
    // onChange={(e) => 
    //   { var split = e.target.value.split('@')
    //   var domain = split[1]
    //   if (String(domain) ==="student.nstu.edu.bd") {
    //     setError(false)
    //     setEmail(e.target.value)
    //   } else {
    //     setError(true)
    //   }}
    // }
  /> <br /><br />
   
  {/* <label >Contact Number</label> &nbsp; */}
  <input
    type="text"
    placeholder="Enter your contact number..."
    onChange={(e) => setContact(e.target.value)}
  /> <br /> <br />

  {/* <label >Student ID</label> &nbsp; */}
  <input
    type="text"
    placeholder="Enter your student ID..."
    onChange={(e) => setStudentId(e.target.value)}
  /> <br /> <br />

 {/* <label>Password</label> &nbsp; */}
  <input
    type="password"
    placeholder="Set a strong password"
    onChange={(e) => setPassword(e.target.value)}
  /> <br /> <br />

  {/* <label>Blood Group</label> &nbsp; */}
  <input
    type="text"
    className="registerInput"
    placeholder="A+/A-/B+/B-/O+/O-"
    onChange={(e) => setBloodGroup(e.target.value)}
  /> <br /> <br />

  {/* <label>Are you a Blood Doner?</label> &nbsp; */}
  <input
    type="text"
    className="registerInput"
    placeholder="Are you a Blood Doner? Type Yes or No"
    onChange={(e) => setIsDonor(e.target.value)}
  /> <br /> <br />

  {/* <label>Are you a Entrepreneur?</label> &nbsp; */}
  <input
    type="text"
    className="registerInput"
    placeholder="Are you a Entrepreneur? Type Yes or No"
    onChange={(e) => setIsEntrepreneur(e.target.value)}
  /> <br /> <br />

 {/* <label>Are you a Reporter?</label> &nbsp; */}
  <input
    type="text"
    className="registerInput"
    placeholder="Are you a Reporter? Type Yes or No"
    onChange={(e) => setIsReporter(e.target.value)}
  /> <br /> <br />

 <button style={{width:"120px"}} type="submit">
    Register
  </button>



 {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong! May be your email is not valid or you put data on wrong format or you miss to put data </span>}

</form>
 {props.children}
</div>
     </div>
    
  ) : "";
}
