import React from "react";
import style from "./NoteCard.module.css";

const NoteCard = (props) => {
  const toDelete = (e) => {
    const { dataDelete } = props;
    const id = e.target.parentElement.id;

    dataDelete(id);
  };

  return (
    <div id={props.id} className={style.noteCard}>
      <div className={style.titleDesCon}>
        <h2 className={style.title}>{props.title}</h2>
        <p className={style.description}>{props.note} </p>
      </div>
      <button
        onClick={(e) => {
          toDelete(e);
        }}
        className={style.removeBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
