import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import logo from '../../images/logo.png'
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className=" navbar navbar-expand-lg ">
  <div className="container">
    <img src={logo} className="navbar-brand" alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
      <i class="fas fa-bars" style={{color:"#fff", fontSize:"28px"}}></i>
        </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">

         <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              HOME
            </Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link"  to="/">
              About
            </Link>
          </li>

         <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"  to="/">
            Categories
            </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/accommodation">Accomodation</Link></li>
            <li><Link className="dropdown-item" to="/">RecycleBin &raquo;</Link>
                <ul className="dropdown-menu dropdown-submenu">
                  <li><Link className="dropdown-item" to="/book">Books</Link></li>
                  <li><Link className="dropdown-item" to="/accessories">Accessories</Link></li>
                </ul>
            </li>
            <li><Link className="dropdown-item" to="/blood">Blood Finding</Link></li>
            <li><Link className="dropdown-item" to="/entrepreneur">Entrepreneur</Link></li>
            <li><Link className="dropdown-item" to="/reports">Reporters</Link></li>
          </ul>
        </li>

        {/* <li className="nav-item">
            <Link className="nav-link"  to="/write">
              Write
            </Link>
          </li> */}

          <li className="nav-item" onClick={handleLogout}>
            {user && <Link className="nav-link"  to="/">
              Logout
            </Link>}
          </li>

          {user ? (
            <li className="nav-item">
                <Link  className="nav-link" to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
            </li>
          
        ) : (
          < >
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                REGISTER
              </Link>
            </li> */}
          </>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-info" type="submit"><i className="topSearchIcon fas fa-search"></i></button>
      </form> */}
    </div>
  </div>
</nav>







    // <div className="top">
    //   <div className="topLeft">
    //     <i className="topIcon fab fa-facebook-square"></i>
    //     <i className="topIcon fab fa-twitter-square"></i>
    //     <i className="topIcon fab fa-pinterest-square"></i>
    //     <i className="topIcon fab fa-instagram-square"></i>
    //   </div>
    //   <div className="topCenter">
    //     <ul className="topList">
    //       <li className="topListItem">
    //         <Link className="link" to="/">
    //           HOME
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/">
    //           ABOUT
    //         </Link>
    //       </li>
    //       <li className="topListItem">
    //         <Link className="link" to="/">
    //           CONTACT
    //         </Link>
    //       </li>

    //       <li className="nav-item dropdown">
    //         <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"  to="/">
    //         Categories
    //         </Link>
    //       <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //         <li><Link className="dropdown-item" to="/">Accomodation</Link></li>
    //         <li><Link className="dropdown-item" to="/">RecycleBin</Link></li>
    //         <li><Link className="dropdown-item" to="/">Blood Finding</Link></li>
    //         <li><Link className="dropdown-item" to="/">Entrepreneur</Link></li>
    //         <li><Link className="dropdown-item" to="/">Reporters</Link></li>
    //       </ul>
    //     </li>

    //       <li className="topListItem">
    //         <Link className="link" to="/write">
    //           WRITE
    //         </Link>
    //       </li>


    //       <li className="topListItem" onClick={handleLogout}>
    //         {user && "LOGOUT"}
    //       </li>

    //     </ul>

    //   </div>
    //   <div className="topRight">

    //     {user ? (
    //       <Link to="/settings">
    //         <img className="topImg" src={PF+user.profilePic} alt="" />
    //       </Link>
    //     ) : (
    //       <ul className="topList">
    //         <li className="topListItem">
    //           <Link className="link" to="/login">
    //             LOGIN
    //           </Link>
    //         </li>
    //         <li className="topListItem">
    //           <Link className="link" to="/register">
    //             REGISTER
    //           </Link>
    //         </li>
    //       </ul>
    //     )}
    //     <i className="topSearchIcon fas fa-search"></i>
    //   </div>
    // </div>
  );
}
