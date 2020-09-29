import React from "react";
import style from "./main.module.css";
import ActionButton from "../ActionButton";

function Footer() {
  return (
    <div className={style.footer__wrapper}>
      <div className={style.footer__info}>Copy right Geng</div>
      <div className={style.footer__actions}>
        <ActionButton name="log in" children="Log in" />
      </div>
    </div>
  );
}

export default Footer;
