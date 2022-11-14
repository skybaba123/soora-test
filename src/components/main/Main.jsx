import React from "react";
import classes from "./Main.module.scss";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import separator from "../../assets/images/separator.png";
import smartphone from "../../assets/images/landing-image-2.png";

const Circle = ({ src }) => {
  return (
    <div className={classes["circle"]}>
      <img src={src} alt="" />
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <section className={classes["section-one"]}>
        <div className={classes["socials"]}>
          <Circle src={facebook} />
          <Circle src={twitter} />
          <Circle src={instagram} />
          <Circle src={tiktok} />
          <Circle src={youtube} />
        </div>

        <div className={classes["separator"]}>
          <img src={separator} alt="separator" />
        </div>
      </section>

      <section className={classes["section-two"]}>
        <div className={classes["left"]}>
          <img src={smartphone} alt="smartphone" />
        </div>

        <div className={classes["right"]}>
          <p>Coming Soon</p>
          <h1>
            Get Notified <br /> When We Launch
          </h1>
          <form className={classes["input-container"]}>
            <input required type="email" />
            <button type="submit">Notify Me</button>
          </form>
          <p style={{ fontFamily: "Inter-Regular", fontSize: "22px" }}>
            *Don't worry, we won't spam you
          </p>
        </div>
      </section>

      <div className={classes["socials-mobile"]}>
        <Circle src={facebook} />
        <Circle src={twitter} />
        <Circle src={instagram} />
        <Circle src={tiktok} />
        <Circle src={youtube} />
      </div>
    </main>
  );
};

export default Main;
