// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
// import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AccPage from "./pages/categories/accomodation/AccPage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import AccSinglePost from "./pages/categories/accomodation/AccSinglePost";
import BookPage from "./pages/categories/book/BookPage";
import BookSinglePost from "./pages/categories/book/BookSinglePost";
import Profile from "./pages/profile/Profile";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
        {/* {user ? <Home /> : <Register />} */}
        {user ? <Home /> : <LandingPage/>}
        </Route>
        {/* <Route path="/register">{user ? <Home /> : <LandingPage/>}</Route>
        <Route path="/login">{user ? <Home /> : <LandingPage/>}</Route> */}
        <Route path="/write">{user ? <Write /> : <LandingPage/>}</Route>
        <Route path="/settings">{user ? <Settings /> : <LandingPage/>}</Route>
        <Route path="/accommodation">{user ? <AccPage /> : <LandingPage/>}</Route>
        <Route path="/book">{user ? <BookPage /> : <LandingPage/>}</Route>
        {/* <Route path="/books">{user ? <Settings /> : <Register />}</Route>
        <Route path="/accessories">{user ? <Settings /> : <Register />}</Route>
        <Route path="/bloodfinding">{user ? <Settings /> : <Register />}</Route>
        <Route path="/entrepreneur">{user ? <Settings /> : <Register />}</Route>
        <Route path="/reports">{user ? <Settings /> : <Register />}</Route> */}
        <Route path="/accommodationPost/:postId">
          <AccSinglePost></AccSinglePost>
        </Route>
        <Route path="/bookPost/:postId">
          <BookSinglePost></BookSinglePost>
        </Route>
        <Route path="/:username">
          <Profile></Profile>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
