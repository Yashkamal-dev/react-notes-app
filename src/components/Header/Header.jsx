import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <img
          className={style.appImage}
          src="https://play-lh.googleusercontent.com/Td_CKplVJTIATvVJ4Zws3m_5Iv0xWPp76nb0i2XXTYcya7cp2E0QcfM5M1XqsBxsFbc"
        ></img>
        <h1 className={style.appName}>Notes App</h1>
      </div>
      <p className={style.subTitle}>Capture your thoughts and ideas.</p>
    </div>
  );
};

export default Header;
