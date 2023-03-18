import "./index.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header2 = () => (
  <div className="header-2">
    <div className="nav-image">
      <img
        src="https://www.thefueldelivery.com/images/logonew.png"
        alt="logo"
        className="logo"
      />
    </div>
    <ul className="nav-items">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>

      <Link to="/login">
        <li>Login</li>
      </Link>
    </ul>
    <AiOutlineMenu className="Menu" />
  </div>
);

export default Header2;
