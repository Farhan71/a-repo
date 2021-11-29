import "./header.css";
import header from "../../images/header.jpg"

export default function Header() {
  return (
    <div className="header container">
      <div className="headerTitles">
        <span className="headerTitleSm">One Stop Solution</span>
        <span className="headerTitleLg">Student's Helpline</span>
      </div>
      <img
        className="headerImg"
        src={header}
        alt=""
      />
    </div>
  );
}
