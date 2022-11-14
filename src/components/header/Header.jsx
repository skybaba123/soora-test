import React from "react";
import classes from "./Header.module.scss";
import apple from "../../assets/images/apple-store.png";
import google from "../../assets/images/google-play.png";
import smartPhone from "../../assets/images/landing-image-1.png";

const Header = () => {
  return (
    <header>
      <div className={classes["left"]}>
        <p>Coming Soon</p>
        <h1>
          Bringing <br />
          Muslims Together
        </h1>
        <div>
          <img src={apple} alt="apple-store" />
          <img src={google} alt="google-play" />
        </div>
      </div>

      <div className={classes["right"]}>
        <img src={smartPhone} alt="smartPhone" />
      </div>
    </header>
  );
};

export default Header;
