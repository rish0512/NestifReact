import { Component } from "react";
import "./Navbar.css";
import CompanyLogo from "../Assets/asset 0.png";
import SocialLinks from "./SocialLinks";
import NavIcons from "./NavIcons";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="Navbar container flex">
          <div className="Navbar-logo flex">
            <img src={CompanyLogo} alt="Company logo" />
          </div>
          <SocialLinks />
        </div>
        <hr />
        <div>
          <NavIcons />
        </div>
      </nav>
    );
  }
}

export default Navbar;
