import { MenuItems } from "./MenuItems";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavIcons.css";

class NavIcons extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className="Navigation">
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
            {MenuItems.map((items, index) => {
              return (
                <li key={index}>
                  <Link to={items.url}>{items.title} </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
export default NavIcons;
