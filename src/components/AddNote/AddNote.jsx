import React, { useState } from "react";
import style from "./AddNote.module.css";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className={style.addNote}>
      <h2 className={style.title}>Add a New Note</h2>

      <input
        value={title}
        className={style.noteTitle}
        placeholder="Title"
        type="text"
      />

      <div className={style.btnDesCon}>
        <textarea
          value={note}
          className={style.noteDescription}
          placeholder="Take a note..."
        ></textarea>
        <button className={style.addBtn}>+ Add Note</button>
      </div>
    </div>
  );
};

export default AddNote;
