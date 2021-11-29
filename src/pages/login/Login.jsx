import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login(props) {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (props.trigger) ? (
    <div className="popup">
      <div className="login container popup-inner"> 
      <button className="close-btn" onClick={()=>props.setTrigger(false) } >close</button>
      <span className="loginTitle">Login</span> <br />
      <form className="loginForm" onSubmit={handleSubmit}>
        {/* <label>Username</label> */}
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        /> <br />
        {/* <label>Password</label><br /> */}
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        /> <br />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form> 
      {/* <p>Don't have an account?</p> */}
      {/* <button>
        <Link className="link" to="/register">
          Register Here
        </Link>
      </button> */}
    </div>
    </div>
  ) : "";
}
