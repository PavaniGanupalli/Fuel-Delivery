import "./index.css";

import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";

const Header1 = () => (
  <div className="header-1-container">
    <div className="header-1-sub">
      <div className="sub-head-1">
        <AiOutlineClockCircle className="clock-icon" />
        <p className="availability">We are open 24/7</p>
      </div>
      <div className="sub-head-1">
        <AiOutlineMail className="clock-icon" />
        <p>fueldelivery@iiit.com</p>
      </div>
    </div>
    <div className="sub-head-1-icons">
      <SlSocialTwitter className="sub-head-1-icon" />
      <AiFillLinkedin className="sub-head-1-icon" />
      <FiFacebook className="sub-head-1-icon" />
    </div>
  </div>
);
export default Header1;
