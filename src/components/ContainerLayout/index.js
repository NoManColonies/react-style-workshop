import React from "react";
import NavBar from "../NavBar";
import Content from "../Content";
import Footer from "../Footer";
import style from "./main.module.css";

function ContainerLayout() {
  return (
    <div className={style.container__layout__wrapper}>
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default ContainerLayout;
