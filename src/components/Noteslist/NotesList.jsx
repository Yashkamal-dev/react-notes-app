import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import style from "./NotesList.module.css";

const NotesList = (props) => {
  const data = props["data"];

  return (
    <div>
      <h2 className={style.listTitle}>My Notes</h2>
      <div className={style.listCon}>
        {data.map((note) => {
          return (
            <NoteCard
              key={note.key}
              id={note.id}
              title={note.Title}
              note={note.Note}
              dataDelete={props.dataDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotesList;
