import React from "react";
import style from "./main.module.css";

function ActionButton({ name, onClick, children }) {
  return (
    <button
      className={style.button__wrapper}
      type="button"
      name={name}
      onClick={onClick}
      children={children}
    />
  );
}

export default ActionButton;
