import React, { useState } from "react";
import classes from "./Popup.module.scss";
import copy from "../../assets/images/copy.png";

const Popup = ({ closePopup }) => {
  const [copied, setCopied] = useState("");

  const copyHandler = () => {
    navigator.clipboard.writeText("sooratheapp@gmail.com");
    setCopied("Copied!");
    setTimeout(() => {
      setCopied("");
      closePopup();
    }, 2000);
  };

  return (
    <div style={{ animation: "fadeIn .5s" }} className={classes["overlay"]}>
      <div onClick={closePopup} className={classes["layer"]}></div>
      <section>
        <p>Reach out to us through</p>
        <div className={classes["pop-content"]}>
          <h2>sooratheapp@gmail.com</h2>
          <div>
            <img onClick={copyHandler} src={copy} alt="copy" />
            <small>Copy</small>
          </div>
        </div>
        <p>{copied}</p>
      </section>
    </div>
  );
};

export default Popup;
