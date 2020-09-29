import React from "react";
import style from "./main.module.css";

function CharactorCount({ value }) {
  return (
    <h3
      className={style.container}
      children={`${value} ${value.replace(/ */g, "").length}`}
    />
  );
}

export default CharactorCount;
