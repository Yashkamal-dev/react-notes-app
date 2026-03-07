import React from "react";
import style from "./header.module.css";
import noteIcon from "../../assets/note-icon.png";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <img
          className={style.appImage}
          src={noteIcon}
        ></img>
        <h1 className={style.appName}>Notes App</h1>
      </div>
      <p className={style.subTitle}>Capture your thoughts and ideas.</p>
    </div>
  );
};

export default Header;
