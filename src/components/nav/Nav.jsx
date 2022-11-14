import React from "react";
import "./Nav.scss";
import logo from "../../assets/images/logo1.png";
import contactIcon from "../../assets/images/contact-icon.png";

const Nav = ({ openPopup }) => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <button onClick={openPopup}>
        Contact Us <img src={contactIcon} alt="contact-icon" />
      </button>
    </nav>
  );
};

export default Nav;
