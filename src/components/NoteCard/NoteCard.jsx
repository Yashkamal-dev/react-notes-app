import React from "react";
import style from "./NoteCard.module.css";

const NoteCard = () => {
  return (
    <div className={style.noteCard}>
      <div className={style.titleDesCon}>
        <h2 className={style.title}>it is a note.</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, fugit!
        </p>
      </div>
      <button className={style.removeBtn}>Delete</button>
    </div>
  );
};

export default NoteCard;
