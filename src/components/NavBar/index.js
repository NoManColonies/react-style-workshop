import React from "react";
import style from "./main.module.css";
import ActionButton from "../ActionButton";

function Navbar() {
  return (
    <div className={style.navbar__wrapper}>
      <div className={style.navbar__logo}>Logo</div>
      <div className={style.navbar__actions}>
        <ActionButton name="Sign in" children="Sign in" />
      </div>
    </div>
  );
}

export default Navbar;
