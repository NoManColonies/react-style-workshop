import React, { useState, useCallback } from "react";
import style from "./main.module.css";

function Background({ children }) {
  const [color, setColor] = useState("white");

  const handleClickEvent = useCallback(() => {
    setColor(color === "red" ? "white" : "red");
  }, [color, setColor]);

  return (
    <div
      className={style.container}
      style={{ backgroundColor: color }}
      onClick={handleClickEvent}
    >
      {children} {color === "red" ? "red" : "white"}
    </div>
  );
}

export default Background;
