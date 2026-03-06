import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import style from "./NotesList.module.css";

const NotesList = () => {
  return (
    <div>
      <h2 className={style.listTitle}>My Notes</h2>
      <div className={style.listCon}>
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export default NotesList;
